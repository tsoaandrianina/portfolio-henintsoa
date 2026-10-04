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

  const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

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
})();
