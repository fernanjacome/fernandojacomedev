/** Canonical professional content. Sources and editorial rules: docs/CONTENT.md. */
export const profile = {
  name: "Fernando Jácome",
  handle: "@fernanjacome",
  fullName: "Fernando Jácome Véliz",
  role: "Full Stack Software Engineer | C# / .NET | React | SQL Server",
  specialty: "Fintech & ATM Systems",
  location: "Guayaquil, Ecuador",
  email: "fernanjacome0sb@gmail.com",
  url: "https://fernandojacome.dev",
  linkedin:
    "https://www.linkedin.com/in/fernando-j%C3%A1come-v%C3%A9liz-408b7a281/",
  github: "https://github.com/fernanjacome",
  description:
    "Ingeniero de software en Guayaquil. Desarrollo full stack con C#/.NET, React y SQL Server para plataformas bancarias, sistemas ATM y aplicaciones web.",
  introduction:
    "Trabajo en el desarrollo y modernización de aplicaciones empresariales, principalmente para el sector financiero. También desarrollo proyectos web independientes.",
  tags: ["FullStack", "DotNet", "React", "SQLServer", "FinTech"],
};

export const academicProject = {
  id: "odin",
  published: { iso: "2025-08-17", label: "17 ago. 2025" },
  logo: "/logos/odin.webp",
  media: [
    {
      src: "/projects/odin-cajeros.webp",
      alt: "Dashboard ODIN: estado y efectivo de una red de cajeros simulados",
      caption: "Monitoreo de cajeros · entorno simulado",
    },
    {
      src: "/projects/odin-estimacion.webp",
      alt: "ODIN: estimación de efectivo disponible por cajero",
      caption: "Estimación de efectivo",
    },
  ],
  number: "01",
  category: "Proyecto de titulación · Simulación ATM",
  name: "ODIN",
  summary: "Monitoreo y predicción de efectivo en cajeros automáticos.",
  problem:
    "Analizar el estado de las gavetas de efectivo y anticipar su evolución en una red de cajeros simulados.",
  description:
    "Proyecto de titulación que combina monitoreo en tiempo real, análisis de datos y predicción del estado de gavetas de efectivo.",
  contribution:
    "Desarrollo de la plataforma de monitoreo y análisis aplicada a una red ATM simulada.",
  details: [
    "Monitoreo operacional de cajeros simulados.",
    "Análisis del estado de las gavetas de efectivo.",
    "Enfoque predictivo aplicado a la disponibilidad de efectivo.",
  ],
  stack: ["React", "TypeScript", ".NET 8", "SQL Server", "SignalR"],
  visual: ["Red simulada", "Análisis", "Predicción"],
  kind: "banking",
  note: "Proyecto de titulación · red de cajeros simulados.",
};

export const eventPosts = [
  {
    id: "esis-2026",
    name: "ESIS 2026",
    aspectRatio: "4 / 3",
    published: { iso: "2026-04-27", label: "27 abr. 2026" },
    description: "Estuve con el equipo de Alexsoft S.A. en el stand de Extreme Software durante ESIS, el encuentro organizado por BANRED junto con ATEFI.",
    context: "Uno de los temas fue cómo conectar distintas redes de pago. Un ejemplo concreto fue Wip, que permite hacer transferencias con el número de celular.",
    media: [
      {
        src: "/posts/esis-1.webp",
        alt: "Tres integrantes del equipo posan en el stand de Extreme Software en ESIS 2026",
        caption: "El equipo en ESIS 2026",
      },
      {
        src: "/posts/esis-3.webp",
        alt: "Asistentes conversan frente al stand de Extreme Software",
        caption: "Conversaciones en el stand",
      },
      {
        src: "/posts/esis-4.webp",
        alt: "Asistentes observan la pantalla de exhibición del stand de ESIS 2026",
        caption: "Pantalla de exhibición",
      },
      {
        src: "/posts/esis-2.webp",
        alt: "Tres integrantes del equipo junto al mostrador, la pantalla y el cajero de exhibición",
        caption: "Stand y cajero de exhibición",
      },
    ],
  },
  {
    id: "clab-2026",
    name: "CLAB 2026",
    aspectRatio: "1280 / 853",
    published: { iso: "2026-10-14", label: "14 oct. 2026" },
    description: "Con el equipo de Alexsoft S.A. en Quito para CLAB 2026. Alexsoft participa como auspiciante del congreso de tecnología financiera.",
    context: "En el stand mostramos nuestras soluciones, con un cajero de exhibición, y conversamos con profesionales del sector financiero de la región.",
    media: [
      {
        src: "/posts/clab-1.webp",
        alt: "Cuatro integrantes del equipo en el stand de Alexsoft y Extreme Software en CLAB 2026",
        caption: "El equipo en CLAB 2026",
      },
      {
        src: "/posts/clab-2.webp",
        alt: "Tres integrantes del equipo posan junto al cajero del stand de CLAB 2026",
        caption: "Equipo y cajero de exhibición",
      },
    ],
  },
];

