/** Canonical professional content. Sources and editorial rules: docs/CONTENT.md. */
export const profile = {
  name: "Fernando Jácome",
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
};

export const projects = [
  {
    id: "odin",
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
    category: "Fintech · Monitoreo · Proyecto de titulación",
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
    link: "#formacion",
    linkLabel: "Ver contexto académico",
    note: "Proyecto de titulación · red de cajeros simulados.",
  },
  {
    id: "hermanoscourier",
    logo: "/logos/courier.webp",
    media: [
      {
        src: "/projects/courier-tracking.webp",
        alt: "Mockup del portal de seguimiento de Hermanos Courier en escritorio",
        caption: "Portal de seguimiento · mockup del proyecto",
      },
      {
        src: "/projects/courier-mobile.webp",
        alt: "Portal de seguimiento de Hermanos Courier en móvil",
        caption: "Seguimiento en móvil · captura de demostración",
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
    media: [],
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
    logo: "/logos/condor.webp",
    media: [
      {
        src: "/projects/condor-instalaciones.webp",
        alt: "Sitio de Condor Energy: sección de instalación de cargadores eléctricos",
        caption: "Instalaciones · captura del sitio",
      },
      {
        src: "/projects/condor-servicios.webp",
        alt: "Sitio de Condor Energy: servicios de instalación de cargadores",
        caption: "Servicios · captura del sitio",
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
].sort((a, b) => a.number.localeCompare(b.number));

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
    company: "PayConer",
    period: "Dic. 2023 — mar. 2024",
    role: "Pasante de desarrollo de software",
    description:
      "Desarrollo con React y Django, integración con APIs y automatización de procesos de servidor con Bash. Participación en despliegues y optimización del rendimiento.",
    previous: "Jornada parcial · en remoto.",
  },
  {
    company: "Independiente",
    period: "Nov. 2022 — jul. 2024",
    role: "Desarrollador Web Freelance",
    description:
      "Desarrollo de sitios y aplicaciones con React, creación de APIs REST, bases de datos relacionales y administración de servidores Linux.",
    previous: "Proyectos web · en remoto.",
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
