(function initOnReady() {
  function init() {
    // Solo en escritorio
    const mq = window.matchMedia('(min-width: 993px)');

    // Localiza el bloque del logo en el menú lateral
    const el =
      document.querySelector('#side-nav .userView') ||
      document.querySelector('.sidenav .userView') ||
      document.querySelector('.side-nav .userView');

    if (!el) return;

    // Lee variables CSS
    const root = document.documentElement;
    const maxH = parseInt(getComputedStyle(root).getPropertyValue('--logo-max-h')) || 265;
    const minH = parseInt(getComputedStyle(root).getPropertyValue('--logo-min-h')) || 150;

    // Rango de scroll hasta llegar a la mínima (ajústalo a tu gusto)
    const range = 300;

    function update() {
      // En móvil: resetea
      if (!mq.matches) {
        el.style.height = `var(--logo-max-h)`;
        return;
      }

      const y = window.scrollY;
      const t = Math.min(y, range) / range;   // 0 → 1
      const h = Math.round(maxH - (maxH - minH) * t);
      el.style.height = h + 'px';
    }

    // Scroll performante
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', update);
    update(); // inicial
  }

  // Espera al DOM si hace falta
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