export const projects = [
  {
    id: "hermanoscourier",
    logo: "/logos/courier-pf.webp",
    media: [
      {
        src: "/projects/courier-panel.webp",
        alt: "Panel de paquetes de Hermanos Courier en escritorio y móvil",
        caption: "Panel de paquetes · datos de demostración",
      },
      {
        src: "/projects/courier-acceso.webp",
        alt: "Acceso al sistema de Hermanos Courier en portátil y móvil",
        caption: "Acceso en escritorio y móvil",
      },
      {
        src: "/projects/courier-login.webp",
        alt: "Pantalla de inicio de sesión del sistema Hermanos Courier",
        caption: "Inicio de sesión",
      },
      {
        src: "/projects/courier-finanzas.webp",
        alt: "Módulo de finanzas de Hermanos Courier en una tablet",
        caption: "Finanzas en tablet · datos de demostración",
      },
      {
        src: "/projects/courier-cotizacion.webp",
        alt: "Formulario de cotización de Hermanos Courier",
        caption: "Cotizador de envíos",
      },
    ],
    number: "02",
    category: "Logística · Aplicación web",
    name: "Hermanos Courier",
    summary: "Gestión logística y seguimiento de paquetes.",
    problem:
      "Centralizar la recepción de mercancía y los estados de los paquetes, con trazabilidad para el negocio y consulta para sus clientes.",
    description:
      "Sistema de administración web para una empresa ecuatoriana de importación y gestión de paquetes. Centraliza paquetes, estados, movimientos financieros y usuarios.",
    contribution:
      "Análisis de requerimientos, diseño de interfaz, modelado de datos, desarrollo frontend, integración con Supabase y despliegue.",
    details: [
      "Recepción, paquetes, estados y etiquetas con códigos de barras y QR.",
      "Portal público de seguimiento mediante códigos.",
      "Roles, permisos, funciones RPC y políticas de seguridad.",
      "Interfaz responsiva y adaptación para Android.",
    ],
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Capacitor",
      "PWA",
    ],
    visual: ["Paquetes", "Operaciones", "Finanzas"],
    kind: "logistics",
    link: profile.linkedin,
    linkLabel: "Ver actividad en LinkedIn",
    note: "Proyecto presentado en mi actividad de LinkedIn.",
  },
  {
    id: "plataformas-atm",
    logo: "/logos/eva.webp",
    media: [
      {
        src: "/projects/eva-pantallas.webp",
        alt: "EVA Studio con editor HTML y vista previa de una pantalla ATM",
        caption: "Editor de pantallas · demo CLAB",
      },
      {
        src: "/projects/eva-editor.webp",
        alt: "Explorador y editor XML de EVA Studio",
        caption: "Explorador XML · demo CLAB",
      },
      {
        src: "/projects/eva-comparador.webp",
        alt: "EVA Studio 2026 comparando dos versiones de un XML de ejemplo",
        caption: "Comparador XML · archivos de demostración",
      },
    ],
    number: "04",
    category: "Fintech · Sistemas bancarios",
    name: "EVA Studio 2026",
    summary: "Herramientas de desarrollo para sistemas ATM.",
    problem:
      "Integrar aplicaciones y servicios para administrar terminales bancarias y observar su operación.",
    description:
      "Aplicación de escritorio para editar y comparar XML, trabajar con pantallas y compilar recursos EVA. Forma parte de mi trabajo en herramientas e integraciones bancarias.",
    contribution:
      "Desarrollo de la herramienta con Electron y React, edición de recursos, comparación de archivos y módulos para el trabajo con EVA.",
    details: [
      "Edición de XML y pantallas con previsualización.",
      "Comparación de archivos y compilación de recursos.",
      "Módulos de flujos, logs y conexión remota.",
    ],
    stack: ["Electron", "React", "Vite", "CodeMirror", "XML"],
    visual: ["Terminales", "Servicios", "Monitoreo"],
    kind: "banking",
    link: profile.linkedin,
    linkLabel: "Ver experiencia en LinkedIn",
    note: "Experiencia profesional en Alexsoft · EVA, Echelon y Extreme Web.",
  },
  {
    id: "condor-energy",
    logo: "/logos/condor-icon.ico",
    media: [
      {
        src: "/projects/condor-charge.webp",
        alt: "Sitio de Condor Energy presentando la aplicación Condor Charge",
        caption: "Condor Charge",
      },
      {
        src: "/projects/condor-red.webp",
        alt: "Página de la red de carga de Condor Energy",
        caption: "Red de carga",
      },
      {
        src: "/projects/condor-instalaciones-pf.webp",
        alt: "Opciones de instalación de cargadores en Condor Energy",
        caption: "Tipos de instalación",
      },
      {
        src: "/projects/condor-catalogo.webp",
        alt: "Catálogo de cargadores y adaptadores de Condor Energy",
        caption: "Catálogo de la tienda",
      },
    ],
    number: "03",
    category: "Comercio electrónico · Sitio web",
    name: "Condor Energy",
    summary: "Sitio corporativo y comercio electrónico.",
    problem:
      "Modernizar el sitio corporativo y ofrecer una experiencia de compra coherente con la marca.",
    description:
      "Rediseño y migración del sitio corporativo a React y Firebase, con tienda en línea e integración de pagos mediante PayPal.",
    contribution:
      "Diseño y desarrollo web, estructura SEO y automatización de correos de compra para clientes y administración.",
    details: [
      "Rediseño de la interfaz y del flujo de compra.",
      "Integración de Firebase y PayPal.",
      "Notificaciones transaccionales mediante EmailJS.",
    ],
    stack: ["React", "Firebase", "PayPal", "EmailJS"],
    visual: ["Catálogo", "Compra", "Confirmación"],
    kind: "commerce",
    link: "https://condor-energy.com",
    linkLabel: "Visitar sitio web",
    note: "Proyecto de diseño, desarrollo y migración web.",
  },
  {
    id: "gunter",
    logo: "/logos/gunter.webp",
    media: [
      {
        src: "/projects/gunter-multimedia.webp",
        alt: "Gunter mostrando los controles de recorte de un video de prueba",
        caption: "Video y audio · prueba del recorte",
      },
    ],
    number: "05",
    category: "Proyecto personal · Windows",
    name: "Gunter",
    summary: "Utilidades de escritorio en la bandeja de Windows.",
    problem:
      "Reunir operaciones de archivos que uso con frecuencia en una sola herramienta.",
    description:
      "Aplicación WinForms para trabajar con PDF, video y audio, generar tablas de hashes y revisar el almacenamiento local.",
    contribution:
      "Desarrollé la aplicación de bandeja, sus módulos y la ejecución de tareas en segundo plano.",
    details: [
      "Unión, extracción y conversión de documentos PDF.",
      "Análisis, conversión y recorte de video y audio.",
      "Generación de hashes y revisión del espacio en disco.",
    ],
    stack: ["C#", ".NET 8", "WinForms", "PDFsharp", "FFmpeg"],
    note: "Herramienta personal para Windows.",
  },
].sort((a, b) => a.number.localeCompare(b.number));

