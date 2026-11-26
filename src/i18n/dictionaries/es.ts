import type { Dictionary } from './pl';

/** Textos en español. Misma estructura que pl.ts. */
export const es: Dictionary = {
  meta: {
    siteName: 'Olena Vagner — financiación e inmuebles',
    defaultDescription:
      'Ayuda con la hipoteca y la compra de vivienda en Polonia. Poznań y alrededores, también a distancia. Consultas en polaco y ucraniano.',
  },

  nav: {
    skip: 'Ir al contenido',
    services: 'Servicios',
    process: 'Cómo trabajo',
    about: 'Sobre mí',
    blog: 'Blog',
    faq: 'Preguntas',
    contact: 'Contacto',
    cta: 'Pedir una consulta',
    ctaShort: 'Pedir consulta',
    tagline: 'Financiación e inmuebles',
    menu: 'Menú',
    close: 'Cerrar menú',
    language: 'Elegir idioma',
    languageSoon: 'próximamente',
  },

  common: {
    learnMore: 'Más información',
    readArticle: 'Leer artículo',
    allServices: 'Todos los servicios',
    location: 'Poznań y alrededores · también a distancia',
    consultationLanguages: 'Consultas en polaco y ucraniano',
    placeholderTitle: 'Pendiente',
    breadcrumbHome: 'Inicio',
    onThisPage: 'En esta página',
    soon: 'Próximamente',
    minutes: 'min de lectura',
    prototypeBanner:
      'Versión de trabajo del sitio. Los fragmentos resaltados están pendientes de completar y todavía no son datos reales.',
    example: 'Ejemplo',
    placeholderHint: 'Pendiente',
  },

  footer: {
    about:
      'Te acompaño en la financiación y la compra de una vivienda en Polonia: con calma, paso a paso y con explicaciones claras.',
    navTitle: 'Sitio',
    servicesTitle: 'Servicios',
    contactTitle: 'Contacto',
    legalTitle: 'Información',
    rights: 'Todos los derechos reservados.',
    disclaimer:
      'La información de este sitio es general y no constituye asesoramiento jurídico ni fiscal, ni una oferta de crédito. La decisión sobre el préstamo la toma el banco.',
  },

  services: {
    mortgage: {
      title: 'Préstamos hipotecarios',
      short:
        'Te explico cómo funciona el proceso del préstamo y te ayudo a preparar la conversación con el banco o con un intermediario de crédito.',
    },
    purchase: {
      title: 'Acompañamiento en la compra',
      short:
        'Te ayudo a entender las etapas de la compra y a organizar los trámites, también si ya has encontrado el piso.',
    },
    language: {
      title: 'Apoyo lingüístico y organizativo',
      short:
        'Te ayudo con llamadas, reuniones y correspondencia cuando comunicarte en polaco resulta difícil.',
    },
    search: {
      title: 'Ayuda para encontrar vivienda',
      short:
        'Te ayudo a definir criterios, revisar ofertas y organizar el contacto con el vendedor o su agente.',
    },
  },

  home: {
    seo: {
      title: 'Hipoteca y compra de piso en Polonia — Olena Vagner, Poznań',
      description:
        'Te ayudo a entender la hipoteca y la compra de una vivienda en Polonia. Con calma y paso a paso. Poznań y alrededores, también a distancia.',
    },
    hero: {
      eyebrow: 'Financiación e inmuebles en Polonia',
      title: 'Hipoteca y compra de piso en Polonia, con calma y paso a paso.',
      lead:
        'Te ayudo a entender el proceso, preparar la conversación con el banco y organizar los trámites de la compra. Sin prisas y con explicaciones claras.',
      ctaPrimary: 'Pedir una consulta',
      ctaSecondary: 'Ver mis servicios',
      cardRole: 'Créditos y finanzas · inmuebles',
      cardLanguages: 'En polaco · En ucraniano',
    },
    audience: {
      title: 'En qué te puedo ayudar',
      lead: 'Cada situación es distinta. Lo más habitual es empezar por una de estas.',
      items: [
        {
          title: 'Estás pensando en una hipoteca',
          text: 'Quieres saber por dónde empezar, qué documentos pueden hacer falta y qué preguntar al banco.',
        },
        {
          title: 'Ya tienes un piso en mente',
          text: 'Has encontrado la oferta, pero no sabes qué viene después ni en qué orden.',
        },
        {
          title: 'El polaco te cuesta',
          text: 'Hablar con la agencia, el vendedor o el banco es difícil cuando cada detalle importa.',
        },
        {
          title: 'Aún estás buscando',
          text: 'Necesitas ayuda para definir criterios y ordenar la búsqueda.',
        },
      ],
    },
    servicesBlock: {
      title: 'Servicios',
      lead: 'Cuatro áreas en las que puedo ayudarte. El alcance siempre lo acordamos antes de empezar.',
    },
    principles: {
      title: 'Cómo trabajo',
      items: [
        {
          title: 'Con claridad',
          text: 'Explico los trámites en lenguaje sencillo. Todas las preguntas son bienvenidas, también las «obvias».',
        },
        {
          title: 'Con transparencia',
          text: 'Antes de empezar te digo en qué papel actúo, quién representa a quién y cuánto cuesta.',
        },
        {
          title: 'Con honestidad',
          text: 'No prometo la decisión del banco ni el tipo de interés más bajo. Te ayudo a prepararte bien.',
        },
        {
          title: 'Con calma',
          text: 'Una gran decisión financiera necesita tiempo. Seguimos un plan, sin presión.',
        },
      ],
    },
    process: {
      title: 'Cómo es la colaboración',
      lead: 'Cuatro pasos sencillos. Los detalles dependen del servicio y de cada operación.',
      cta: 'Más sobre la colaboración',
    },
    about: {
      title: 'Un poco sobre mí',
      text:
        'Me llamo Olena Vagner. Trabajo en Poznań y ayudo a personas que quieren comprar una vivienda en Polonia, especialmente a quienes no tienen el polaco como lengua materna.',
      textPlaceholder: '[[Breve resumen de experiencia y trayectoria — lo completará Olena]]',
      cta: 'Conóceme mejor',
    },
    blog: {
      title: 'Del blog',
      cta: 'Todos los artículos',
    },
    faq: {
      title: 'Preguntas frecuentes',
      cta: 'Todas las preguntas',
    },
    contact: {
      title: 'Cuéntame tu situación',
      lead: 'Rellena un formulario breve. Te responderé y te propondré cómo empezar.',
    },
  },

  steps: [
    { title: 'Me escribes', text: 'Por el formulario, por email o por WhatsApp. Bastan unas frases sobre tu situación.' },
    { title: 'Hablamos del objetivo', text: 'Vemos qué quieres conseguir, en qué punto estás y qué necesitas.' },
    { title: 'Acordamos las condiciones', text: 'Alcance del servicio, papel de cada parte, precio y condiciones. Todo antes de empezar.' },
    { title: 'Seguimos el plan', text: 'Damos los pasos acordados. Sabes qué está pasando y qué viene después.' },
  ],

  servicesPage: {
    seo: {
      title: 'Servicios — hipoteca, compra y búsqueda de vivienda | Olena Vagner',
      description:
        'Ayuda con la hipoteca, la compra de vivienda, apoyo lingüístico y búsqueda de piso. Poznań y toda Polonia a distancia.',
    },
    title: 'Servicios',
    lead:
      'Te ayudo en distintas etapas: desde las primeras preguntas sobre el préstamo, pasando por la búsqueda de piso, hasta la organización de la compra. Puedes elegir un servicio o combinar varios.',
    boundariesTitle: 'Lo que no hago',
    boundaries: [
      'No doy asesoramiento jurídico ni reviso legalmente contratos o la situación jurídica del inmueble. Te ayudo a encontrar al especialista adecuado.',
      'No sustituyo al notario, al abogado ni al asesor fiscal.',
      'No prometo la concesión del préstamo. La decisión la toma siempre el banco.',
    ],
  },

  mortgage: {
    seo: {
      title: 'Hipoteca en Polonia — consulta y preparación, Poznań | Olena Vagner',
      description:
        'Consulta sobre préstamos en Poznań y a distancia: te explico las etapas de la hipoteca y te ayudo a preparar la reunión con el banco.',
    },
    lead:
      'La hipoteca suele ser la mayor decisión financiera de la vida. Te ayudo a entender el proceso y a preparar bien la conversación con el banco o con un intermediario de crédito.',
    helpTitle: 'En qué te ayudo',
    help: [
      'Primera consulta: hablamos de tu situación y tu objetivo.',
      'Te explico las etapas del préstamo, desde la solicitud hasta el desembolso.',
      'Te ayudo a preparar las preguntas y los documentos para el banco.',
      'Te explico los términos de las ofertas: RRSO (equivalente a la TAE), margen, aportación propia, seguros.',
      'Te ayudo a comparar ofertas según los criterios que te importan.',
    ],
    roleTitle: 'En qué papel actúo',
    role:
      '[[Descripción de la situación profesional: por ejemplo, colaboración con un intermediario de crédito o actividad propia — pendiente de confirmar. De ello depende si puedo intermediar en la solicitud del préstamo y cómo.]]',
    notTitle: 'Importante',
    not: [
      'No garantizo la concesión del préstamo ni un tipo de interés concreto.',
      'No afirmo tener acceso a las ofertas de todos los bancos.',
      'En la primera fase no pido copias de documentos ni datos financieros detallados.',
    ],
    forWhomTitle: 'Para quién',
    forWhom: [
      'Personas que compran su primera vivienda.',
      'Extranjeros y personas de Ucrania que viven en Polonia.',
      'Quien quiere entender una oferta antes de decidir.',
    ],
  },

  purchase: {
    seo: {
      title: 'Ayuda para comprar un piso en Polonia | Olena Vagner, Poznań',
      description:
        'Acompañamiento en la compra de un piso en Polonia: etapas explicadas, preparación de preguntas, coordinación de citas y comunicación con la agencia o el vendedor.',
    },
    lead:
      'Encontrar el piso es solo el principio. Te ayudo a entender los siguientes pasos, a organizar los trámites y a entenderte con todas las partes de la operación.',
    helpTitle: 'En qué te ayudo',
    help: [
      'Te explico las etapas de la compra: desde la reserva y el contrato preliminar hasta la escritura notarial.',
      'Te ayudo a comunicarte con la agencia inmobiliaria o el vendedor.',
      'Preparamos juntos las preguntas para visitas, negociaciones y firmas.',
      'Coordino las citas y me ocupo de que no se pase nada por alto.',
      'Te explico los pasos organizativos: qué, cuándo y dónde hay que tramitar.',
      'Te indico a qué especialista acudir para cada cuestión (notario, abogado, asesor fiscal).',
    ],
    foundTitle: '¿Ya has encontrado el piso?',
    found:
      'Es una situación frecuente. La oferta existe, pero surgen dudas sobre el contrato, los plazos y los trámites, y hablar en polaco cuesta. Podemos empezar justo en el punto en el que estás.',
    notTitle: 'Límites de mi papel',
    not: [
      'No soy abogada ni notaria y no hago revisiones jurídicas de contratos ni de inmuebles.',
      'La revisión jurídica debe hacerla un especialista habilitado. Te ayudo a encontrarlo y a preparar las preguntas.',
    ],
  },

  language: {
    seo: {
      title: 'Ayuda con el idioma al comprar un piso en Polonia | Olena Vagner',
      description:
        'Apoyo lingüístico y organizativo en la compra de vivienda: llamadas, reuniones, correspondencia y coordinación de contactos.',
    },
    lead:
      'Cuando la conversación es en otro idioma, es fácil que se escape algo. Te ayudo en el contacto con la agencia, el vendedor, el banco o el administrador, para que sepas de qué se habla y qué se ha acordado.',
    helpTitle: 'En qué te ayudo',
    help: [
      'Te acompaño en llamadas y reuniones.',
      'Te ayudo a formular preguntas y respuestas.',
      'Te explico el sentido general de la correspondencia y los documentos.',
      'Coordino el contacto con las partes de la operación.',
      'Te ayudo a organizar todo el proceso.',
    ],
    formatsTitle: 'Formas de colaboración',
    formatsLead: 'A elegir según lo que necesites. Te daré el precio tras una breve conversación.',
    formats: [
      { title: 'Ayuda por horas', text: 'Un asunto concreto: una llamada, un email, preparar preguntas.', price: '[[precio por acordar]]' },
      { title: 'Una reunión', text: 'Presencia en una visita, en la agencia o en el banco, con preparación previa.', price: '[[precio por acordar]]' },
      { title: 'Paquete de acompañamiento', text: 'Apoyo continuo desde la primera conversación hasta la firma.', price: '[[precio por acordar]]' },
    ],
    importantTitle: 'Una distinción importante',
    important:
      'El apoyo lingüístico no es traducción jurada, ni asesoramiento jurídico, ni intermediación crediticia. Si un documento requiere traductor jurado o una valoración jurídica, te lo diré y te ayudaré a encontrar al especialista.',
    languagesNote: 'Ofrezco este apoyo en polaco y en ucraniano.',
  },

  search: {
    seo: {
      title: 'Ayuda para encontrar piso en Poznań | Olena Vagner',
      description:
        'Ayuda para encontrar piso en Poznań y alrededores: criterios y presupuesto, preselección de ofertas, organización de visitas. Reglas claras y comisiones transparentes.',
    },
    lead:
      'Buscar piso lleva mucho tiempo, sobre todo si no conoces bien el mercado o el idioma. Te ayudo a ordenar la búsqueda y a organizar el contacto con los vendedores.',
    helpTitle: 'En qué te ayudo',
    help: [
      'Definir criterios y presupuesto.',
      'Preselección de ofertas.',
      'Organización de contactos y visitas.',
      'Contacto con el agente del vendedor u otro intermediario.',
      'Coordinación de todo el proceso de búsqueda.',
    ],
    rolesTitle: 'Quién representa a quién y quién paga la comisión',
    rolesLead:
      'En el mercado inmobiliario es fácil confundir los papeles. Por eso, antes de empezar, acordamos por escrito las respuestas a estas preguntas.',
    roles: [
      {
        q: '¿Quién representa al vendedor?',
        a: 'Normalmente el agente o la agencia inmobiliaria con la que el vendedor firmó un contrato. Actúa en interés del vendedor.',
      },
      {
        q: '¿Quién representa al comprador?',
        a: 'El comprador puede actuar por su cuenta o firmar un contrato con su propio intermediario. Es un contrato distinto, con condiciones distintas.',
      },
      {
        q: '¿En qué papel actúo yo?',
        a: '[[Pendiente de confirmar: modelo de colaboración y situación profesional (por ejemplo, colaboración con una agencia inmobiliaria). Lo describiré antes de empezar.]]',
      },
      {
        q: '¿Quién paga la comisión?',
        a: 'Depende de los contratos. Puede pagarla el vendedor, el comprador o ambos. Siempre te digo quién paga y cuánto antes de que firmes nada.',
      },
      {
        q: '¿Puede haber una comisión adicional?',
        a: 'Sí, es posible, por ejemplo si la agencia del vendedor también cobra al comprador. No prometo que no haya doble comisión. Prometo que conocerás todos los costes de antemano.',
      },
      {
        q: '¿Qué acordamos al empezar?',
        a: 'El alcance de la ayuda, la remuneración, quién la paga, los posibles costes adicionales y cómo actuar ante un conflicto de intereses.',
      },
    ],
    note:
      'No me presento como intermediaria inmobiliaria habilitada mientras no confirme los requisitos y el modelo de colaboración.',
  },

  processPage: {
    seo: {
      title: 'Cómo es la colaboración | Olena Vagner',
      description:
        'Cuatro pasos: tu mensaje, una conversación sobre el objetivo, acuerdo de condiciones y precio, y trabajo según el plan. Con transparencia y sin presión.',
    },
    title: 'Cómo es la colaboración',
    lead:
      'Empezamos con una conversación, no con un contrato. Antes de asumir ningún compromiso sabes quién es quién, cuánto cuesta y qué haré exactamente.',
    note: 'Los detalles dependen del servicio y de cada operación.',
    transparencyTitle: 'Lo que siempre acordamos al principio',
    transparency: [
      'El alcance del servicio: qué hago y qué no.',
      'El papel de cada parte: quién representa a quién.',
      'El precio y la forma de pago, incluido quién paga las comisiones.',
      'La forma de contacto y los plazos.',
    ],
    firstContactTitle: 'La primera conversación',
    firstContact: '[[Si la primera consulta es gratuita o de pago y cuánto dura — pendiente]]',
  },

  aboutPage: {
    seo: {
      title: 'Sobre mí — Olena Vagner | Poznań',
      description:
        'Olena Vagner: ayuda con la financiación y la compra de vivienda en Polonia. Poznań y alrededores.',
    },
    title: 'Sobre mí',
    intro:
      'Me llamo Olena Vagner. Ayudo a quienes quieren comprar una vivienda en Polonia a recorrer la financiación y los trámites con calma y entendiendo cada paso.',
    story: '[[Historia: por qué este trabajo, experiencia, formación — solo hechos reales, lo completará Olena]]',
    valuesTitle: 'Lo que me importa',
    values: [
      { title: 'Comprensión', text: 'Quiero que entiendas cada decisión que tomas.' },
      { title: 'Transparencia', text: 'Papeles claros, costes claros, sin letra pequeña.' },
      { title: 'Respeto por tu tiempo', text: 'Pasos concretos y comunicación clara.' },
      { title: 'Independencia', text: 'Es mi propia marca. No es la web de un banco ni de un intermediario.' },
    ],
    languagesTitle: 'Idiomas',
    languages: 'Hago las consultas en polaco y en ucraniano.',
  },

  faqPage: {
    seo: {
      title: 'Preguntas frecuentes — hipoteca y compra de piso | Olena Vagner',
      description:
        'Respuestas a preguntas frecuentes sobre la hipoteca, la compra de piso en Polonia, el apoyo lingüístico y las comisiones de los intermediarios.',
    },
    title: 'Preguntas frecuentes',
    lead: '¿No encuentras tu pregunta? Escríbeme.',
  },

  faq: [
    {
      q: '¿Me ayudarás a conseguir el préstamo?',
      a: 'Te ayudaré a entender el proceso y a preparar bien la conversación con el banco. La decisión la toma siempre el banco, así que no puedo garantizarla.',
      home: true,
    },
    {
      q: 'Ya he encontrado el piso. ¿Todavía puedes ayudarme?',
      a: 'Sí. Podemos empezar en la etapa en la que estás: desde las preguntas al vendedor y el contrato preliminar hasta la cita con el notario.',
      home: true,
    },
    {
      q: '¿En qué idiomas haces las consultas?',
      a: 'En polaco y en ucraniano.',
      home: true,
    },
    {
      q: '¿Cuánto cuesta la colaboración?',
      a: 'Depende del servicio y del alcance. El precio y las condiciones se acuerdan antes de empezar. [[Información sobre la primera consulta — pendiente]]',
      home: true,
    },
    {
      q: '¿Revisas los contratos desde el punto de vista jurídico?',
      a: 'No. No soy abogada. Puedo ayudarte a entender el sentido general del documento y a preparar preguntas; la revisión jurídica debe hacerla un abogado o un notario.',
      home: true,
    },
    {
      q: '¿Trabajas solo en Poznań?',
      a: 'Sobre todo en Poznań y alrededores, pero muchos asuntos se pueden resolver a distancia, también desde otras ciudades.',
      home: false,
    },
    {
      q: '¿Qué datos tengo que dar al principio?',
      a: 'Basta con una breve descripción de tu situación y tus datos de contacto. Al principio no pido copias de documentos ni datos financieros detallados.',
      home: false,
    },
    {
      q: '¿Quién paga la comisión del agente inmobiliario?',
      a: 'Depende de los contratos firmados por el vendedor y el comprador. Siempre lo explico antes de empezar.',
      home: false,
    },
  ],

  contactPage: {
    seo: {
      title: 'Contacto — pide una consulta | Olena Vagner, Poznań',
      description:
        'Pide una consulta sobre tu hipoteca o la compra de una vivienda. Formulario, email o WhatsApp. Poznań y a distancia.',
    },
    title: 'Contacto',
    lead: 'Escríbeme unas frases sobre tu situación. Te responderé y te propondré cómo empezar.',
    directTitle: 'Directamente',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    emailPlaceholder: '[[email pendiente]]',
    whatsappPlaceholder: '[[número de WhatsApp pendiente]]',
    areaTitle: 'Zona',
    area: 'Poznań y alrededores. Reuniones en línea desde toda Polonia.',
  },

  form: {
    title: 'Formulario de contacto',
    required: 'campo obligatorio',
    optional: 'opcional',
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    preferredLanguage: 'Idioma de contacto preferido',
    languageOptions: { pl: 'Polaco', uk: 'Ucraniano' },
    service: '¿Sobre qué es tu consulta?',
    serviceOptions: {
      mortgage: 'Préstamo hipotecario',
      purchase: 'Acompañamiento en la compra',
      language: 'Apoyo lingüístico y organizativo',
      search: 'Ayuda para encontrar vivienda',
      other: 'Otro / aún no lo sé',
    },
    city: 'Ciudad o región',
    message: 'Tu situación en pocas palabras',
    messageHint: 'Sin números de documentos ni datos financieros detallados.',
    contactMethod: 'Forma de contacto preferida',
    contactOptions: { email: 'Email', phone: 'Teléfono', whatsapp: 'WhatsApp' },
    propertyStatus: '¿Ya tienes un inmueble elegido?',
    propertyOptions: {
      found: 'Sí, ya lo he encontrado',
      searching: 'No, necesito ayuda para buscar',
      notYet: 'Todavía no he empezado a buscar',
    },
    agencyContact: '¿Ya estás en contacto con una agencia o con el vendedor?',
    agencyOptions: { yes: 'Sí', no: 'No', unsure: 'No lo sé' },
    select: 'Elige…',
    consent:
      'Acepto el tratamiento de mis datos para responder a mi consulta. Más información en la [política de privacidad].',
    privacyNote:
      'Responsable del tratamiento: [[datos del responsable pendientes]]. Los datos se usan solo para responder a tu consulta.',
    submit: 'Preparar el mensaje',
    errors: {
      summary: 'Revisa los campos marcados.',
      name: 'Escribe tu nombre.',
      email: 'Escribe un email válido.',
      phone: 'Escribe un teléfono válido o deja el campo vacío.',
      service: 'Elige el tema de tu consulta.',
      message: 'Escribe unas palabras sobre tu situación (al menos 10 caracteres).',
      phoneRequired: 'Indica un teléfono si prefieres llamada o WhatsApp.',
      consent: 'Marca la casilla de consentimiento para enviar la consulta.',
    },
    ready: {
      title: 'El mensaje está listo',
      text: 'Elige cómo enviarlo. Se abrirá tu aplicación con el texto preparado; solo tendrás que pulsar «Enviar».',
      email: 'Enviar por email',
      whatsapp: 'Enviar por WhatsApp',
      missingContact: 'Los datos de contacto están pendientes. Esta opción funcionará cuando se añadan.',
      edit: 'Volver al formulario',
    },
    messageTemplate: {
      greeting: 'Hola, te escribo desde la web.',
      subject: 'Consulta desde la web',
    },
  },

  blogPage: {
    seo: {
      title: 'Blog — hipoteca y compra de vivienda en Polonia | Olena Vagner',
      description:
        'Artículos prácticos sobre la hipoteca, la compra de piso en Polonia y la colaboración con intermediarios inmobiliarios.',
    },
    title: 'Blog',
    lead: 'Explicaciones prácticas, paso a paso. Sin jerga.',
    all: 'Todos',
    categories: {
      kredyt: 'Préstamo',
      zakup: 'Compra',
      posrednik: 'Intermediarios',
    },
    upcomingTitle: 'Próximamente en el blog',
    disclaimer:
      'Este artículo es informativo y no constituye asesoramiento jurídico, fiscal ni financiero.',
    related: 'Servicio relacionado',
    back: 'Volver al blog',
  },

  privacyPage: {
    seo: { title: 'Política de privacidad | Olena Vagner', description: 'Cómo se tratan los datos personales en el sitio de Olena Vagner.' },
    title: 'Política de privacidad',
    draftNote:
      'Plantilla pendiente de revisión jurídica. No es un documento definitivo. La versión vinculante es la polaca.',
    sections: [
      {
        h: 'Responsable del tratamiento',
        p: 'Responsable de los datos personales: [[nombre / denominación de la actividad, dirección, NIP — pendiente]]. Contacto sobre datos: [[email]].',
      },
      {
        h: 'Qué datos recogemos',
        p: 'Los datos del formulario: nombre, email, teléfono (opcional), ciudad o región y una breve descripción de la situación. No pedimos documentos ni datos financieros detallados.',
      },
      {
        h: 'Finalidad y base jurídica',
        p: 'Responder a la consulta y mantener contacto antes de un posible contrato (art. 6.1.b RGPD) y consentimiento (art. 6.1.a RGPD). [[Pendiente de revisión jurídica]]',
      },
      {
        h: 'Cuánto tiempo conservamos los datos',
        p: '[[Plazo de conservación — pendiente]]',
      },
      {
        h: 'Destinatarios',
        p: 'Proveedores técnicos: alojamiento web, correo electrónico, mensajería. [[Lista de proveedores pendiente de elegir las herramientas]]',
      },
      {
        h: 'Tus derechos',
        p: 'Tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición, y a retirar el consentimiento. También puedes reclamar ante la autoridad polaca de protección de datos (UODO).',
      },
    ],
  },

  cookiesPage: {
    seo: { title: 'Política de cookies | Olena Vagner', description: 'Información sobre las cookies del sitio de Olena Vagner.' },
    title: 'Política de cookies',
    draftNote: 'Plantilla pendiente de revisión. El contenido depende de las herramientas que se conecten.',
    sections: [
      {
        h: 'Situación actual',
        p: 'El sitio no usa por ahora cookies analíticas ni de marketing. Solo recordamos el idioma elegido en la memoria del navegador.',
      },
      {
        h: 'Si se conecta la analítica',
        p: 'Si se conecta Google Analytics 4 o una herramienta similar, el sitio mostrará un aviso de consentimiento y esta política se completará. [[Pendiente]]',
      },
    ],
  },

  legalPage: {
    seo: { title: 'Información legal | Olena Vagner', description: 'Datos de la actividad, situación profesional y colaboradores.' },
    title: 'Información legal',
    sections: [
      { h: 'Datos de la actividad', p: '[[Denominación, dirección, NIP, REGON — pendientes]]' },
      { h: 'Situación profesional', p: '[[Descripción de la situación profesional y habilitaciones — pendiente de consulta jurídica]]' },
      { h: 'Colaboradores', p: '[[Lista de colaboradores y tipo de colaboración — si procede]]' },
      {
        h: 'Carácter de la información',
        p: 'Los contenidos del sitio son generales e informativos. No constituyen asesoramiento jurídico ni fiscal, ni una oferta en sentido legal.',
      },
    ],
  },

  notFound: {
    title: 'Página no encontrada',
    text: 'Esta página no existe o se ha movido.',
    cta: 'Volver al inicio',
  },
};
