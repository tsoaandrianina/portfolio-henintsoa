/* Script commun à toutes les pages */
(function () {
  var root = document.documentElement;

  /* ---------- Thème clair / sombre ---------- */
  var themeBtn = document.getElementById('themeBtn');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    var t = root.getAttribute('data-theme');
    return t ? t : (mq.matches ? 'dark' : 'light');
  }
  function refreshTheme() {
    if (!themeBtn) return;
    var dark = effective() === 'dark';
    themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    themeBtn.setAttribute('aria-label', dark ? 'Passer en mode clair' : 'Passer en mode sombre');
  }
  try {
    var saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) { /* stockage indisponible : on garde le réglage du système */ }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = effective() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
      refreshTheme();
    });
  }
  if (mq.addEventListener) mq.addEventListener('change', refreshTheme);
  refreshTheme();

  /* ---------- Menu mobile ---------- */
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('siteNav');
  if (menuBtn && nav) {
    function setMenu(open) {
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    }
    menuBtn.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ---------- Pile 3D de la page d'accueil ---------- */
  var scene = document.getElementById('scene');
  if (scene) {
    var layers = scene.querySelectorAll('.layer');
    var buttons = document.querySelectorAll('.legend button');
    var timer = null;

    function activate(name) {
      clearTimeout(timer);
      scene.classList.add('has-active');
      layers.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('data-layer') === name); });
      buttons.forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-layer') === name); });
    }
    function deactivate() {
      scene.classList.remove('has-active');
      layers.forEach(function (l) { l.classList.remove('is-active'); });
      buttons.forEach(function (b) { b.classList.remove('on'); });
    }
    buttons.forEach(function (b) {
      var name = b.getAttribute('data-layer');
      b.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') activate(name); });
      b.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') deactivate(); });
      b.addEventListener('focus', function () { activate(name); });
      b.addEventListener('blur', deactivate);
      b.addEventListener('click', function () {
        activate(name);
        clearTimeout(timer);
        timer = setTimeout(deactivate, 2500);
      });
    });

    /* Légère rotation selon la position du pointeur */
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hoverable = window.matchMedia('(hover: hover)').matches;
    var visual = document.getElementById('visual');
    if (visual && !reduce && hoverable) {
      visual.addEventListener('pointermove', function (e) {
        var r = visual.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width) * 2 - 1;
        scene.style.setProperty('--tilt', (x * 10).toFixed(1) + 'deg');
      });
      visual.addEventListener('pointerleave', function () {
        scene.style.setProperty('--tilt', '0deg');
      });
    }
  }
})();
