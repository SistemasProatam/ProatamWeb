// ─── Centralized Footer Injector ──────────────────────────────
export function injectFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  footerEl.innerHTML = `
    <!-- Abstract pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <svg class="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100L100 0H0V100z" fill="currentColor" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

        <!-- Col 1: Brand & Bio -->
        <div class="lg:col-span-4">
          <img src="/proatam_logo.png" alt="Proatam" class="h-10 w-auto invert brightness-0 mb-6" />
          <p class="text-white/60 text-sm leading-relaxed max-w-sm mb-6" data-i18n="idx.footer.bio">Ingeniería industrial de precisión, desarrollo de infraestructura crítica y mantenimiento técnico para sectores de alta exigencia operativa y tolerancia cero a fallos.</p>
        </div>

        <!-- Col 2: Navigation -->
        <div class="lg:col-span-2 lg:col-start-6">
          <h4 class="text-white font-heading font-semibold text-lg mb-6 tracking-wide" data-i18n="idx.footer.nav_title">Corporativo</h4>
          <ul class="space-y-3">
            <li><a href="/pages/nosotros.html" class="text-white/60 hover:text-brand-green text-sm transition-colors font-medium tracking-wide" data-i18n="nav.nosotros">Nuestra Identidad</a></li>
            <li><a href="/pages/servicios.html" class="text-white/60 hover:text-brand-green text-sm transition-colors font-medium tracking-wide" data-i18n="nav.servicios">Catálogo Operativo</a></li>
            <li><a href="/pages/faq.html" class="text-white/60 hover:text-brand-green text-sm transition-colors font-medium tracking-wide" data-i18n="nav.faq">Portal FAQ</a></li>
            <li><a href="/pages/contacto.html" class="text-white/60 hover:text-brand-green text-sm transition-colors font-medium tracking-wide" data-i18n="nav.contacto">Inicie un Proyecto</a></li>
          </ul>
        </div>

        <!-- Col 3: Norms -->
        <div class="lg:col-span-2">
          <h4 class="text-white font-heading font-semibold text-lg mb-6 tracking-wide" data-i18n="idx.footer.norms_title">Normatividad</h4>
          <ul class="space-y-3">
            <li><span class="text-white/60 text-sm font-medium tracking-wide">ISO 9001:2015</span></li>
            <li><span class="text-white/60 text-sm font-medium tracking-wide">ISO 14001:2015</span></li>
            <li><span class="text-white/60 text-sm font-medium tracking-wide">ISO 45001:2018</span></li>
          </ul>
        </div>

        <!-- Col 4: Contact -->
        <div class="lg:col-span-3">
          <h4 class="text-white font-heading font-semibold text-lg mb-6 tracking-wide" data-i18n="idx.footer.contact_title">Contacto Central</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <a href="https://maps.app.goo.gl/A6kdQCWkaNPiGJK8A" target="_blank" rel="noopener noreferrer"
                 class="text-white/60 hover:text-brand-green text-sm font-medium transition-colors leading-relaxed"
                 data-i18n="idx.info.address.full">
                Ing. Villarreal 327, Reynosa, 88780<br>Reynosa, Tamps. México
              </a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:+528998235611" class="text-white/60 hover:text-brand-green text-sm font-medium transition-colors">(899) 823-5611</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:administracion@proatam.com" class="text-white/60 hover:text-brand-green text-sm font-medium transition-colors">administracion@proatam.com</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <a href="https://wa.me/528998235611" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-brand-green text-sm font-medium transition-colors">(899) 823-5611</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-brand-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              <span class="text-white/60 text-sm font-medium" data-i18n="idx.info.hours.val">Lun – Vie: 8:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-body text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold" data-i18n="idx.foot.cpy">© 2026 Proatam. Todos los Derechos Reservados.</p>
        <p class="font-body text-[10px] text-white/30 tracking-[0.1em] uppercase font-bold" data-i18n="idx.foot.pwr">Con el respaldo de Arquitectura Estructural Avanzada.</p>
      </div>
    </div>
  `;
}
