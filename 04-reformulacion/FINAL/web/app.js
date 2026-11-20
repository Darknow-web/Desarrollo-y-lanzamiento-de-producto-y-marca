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

  /* ---------- Gráfico: resultado de cada mes ---------- */
  function buildChart() {
    var svg = document.getElementById("chart-res");
    if (!svg) return;
    var data = [-1134, -1544, -10048, -5030, -4804, -4174, -3488, -3785, -2711, -1911, -1665, -4072,
      -5651, -8554, -5193, -273, 1258, 1578, -1319, 2446, 1904, 2030, 2032, -2687];
    var M = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    var W = 1040, x0 = 70, y0 = 120, k = 330 / 10048, step = (W - x0 - 10) / 24, bw = step - 10;
    var NS = "http://www.w3.org/2000/svg", h = "";
    // rejilla
    [2000, 0, -2000, -4000, -6000, -8000, -10000].forEach(function (v) {
      var y = y0 - v * k;
      h += '<line x1="' + x0 + '" x2="' + W + '" y1="' + y + '" y2="' + y + '" stroke="' + (v === 0 ? "#4A2018" : "#E8D5BD") + '" stroke-width="' + (v === 0 ? 2.5 : 1) + '"/>';
      h += '<text x="' + (x0 - 12) + '" y="' + (y + 7) + '" text-anchor="end" font-size="19" fill="#7A5A4C">' + (v === 0 ? "0" : (v > 0 ? "+" : "−") + fmt(Math.abs(v))) + "</text>";
    });
    data.forEach(function (v, i) {
      var x = x0 + 6 + i * step, hgt = Math.abs(v) * k, y = v < 0 ? y0 : y0 - hgt;
      var c = v < 0 ? "#BA4036" : "#7C8A3A";
      var d = (0.3 + i * 0.06).toFixed(2) + "s";
      var r = Math.min(6, hgt);
      // barra con extremo redondeado lejos de la línea base
      var p = v < 0
        ? "M" + x + " " + y + "h" + bw + "v" + (hgt - r) + "q0 " + r + " -" + r + " " + r + "h-" + (bw - 2 * r) + "q-" + r + " 0 -" + r + " -" + r + "z"
        : "M" + x + " " + y0 + "v-" + (hgt - r) + "q0 -" + r + " " + r + " -" + r + "h" + (bw - 2 * r) + "q" + r + " 0 " + r + " " + r + "v" + (hgt - r) + "z";
      h += '<path class="a ' + (v < 0 ? "gyn" : "gy") + '" style="--d:' + d + ';transform-box:fill-box" d="' + p + '" fill="' + c + '"><title>' + M[i % 12] + " " + (i < 12 ? "2027" : "2028") + ": S/" + (v < 0 ? "−" : "+") + fmt(Math.abs(v)) + "</title></path>";
      h += '<text x="' + (x + bw / 2) + '" y="' + (y0 + 360) + '" text-anchor="middle" font-size="17" fill="#7A5A4C">' + M[i % 12] + "</text>";
    });
    // años
    h += '<text x="' + (x0 + 6 + 6 * step) + '" y="' + (y0 + 400) + '" text-anchor="middle" font-size="22" fill="#4A2018">2027</text>';
    h += '<text x="' + (x0 + 6 + 18 * step) + '" y="' + (y0 + 400) + '" text-anchor="middle" font-size="22" fill="#4A2018">2028</text>';
    h += '<line x1="' + (x0 + 12 * step + 1) + '" x2="' + (x0 + 12 * step + 1) + '" y1="' + (y0 - 90) + '" y2="' + (y0 + 380) + '" stroke="#D9B48F" stroke-dasharray="6 6" stroke-width="2"/>';
    // equilibrio: mayo 2028 (índice 16)
    var xe = x0 + 6 + 16 * step + bw / 2;
    h += '<g class="a fade" style="--d:2.2s"><line x1="' + xe + '" x2="' + xe + '" y1="' + (y0 + 6) + '" y2="' + (y0 + 58) + '" stroke="#7C8A3A" stroke-width="3"/>';
    h += '<rect x="' + (xe - 30) + '" y="' + (y0 + 58) + '" width="220" height="56" rx="14" fill="#7C8A3A"/>';
    h += '<text x="' + (xe + 80) + '" y="' + (y0 + 94) + '" text-anchor="middle" font-size="21" fill="#fff">Equilibrio · mes 17</text></g>';
    svg.innerHTML = h;
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
    chrome.querySelector(".who b").textContent = PARTS[part].name;
    chrome.querySelector(".who i").style.background = PARTS[part].color;
    chrome.querySelector(".num").textContent = (i + 1) + " / " + slides.length;
    // progreso por parte
    chrome.querySelectorAll(".parts span").forEach(function (sp) {
      var p = +sp.dataset.p, inPart = slides.filter(function (x) { return +x.dataset.part === p; });
      var idx = inPart.indexOf(s), fill = p < part ? 1 : p > part ? 0 : (idx + 1) / inPart.length;
      sp.querySelector("b").style.transform = "scaleX(" + fill + ")";
    });
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
  particles(); buildChart(); buildQR(); paintLive();
  if (PRINT) {
    slides.forEach(function (s, i) {
      s.classList.add("on"); runCounters(s);
    });
    return;
  }
  partsBar(); fit(); window.addEventListener("resize", fit);
  window.addEventListener("hashchange", function () { var h = parseInt((location.hash || "").slice(1), 10); if (!isNaN(h) && h - 1 !== cur) go(h - 1); });
  var h0 = parseInt((location.hash || "").slice(1), 10);
  go(isNaN(h0) ? 0 : h0 - 1);
})();
