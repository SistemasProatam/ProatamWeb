import { t } from './i18n.js';

// ─── EmailJS Form Handler ──────────────────────────────────────
// Service ID: service_sw4l1iq | Template ID: template_ngmddwa

const EMAILJS_PUBLIC_KEY = 'sSs7gDNcElX4qWWgZ';
const EMAILJS_SERVICE_ID = 'service_sw4l1iq';
const EMAILJS_TEMPLATE_ID = 'template_ngmddwa';

// Initialize EmailJS
function loadEmailJS() {
  return new Promise((resolve) => {
    if (window.emailjs) { resolve(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      resolve();
    };
    document.head.appendChild(script);
  });
}

// ─── Success Modal ────────────────────────────────────────────
function showSuccessModal() {
  // Remove any existing modal
  document.getElementById('proatam-success-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'proatam-success-modal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:9999;display:flex;align-items:center;
    justify-content:center;padding:1rem;
    background:rgba(10,10,15,0.85);backdrop-filter:blur(6px);
    opacity:0;transition:opacity 0.3s ease;
  `;
  modal.innerHTML = `
    <div style="
      background:#fff;max-width:500px;width:100%;padding:2.5rem;
      position:relative;transform:scale(0.95);transition:transform 0.3s ease;
      box-shadow:0 25px 60px rgba(0,0,0,0.25);
    " id="proatam-modal-box">
      <button id="proatam-modal-close" style="
        position:absolute;top:1rem;right:1rem;background:none;border:none;
        cursor:pointer;color:#9ca3af;font-size:1.25rem;line-height:1;
      " aria-label="${t('modal.ok')}">✕</button>

      <div style="text-align:center;margin-bottom:1.5rem;">
        <div style="
          width:64px;height:64px;background:#407656;border-radius:0;
          display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;
        ">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:1.75rem;font-weight:600;color:#0d1a3a;margin-bottom:0.5rem;">
          ${t('modal.title')}
        </h3>
        <p style="color:#6b7280;font-family:'Inter',sans-serif;font-size:0.95rem;line-height:1.6;">
          ${t('modal.sub')}
        </p>
      </div>

      <div style="background:#f9fafb;border:1px solid #f3f4f6;padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <p style="color:#374151;font-family:'Inter',sans-serif;font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;">${t('modal.immediate')}</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          <a href="tel:+528998235611" style="display:flex;align-items:center;gap:0.5rem;color:#407656;font-size:0.875rem;font-family:'Inter',sans-serif;text-decoration:none;font-weight:500;">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372..."/>
            </svg>
            (899) 823-5611
          </a>
          <a href="mailto:administracion@proatam.com" style="display:flex;align-items:center;gap:0.5rem;color:#407656;font-size:0.875rem;font-family:'Inter',sans-serif;text-decoration:none;font-weight:500;">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15..."/>
            </svg>
            administracion@proatam.com
          </a>
        </div>
      </div>

      <button id="proatam-modal-ok" style="
        width:100%;background:#407656;color:white;border:none;cursor:pointer;
        padding:0.875rem;font-family:'Barlow Condensed',sans-serif;
        font-size:1rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;
        transition:background 0.2s;
      ">${t('modal.ok')}</button>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    document.getElementById('proatam-modal-box').style.transform = 'scale(1)';
  });

  const close = () => {
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 300);
  };
  document.getElementById('proatam-modal-close').onclick = close;
  document.getElementById('proatam-modal-ok').onclick = close;
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
}

// ─── Validate a single field ─────────────────────────────────
function validateField(input, showError = true) {
  const val = input.value.trim();
  const required = input.hasAttribute('required') || input.dataset.required === 'true';
  const type = input.type;
  let ok = true;
  let msg = '';

  if (required && !val) { ok = false; msg = t('form.required'); }
  if (ok && type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    ok = false; msg = t('idx.contact.placeholder.email');
  }

  if (showError) {
    const errId = `err-${input.id}`;
    let errEl = document.getElementById(errId);
    if (!errEl && !ok) {
      errEl = document.createElement('p');
      errEl.id = errId;
      errEl.style.cssText = 'color:#ef4444;font-size:0.75rem;margin-top:0.25rem;font-family:Inter,sans-serif;';
      input.parentNode.appendChild(errEl);
    }
    if (errEl) errEl.textContent = ok ? '' : msg;
    input.style.borderColor = ok ? (val ? '#407656' : '') : '#ef4444';
  }
  return ok;
}

// ─── Wire up a form ──────────────────────────────────────────
async function wireForm(form) {
  if (!form) return;
  await loadEmailJS();

  const btn = form.querySelector('[type="submit"], button[data-submit]');
  const requiredInputs = form.querySelectorAll('input[required], textarea[required], input[data-required], textarea[data-required]');

  // Live validation
  requiredInputs.forEach(inp => {
    inp.addEventListener('blur', () => validateField(inp));
    inp.addEventListener('input', () => {
      if (inp.style.borderColor === 'rgb(239, 68, 68)') validateField(inp);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all
    const allValid = [...requiredInputs].map(inp => validateField(inp)).every(Boolean);
    if (!allValid) return;

    // Collect data
    const name = form.querySelector('[name="from_name"], [id*="name"]:not([id*="last"])');
    const last = form.querySelector('[name="last_name"], [id*="last"]');
    const email = form.querySelector('[name="from_email"], [type="email"]');
    const phone = form.querySelector('[name="phone"], [type="tel"]');
    const company = form.querySelector('[name="company"], [id*="company"]');
    const message = form.querySelector('[name="message"], textarea');

    const templateParams = {
      name: [(name?.value || ''), (last?.value || '')].join(' ').trim() || 'Sin nombre',
      time: new Date().toLocaleString('es-MX', { 
        day: '2-digit', month: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit', hour12: true 
      }),
      message: message?.value || '',
      // Keeping other fields in case they are used in a different version of the template
      from_email: email?.value || '',
      phone: phone?.value || 'No proporcionado',
      company: company?.value || 'No proporcionado',
    };

    // Loading state
    if (btn) {
      btn.disabled = true;
      const originalText = btn.textContent;
      btn.setAttribute('data-original', originalText);
      btn.textContent = t('form.loading');
      btn.style.opacity = '0.7';
    }

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      if (btn) {
        btn.textContent = `✓ ${t('form.sent')}`;
        btn.style.background = '#5FA57C';
        btn.style.opacity = '1';
      }

      form.reset();
      // Reset field borders
      form.querySelectorAll('input, textarea').forEach(f => { f.style.borderColor = ''; });

      showSuccessModal();

      // Re-enable after 5s
      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          btn.textContent = btn.getAttribute('data-original') || 'Enviar';
          btn.style.background = '';
          btn.style.opacity = '1';
        }
      }, 5000);

    } catch (err) {
      console.error('[Proatam EmailJS] Error:', err);
      if (btn) {
        btn.disabled = false;
        btn.textContent = t('form.error');
        btn.style.background = '#ef4444';
        btn.style.opacity = '1';
        setTimeout(() => {
          btn.textContent = btn.getAttribute('data-original') || 'Enviar';
          btn.style.background = '';
        }, 3000);
      }
    }
  });
}

// ─── Init all forms on the page ─────────────────────────────
export async function initEmailForms() {
  const forms = document.querySelectorAll('form[data-emailjs]');
  for (const form of forms) {
    await wireForm(form);
  }
}