export const companies = [
  {
    name: "Alexsoft S.A.",
    detail: "Software financiero",
    logo: "/logos/alexsoft-pf.webp",
    url: "https://alexsoftonline.com/",
  },
  {
    name: "Condor Energy Ecuador",
    detail: "Movilidad eléctrica",
    logo: "/logos/condor-pf.webp",
    url: "https://condor-energy.com/",
  },
  {
    name: "PayConer",
    detail: "Software para construcción",
    logo: "/logos/payconer.webp",
    url: "https://www.payconer.com/",
  },
  {
    name: "Hermanos Courier",
    detail: "Logística y envíos",
    logo: "/logos/courier-pf.webp",
    url: "#hermanoscourier",
  },
] as const;

export const technologies = [
  {
    name: "C# / .NET",
    detail: "Backend y escritorio",
    logo: "/logos/dotnet.webp",
  },
  { name: "React", detail: "Interfaces web", logo: "/tech/react.svg" },
  {
    name: "SQL Server",
    detail: "Bases de datos",
    logo: "/logos/sqlserver.svg",
  },
  {
    name: "TypeScript",
    detail: "Desarrollo web",
    logo: "/logos/typescript.webp",
  },
  {
    name: "Vite",
    detail: "Desarrollo y compilación web",
    logo: "/logos/vite.webp",
  },
] as const;

