// ─── i18n — Language Switch ──────────────────────────────────
// KEY RULE: All translation keys are FLAT strings (e.g. 'faq.q1')
// The lookup does dict[key] — NOT nested traversal.
// Do NOT change this to nested object traversal.

const translations = {
  es: {
    // ── Nav ─────────────────────────────────────────────────
    'nav.inicio': 'Inicio',
    'nav.nosotros': 'Nosotros',
    'nav.servicios': 'Servicios',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.contacto': 'Contacto',
    'nav.cta': 'Solicitar Evaluación',
    'idx.page.title': 'Ingeniería y Construcción Industrial',

    // ── Hero ─────────────────────────────────────────────────
    'hero.badge': 'Reynosa, Tamaulipas — Noreste de México',
    'hero.h1': 'Ingeniería,<br/>Construcción y<br/>Mantenimiento.',
    'hero.sub': 'Servicios especializados de ingeniería, construcción industrial y mantenimiento para los sectores de Oil &amp; Gas, energía, obra pública y manufactura.',
    'hero.cta1': 'Solicitar asesoría',
    'hero.cta2': 'Ver servicios',

    // ── Stats ────────────────────────────────────────────────
    'idx.stat1.lbl': 'Años de Trayectoria',
    'idx.stat2.lbl': 'Proyectos',
    'idx.stat3.lbl': 'certificaciones ',

    // ── Certs ────────────────────────────────────────────────
    'auth.eyebrow': 'Certificaciones',
    'idx.cert.tit': 'Estándares nacionales de operación.',
    'idx.cert.q': 'Sistema de Gestión de Calidad',
    'idx.cert.e': 'Gestión Ambiental',
    'idx.cert.s': 'Salud y Seguridad Ocupacional',

    // ── Impacto Analítico ────────────────────────────────────
    'idx.scale.b': 'Experiencia que respalda cada proyecto.',
    'idx.scale.tit': 'Más de 15 años trabajando en proyectos industriales, comerciales y de infraestructura.',
    'idx.scale.p': 'Lo que hemos construido:',
    'idx.s1.num': '350+',
    'idx.s1.tit': 'Proyectos realizados',
    'idx.s1.p': 'Construcción integral de plantas de manufactura, complejos industriales, y redes estructurales críticas.',
    'idx.s2.num': '15+ años',
    'idx.s2.lbl': 'Experiencia en construcción',
    'idx.s3.num': 'Cobertura nacional',
    'idx.s3.lbl': 'Proyectos en distintas regiones del país',
    'idx.s4.num': 'Especialización',
    'idx.stat.proj': 'Proyectos',
    'idx.s4.tit': 'Estructuras, obra civil y soluciones industriales',
    'idx.s4.p': 'Diseño y ejecución bajo los más altos estándares de la industria.',

    // ── Por qué Proatam ──────────────────────────────────────
    'idx.why.eyebrow': 'Por qué Proatam',
    'idx.why.tit': 'Ejecución con compromiso.',
    'idx.why.sub': 'La ingeniería moderna no permite tolerancia al error. Nuestros protocolos operativos están diseñados para resguardar la inversión, garantizar la seguridad e impulsar el resultado estructural.',
    'idx.why.tagline': 'Ingeniería de alta precisión para desafíos críticos.',
    'idx.why.1t': 'Despliegue Responsivo',
    'idx.why.1p': 'Capacidad operativa e insumos listos para despliegue rápido. Escalamos recursos humanos y materiales frente a necesidades críticas de cronograma o contingencias.',
    'idx.why.2t': 'Calidad con Tolerancia Cero',
    'idx.why.2p': 'No utilizamos subcontratistas genéricos. Inspeccionamos soldadura, cimentación y conductos con métodos avanzados y validación certificada de terceros.',
    'idx.why.3t': 'Responsabilidad de Ciclo de Vida',
    'idx.why.3p': 'Garantizamos vicios ocultos y ejecución material mediante contratos formales. Otorgamos continuidad de soporte operativo asegurando rentabilidad post-entrega.',

    // ── Catálogo Operativo ───────────────────────────────────
    'idx.cc.b': 'Catálogo Operativo',
    'idx.cc.tit': 'Capacidades Centrales.',
    'idx.cc.sub': 'Infraestructura estratégica, mantenimiento especializado y soluciones llave en mano. Explore nuestras divisiones principales soportadas por un equipo de alto rendimiento.',
    'idx.cc.btn': 'Ver todos los servicios',
    'idx.c1.t': 'Tubería de Proceso Compleja',
    'idx.c1.p': 'Instalación y mantenimiento riguroso de líneas y manifold en alta presión para el sector de hidrocarburos e industrial especializado.',
    'idx.c2.t': 'Acero Estructural',
    'idx.c2.p': 'Fabricación de cimentaciones monumentales y naves con estructuras prefabricadas.',
    'idx.c3.t': 'Redes de Alta Tensión',
    'idx.c3.p': 'Subestaciones de gran escala, calibración de transformadores y blindaje industrial de red eléctrica.',
    'idx.c4.t': 'Adquisición Industrial',
    'idx.cta.tit': 'Comienza una evaluación interactiva.',
    'idx.cta.p': 'Comparte requerimientos críticos a través de nuestro portal y nuestro equipo atenderá tu caso en menos de 24 horas.',

    // ── Contacto (Home) ──────────────────────────────────────
    'idx.contact.eyebrow': 'Inicia un Proyecto',
    'idx.contact.tit': 'Hablemos de tu proyecto.',
    'idx.contact.sub': 'Envía tus especificaciones. Nuestro equipo revisará los requerimientos y te contactará en menos de 24 horas.',
    'idx.contact.name': 'Nombre completo',
    'idx.contact.email': 'Correo electrónico',
    'idx.contact.phone': 'Teléfono',
    'idx.contact.company': 'Empresa / Organización',
    'idx.contact.msg': 'Descripción del proyecto o consulta',
    'idx.contact.btn': 'Enviar Solicitud',
    'idx.contact.privacy': 'Tu información es confidencial y nunca será compartida con terceros.',
    'idx.contact.loc': 'Sede',
    'idx.contact.phn': 'Llamada directa',
    'idx.contact.eml': 'Correo',
    'idx.contact.placeholder.company': 'Nombre de la empresa',
    'idx.contact.placeholder.email': 'juan@empresa.com',
    'idx.contact.placeholder.msg': 'Especifique metraje, presiones, ubicaciones e hitos de entrega',

    // ── Info Strip ───────────────────────────────────────────
    'idx.info.hours': 'Horario de atención',
    'idx.info.hours.val': 'Lunes a Viernes: 8:00 AM – 6:00 PM',
    'idx.info.phone': 'Teléfono',
    'idx.info.email': 'Correo',
    'idx.info.address': 'Dirección',
    'idx.info.address.val': 'Ing. Villarreal 327, Reynosa, Tamps.',
    'idx.info.address.full': 'Ing. Villarreal 327, Reynosa, 88780<br />Reynosa, Tamps., México',

    // ── Footer ───────────────────────────────────────────────
    'idx.foot.cpy': '© 2026 Proatam. Todos los Derechos Reservados.',
    'idx.footer.bio': 'Ingeniería industrial de precisión, desarrollo de infraestructura crítica y mantenimiento especializado para sectores de alta exigencia operativa y tolerancia cero a fallos.',
    'idx.footer.nav_title': 'Corporativo',
    'idx.footer.norms_title': 'Normatividad',
    'idx.footer.contact_title': 'Contacto Central',

    // ── Servicios ────────────────────────────────────────────
    'srv.page.title': 'Catálogo de Soluciones',
    'srv.page.sub': 'Servicios especializados de ingeniería entregados con estricta atención al detalle, cumplimiento normativo e integridad estructural.',
    'srv.tag': 'ingeniería industrial',
    'srv.c1.title': 'Ingeniería y Construcción',
    'srv.c1.text': 'Desarrollo de proyectos industriales y civiles llave en mano, aplicando estándares nacionales para garantizar calidad, seguridad y eficiencia en cada obra.',
    'srv.c1.l1': 'Procesos llave en mano completos (EPC)',
    'srv.c1.l2': 'Modelado BIM y diseño estructural avanzado',
    'srv.c1.l3': 'Garantías de cumplimiento en cronogramas',
    'srv.c2.title': 'Obra Pública Estratégica',
    'srv.c2.text': 'Ejecución de proyectos de infraestructura clave, optimizando recursos y cumpliendo con las normativas vigentes a nivel gubernamental.',
    'srv.c2.l1': 'Vialidades y cimentación urbana de gran escala',
    'srv.c2.l2': 'Saneamiento y rehabilitación estructural municipal',
    'srv.c2.l3': 'Gestión de auditorías gubernamentales impecable',
    'srv.c3.title': 'Servicios Especializados',
    'srv.c3.text': 'Soluciones avanzadas en recubrimientos anticorrosivos, soplado de líneas, y separación de fluidos para el sector de Oil &amp; Gas e industria pesada.',
    'srv.c3.l1': 'Blindaje epóxico y control de corrosión severa',
    'srv.c3.l2': 'Pruebas hidrostáticas y purgado presurizado',
    'srv.c3.l3': 'Hot-tapping en líneas operativas',
    'srv.c4.title': 'Suministro Industrial',
    'srv.c4.text': 'Gestión de refacciones con acceso a una red global de manufactura certificada, reduciendo la fricción logística en sus plantas.',
    'srv.c4.l1': 'Tubería de grado especial (Stainless, Alloy)',
    'srv.c4.l2': 'Válvulas críticas y actuadores automatizados',
    'srv.c4.l3': 'Equipos rotatorios de importación directa',
    'srv.c5.title': 'Sistemas de Drenaje',
    'srv.c5.text': 'Rehabilitación y construcción de redes de alcantarillado sanitario e industrial operando bajo volúmenes extraordinarios.',
    'srv.c5.l1': 'Zanjas profundas con entibación certificada',
    'srv.c5.l2': 'Líneas de conducción de alta densidad (PEAD / PVC)',
    'srv.c5.l3': 'Cámaras colectoras blindadas contra químicos',
    'srv.cta.tit': '¿Listo para iniciar un proyecto?',
    'srv.cta.sub': 'Nuestro catálogo incluye más especialidades focalizadas. Converse directamente con nuestro equipo para analizar sus requerimientos.',
    'srv.cta.btn': 'Solicitar Evaluación',
    'srv.cta.tag': 'siguiente paso',
    'srv.stats.div': 'Divisiones Operativas',
    'srv.stats.proj': 'Proyectos Entregados',
    'srv.stats.resp': 'Tiempo de Respuesta',
    'srv.stats.iso': 'Certs ISO',

    // ── Nosotros ─────────────────────────────────────────────
    'abt.page.title': 'Sobre Nosotros',
    'abt.page.sub': 'Excelencia y ejecución comprometida para cada desafío estructural.',
    'abt.hero.eyebrow': 'Proatam',
    'abt.hero.sub': 'Construcción y mantenimiento con enfoque especializado de alta exigencia.',
    'abt.badge': 'Nuestra identidad',
    'abt.p1': 'Somos una empresa constructora dinámica, conformada por profesionales altamente capacitados y comprometidos con la ejecución eficiente, segura y profesional de cada proyecto.',
    'abt.p2': 'Nuestra prioridad es cumplir rigurosamente con los estándares de calidad, tiempo y presupuesto, aportando soluciones integrales para cada obra.',
    'abt.p3': 'Cada proyecto se ejecuta bajo estrictas normativas nacionales, garantizando un proceso profesional desde la planificación hasta la entrega final.',
    'abt.stat1.lbl': 'Años',
    'abt.stat2.lbl': 'Proyectos',
    'abt.stat3.lbl': 'Certs ISO',
    'abt.quote': '\"No solo construimos obras. Construimos confianza a través del compromiso, el conocimiento especializado y la mejora continua.\"',
    'abt.director.name': 'Jose Luis Garza — Director General',
    'abt.mission.title': 'Misión',
    'abt.vision.title': 'Visión',
    'abt.mission.text': 'Ser reconocidos como la empresa líder en soluciones integrales de construcción y mantenimiento para el sector energético en México, destacando por nuestra excelencia, innovación, compromiso con la seguridad y respeto al medio ambiente.',
    'abt.vision.text': 'Brindar servicios especializados de construcción y mantenimiento para la industria petrolera, garantizando seguridad, calidad, eficiencia operativa y cumplimiento normativo, generando valor sostenible para nuestros clientes, comunidades y colaboradores.',
    'abt.principles.tit': 'Nuestros Valores.',
    'abt.v1.t': 'Seguridad',
    'abt.v1.p': 'Prioridad absoluta en todas nuestras operaciones, garantizando la integridad de nuestro personal y activos.',
    'abt.v1.l1': 'Cero Accidentes',
    'abt.v1.l2': 'Protocolos Estrictos',
    'abt.v2.t': 'Calidad',
    'abt.v2.p': 'Entregamos resultados con precisión, durabilidad y los más altos estándares de la industria.',
    'abt.v2.l1': 'Precisión Operativa',
    'abt.v2.l2': 'Materiales Certificados',
    'abt.v3.t': 'Compromiso',
    'abt.v3.p': 'Cumplimos con determinación ante nuestros clientes, nuestra gente y la industria nacional.',
    'abt.v3.l1': 'Enfoque al Cliente',
    'abt.v3.l2': 'Resultados Reales',
    'abt.v4.t': 'Sustentabilidad',
    'abt.v4.p': 'Operamos con responsabilidad ambiental y social, protegiendo el entorno de nuestras obras.',
    'abt.v4.l1': 'Cuidado Ambiental',
    'abt.v4.l2': 'Impacto Social Positivo',
    'abt.v5.t': 'Innovación',
    'abt.v5.p': 'Buscamos continuamente mejores soluciones y tecnologías para optimizar cada proceso constructivo.',
    'abt.v5.l1': 'Mejora Continua',
    'abt.v5.l2': 'Tecnología de Punta',
    'abt.v6.t': 'Integridad',
    'abt.v6.p': 'Actuamos con ética, transparencia y respeto en todas nuestras relaciones comerciales y humanas.',
    'abt.v6.l1': 'Ética Profesional',
    'abt.v6.l2': 'Transparencia Total',
    'abt.cta.tit': '¿Listo para iniciar tu proyecto?',
    'abt.cta.sub': 'Nuestro equipo revisará tus requerimientos y te contactará en menos de 24 horas hábiles.',
    'abt.cta.btn': 'Contactar al Departamento de Ingeniería',
    'abt.cta.tag': 'inicia hoy',

    // ── FAQ ──────────────────────────────────────────────────
    'faq.page.title': 'Preguntas Frecuentes',
    'faq.page.sub': 'Detalles concisos respecto a nuestras certificaciones, capacidades e implementaciones operativas.',
    'faq.tag': 'Soporte & Consultas',
    'faq.q1': '¿Están certificados para trabajar en proyectos de hidrocarburos?',
    'faq.a1': 'Sí, contamos con certificaciones: ISO 45001: 2018, ISO 14001: 2015 e ISO 9001: 2015.',
    'faq.q2': '¿En qué regiones trabajan?',
    'faq.a2': 'Tenemos base en Reynosa, Tamaulipas, pero ofrecemos servicio en todo México.',
    'faq.q3': '¿Pueden desarrollar obras llave en mano?',
    'faq.a3': 'Sí, tenemos la capacidad operativa y humana para ejecutar proyectos de principio a fin.',
    'faq.q4': '¿Qué experiencia tienen con entidades gubernamentales?',
    'faq.a4': 'Hemos realizado auditorías y trabajos para obras estatales, cumpliendo todos los requisitos normativos.',
    'faq.q5': '¿Cómo solicito una cotización?',
    'faq.a5': 'Puede llamarnos al número proporcionado o enviar su solicitud por correo desde nuestro formulario de contacto.',
    'faq.q6': '¿Cuántos años de experiencia tienen en el sector de construcción?',
    'faq.a6': 'Más de 15 años de servicio.',
    'faq.q7': '¿Cuentan con equipo propio (maquinaria, tecnología) o subcontratan servicios?',
    'faq.a7': 'Contamos con una combinación estratégica de equipo propio y servicios subcontratados, lo que nos permite adaptarnos a las necesidades de cada proyecto de manera eficiente, segura y rentable.',
    'faq.q8': '¿Tienen capacidad para escalar recursos si el proyecto requiere acelerarse?',
    'faq.a8': 'Sí, contamos con la capacidad operativa y administrativa para escalar recursos humanos, materiales y de equipo en caso de que el proyecto requiera acelerar su ejecución por cambios en el programa, necesidades del cliente o eventos imprevistos.',
    'faq.q9': '¿Están al día con licencias, seguros (RC, accidentes laborales) y permisos?',
    'faq.a9': 'Sí, estamos plenamente al día y en cumplimiento con todas las licencias, permisos y seguros obligatorios para la ejecución de obras de construcción, tanto en el sector público como privado. Nuestra documentación está siempre disponible para revisión cuando el cliente o la autoridad lo requiera.',
    'faq.q10': '¿Cómo garantizan el cumplimiento de normas ambientales y de seguridad laboral (OSHA, STPS, etc.)?',
    'faq.a10': 'Garantizamos el cumplimiento normativo mediante la implementación de un sistema integral de gestión en seguridad, salud en el trabajo y medio ambiente, que incluye: Identificación y cumplimiento normativo, Capacitación continua, Supervisión y protocolos en sitio, Gestión ambiental responsable, Planes de emergencia y simulacros, Equipos y condiciones seguras, y Cultura de prevención y mejora continua.',
    'faq.q11': '¿Qué protocolos usan para garantizar calidad en materiales y procesos?',
    'faq.a11': 'A través de protocolos de supervisión y control que aseguren que lo ejecutado cumple con planos, especificaciones y normativas aplicables.',
    'faq.q12': '¿Cómo manejan retrasos por clima, permisos o falta de materiales?',
    'faq.a12': 'Control y programación de suministros, comunicación constante y toma de decisiones rápida, registro y documentación formal, y reprogramación y mitigación de impactos.',
    'faq.q13': '¿Tienen políticas de sostenibilidad (manejo de residuos, eficiencia energética)?',
    'faq.a13': 'Sí, nuestra empresa cuenta con políticas de sostenibilidad enfocadas en reducir el impacto ambiental de nuestras operaciones y promover una construcción responsable. Estas políticas abarcan el manejo integral de residuos de construcción (RCD) y el cumplimiento normativo con mejora continua.',
    'faq.q14': '¿Ofrecen garantía por defectos de construcción? ¿Por cuánto tiempo?',
    'faq.a14': 'Sí, ofrecemos garantía por defectos de construcción conforme a lo establecido en la legislación vigente y las condiciones contractuales. Nuestra garantía cubre tanto defectos visibles como ocultos atribuibles a fallas en la ejecución, materiales o mano de obra.',
    'faq.q15': '¿Cómo manejan mantenimiento post-entrega o reparaciones?',
    'faq.a15': 'Una vez concluida y entregada la obra, ofrecemos servicios de atención postventa para asegurar la satisfacción del cliente y el correcto funcionamiento de lo construido. Nuestro procedimiento incluye: Atención a reportes post-entrega, Evaluación y programación, Ejecución de trabajos correctivos o de mantenimiento, Cierre y validación del servicio, y Compromiso de respuesta oportuna.',
    'faq.cta.tit': '¿Tienes alguna otra consulta?',
    'faq.cta.btn': 'Contactar al Departamento de Ingeniería',
    'faq.unclear.tit': '¿No encuentras lo que buscas?',
    'faq.unclear.sub': 'Contacta directamente',
    'faq.cta.tag': 'siguiente paso',
    'faq.cta.p': 'Habla directamente con nuestro equipo. Respuesta en menos de 24 horas.',

    // ── Contacto (página) ────────────────────────────────────
    'cnt.badge': 'Evaluación de Proyectos',
    'cnt.page.title': 'Contacto',
    'cnt.title': 'Contáctenos.',
    'cnt.sub': 'Envíe sus especificaciones. Nuestro equipo revisará los requerimientos y agendará una sesión de consultoría.',
    'cnt.lbl.loc': 'Oficina Central',
    'cnt.lbl.phn': 'Línea Directa',
    'cnt.lbl.eml': 'Correo Operativo',
    'cnt.lbl.hours': 'Horario de Atención',
    'cnt.hours.val': 'Lun – Vie: 8:00 AM – 6:00 PM',
    'cnt.frm.title': 'Especificaciones del Proyecto',
    'cnt.frm.name': 'Nombre',
    'cnt.frm.last': 'Apellidos',
    'cnt.frm.eml': 'Correo Electrónico',
    'cnt.frm.phn': 'Teléfono (opcional)',
    'cnt.frm.cmp': 'Empresa / Organización',
    'cnt.frm.desc': 'Alcance del proyecto o comentarios',
    'cnt.frm.btn': 'Enviar Solicitud',
    'cnt.frm.privacy': 'Tu información es confidencial y no será compartida con terceros.',
    'cnt.frm.sub': 'Complete el formulario y nuestro equipo lo contactará en menos de 24 hrs.',
    'cnt.placeholder.name': 'Nombre...',
    'cnt.placeholder.last': 'Apellidos...',
    'cnt.placeholder.email': 'correo@empresa.com',
    'cnt.placeholder.phone': '(899) 823-5611',
    'cnt.placeholder.company': 'Nombre de la organización',
    'cnt.placeholder.msg': 'Describa el alcance, metrajes, condiciones y plazos esperados...',

    // ── Global / Shared ──────────────────────────────────────
    'form.required': 'Este campo es requerido',
    'form.loading': 'Enviando...',
    'form.sent': '¡Mensaje enviado!',
    'form.error': 'Error — Intenta de nuevo',
    'modal.title': '¡Mensaje recibido!',
    'modal.sub': 'Hemos recibido tu solicitud correctamente.<br/>Nuestro equipo se pondrá en contacto contigo en menos de 24 horas hábiles.',
    'modal.immediate': '¿Necesitas atención inmediata?',
    'modal.ok': 'Entendido',
    'shared.next': 'Siguiente paso',
    'shared.start_today': 'Inicia hoy',
  },

  en: {
    // ── Nav ─────────────────────────────────────────────────
    'nav.inicio': 'Home',
    'nav.nosotros': 'About Us',
    'nav.servicios': 'Services',
    'nav.faq': 'FAQ',
    'nav.contacto': 'Contact',
    'nav.cta': 'Request Assessment',
    'idx.page.title': 'Industrial Engineering & Construction',

    // ── Hero ─────────────────────────────────────────────────
    'hero.badge': 'Reynosa, Tamaulipas — Northeast Mexico',
    'hero.h1': 'Engineering,<br/>Construction &amp;<br/>Maintenance.',
    'hero.sub': 'Specialized engineering services, industrial construction and maintenance for Oil &amp; Gas, energy, public works and manufacturing sectors.',
    'hero.cta1': 'Request advice',
    'hero.cta2': 'View services',

    // ── Stats ────────────────────────────────────────────────
    'idx.stat1.lbl': 'Years of Experience',
    'idx.stat2.lbl': 'Projects Executed',
    'idx.stat3.lbl': 'ISO Certifications',

    // ── Certs ────────────────────────────────────────────────
    'auth.eyebrow': 'Certifications',
    'idx.cert.tit': 'International operational standards.',
    'idx.cert.q': 'Quality Management System',
    'idx.cert.e': 'Environmental Management',
    'idx.cert.s': 'Occupational Health and Safety',

    // ── Impacto Analítico ────────────────────────────────────
    'idx.scale.b': 'Experience backing every project.',
    'idx.scale.tit': 'Over 15 years working on industrial, commercial and infrastructure projects.',
    'idx.scale.p': 'What we have built:',
    'idx.s1.num': '350+',
    'idx.s1.tit': 'Projects completed',
    'idx.s1.p': 'Comprehensive construction of manufacturing plants, industrial complexes, and critical structural networks.',
    'idx.s2.num': '15+ years',
    'idx.s2.lbl': 'Construction experience',
    'idx.s3.num': 'National coverage',
    'idx.s3.lbl': 'Projects in different regions of the country',
    'idx.s4.num': 'Specialization',
    'idx.stat.proj': 'Projects Executed',
    'idx.s4.tit': 'Structures, civil works and industrial solutions',
    'idx.s4.p': 'Design and execution under the highest standards of the industry.',

    // ── Por qué Proatam ──────────────────────────────────────
    'idx.why.eyebrow': 'Why Proatam',
    'idx.why.tit': 'Execution with compromise.',
    'idx.why.sub': 'Modern engineering allows no tolerance for error. Our operational protocols are designed to protect investment, guarantee safety and drive structural results.',
    'idx.why.tagline': 'High-precision engineering for critical challenges.',
    'idx.why.1t': 'Responsive Deployment',
    'idx.why.1p': 'Operational capacity and supplies ready for rapid deployment. We scale human and material resources against critical schedule needs or contingencies.',
    'idx.why.2t': 'Zero Tolerance Quality',
    'idx.why.2p': 'We do not use generic subcontractors. We inspect welding, foundations and conduits with advanced methods and certified third-party validation.',
    'idx.why.3t': 'Lifecycle Responsibility',
    'idx.why.3p': 'We guarantee hidden defects and material execution through formal contracts. We provide operational support continuity ensuring post-delivery profitability.',

    // ── Catálogo Operativo ───────────────────────────────────
    'idx.cc.b': 'Operational Catalog',
    'idx.cc.tit': 'Core Capabilities.',
    'idx.cc.sub': 'Strategic infrastructure, specialized maintenance and turnkey solutions. Explore our main divisions supported by a high-performance team.',
    'idx.cc.btn': 'View all services',
    'idx.c1.t': 'Complex Process Piping',
    'idx.c1.p': 'Rigorous installation and maintenance of high-pressure lines and manifolds for the hydrocarbon and specialized industrial sector.',
    'idx.c2.t': 'Structural Steel',
    'idx.c2.p': 'Fabrication of monumental foundations and warehouses with prefabricated structures.',
    'idx.c3.t': 'High Voltage Networks',
    'idx.c3.p': 'Large-scale substations, transformer calibration and industrial power grid shielding.',
    'idx.c4.t': 'Industrial Procurement',
    'idx.cta.tit': 'Start an interactive evaluation.',
    'idx.cta.p': 'Share critical requirements through our portal and our team will attend to your case in less than 24 hours.',

    // ── Contacto (Home) ──────────────────────────────────────
    'idx.contact.eyebrow': 'Start a Project',
    'idx.contact.tit': "Let's talk about your project.",
    'idx.contact.sub': 'Submit your specifications. Our team will review the requirements and contact you within 24 hours.',
    'idx.contact.name': 'Full name',
    'idx.contact.email': 'Email address',
    'idx.contact.phone': 'Phone number',
    'idx.contact.company': 'Company / Organization',
    'idx.contact.msg': 'Project description or inquiry',
    'idx.contact.btn': 'Send Request',
    'idx.contact.privacy': 'Your information is confidential and will never be shared with third parties.',
    'idx.contact.loc': 'Headquarters',
    'idx.contact.phn': 'Direct Line',
    'idx.contact.eml': 'Email',
    'idx.contact.placeholder.company': 'Company Name',
    'idx.contact.placeholder.email': 'john@company.com',
    'idx.contact.placeholder.msg': 'Specify footage, pressures, locations and delivery milestones',

    // ── Info Strip ───────────────────────────────────────────
    'idx.info.hours': 'Business hours',
    'idx.info.hours.val': 'Monday to Friday: 8:00 AM – 6:00 PM',
    'idx.info.phone': 'Phone',
    'idx.info.email': 'Email',
    'idx.info.address': 'Address',
    'idx.info.address.val': 'Ing. Villarreal 327, Reynosa, Tamps.',
    'idx.info.address.full': 'Ing. Villarreal 327, Reynosa, 88780<br />Reynosa, Tamps., Mexico',

    // ── Footer ───────────────────────────────────────────────
    'idx.foot.cpy': '© 2026 Proatam. All Rights Reserved.',
    'idx.footer.bio': 'Precision industrial engineering, development of critical infrastructure and specialized maintenance for sectors with high operational demand and zero tolerance for failure.',
    'idx.footer.nav_title': 'Corporate',
    'idx.footer.norms_title': 'Regulatory Compliance',
    'idx.footer.contact_title': 'Central Contact',

    // ── Servicios ────────────────────────────────────────────
    'srv.page.title': 'Solutions Catalog',
    'srv.page.sub': 'Specialized engineering services delivered with strict attention to detail, regulatory compliance and structural integrity.',
    'srv.tag': 'industrial engineering',
    'srv.c1.title': 'Engineering and Construction',
    'srv.c1.text': 'Turnkey industrial and civil project development, applying international standards to ensure quality, safety and efficiency in every work.',
    'srv.c1.l1': 'Full turnkey processes (EPC)',
    'srv.c1.l2': 'BIM modeling and advanced structural design',
    'srv.c1.l3': 'Guarantees of schedule compliance',
    'srv.c2.title': 'Strategic Public Works',
    'srv.c2.text': 'Execution of key infrastructure projects, optimizing resources and complying with current government regulations.',
    'srv.c2.l1': 'High-scale urban roads and foundations',
    'srv.c2.l2': 'Sanitation and municipal structural rehabilitation',
    'srv.c2.l3': 'Flawless government audit management',
    'srv.c3.title': 'Specialized Services',
    'srv.c3.text': 'Advanced solutions in anti-corrosive coatings, line blowing, and fluid separation for the Oil &amp; Gas and heavy industry sector.',
    'srv.c3.l1': 'Epoxy shielding and severe corrosion control',
    'srv.c3.l2': 'Hydrostatic testing and pressurized purging',
    'srv.c3.l3': 'Hot-tapping in operational lines',
    'srv.c4.title': 'Industrial Supply',
    'srv.c4.text': 'Management of spare parts with access to a global network of certified manufacturing, reducing logistical friction in your plants.',
    'srv.c4.l1': 'Special grade piping (Stainless, Alloy)',
    'srv.c4.l2': 'Critical valves and automated actuators',
    'srv.c4.l3': 'Directly imported rotating equipment',
    'srv.c5.title': 'Drainage Systems',
    'srv.c5.text': 'Rehabilitation and construction of sanitary and industrial sewer networks operating under extraordinary volumes.',
    'srv.c5.l1': 'Deep trenches with certified shoring',
    'srv.c5.l2': 'High-density conduction lines (HDPE / PVC)',
    'srv.c5.l3': 'Chemical-shielded collection chambers',
    'srv.cta.tit': 'Ready to start a project?',
    'srv.cta.sub': 'Our catalog includes more focused specialties. Speak directly with our team to analyze your requirements.',
    'srv.cta.btn': 'Request Evaluation',
    'srv.cta.tag': 'next step',
    'srv.stats.div': 'Operational Divisions',
    'srv.stats.proj': 'Completed Projects',
    'srv.stats.resp': 'Response Time',
    'srv.stats.iso': 'ISO Certs',

    // ── Nosotros ─────────────────────────────────────────────
    'abt.page.title': 'About Us',
    'abt.page.sub': 'Excellence and committed execution for every structural challenge.',
    'abt.hero.eyebrow': 'Proatam',
    'abt.hero.sub': 'Construction and maintenance with a high-demand specialized focus.',
    'abt.badge': 'Our identity',
    'abt.p1': 'We are a dynamic construction company, made up of highly trained professionals committed to the efficient, safe and professional execution of every project.',
    'abt.p2': 'Our priority is to strictly comply with quality, time and budget standards, providing comprehensive solutions for every work.',
    'abt.p3': 'Every project is executed under strict national and international regulations, guaranteeing a professional process from planning to final delivery.',
    'abt.stat1.lbl': 'Years',
    'abt.stat2.lbl': 'Projects',
    'abt.stat3.lbl': 'ISO Certs',
    'abt.quote': "\"We don't just build works. We build trust through commitment, specialized knowledge and continuous improvement.\"",
    'abt.director.name': 'Jose Luis Garza — CEO',
    'abt.mission.title': 'Mission',
    'abt.vision.title': 'Vision',
    'abt.mission.text': 'To be recognized as the leading company in integral construction and maintenance solutions for the energy sector in Mexico, standing out for our excellence, innovation, commitment to safety and respect for the environment.',
    'abt.vision.text': 'Provide specialized construction and maintenance services for the oil industry, guaranteeing safety, quality, operational efficiency and regulatory compliance, generating sustainable value for our clients, communities and collaborators.',
    'abt.principles.tit': 'Our Values.',
    'abt.v1.t': 'Safety',
    'abt.v1.p': 'Absolute priority in all our operations, guaranteeing the integrity of our personnel and assets.',
    'abt.v1.l1': 'Zero Accidents',
    'abt.v1.l2': 'Strict Protocols',
    'abt.v2.t': 'Quality',
    'abt.v2.p': 'We deliver results with precision, durability and the highest industry standards.',
    'abt.v2.l1': 'Operational Precision',
    'abt.v2.l2': 'Certified Materials',
    'abt.v3.t': 'Commitment',
    'abt.v3.p': 'We deliver with determination for our clients, our people and the national industry.',
    'abt.v3.l1': 'Client Focus',
    'abt.v3.l2': 'Real Results',
    'abt.v4.t': 'Sustainability',
    'abt.v4.p': 'We operate with environmental and social responsibility, protecting the surroundings of our works.',
    'abt.v4.l1': 'Environmental Care',
    'abt.v4.l2': 'Positive Social Impact',
    'abt.v5.t': 'Innovation',
    'abt.v5.p': 'We continuously seek better solutions and technologies to optimize every construction process.',
    'abt.v5.l1': 'Continuous Improvement',
    'abt.v5.l2': 'Cutting-Edge Tech',
    'abt.v6.t': 'Integrity',
    'abt.v6.p': 'We act with ethics, transparency and respect in all our business and human relationships.',
    'abt.v6.l1': 'Professional Ethics',
    'abt.v6.l2': 'Total Transparency',
    'abt.cta.tit': 'Ready to start your project?',
    'abt.cta.sub': 'Our team will review your requirements and contact you in less than 24 business hours.',
    'abt.cta.btn': 'Contact the Engineering Department',
    'abt.cta.tag': 'start today',

    // ── FAQ ──────────────────────────────────────────────────
    'faq.page.title': 'Frequently Asked Questions',
    'faq.page.sub': 'Clear, concise details regarding our certifications, capabilities and operational protocols.',
    'faq.tag': 'Support & Inquiries',
    'faq.q1': 'Are you certified to work on hydrocarbon projects?',
    'faq.a1': 'Yes, we hold certifications: ISO 45001: 2018, ISO 14001: 2015 and ISO 9001: 2015.',
    'faq.q2': 'In what regions do you operate?',
    'faq.a2': 'Our base is in Reynosa, Tamaulipas, but we offer services throughout Mexico.',
    'faq.q3': 'Can you develop turnkey projects?',
    'faq.a3': 'Yes, we have the operational and human capacity to execute projects from start to finish.',
    'faq.q4': 'What experience do you have with government entities?',
    'faq.a4': 'We have performed audits and works for state projects, complying with all regulatory requirements.',
    'faq.q5': 'How do I request a quote?',
    'faq.a5': 'You can call us at the provided number or send your request by email from our contact form.',
    'faq.q6': 'How many years of experience do you have in the construction sector?',
    'faq.a6': 'More than 15 years of service.',
    'faq.q7': 'Do you have your own equipment (machinery, technology) or do you subcontract services?',
    'faq.a7': 'We have a strategic combination of own equipment and subcontracted services, which allows us to adapt to the needs of each project efficiently, safely and profitably.',
    'faq.q8': 'Do you have capacity to scale resources if the project requires acceleration?',
    'faq.a8': 'Yes, we have the operational and administrative capacity to scale human, material and equipment resources if the project requires accelerating its execution due to schedule changes, client needs or unforeseen events.',
    'faq.q9': 'Are you up to date with licenses, insurance (GL, work accidents) and permits?',
    'faq.a9': 'Yes, we are fully up to date and in compliance with all licenses, permits and mandatory insurance for the execution of construction works, both public and private. Our documentation is always available for review when the client or authority requires it.',
    'faq.q10': 'How do you guarantee compliance with environmental and occupational safety standards (OSHA, STPS, etc.)?',
    'faq.a10': 'We guarantee regulatory compliance through the implementation of an integral management system in safety, occupational health and environment, which includes: Regulatory identification and compliance, Continuous training, On-site supervision and protocols, Responsible environmental management, Emergency plans and drills, Safe equipment and conditions, and a Culture of prevention and continuous improvement.',
    'faq.q11': 'What protocols do you use to guarantee quality in materials and processes?',
    'faq.a11': 'Through supervision and control protocols that ensure that what is executed complies with plans, specifications and applicable regulations.',
    'faq.q12': 'How do you handle delays due to weather, permits or lack of materials?',
    'faq.a12': 'Supply control and scheduling, constant communication and fast decision-making, formal record-keeping and documentation, and proactive rescheduling and impact mitigation.',
    'faq.q13': 'Do you have sustainability policies (waste management, energy efficiency)?',
    'faq.a13': 'Yes, our company has sustainability policies focused on reducing the environmental impact of our operations and promoting responsible construction. These policies apply during all project stages and cover comprehensive construction waste management (RCD) and regulatory compliance with continuous improvement.',
    'faq.q14': 'Do you offer a warranty for construction defects? For how long?',
    'faq.a14': 'Yes, we offer a warranty for construction defects in accordance with current legislation and contractual conditions. Our warranty covers both visible and hidden defects attributable to failures in execution, materials or workmanship.',
    'faq.q15': 'How do you handle post-delivery maintenance or repairs?',
    'faq.a15': 'Once the work is completed and delivered, we offer after-sales services to ensure customer satisfaction and correct functioning of what was built. Our procedure includes: Response to post-delivery reports, Evaluation and scheduling, Execution of corrective or maintenance work, Service closure and validation, and Commitment to timely response.',
    'faq.cta.tit': 'Have more questions?',
    'faq.cta.btn': 'Contact Our Engineering Department',
    'faq.unclear.tit': "Can't find what you're looking for?",
    'faq.unclear.sub': 'Contact us directly',
    'faq.cta.tag': 'next step',
    'faq.cta.p': 'Speak directly with our team. Response in less than 24 hours.',

    // ── Contacto (página) ────────────────────────────────────
    'cnt.badge': 'Project Assessment',
    'cnt.page.title': 'Contact',
    'cnt.title': 'Contact Us.',
    'cnt.sub': 'Submit your specifications. Our team will review your requirements and schedule a consulting session.',
    'cnt.lbl.loc': 'Corporate Office',
    'cnt.lbl.phn': 'Direct Line',
    'cnt.lbl.eml': 'Business Email',
    'cnt.lbl.hours': 'Business Hours',
    'cnt.hours.val': 'Mon – Fri: 8:00 AM – 6:00 PM',
    'cnt.frm.title': 'Project Specifications',
    'cnt.frm.name': 'First Name',
    'cnt.frm.last': 'Last Name',
    'cnt.frm.eml': 'Email Address',
    'cnt.frm.phn': 'Phone Number (optional)',
    'cnt.frm.cmp': 'Company / Organization',
    'cnt.frm.desc': 'Project scope or comments',
    'cnt.frm.btn': 'Submit Inquiry',
    'cnt.frm.privacy': 'Your information is confidential and will never be shared with third parties.',
    'cnt.frm.sub': 'Complete the form and our team will contact you in less than 24 hours.',
    'cnt.placeholder.name': 'First Name...',
    'cnt.placeholder.last': 'Last Name...',
    'cnt.placeholder.email': 'john@company.com',
    'cnt.placeholder.phone': '+1 (XXX) XXX-XXXX',
    'cnt.placeholder.company': 'Organization Name',
    'cnt.placeholder.msg': 'Describe scope, footage, conditions and expected milestones...',

    // ── Global / Shared ──────────────────────────────────────
    'form.required': 'This field is required',
    'form.loading': 'Sending...',
    'form.sent': 'Message sent!',
    'form.error': 'Error — Try again',
    'modal.title': 'Message received!',
    'modal.sub': 'We have successfully received your request.<br/>Our team will contact you in less than 24 business hours.',
    'modal.immediate': 'Need immediate attention?',
    'modal.ok': 'Got it',
    'shared.next': 'Next step',
    'shared.start_today': 'Start today',
  },
};

