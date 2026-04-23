import './style.css';
import { injectNavbar }   from './modules/navbar.js';
import { injectFooter }   from './modules/footer.js';
import { initHeader }     from './modules/header.js';
import { initAnimations } from './modules/animations.js';
import { initI18n }       from './modules/i18n.js';
import { initEmailForms } from './modules/emailForm.js';
import { initWhatsapp }   from './modules/whatsapp.js';

function initFaq() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  if (!faqToggles.length) return;
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon    = toggle.querySelector('svg');
      const wasHidden = content.classList.contains('hidden');

      faqToggles.forEach(other => {
        other.nextElementSibling.classList.add('hidden');
        other.querySelector('svg').style.transform = 'rotate(0deg)';
      });

      if (wasHidden) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject shared components
  injectNavbar();
  injectFooter();

  // 2. Init features (i18n must run AFTER navbar inject so nav links get translated)
  initI18n();
  initHeader();
  initFaq();
  initEmailForms();
  initWhatsapp();

  try { initAnimations(); } catch(e) { console.warn('[Proatam] Animations init error:', e); }

  document.documentElement.classList.add('loaded');
});
