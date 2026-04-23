import { gsap }          from 'gsap';
import { ScrollTrigger }  from 'gsap/ScrollTrigger';
import Lenis              from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// ─── Animations ───────────────────────────────────────────────
export function initAnimations() {

  // 1. Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // 2. Hero entrance timeline (uses IDs)
  const heroTl = gsap.timeline({ delay: 0.2 });
  if (document.querySelector('#hero-eyebrow')) {
    heroTl
      .from('#hero-eyebrow', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' })
      .from('#hero-h1',      { opacity: 0, y: 36, duration: 0.8, ease: 'power3.out' }, '-=0.45')
      .from('#hero-sub',     { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .from('#hero-ctas',    { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.45')
      .from('#hero-stats',   { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out' }, '-=0.3');
  }

  // 3. Hero background parallax
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      yPercent: 22, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  // 4. Individual reveal animations via data-reveal attribute
  // Usage: data-reveal="fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-up"
  // Optional: data-reveal-delay="0.2" data-reveal-duration="0.8"
  const setupReveal = (el) => {
    const type     = el.dataset.reveal || 'fade-up';
    const delay    = parseFloat(el.dataset.revealDelay  || 0);
    const duration = parseFloat(el.dataset.revealDuration || 0.75);

    const fromMap = {
      'fade-up':    { opacity: 0, y: 40 },
      'fade-down':  { opacity: 0, y: -30 },
      'fade-left':  { opacity: 0, x: -50 },
      'fade-right': { opacity: 0, x: 50 },
      'fade-in':    { opacity: 0 },
      'scale-up':   { opacity: 0, scale: 0.88 },
    };

    const from = fromMap[type] || { opacity: 0, y: 40 };

    gsap.fromTo(el, from, {
      opacity: 1, y: 0, x: 0, scale: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  };

  document.querySelectorAll('[data-reveal]').forEach(setupReveal);

  // 5. Staggered group reveals — .reveal-group with .reveal-child inside
  document.querySelectorAll('.reveal-group').forEach((group) => {
    const children = group.querySelectorAll('.reveal-child');
    if (!children.length) return;
    const stagger = parseFloat(group.dataset.stagger || 0.12);
    gsap.fromTo(
      children,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: group, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  });

  // 6. Legacy .reveal class support
  document.querySelectorAll('.reveal:not([data-reveal])').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || 0);
    gsap.fromTo(el,
      { opacity: 0, y: 36 },
      {
        opacity: 1, y: 0, duration: 0.8, delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  });

  // 7. Stats counter animation
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const obj    = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate() {
        el.textContent = (Number.isInteger(target) ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix;
      },
    });
  });

  // 8. Horizontal rule grow on enter
  document.querySelectorAll('.hr-grow').forEach((hr) => {
    gsap.fromTo(hr, { scaleX: 0 }, {
      scaleX: 1, duration: 1.2, ease: 'power3.out',
      transformOrigin: 'left center',
      scrollTrigger: { trigger: hr, start: 'top 90%' },
    });
  });

  // Expose lenis globally for anchor links
  window._lenis = lenis;
}
