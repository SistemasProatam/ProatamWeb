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
    'hero.badge': 'Reynosa, Tamaulipas — México',
    'hero.h1': 'Ingeniería,<br/>Construcción y<br/>Mantenimiento.',
    'hero.sub': 'Servicios especializados de ingeniería, construcción industrial y mantenimiento para los sectores Petrolera y Gas, Construcción General Industrial y Obras Urbanas.',
    'hero.cta1': 'Solicitar asesoría',
    'hero.cta2': 'Ver servicios',

    // ── Stats ────────────────────────────────────────────────
    'idx.stat1.lbl': 'Años de Trayectoria',
    'idx.stat2.lbl': 'Proyectos',
    'idx.stat3.lbl': 'certificaciones ',

    // ── Certs ────────────────────────────────────────────────
    'auth.eyebrow': 'Certificaciones',
    'idx.cert.tit': 'Certificaciones de PROATAM SA DE CV — Estatus VIGENTE (Avalado por la IAF y la ema).',
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
    'idx.why.tagline': 'Estamos listos para impulsar tu próximo proyecto.',
    'idx.why.b1': 'Rigor Técnico',
    'idx.why.t1': 'Ingeniería Especializada',
    'idx.why.p1': 'Cumplimos con normativas estrictas en cada soldadura, medición y montaje.',
    'idx.why.b2': 'Capacidad Operativa',
    'idx.why.t2': 'Sistemas Críticos',
    'idx.why.p2': 'Intervenimos en plantas y sistemas sin interrumpir la cadena de producción.',
    'idx.why.b3': 'Innovación',
    'idx.why.t3': 'Metodologías Modernas',
    'idx.why.p3': 'Herramientas de última generación para trazabilidad y seguridad.',

    // ── Catálogo Operativo ───────────────────────────────────
    'idx.cc.b': 'Catálogo Operativo',
    'idx.cc.tit': 'Sectores de Especialidad.',
    'idx.cc.sub': 'Confía en nuestra experiencia técnica en mantenimiento, construcción e infraestructura estratégica para la industria y el gobierno.',
    'idx.cc.btn': 'Ver todos los servicios',
    'idx.c1.t': 'Sector Petrolero y Gas',
    'idx.c1.p': 'Infraestructura energética, procesos industriales y operación continua para instalaciones de alto riesgo.',
    'idx.c2.t': 'Construcción Industrial y Maquiladoras',
    'idx.c2.p': 'Desarrollo de naves industriales, líneas de producción y trabajos en plantas activas sin detener su operación.',
    'idx.c3.t': 'Obras Urbanas y Comerciales',
    'idx.c3.p': 'Proyectos de construcción, remodelación e infraestructura civil para entornos residenciales y comerciales.',
    'idx.c4.t': 'Mantenimiento a Sistemas Críticos',
    'idx.c4.p': 'Dominamos motocompresores, ignición y motores de arranque para industrias que no pueden detenerse.',
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
    'idx.foot.designed': 'Diseñado por Proatam369',
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
    'srv.c3.text': 'Soluciones avanzadas en recubrimientos anticorrosivos, soplado de líneas, y separación de fluidos para el sector de Gasoducto e industria pesada.',
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
    'abt.quote': '\"No solo construimos obras. Construimos confianza a través del compromiso, el conocimiento técnico y la mejora continua.\"',
    'abt.director.name': 'Jose Luis Garza — Director General',
    'abt.mission.title': 'Misión',
    'abt.vision.title': 'Visión',
    'abt.mission.text': 'Ser aliado de confianza de nuestros clientes y colaboradores en la ejecución de sus proyectos, brindando soluciones constructivas de calidad con responsabilidad y compromiso, garantizando su satisfacción en cada etapa del proceso.',
    'abt.vision.text': 'Consolidarnos como empresa constructora reconocida por su responsabilidad, cercanía y profesionalismo, ampliando presencia en el sector público y privado, con firme intención de crecer junto a nuestros clientes, enfrentar nuevos retos y generar oportunidades para nuestro equipo de trabajo.',
    'abt.principles.tit': 'Filosofía Institucional.',
    'abt.v1.t': 'Calidad',
    'abt.v1.p': 'Garantizamos el cumplimiento legal, seguridad y calidad en nuestros trabajos, con responsabilidad y eficiencia operativa, protegiendo a nuestros empleados, clientes, proveedores, contratistas y nuestra comunidad en general.',
    'abt.v2.t': 'Medio Ambiente',
    'abt.v2.p': 'Comprometidos a seguir principios de calidad, minimizando impactos ambientales para conseguir máxima seguridad, evaluando riesgos y realizando el seguimiento hacia los mismos.',
    'abt.v3.t': 'Seguridad',
    'abt.v3.p': 'Somos una organización donde todos nos involucramos y aplicamos la seguridad en el trabajo; garantizando la integridad física de los trabajadores y protección a las instalaciones con el cumplimiento legal.',
    
    // ── Sectores y Catálogo Técnico ──────────────────────────
    'sec.eyebrow': 'Sectores',
    'sec.title': 'Sectores de Especialidad',
    'sec.s1.title': 'Petrolera y Gas',
    'sec.s1.desc': 'Infraestructura energética, procesos industriales, operación continua.',
    'sec.s2.title': 'Construcción General Industrial y Maquiladoras',
    'sec.s2.desc': 'Naves, líneas de producción, plantas activas.',
    'sec.s3.title': 'Obras Urbanas, Residenciales y Comerciales',
    'sec.s3.desc': 'Desarrollos urbanos y edificaciones de alto estándar operativo.',
    'cat.eyebrow': 'Catálogo Técnico',
    'cat.title': 'Servicios Especializados PROATAM',
    'cat.sub': 'Ofrecemos servicios de construcción con un enfoque técnico, responsable y orientado en:',
    'cat.srv1': 'Fabricación de tanques',
    'cat.srv2': 'Industria',
    'cat.srv3': 'Hidrocarburos',
    'cat.srv4': 'Sandblasting y pintura',
    'cat.srv5': 'Gasoductos',
    'cat.srv6': 'Instrumentación',
    'cat.srv7': 'Supervisión y auditorías',
    'cat.srv8': 'Proyectos técnicos',
    'cat.srv9': 'Construcción',
    'cat.srv10': 'Lubricación de válvulas',
    'cat.srv11': 'Reparación de anomalías',
    'cat.srv12': 'Protección catódica',
    'cat.srv13': 'Renta de maquinaria',
    's1.title': 'Construcción y Obra Civil',
    's1.desc': 'Proyectos estructurales con precisión, resistencia y cumplimiento normativo integral.',
    's1.i1': 'Construcción',
    's1.i2': 'Proyectos técnicos',
    's2.title': 'Industria y Manufactura',
    's2.desc': 'Montaje e infraestructura diseñada para soportar operaciones industriales de alto rendimiento.',
    's2.i1': 'Industria',
    's2.i2': 'Fabricación de tanques',
    's3.title': 'Sector Hidrocarburos',
    's3.desc': 'Especialistas en instalaciones energéticas seguras, manejando entornos de alto riesgo.',
    's3.i1': 'Hidrocarburos',
    's4.title': 'Infraestructura de Gasoductos',
    's4.desc': 'Tendido, interconexión y aseguramiento de líneas de conducción para gas natural y derivados.',
    's4.i1': 'Gasoductos',
    's5.title': 'Tratamiento y Recubrimientos',
    's5.desc': 'Aplicación de sistemas de protección superficial para entornos severos y corrosivos.',
    's5.i1': 'Sandblasting y pintura',
    's6.title': 'Mantenimiento y Protección de Activos',
    's6.desc': 'Alargue la vida útil de su infraestructura y asegure la integridad de sus instalaciones.',
    's6.i1': 'Lubricación de válvulas',
    's6.i2': 'Reparación de anomalías',
    's6.i3': 'Protección catódica',
    's7.title': 'Supervisión, Instrumentación y Equipos',
    's7.desc': 'Control meticuloso, tecnología de medición y equipamiento para obra y mantenimiento.',
    's7.i1': 'Instrumentación',
    's7.i2': 'Supervisión y auditorías',
    's7.i3': 'Renta de maquinaria',
    'abt.cta.tit': '¿Listo para iniciar tu proyecto?',
    'abt.cta.sub': 'Nuestro equipo revisará tus requerimientos y te contactará en menos de 24 horas hábiles.',
    'abt.cta.btn': 'Contactar Ahora',
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
    'faq.cta.btn': 'Contactar Ahora',
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
    'hero.badge': 'Reynosa, Tamaulipas — Mexico',
    'hero.h1': 'Engineering,<br/>Construction &amp;<br/>Maintenance.',
    'hero.sub': 'Specialized engineering services, industrial construction and maintenance for the Oil & Gas, General Industrial Construction, and Urban Works sectors.',
    'hero.cta1': 'Request advice',
    'hero.cta2': 'View services',

    // ── Stats ────────────────────────────────────────────────
    'idx.stat1.lbl': 'Years of Experience',
    'idx.stat2.lbl': 'Projects Executed',
    'idx.stat3.lbl': 'ISO Certifications',

    // ── Certs ────────────────────────────────────────────────
    'auth.eyebrow': 'Certifications',
    'idx.cert.tit': 'Certifications — PROATAM SA DE CV (CURRENT Status, backed by the IAF and the ema).',
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
    'idx.why.tagline': 'We are ready to drive your next project.',
    'idx.why.1t': 'Technical Rigor',
    'idx.why.1p': 'We comply with strict regulations in every weld, measurement, and assembly.',
    'idx.why.2t': 'Critical Systems',
    'idx.why.2p': 'We intervene in plants and systems without interrupting the production chain.',
    'idx.why.3t': 'Modern Methodologies',
    'idx.why.3p': 'State-of-the-art tools for traceability and safety.',

    // ── Catálogo Operativo ───────────────────────────────────
    'idx.cc.b': 'Operational Catalog',
    'idx.cc.tit': 'Specialty Sectors.',
    'idx.cc.sub': 'Trust our technical experience in maintenance, construction, and strategic infrastructure for industry and government.',
    'idx.cc.btn': 'View all services',
    'idx.c1.t': 'Oil and Gas Sector',
    'idx.c1.p': 'Energy infrastructure, industrial processes, and continuous operation for high-risk facilities.',
    'idx.c2.t': 'Industrial & Manufacturing Construction',
    'idx.c2.p': 'Development of industrial warehouses, production lines, and work in active plants without halting operations.',
    'idx.c3.t': 'Urban and Commercial Works',
    'idx.c3.p': 'Construction projects, remodeling, and civil infrastructure for residential and commercial environments.',
    'idx.c4.t': 'Critical Systems Maintenance',
    'idx.c4.p': 'We master motor compressors, ignition, and starter motors for industries that cannot afford downtime.',
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
    'idx.foot.designed': 'Designed by Proatam369',
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
    'srv.c3.text': 'Advanced solutions in anti-corrosive coatings, line blowing, and fluid separation for the Oil & Gas and heavy industry sector.',
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
    'abt.p2': 'Our priority: to meet quality, time, and cost standards, providing comprehensive solutions for every work.',
    'abt.p3': 'Every project is executed under strict national and international regulations, guaranteeing a professional process from planning to final delivery.',
    'abt.stat1.lbl': 'Years',
    'abt.stat2.lbl': 'Projects',
    'abt.stat3.lbl': 'ISO Certs',
    'abt.quote': '\"We don\'t just build works. We build trust through commitment, technical knowledge, and continuous improvement.\"',
    'abt.director.name': 'Jose Luis Garza — CEO',
    'abt.mission.title': 'Mission',
    'abt.vision.title': 'Vision',
    'abt.mission.text': 'To be a trusted ally for our clients and collaborators in the execution of their projects, providing quality construction solutions with responsibility and commitment, guaranteeing their satisfaction at every stage of the process.',
    'abt.vision.text': 'To consolidate ourselves as a construction company recognized for its responsibility, proximity, and professionalism, expanding our presence in both the public and private sectors, with the firm intention of growing alongside our clients, facing new challenges, and generating opportunities for our team.',
    'abt.principles.tit': 'Institutional Philosophy.',
    'abt.v1.t': 'Quality',
    'abt.v1.p': 'We guarantee legal compliance, safety, and quality in our works, with responsibility and operational efficiency, protecting our employees, clients, suppliers, contractors, and our community in general.',
    'abt.v2.t': 'Environment',
    'abt.v2.p': 'Committed to following quality principles, minimizing environmental impacts to achieve maximum safety, assessing risks, and following up on them.',
    'abt.v3.t': 'Safety',
    'abt.v3.p': 'We are an organization where everyone is involved and applies safety at work; guaranteeing the physical integrity of workers and protection of facilities with legal compliance.',
    
    // ── Sectores y Catálogo Técnico ──────────────────────────
    'sec.eyebrow': 'Sectors',
    'sec.title': 'Specialty Sectors',
    'sec.s1.title': 'Oil & Gas',
    'sec.s1.desc': 'Energy infrastructure, industrial processes, continuous operation.',
    'sec.s2.title': 'General Industrial Construction & Maquiladoras',
    'sec.s2.desc': 'Warehouses, production lines, active plants.',
    'sec.s3.title': 'Urban, Residential, and Commercial Works',
    'sec.s3.desc': 'High standard urban developments and buildings.',
    'cat.eyebrow': 'Technical Catalog',
    'cat.title': 'PROATAM Specialized Services',
    'cat.sub': 'We offer construction services with a technical, responsible, and oriented focus in:',
    'cat.srv1': 'Tank Fabrication',
    'cat.srv2': 'Industry',
    'cat.srv3': 'Hydrocarbons',
    'cat.srv4': 'Sandblasting & Painting',
    'cat.srv5': 'Pipelines',
    'cat.srv6': 'Instrumentation',
    'cat.srv7': 'Supervision & Auditing',
    'cat.srv8': 'Technical Projects',
    'cat.srv9': 'Construction',
    'cat.srv10': 'Valve Lubrication',
    'cat.srv11': 'Anomaly Repair',
    'cat.srv12': 'Cathodic Protection',
    'cat.srv13': 'Machinery Rental',
    's1.title': 'Construction & Civil Engineering',
    's1.desc': 'Structural projects with precision, resistance, and comprehensive regulatory compliance.',
    's1.i1': 'Construction',
    's1.i2': 'Technical Projects',
    's2.title': 'Industry & Manufacturing',
    's2.desc': 'Assembly and infrastructure designed to withstand high-performance industrial operations.',
    's2.i1': 'Industry',
    's2.i2': 'Tank Fabrication',
    's3.title': 'Hydrocarbons Sector',
    's3.desc': 'Specialists in safe energy installations, managing high-risk environments.',
    's3.i1': 'Hydrocarbons',
    's4.title': 'Pipeline Infrastructure',
    's4.desc': 'Laying, interconnection, and securing of conduction lines for natural gas and derivatives.',
    's4.i1': 'Pipelines',
    's5.title': 'Treatment & Coatings',
    's5.desc': 'Application of surface protection systems for severe and corrosive environments.',
    's5.i1': 'Sandblasting & Painting',
    's6.title': 'Maintenance & Asset Protection',
    's6.desc': 'Extend the lifespan of your infrastructure and ensure the integrity of your facilities.',
    's6.i1': 'Valve Lubrication',
    's6.i2': 'Anomaly Repair',
    's6.i3': 'Cathodic Protection',
    's7.title': 'Supervision, Instrumentation & Equipment',
    's7.desc': 'Meticulous control, measurement technology, and equipment for construction and maintenance.',
    's7.i1': 'Instrumentation',
    's7.i2': 'Supervision & Auditing',
    's7.i3': 'Machinery Rental',
    'abt.cta.tit': 'Ready to start your project?',
    'abt.cta.sub': 'Our team will review your requirements and contact you in less than 24 business hours.',
    'abt.cta.btn': 'Contact Now',
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
    'faq.cta.btn': 'Contact Now',
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
