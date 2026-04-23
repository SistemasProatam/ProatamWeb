// ─── Header: Glassmorphism on scroll ─────────────────────────
export function initHeader() {
  const header   = document.getElementById('site-header');
  const hero     = document.getElementById('hero');
  const burger   = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!header) return;

  // Transparent vs scrolled state
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        header.classList.add('transparent');
        header.classList.remove('scrolled');
      } else {
        header.classList.remove('transparent');
        header.classList.add('scrolled');
      }
    },
    { threshold: 0.15 }
  );

  if (hero) observer.observe(hero);

  // Initial state
  header.classList.add('transparent');

  // Mobile burger
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const expanded = mobileMenu.classList.contains('open');
      burger.setAttribute('aria-expanded', expanded);

      // Animate burger lines
      const lines = burger.querySelectorAll('span');
      if (expanded) {
        lines[0].style.transform = 'translateY(8px) rotate(45deg)';
        lines[1].style.opacity   = '0';
        lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      } else {
        lines[0].style.transform = '';
        lines[1].style.opacity   = '';
        lines[2].style.transform = '';
      }
    });
  }

  // Active nav link — highlight current page
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });
}
