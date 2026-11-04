// Pantalla de espera: cambia de escena cada DUR segundos en loop. ?escena=n fija una escena (para capturas); F o clic = pantalla completa.
(function () {
  var DUR = 7000;
  var escenas = Array.prototype.slice.call(document.querySelectorAll('.esc'));
  var barra = document.getElementById('barra');
  var fs = document.getElementById('fs');
  var vid = document.getElementById('vid');
  var i = -1, timer = null;
  if (vid) { vid.addEventListener('playing', function () { vid.setAttribute('data-ok', '1'); }); }
  var fija = parseInt(new URLSearchParams(location.search).get('escena') || '', 10);

  function mostrar(n) {
    if (i >= 0) escenas[i].classList.remove('activa');
    i = n;
    var e = escenas[i];
    e.classList.add('activa');
    // reinicia animaciones de entrada
    e.querySelectorAll('.in').forEach(function (el) { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
    barra.classList.remove('corre'); void barra.offsetWidth; barra.classList.add('corre');
    if (vid) { if (e.contains(vid)) { vid.currentTime = 0; vid.play().catch(function () {}); } else { vid.pause(); } }
  }
  function siguiente() { mostrar((i + 1) % escenas.length); }

  if (fija >= 1 && fija <= escenas.length) { mostrar(fija - 1); }
  else { mostrar(0); timer = setInterval(siguiente, DUR); }

  function pantallaCompleta() {
    var el = document.documentElement;
    (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
    fs.classList.add('oculto');
  }
  fs.addEventListener('click', pantallaCompleta);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'f' || ev.key === 'F') pantallaCompleta();
    if (ev.key === 'ArrowRight') { if (timer) { clearInterval(timer); timer = setInterval(siguiente, DUR); } siguiente(); }
    if (ev.key === 'ArrowLeft') { if (timer) { clearInterval(timer); timer = setInterval(siguiente, DUR); } mostrar((i - 1 + escenas.length) % escenas.length); }
  });
  // cursor oculto y botón escondido tras 3 s sin mover el mouse
  var quieto;
  function movio() { document.body.classList.remove('oculta'); fs.classList.remove('oculto'); clearTimeout(quieto); quieto = setTimeout(function () { document.body.classList.add('oculta'); fs.classList.add('oculto'); }, 3000); }
  document.addEventListener('mousemove', movio); movio();
  // Si el navegador bloqueó el autoplay del video, el primer clic lo arranca.
  document.addEventListener('click', function () { if (vid && vid.paused && escenas[i].contains(vid)) vid.play().catch(function () {}); });
})();
