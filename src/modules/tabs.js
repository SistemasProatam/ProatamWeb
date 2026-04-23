import { gsap } from 'gsap';

// ─── Segmentation Tabs ────────────────────────────────────────
export function initTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabBtns.length) return;

  function activateTab(targetId) {
    // Find previous active panel
    const prevPanel = document.querySelector('.tab-panel.active');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      panel.classList.add('hidden');
    });

    const btn   = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
    const panel = document.getElementById(targetId);

    if (!btn || !panel) return;

    btn.classList.add('active');

    // Animate in new panel
    panel.classList.remove('hidden');
    panel.classList.add('active');

    gsap.fromTo(
      panel,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );

    // Animate child cards with stagger
    const cards = panel.querySelectorAll('.tab-card');
    if (cards.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      );
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('active')) {
        activateTab(btn.dataset.tab);
      }
    });
  });

  // Init first tab
  const firstTab = tabBtns[0];
  if (firstTab) activateTab(firstTab.dataset.tab);
}