// ─── State ───────────────────────────────────────────────────
let currentLang = localStorage.getItem('proatam-lang') || 'es';

// ─── Core lookup (ALWAYS flat key lookup) ────────────────────
function getValue(lang, key) {
  return translations[lang]?.[key] ?? null;
}

// ─── Apply all translations to current DOM ───────────────────
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];          // ← FLAT lookup, never nested!

    if (value !== undefined && value !== null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  document.documentElement.lang = lang;

  // ─── Update document title ──────────────────────────────────
  const path = window.location.pathname;
  let titleKey = 'idx.page.title'; // Default

  if (path.includes('nosotros')) titleKey = 'abt.page.title';
  else if (path.includes('servicios')) titleKey = 'srv.page.title';
  else if (path.includes('faq')) titleKey = 'faq.page.title';
  else if (path.includes('contacto')) titleKey = 'cnt.page.title';

  const pageTitle = dict[titleKey] || dict['idx.page.title'];
  if (pageTitle) {
    document.title = `${pageTitle} | Proatam`;
  }
}

// ─── Update active state on ES/EN buttons ────────────────────
function updateLangBtns(lang) {
  document.querySelectorAll('button[data-lang]').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

// ─── Public: init (call AFTER navbar is injected) ────────────
export function initI18n() {
  applyTranslations(currentLang);
  updateLangBtns(currentLang);

  // Event delegation on document so it works even if navbar is re-injected
  document.addEventListener('click', e => {
    const btn = e.target.closest('button[data-lang]');
    if (!btn) return;

    const lang = btn.dataset.lang;
    if (!lang || lang === currentLang) return;

    currentLang = lang;
    localStorage.setItem('proatam-lang', lang);
    applyTranslations(lang);
    updateLangBtns(lang);
  });
}

// ─── Public: t() — inline translation helper ─────────────────
export function t(key) {
  return getValue(currentLang, key) ?? getValue('es', key) ?? key;
}

// ─── Public: getCurrentLang ──────────────────────────────────
export function getCurrentLang() {
  return currentLang;
}
