(function () {
  "use strict";
  var PRINT = /[?&]print\b/.test(location.search);
  if (PRINT) document.documentElement.classList.add("print");

  var stage = document.getElementById("stage");
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var chrome = document.getElementById("chrome");
  var bar = document.getElementById("bar");
  var PARTS = {
    1: { name: "Parte 1 · Diana · El problema que escuchamos", color: "#BA4036" },
    2: { name: "Parte 2 · Patty · Para quién y qué creamos", color: "#7C8A3A" },
    3: { name: "Parte 3 · Ade · Cómo llega a la lonchera", color: "#E3A33B" },
    4: { name: "Parte 4 · Angie · La campaña", color: "#8A1C2B" },
    5: { name: "Parte 5 · Carlos · Los números", color: "#4A2018" }
  };

  /* ---------- Formato de números ---------- */
  function fmt(v, dec) {
    var s = v.toFixed(dec || 0);
    var p = s.split(".");
    p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return p.join(".");
  }

  /* ---------- Contadores que suben ---------- */
  function runCounters(slide) {
    slide.querySelectorAll("[data-count]").forEach(function (el) {
      var to = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec || "0", 10);
      if (PRINT) { el.textContent = fmt(to, dec); return; }
      var delay = 350, dur = 1400, t0 = null;
      el.textContent = fmt(0, dec);
      function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, Math.max(0, (t - t0 - delay) / dur));
        var e = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(to * e, dec);
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- Gráficos (cifras del modelo financiero: FINAL/modelo) ---------- */
  var M = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  var RES = [-1134, -1544, -9776, -4481, -3880, -3713, -3260, -2768, -1850, -1371, -1133, -3979,
    -5651, -8554, -5060, 168, 1892, 2486, -1612, 4220, 4237, 4590, 4729, -2190];
  var BR = [0, 0, 2734, 2741, 4005, 4392, 3162, 5510, 5826, 6254, 6339, 3420,
    605, 1900, 7462, 7646, 9360, 9650, 6173, 11256, 11697, 12172, 12077, 6038];
  var PE = [null, null, 11162, 6784, 7517, 7817, 6206, 8123, 7581, 7553, 7416, 7180,
    3844, 6803, 11109, 7523, 8017, 7874, 7331, 8243, 8672, 8914, 8707, 7608];
  var ANUAL = [-38889, -4678, 20331, 28611, 52775], ACUM = [-38889, -43567, -23236, 5375, 58150];
  function sgn(v) { return v === 0 ? "0" : (v > 0 ? "+" : "−") + fmt(Math.abs(v)); }
  function barPath(x, y0, v, k, bw, c, d, tip) {
    var hgt = Math.abs(v) * k, r = Math.min(6, hgt), y = v < 0 ? y0 : y0 - hgt, p;
    if (hgt < 0.5) return "";
    p = v < 0
      ? "M" + x + " " + y + "h" + bw + "v" + (hgt - r) + "q0 " + r + " -" + r + " " + r + "h-" + (bw - 2 * r) + "q-" + r + " 0 -" + r + " -" + r + "z"
      : "M" + x + " " + y0 + "v-" + (hgt - r) + "q0 -" + r + " " + r + " -" + r + "h" + (bw - 2 * r) + "q" + r + " 0 " + r + " " + r + "v" + (hgt - r) + "z";
    return '<path class="a ' + (v < 0 ? "gyn" : "gy") + '" style="--d:' + d + ';transform-box:fill-box" d="' + p + '" fill="' + c + '"><title>' + tip + "</title></path>";
  }
  function grid(vals, x0, W, y0, k) {
    var h = "";
    vals.forEach(function (v) {
      var y = y0 - v * k;
      h += '<line x1="' + x0 + '" x2="' + W + '" y1="' + y + '" y2="' + y + '" stroke="' + (v === 0 ? "#4A2018" : "#E8D5BD") + '" stroke-width="' + (v === 0 ? 2.5 : 1) + '"/>';
      h += '<text x="' + (x0 - 12) + '" y="' + (y + 8) + '" text-anchor="end" font-size="22" fill="#7A5A4C">' + sgn(v) + "</text>";
    });
    return h;
  }
  function months(x0, step, bw, y) {
    var h = "";
    for (var i = 0; i < 24; i++) h += '<text x="' + (x0 + 6 + i * step + bw / 2) + '" y="' + y + '" text-anchor="middle" font-size="20" fill="#7A5A4C">' + M[i % 12] + "</text>";
    h += '<text x="' + (x0 + 6 + 6 * step) + '" y="' + (y + 38) + '" text-anchor="middle" font-size="24" fill="#4A2018">2027</text>';
    h += '<text x="' + (x0 + 6 + 18 * step) + '" y="' + (y + 38) + '" text-anchor="middle" font-size="24" fill="#4A2018">2028</text>';
    return h;
  }
  function buildChart() {
    var W = 1040, x0 = 96, step = (W - x0 - 10) / 24, bw = step - 10, h, y0, k;
    // 1) resultado de cada mes
    var svg = document.getElementById("chart-res");
    if (svg) {
      y0 = 160; k = 300 / 10000; h = grid([4000, 0, -2000, -4000, -6000, -8000, -10000], x0, W, y0, k);
      RES.forEach(function (v, i) {
        h += barPath(x0 + 6 + i * step, y0, v, k, bw, v < 0 ? "#BA4036" : "#7C8A3A", (0.3 + i * 0.05).toFixed(2) + "s", M[i % 12] + " " + (i < 12 ? 2027 : 2028) + ": S/" + sgn(v));
      });
      h += '<line x1="' + (x0 + 12 * step + 1) + '" x2="' + (x0 + 12 * step + 1) + '" y1="20" y2="' + (y0 + 330) + '" stroke="#D9B48F" stroke-dasharray="6 6" stroke-width="2"/>';
      var xe = x0 + 6 + 15 * step + bw / 2;
      h += '<g class="a fade" style="--d:2s"><line x1="' + xe + '" x2="' + xe + '" y1="' + (y0 + 6) + '" y2="' + (y0 + 150) + '" stroke="#7C8A3A" stroke-width="3"/><rect x="' + (xe - 20) + '" y="' + (y0 + 150) + '" width="250" height="58" rx="14" fill="#7C8A3A"/><text x="' + (xe + 105) + '" y="' + (y0 + 187) + '" text-anchor="middle" font-size="23" fill="#fff">Equilibrio · abril 2028</text></g>';
      h += months(x0, step, bw, y0 + 335);
      svg.innerHTML = h;
    }
    // 2) brownies vendidos frente al equilibrio del mes
    svg = document.getElementById("chart-pe");
    if (svg) {
      y0 = 440; k = 400 / 12500; h = grid([0, 4000, 8000, 12000], x0, W, y0, k);
      BR.forEach(function (v, i) {
        var ok = PE[i] !== null && v >= PE[i];
        h += barPath(x0 + 6 + i * step, y0, v, k, bw, ok ? "#7C8A3A" : "#BA4036", (0.3 + i * 0.05).toFixed(2) + "s", M[i % 12] + " " + (i < 12 ? 2027 : 2028) + ": " + fmt(v) + " brownies; equilibrio " + (PE[i] ? fmt(PE[i]) : "—"));
      });
      var d = "";
      PE.forEach(function (v, i) {
        if (v === null) return;
        var xa = x0 + 2 + i * step, xb = xa + step, y = y0 - v * k;
        d += (d && PE[i - 1] !== null ? "L" : "M") + xa + " " + y + "L" + xb + " " + y;
      });
      h += '<path class="draw" style="--d:1.6s" pathLength="1" d="' + d + '" fill="none" stroke="#2E120C" stroke-width="4" stroke-dasharray="1"/>';
      h += months(x0, step, bw, y0 + 32);
      svg.innerHTML = h;
    }
    // 3) resultado anual y acumulado (ROI)
    svg = document.getElementById("chart-roi");
    if (svg) {
      var x1 = 110, st = (W - x1 - 20) / 5, bw2 = st * 0.56;
      y0 = 300; k = 230 / 60000; h = grid([60000, 30000, 0, -30000, -45000], x1, W, y0, k);
      var labs = "";
      ANUAL.forEach(function (v, i) {
        var x = x1 + i * st + (st - bw2) / 2;
        h += barPath(x, y0, v, k, bw2, v < 0 ? "#BA4036" : "#7C8A3A", (0.3 + i * 0.15).toFixed(2) + "s", (2027 + i) + ": S/" + sgn(v));
        var tall = Math.abs(v) * k > 50;
        var ly = v < 0 ? (tall ? y0 + Math.abs(v) * k / 2 + 8 : y0 + Math.abs(v) * k + 30) : (tall ? y0 - v * k + 34 : y0 - v * k - 14);
        var lc = tall ? "#fff" : "#4A2018";
        labs += '<text class="a fade" style="--d:' + (1 + i * 0.15).toFixed(2) + 's" x="' + (x + bw2 / 2) + '" y="' + ly + '" text-anchor="middle" font-size="22" font-weight="800" fill="' + lc + '" paint-order="stroke" stroke="' + (lc === "#fff" ? "none" : "#FBF3E8") + '" stroke-width="5">' + sgn(v) + "</text>";
        h += '<text x="' + (x + bw2 / 2) + '" y="' + (y0 + 230) + '" text-anchor="middle" font-size="24" fill="#4A2018">' + (2027 + i) + "</text>";
      });
      var pts = ACUM.map(function (v, i) { return [x1 + i * st + st / 2, y0 - v * k]; });
      h += '<path class="draw" style="--d:1.4s" pathLength="1" d="M' + pts.map(function (p) { return p.join(" "); }).join("L") + '" fill="none" stroke="#E3A33B" stroke-width="5" stroke-dasharray="1"/>';
      pts.forEach(function (p, i) {
        h += '<g class="a pop" style="--d:' + (1.8 + i * 0.12).toFixed(2) + 's"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="10" fill="#E3A33B" stroke="#FBF3E8" stroke-width="3"/></g>';
      });
      h += labs;
      h += '<g class="a fade" style="--d:2.6s"><text x="' + pts[3][0] + '" y="' + (y0 + 44) + '" text-anchor="middle" font-size="21" font-weight="800" fill="#2E120C">2030: acumulado</text><text x="' + pts[3][0] + '" y="' + (y0 + 70) + '" text-anchor="middle" font-size="21" font-weight="800" fill="#2E120C">en positivo</text></g>';
      h += '<g transform="translate(' + x1 + ',' + (y0 + 270) + ')"><rect width="11" height="22" fill="#BA4036"/><rect x="11" width="11" height="22" fill="#7C8A3A"/><text x="32" y="19" font-size="21" fill="#7A5A4C">Resultado del año</text><line x1="270" x2="310" y1="11" y2="11" stroke="#E3A33B" stroke-width="5"/><circle cx="290" cy="11" r="8" fill="#E3A33B"/><text x="322" y="19" font-size="21" fill="#7A5A4C">Acumulado desde 2027</text></g>';
      svg.innerHTML = h;
    }
  }


  /* ---------- Demanda por canal y ventas mes a mes (documento 22) ---------- */
  var CH_COL = ["#BA4036", "#E3A33B", "#7C8A3A", "#9E3A44"];
  var CH_NOM = ["Colegio", "Kermeses", "Recompra WhatsApp", "Stand y mall"];
  function stacked(svgId, labels, series, maxV, ticks, sub) {
    var svg = document.getElementById(svgId); if (!svg) return;
    var W = 1040, x0 = 100, y0 = 470, H = 420, n = labels.length, step = (W - x0 - 10) / n, bw = Math.min(110, step * 0.64), k = H / maxV, h = "";
    ticks.forEach(function (v) { var y = y0 - v * k;
      h += '<line x1="' + x0 + '" x2="' + W + '" y1="' + y + '" y2="' + y + '" stroke="' + (v === 0 ? "#4A2018" : "#E8D5BD") + '" stroke-width="' + (v === 0 ? 2.5 : 1) + '"/>';
      h += '<text x="' + (x0 - 12) + '" y="' + (y + 8) + '" text-anchor="end" font-size="21" fill="#7A5A4C">' + fmt(v) + '</text>'; });
    for (var i = 0; i < n; i++) {
      var x = x0 + i * step + (step - bw) / 2, base = y0, tot = 0, d = (0.3 + i * (n > 6 ? 0.05 : 0.15)).toFixed(2) + "s", g = "";
      for (var c = 0; c < series.length; c++) {
        var v = series[c][i]; if (!v) continue; tot += v;
        var hh = v * k, y = base - hh;
        g += '<rect x="' + x + '" y="' + (y + 1) + '" width="' + bw + '" height="' + Math.max(0, hh - 2) + '" rx="' + (c === series.length - 1 || !series.slice(c + 1).some(function (s2) { return s2[i]; }) ? 5 : 0) + '" fill="' + CH_COL[c] + '"><title>' + labels[i] + ' · ' + CH_NOM[c] + ': ' + fmt(v) + '</title></rect>';
        if (n <= 6 && hh >= 30) g += '<text x="' + (x + bw / 2) + '" y="' + (y + hh / 2 + 7) + '" text-anchor="middle" font-size="18" font-weight="800" fill="' + (c === 1 ? "#2E120C" : "#fff") + '">' + fmt(v) + '</text>';
        base = y;
      }
      h += '<g class="a gy" style="--d:' + d + ';transform-box:fill-box">' + g + '</g>';
      if (tot) h += '<text class="a fade" style="--d:' + (1.2 + i * 0.05).toFixed(2) + 's" x="' + (x + bw / 2) + '" y="' + (base - 10) + '" text-anchor="middle" font-size="' + (n > 6 ? 17 : 22) + '" fill="#4A2018">' + (sub ? sub(tot) : fmt(tot)) + '</text>';
      h += '<text x="' + (x + bw / 2) + '" y="' + (y0 + 32) + '" text-anchor="middle" font-size="21" fill="#4A2018">' + labels[i] + '</text>';
    }
    svg.innerHTML = h;
  }
  function buildChart2() {
    stacked("chart-dem", ["2027", "2028", "2029", "2030", "2031"],
      [[35285, 83126, 103908, 124689, 145471], [4950, 6600, 8250, 9900, 11550], [1628, 3310, 4137, 4965, 5792], [2520, 3000, 3750, 4500, 5250]],
      175000, [0, 50000, 100000, 150000]);
    stacked("chart-mes", ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [[0, 0, 971, 1589, 2748, 3191, 2988, 4765, 4988, 5405, 5472, 3168], [0, 0, 619, 619, 619, 619, 0, 619, 619, 618, 618, 0], [0, 0, 0, 109, 109, 159, 174, 126, 219, 231, 249, 252], [0, 0, 1144, 424, 529, 423, 0, 0, 0, 0, 0, 0]],
      7000, [0, 2000, 4000, 6000], function (t) { return (t / 1000).toFixed(1) + "k"; });
  }
  /* ---------- Partículas ---------- */
  function particles() {
    document.querySelectorAll("[data-dots]").forEach(function (box) {
      var n = +box.dataset.dots, h = "";
      for (var i = 0; i < n; i++) {
        var s = 6 + Math.random() * 10;
        h += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;width:' + s.toFixed(0) + 'px;height:' + s.toFixed(0) + 'px;animation-duration:' + (9 + Math.random() * 10).toFixed(1) + 's;animation-delay:-' + (Math.random() * 18).toFixed(1) + 's"></i>';
      }
      box.innerHTML = h;
    });
    document.querySelectorAll("[data-cubes]").forEach(function (box) {
      var n = +box.dataset.cubes, h = "";
      for (var i = 0; i < n; i++) {
        var s = 26 + Math.random() * 40;
        h += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;width:' + s.toFixed(0) + 'px;height:' + s.toFixed(0) + 'px;opacity:' + (0.15 + Math.random() * 0.3).toFixed(2) + ';animation-duration:' + (16 + Math.random() * 14).toFixed(1) + 's;animation-delay:-' + (Math.random() * 30).toFixed(1) + 's"></i>';
      }
      box.innerHTML = h;
    });
  }

  /* ---------- QR ---------- */
  function buildQR() {
    var links = window.ANDI_LINKS || {};
    document.querySelectorAll("[data-qr]").forEach(function (box) {
      var url = (links[box.dataset.qr] || "").trim();
      if (!url || typeof qrcode !== "function") { box.classList.add("pend"); box.textContent = "QR pronto"; return; }
      var q = qrcode(0, "M"); q.addData(url); q.make();
      box.innerHTML = q.createSvgTag({ cellSize: 8, margin: 0, scalable: true });
      var s = box.querySelector("svg"); if (s) { s.querySelector("path") && s.querySelector("path").setAttribute("fill", "#2E120C"); }
    });
  }

  /* ---------- Contador en vivo (teclas P y N) ---------- */
  var live = { p: 0, n: 0 };
  try { var sv = JSON.parse(localStorage.getItem("andibite-contador") || "null"); if (sv) live = sv; } catch (e) {}
  function paintLive(which) {
    document.querySelectorAll("[data-live]").forEach(function (el) {
      el.textContent = fmt(live[el.dataset.live]);
      if (which && el.dataset.live === which) { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); }
    });
    try { localStorage.setItem("andibite-contador", JSON.stringify(live)); } catch (e) {}
  }

  /* ---------- Navegación ---------- */
  var cur = -1;
  function partsBar() {
    var box = chrome.querySelector(".parts"), h = "";
    for (var p = 1; p <= 5; p++) h += '<span data-p="' + p + '"><b style="background:' + PARTS[p].color + '"></b></span>';
    box.innerHTML = h;
  }
  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    if (i === cur) return;
    if (cur >= 0) slides[cur].classList.remove("on");
    cur = i;
    var s = slides[i];
    void s.offsetWidth;
    s.classList.add("on");
    runCounters(s);
    var part = +s.dataset.part, mode = s.dataset.chrome || "";
    chrome.className = mode === "hide" ? "hide" : mode === "dark" ? "dark" : "";
    bar.style.width = ((i + 1) / slides.length * 100) + "%";
    if (history.replaceState) history.replaceState(null, "", "#" + (i + 1));
  }

  function fit() {
    var k = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = "translate(-50%,-50%) scale(" + k + ")";
  }

  document.addEventListener("keydown", function (e) {
    var key = e.key;
    if (key === "ArrowRight" || key === "PageDown" || key === " " || key === "Enter") { e.preventDefault(); go(cur + 1); }
    else if (key === "ArrowLeft" || key === "PageUp" || key === "Backspace") { e.preventDefault(); go(cur - 1); }
    else if (key === "Home") go(0);
    else if (key === "End") go(slides.length - 1);
    else if (key === "f" || key === "F") { if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); else document.exitFullscreen(); }
    else if (key === "p") { live.p++; paintLive("p"); }
    else if (key === "P") { live.p = Math.max(0, live.p - 1); paintLive("p"); }
    else if (key === "n") { live.n++; paintLive("n"); }
    else if (key === "N") { live.n = Math.max(0, live.n - 1); paintLive("n"); }
    else if (key === "h" || key === "H") document.getElementById("keys").classList.toggle("show");
    else if (key === "0" && e.ctrlKey && e.altKey) { live = { p: 0, n: 0 }; paintLive(); }
  });
  var tx = null;
  document.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest("a,button")) return;
    go(cur + (e.clientX > window.innerWidth * 0.3 ? 1 : -1));
  });

  /* ---------- Arranque ---------- */
  particles(); buildChart(); buildChart2(); buildQR(); paintLive();
  if (PRINT) {
    slides.forEach(function (s, i) {
      s.classList.add("on"); runCounters(s);
    });
    return;
  }
  fit(); window.addEventListener("resize", fit);
  window.addEventListener("hashchange", function () { var h = parseInt((location.hash || "").slice(1), 10); if (!isNaN(h) && h - 1 !== cur) go(h - 1); });
  var h0 = parseInt((location.hash || "").slice(1), 10);
  go(isNaN(h0) ? 0 : h0 - 1);
})();
