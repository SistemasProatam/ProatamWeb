import { gsap } from 'gsap';

// ─── Services Modal ───────────────────────────────────────────
export function initModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const modalBox = document.getElementById('modal-box');

  if (!backdrop) return;

  // Open modal
  document.querySelectorAll('[data-modal-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id   = btn.dataset.modalOpen;
      const data = SERVICE_DATA[id];
      if (!data) return;

      // Fill modal content
      document.getElementById('modal-title').textContent    = data.title;
      document.getElementById('modal-desc').textContent     = data.description;
      document.getElementById('modal-img-alt').alt          = data.title;

      const listEl = document.getElementById('modal-list');
      listEl.innerHTML = data.items
        .map(item => `<li class="flex items-start gap-2 text-sm text-gray-600 font-body">
          <span class="text-brand-green mt-0.5 flex-shrink-0">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </span>
          ${item}
        </li>`)
        .join('');

      backdrop.style.display = 'flex';
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close function
  function closeModal() {
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Close on backdrop click
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Close button
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
}

// ─── Service Catalog Data ─────────────────────────────────────
const SERVICE_DATA = {
  'oil-gas': {
    title: 'Servicios Oil & Gas',
    description: 'Soluciones integrales para la industria petrolera y de gas, desde la instalación de líneas de proceso hasta el mantenimiento de equipos especializados. Operamos bajo estrictos protocolos de seguridad y estándares internacionales.',
    items: [
      'Instalación y mantenimiento de líneas de proceso y transferencia',
      'Trabajos de tubing y casing en pozos',
      'Mantenimiento preventivo y correctivo de compresores',
      'Intervención en equipos de superficie (BOP, separadores, medidores)',
      'Construcción de plantas de proceso y facilidades',
      'Servicios de soldadura certificada (API 1104, ASME)',
      'Inspección y pruebas de integridad de ductos',
    ],
  },
  'construccion': {
    title: 'Construcción General e Infraestructura',
    description: 'Proyectos de construcción civil e industrial con los más altos estándares de calidad y seguridad. Entregamos resultados cumpliendo con normativas técnicas y plazos establecidos.',
    items: [
      'Edificación industrial y comercial',
      'Obra pública: carreteras, drenaje, urbanización',
      'Estructuras metálicas y naves industriales',
      'Cimentaciones especiales y pilotaje profundo',
      'Supervisión y gestión de proyectos (PMI)',
      'Gestión ambiental ISO 14001:2015',
      'Control de calidad ISO 9001:2015',
    ],
  },
  'industrial': {
    title: 'Mantenimiento Industrial & Maquiladoras',
    description: 'Servicio de mantenimiento técnico especializado para plantas industriales y maquiladoras. Contamos con personal calificado disponible para asegurar la continuidad operativa de sus procesos.',
    items: [
      'Mantenimiento total de plantas (TPM)',
      'Mantenimiento predictivo y análisis de vibraciones',
      'Gestión de activos y spare parts',
      'Instalaciones eléctricas industriales',
      'Sistemas neumáticos e hidráulicos',
      'Pintura industrial y protección anticorrosión',
      'Proyectos de ampliación y remodelación de planta',
    ],
  },
};
