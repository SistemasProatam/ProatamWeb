import { t } from './i18n.js';

// ─── Lead Gen Form ────────────────────────────────────────────
export function initForm() {
  const form    = document.getElementById('lead-form');
  const submitBtn = document.getElementById('form-submit');
  if (!form) return;

  // Field validation rules
  const rules = {
    'field-name':    { required: true, minLength: 2 },
    'field-company': { required: true, minLength: 2 },
    'field-email':   { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    'field-phone':   { required: false },
    'field-sector':  { required: true },
    'field-message': { required: false },
  };

  function validateField(input) {
    const rule     = rules[input.id];
    const errEl    = document.getElementById(`err-${input.id.replace('field-', '')}`);
    if (!rule || !errEl) return true;

    const val = input.value.trim();
    let ok    = true;
    let msg   = '';

    if (rule.required && !val)                     { ok = false; msg = t('form.required'); }
    if (ok && rule.minLength && val.length < rule.minLength) { ok = false; msg = `${t('idx.footer.bio').split(' ')[0]} ${rule.minLength} characters.`; } // Fallback or add new key
    if (ok && rule.pattern && !rule.pattern.test(val))       { ok = false; msg = t('idx.contact.placeholder.email'); }

    errEl.textContent    = ok ? '' : msg;
    input.classList.toggle('border-red-400', !ok);
    input.classList.toggle('border-brand-green', ok && val.length > 0);
    return ok;
  }

  // Live validate on blur
  Object.keys(rules).forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('blur', () => validateField(el));
      el.addEventListener('input', () => {
        if (el.classList.contains('border-red-400')) validateField(el);
      });
    }
  });

  // Submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const allInputs = Object.keys(rules).map(id => document.getElementById(id)).filter(Boolean);
    const valid     = allInputs.map(validateField).every(Boolean);
    if (!valid) return;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('[data-label]').textContent = t('form.loading');

    // Simulate async (replace with real fetch when ready)
    await new Promise(r => setTimeout(r, 1400));

    // Success state
    submitBtn.querySelector('[data-label]').textContent = t('form.sent');
    submitBtn.classList.add('bg-brand-light', '!border-brand-light');
    form.querySelectorAll('input,select,textarea').forEach(f => f.disabled = true);

    // Log data for future endpoint wiring
    const payload = Object.fromEntries(new FormData(form).entries());
    console.info('[Proatam Form] Lead payload ready for endpoint:', payload);
  });

  // Smooth scroll anchor links → use Lenis if available
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (window._lenis) {
        window._lenis.scrollTo(target, { duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