export const technologyTags: Record<string, { tag: string; logo?: string }> = {
  "C#": { tag: "CSharp", logo: "/tech/csharp.svg" },
  "C# / .NET": { tag: "DotNet", logo: "/logos/dotnet.webp" },
  ".NET 8": { tag: "DotNet8", logo: "/logos/dotnet.webp" },
  React: { tag: "React", logo: "/tech/react.svg" },
  "SQL Server": { tag: "SQLServer", logo: "/logos/sqlserver.svg" },
  TypeScript: { tag: "TypeScript", logo: "/logos/typescript.webp" },
  Vite: { tag: "Vite", logo: "/logos/vite.webp" },
  JavaScript: { tag: "JavaScript", logo: "/tech/javascript.svg" },
  Supabase: { tag: "Supabase", logo: "/tech/supabase.svg" },
  PostgreSQL: { tag: "PostgreSQL", logo: "/tech/postgresql.svg" },
  Vercel: { tag: "Vercel", logo: "/tech/vercel.svg" },
  Capacitor: { tag: "Capacitor", logo: "/tech/capacitor.svg" },
  Electron: { tag: "Electron", logo: "/tech/electron.svg" },
  CodeMirror: { tag: "CodeMirror", logo: "/tech/codemirror.svg" },
  Firebase: { tag: "Firebase", logo: "/tech/firebase.svg" },
  PayPal: { tag: "PayPal", logo: "/tech/paypal.svg" },
  WinForms: { tag: "WinForms", logo: "/tech/windows.svg" },
  FFmpeg: { tag: "FFmpeg", logo: "/tech/ffmpeg.svg" },
  PWA: { tag: "PWA", logo: "/tech/pwa.svg" },
  XML: { tag: "XML", logo: "/tech/xml.svg" },
};

export const experience = [
  {
    company: "Alexsoft S.A.",
    period: "Sep. 2025 — actualidad",
    role: "Ingeniero del Área de Arquitectura en Sistemas",
    description:
      "Desarrollo, mantenimiento y modernización de soluciones para el sector financiero. Aplicaciones full stack, integración con terminales ATM, monitoreo y despliegues en entornos productivos.",
    previous: "Anteriormente: Desarrollador Junior · jul. 2024 — sep. 2025.",
  },
  {
    company: "Condor Energy Ecuador",
    period: "Sep. 2023 — actualidad",
    role: "Diseñador y Desarrollador Web",
    description:
      "Diseño y desarrollo del sitio web, comercio electrónico, optimización SEO y mejora de la experiencia de compra.",
    previous: "Colaboración por contrato · en remoto.",
  },
  {
    company: "Independiente",
    period: "Nov. 2022 — actualidad",
    role: "Desarrollador Web Freelance",
    description:
      "Desarrollo de sitios y aplicaciones con React, creación de APIs REST, bases de datos relacionales y administración de servidores Linux.",
    previous: "Proyectos web · en remoto.",
  },
  {
    company: "PayConer",
    period: "Dic. 2023 — mar. 2024",
    role: "Pasante de desarrollo de software",
    description:
      "Desarrollo con React y Django, integración con APIs y automatización de procesos de servidor con Bash. Participación en despliegues y optimización del rendimiento.",
    previous: "Jornada parcial · en remoto.",
  },
] as const;

export const capabilities = [
  {
    number: "01",
    name: "Backend & datos",
    description: "Servicios, integraciones y lógica de negocio.",
    stack: "C# · .NET · APIs REST · SQL Server · PostgreSQL",
  },
  {
    number: "02",
    name: "Interfaces & producto",
    description: "Aplicaciones web con flujos claros y diseño responsivo.",
    stack: "React · JavaScript · HTML · CSS · Material UI · Vite",
  },
  {
    number: "03",
    name: "Integración & despliegue",
    description: "Conexión con sistemas existentes y puesta en producción.",
    stack: "IIS · Linux · Docker · Podman · NGINX · TLS",
  },
] as const;
