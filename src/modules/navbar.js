// ─── Centralized Navbar Injector ──────────────────────────────
export function injectNavbar() {
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a href="/index.html" class="flex items-center gap-3 flex-shrink-0">
          <img src="/proatam_logo.png" alt="Proatam Logo" class="nav-logo-dark h-8 w-auto hidden" />
          <img src="/proatam_logo.png" alt="Proatam Logo" class="nav-logo-white h-8 w-auto invert brightness-0" />
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-8">
          <a href="/index.html" class="nav-link py-1" data-i18n="nav.inicio" data-page="index.html">Inicio</a>
          <a href="/pages/nosotros.html" class="nav-link py-1" data-i18n="nav.nosotros" data-page="nosotros.html">Nosotros</a>
          <a href="/pages/servicios.html" class="nav-link py-1" data-i18n="nav.servicios" data-page="servicios.html">Servicios</a>
          <a href="/pages/faq.html" class="nav-link py-1" data-i18n="nav.faq" data-page="faq.html">FAQ</a>
          <a href="/pages/contacto.html" class="nav-link py-1" data-i18n="nav.contacto" data-page="contacto.html">Contacto</a>
        </nav>

        <!-- Right Controls -->
        <div class="hidden lg:flex items-center gap-6 border-l border-white/20 pl-6 space-x-2">
          <div class="flex items-center gap-1">
            <button class="lang-btn" data-lang="es">ES</button>
            <span class="text-white/30 text-xs mx-1">|</span>
            <button class="lang-btn" data-lang="en">EN</button>
          </div>
          <a href="/pages/contacto.html" class="btn-primary" style="padding: 0.5rem 1.25rem;">
            <span data-i18n="nav.cta">Solicitar Evaluación</span>
          </a>
        </div>

        <!-- Mobile Burger -->
        <button id="burger-btn" aria-label="Menú" aria-expanded="false" class="lg:hidden flex flex-col gap-1.5 p-2">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="lg:hidden bg-white shadow-lg w-full absolute left-0 top-full">
        <nav class="flex flex-col py-4">
          <a href="/index.html" class="nav-link !text-brand-dark px-6 py-3 border-b border-gray-100 font-medium" data-i18n="nav.inicio">Inicio</a>
          <a href="/pages/nosotros.html" class="nav-link !text-brand-dark px-6 py-3 border-b border-gray-100 font-medium" data-i18n="nav.nosotros">Nosotros</a>
          <a href="/pages/servicios.html" class="nav-link !text-brand-dark px-6 py-3 border-b border-gray-100 font-medium" data-i18n="nav.servicios">Servicios</a>
          <a href="/pages/faq.html" class="nav-link !text-brand-dark px-6 py-3 border-b border-gray-100 font-medium" data-i18n="nav.faq">FAQ</a>
          <a href="/pages/contacto.html" class="nav-link !text-brand-dark px-6 py-3 border-b border-gray-100 font-medium" data-i18n="nav.contacto">Contacto</a>
          <div class="flex items-center gap-3 px-6 py-4">
            <button class="lang-btn !text-brand-dark" data-lang="es">ES</button>
            <span class="text-gray-300 text-xs">|</span>
            <button class="lang-btn !text-brand-dark" data-lang="en">EN</button>
          </div>
        </nav>
      </div>
    </div>
  `;

  // Mark active page
  const path = window.location.pathname;
  header.querySelectorAll('[data-page]').forEach(link => {
    const page = link.dataset.page;
    if (path.endsWith(page) || (page === 'index.html' && (path === '/' || path.endsWith('/index.html')))) {
      link.classList.add('active');
    }
  });
}
