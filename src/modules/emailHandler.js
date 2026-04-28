export function initEmailHandler() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    
    // Solo interceptar enlaces mailto
    if (link && link.href && link.href.startsWith('mailto:')) {
      e.preventDefault();
      
      // Detectar si es dispositivo móvil
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      try {
        const url = new URL(link.href);
        const to = url.pathname;
        
        if (isMobile) {
          // En móviles, permitir el comportamiento normal de mailto (abre app de correo por defecto)
          window.location.href = link.href;
        } else {
          // En PC, abrir Gmail Web en una nueva pestaña
          let gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
          
          // Preservar subject y body si existen
          url.searchParams.forEach((value, key) => {
            if (key.toLowerCase() === 'subject') {
              gmailUrl += `&su=${encodeURIComponent(value)}`;
            } else if (key.toLowerCase() === 'body') {
              gmailUrl += `&body=${encodeURIComponent(value)}`;
            }
          });

          window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        }
      } catch (error) {
        console.error('[Proatam] Error al procesar enlace de correo:', error);
        // Fallback al comportamiento por defecto en caso de error
        window.location.href = link.href;
      }
    }
  });
}
