#!/usr/bin/env python3
"""Add fade transition (0.5 s) + fade-in-on-click for shapes named 'anim_*'.
Usage: python3 -I add_anim.py in.pptx out.pptx
"""
import sys, zipfile, re
from lxml import etree

NS = {
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "p14": "http://schemas.microsoft.com/office/powerpoint/2010/main",
}
P = "{%s}" % NS["p"]

TRANSITION = (
    '<mc:AlternateContent xmlns:mc="%(mc)s" xmlns:p="%(p)s">'
    '<mc:Choice xmlns:p14="%(p14)s" Requires="p14">'
    '<p:transition spd="med" p14:dur="500"><p:fade/></p:transition></mc:Choice>'
    '<mc:Fallback><p:transition spd="med"><p:fade/></p:transition></mc:Fallback>'
    "</mc:AlternateContent>" % NS
)


def click_fade(ids, spid, has_text_body):
    """One click-step: fade in `spid`. ids = iterator of unique cTn ids."""
    a, b, c, d, e = (next(ids) for _ in range(5))
    grp = ' grpId="0"' if has_text_body else ""
    return (
        f'<p:par><p:cTn id="{a}" fill="hold"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst><p:childTnLst>'
        f'<p:par><p:cTn id="{b}" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>'
        f'<p:par><p:cTn id="{c}" presetID="10" presetClass="entr" presetSubtype="0" fill="hold"{grp} nodeType="clickEffect">'
        f'<p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>'
        f'<p:set><p:cBhvr><p:cTn id="{d}" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn>'
        f'<p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl><p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst></p:cBhvr>'
        f'<p:to><p:strVal val="visible"/></p:to></p:set>'
        f'<p:animEffect transition="in" filter="fade"><p:cBhvr><p:cTn id="{e}" dur="500"/>'
        f'<p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl></p:cBhvr></p:animEffect>'
        "</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>"
    )


def timing_xml(targets):
    """targets = [(spid, is_sp_with_txbody)] in click order."""
    ids = iter(range(3, 10_000))  # 1 = root, 2 = mainSeq
    steps = "".join(click_fade(ids, s, t) for s, t in targets)
    bld = "".join(f'<p:bldP spid="{s}" grpId="0" animBg="1"/>' for s, t in targets if t)
    bld = f"<p:bldLst>{bld}</p:bldLst>" if bld else ""
    return (
        f'<p:timing xmlns:p="{NS["p"]}"><p:tnLst><p:par>'
        '<p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>'
        '<p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>'
        f"{steps}"
        "</p:childTnLst></p:cTn>"
        '<p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>'
        '<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst>'
        "</p:seq></p:childTnLst></p:cTn></p:par></p:tnLst>"
        f"{bld}</p:timing>"
    )


def process_slide(xml_bytes):
    root = etree.fromstring(xml_bytes)
    # clean previous transition / timing so the script is idempotent
    for el in root.xpath("p:transition | mc:AlternateContent | p:timing", namespaces=NS):
        root.remove(el)
    # shapes named anim_* (document order = click order). p:sp -> bldP; pic/graphicFrame/grpSp/cxnSp -> none
    targets = []
    for c in root.xpath(".//p:cNvPr[starts-with(@name,'anim_')]", namespaces=NS):
        kind = etree.QName(c.getparent()).localname  # nvSpPr, nvPicPr, ...
        targets.append((c.get("id"), kind == "nvSpPr"))
    # schema order in p:sld: cSld, clrMapOvr, transition, timing, extLst
    anchor = root.find(P + "clrMapOvr")
    if anchor is None:
        anchor = root.find(P + "cSld")
    new = [etree.fromstring(TRANSITION)]
    if targets:
        new.append(etree.fromstring(timing_xml(targets)))
    for el in reversed(new):
        anchor.addnext(el)
    return etree.tostring(root, xml_declaration=True, encoding="UTF-8", standalone=True), len(targets)


def main(src, dst):
    with zipfile.ZipFile(src) as zin, zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if re.fullmatch(r"ppt/slides/slide\d+\.xml", item.filename):
                data, n = process_slide(data)
                print(f"{item.filename}: transition + {n} animated shape(s)")
            zout.writestr(item, data)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
