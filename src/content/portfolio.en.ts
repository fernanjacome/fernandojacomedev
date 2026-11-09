export const englishProfile = {
  introduction: "I build and modernize enterprise applications, primarily for the financial sector. I also develop independent web projects.",
  description: "Software engineer in Guayaquil. Full stack development with C#/.NET, React, and SQL Server for banking platforms, ATM systems, and web applications.",
};

type ProjectCopy = {
  category: string;
  summary: string;
  problem: string;
  description: string;
  contribution: string;
  details: string[];
  note: string;
  linkLabel?: string;
};

export const englishProjects: Record<string, ProjectCopy> = {
  odin: {
    category: "Degree project · ATM simulation",
    summary: "ATM cash monitoring and forecasting.",
    problem: "Monitor cash cassette levels and forecast how they change across a simulated ATM network.",
    description: "My degree project combines real-time monitoring, data analysis, and forecasting of ATM cash cassette levels.",
    contribution: "I built the monitoring and analytics platform for a simulated ATM network.",
    details: ["Operational monitoring of simulated ATMs.", "Analysis of cash cassette levels.", "Forecasting cash availability."],
    note: "Degree project · simulated ATM network.",
  },
  hermanoscourier: {
    category: "Logistics · Web application",
    summary: "Logistics management and package tracking.",
    problem: "Centralize shipment intake and package status so staff can trace deliveries and customers can track them.",
    description: "A web administration system for an Ecuadorian import and parcel company. It brings packages, status updates, financial transactions, and user accounts into one place.",
    contribution: "Requirements analysis, interface design, data modeling, frontend development, Supabase integration, and deployment.",
    details: ["Package intake, statuses, and labels with barcodes and QR codes.", "Public portal for tracking codes.", "Roles, permissions, RPC functions, and security policies.", "Responsive interface with support for Android."],
    note: "I shared this project on LinkedIn.",
    linkLabel: "View activity on LinkedIn",
  },
  "plataformas-atm": {
    category: "Fintech · Banking systems",
    summary: "Development tools for ATM systems.",
    problem: "Integrate the applications and services used to manage bank terminals and monitor their operation.",
    description: "A desktop application for editing and comparing XML, working with ATM screens, and building EVA resources. It is part of my work on banking tools and integrations.",
    contribution: "I built the tool with Electron and React, including resource editing, file comparison, and modules for working with EVA.",
    details: ["XML and screen editing with previews.", "File comparison and resource builds.", "Modules for flows, logs, and remote connections."],
    note: "Professional work at Alexsoft · EVA, Echelon, and Extreme Web.",
    linkLabel: "View experience on LinkedIn",
  },
  "condor-energy": {
    category: "E-commerce · Website",
    summary: "Corporate website and online store.",
    problem: "Modernize the company website and create a shopping experience that fits the brand.",
    description: "I redesigned and migrated the company site to React and Firebase, with an online store and PayPal integration.",
    contribution: "Web design and development, SEO, and automated purchase emails for customers and staff.",
    details: ["Redesigned the interface and checkout flow.", "Integrated Firebase and PayPal.", "Added transactional notifications with EmailJS."],
    note: "Web design, development, and migration project.",
    linkLabel: "Visit website",
  },
  gunter: {
    category: "Personal project · Windows",
    summary: "Desktop utilities in the Windows system tray.",
    problem: "Bring the file operations I use often into one tool.",
    description: "A WinForms app for working with PDFs, video, and audio, generating hash tables, and checking local storage.",
    contribution: "I built the tray application, its modules, and its background task runner.",
    details: ["Merge, extract, and convert PDF documents.", "Inspect, convert, and trim video and audio.", "Generate hashes and check disk space."],
    note: "Personal tool for Windows.",
  },
};

export const englishEvents: Record<string, { description: string; context: string }> = {
  "esis-2026": {
    description: "I joined the Alexsoft S.A. team at the Extreme Software booth during ESIS, an event organized by BANRED and ATEFI.",
    context: "One topic was how to connect different payment networks. Wip was one example: it lets people transfer money using a mobile phone number.",
  },
  "clab-2026": {
    description: "I joined the Alexsoft S.A. team in Quito for CLAB 2026. Alexsoft is a sponsor of the financial technology conference.",
    context: "At the booth, we showcased our solutions with a demo ATM and spoke with financial sector professionals from across the region.",
  },
};

export const englishMedia: Record<string, [alt: string, caption: string]> = {
  "/projects/odin-cajeros.webp": ["ODIN dashboard showing the status and cash levels of simulated ATMs", "ATM monitoring · simulated environment"],
  "/projects/odin-estimacion.webp": ["ODIN forecast of available cash by ATM", "Cash availability forecast"],
  "/posts/esis-1.webp": ["Three team members at the Extreme Software booth at ESIS 2026", "The team at ESIS 2026"],
  "/posts/esis-3.webp": ["Attendees talking in front of the Extreme Software booth", "Conversations at the booth"],
  "/posts/esis-4.webp": ["Attendees looking at the display at the ESIS 2026 booth", "Booth display"],
  "/posts/esis-2.webp": ["Three team members beside the counter, screen, and demo ATM", "Booth and demo ATM"],
  "/posts/clab-1.webp": ["Four team members at the Alexsoft and Extreme Software booth at CLAB 2026", "The team at CLAB 2026"],
  "/posts/clab-2.webp": ["Three team members beside the ATM at the CLAB 2026 booth", "Team and demo ATM"],
  "/projects/courier-panel.webp": ["Hermanos Courier package dashboard on desktop and mobile", "Package dashboard · demo data"],
  "/projects/courier-acceso.webp": ["Hermanos Courier sign-in on a laptop and a phone", "Desktop and mobile access"],
  "/projects/courier-login.webp": ["Hermanos Courier sign-in screen", "Sign-in screen"],
  "/projects/courier-finanzas.webp": ["Hermanos Courier finance module on a tablet", "Finance on tablet · demo data"],
  "/projects/courier-cotizacion.webp": ["Hermanos Courier shipping quote form", "Shipping quote form"],
  "/projects/eva-pantallas.webp": ["EVA Studio with an HTML editor and ATM screen preview", "Screen editor · CLAB demo"],
  "/projects/eva-editor.webp": ["EVA Studio's XML browser and editor", "XML browser · CLAB demo"],
  "/projects/eva-comparador.webp": ["EVA Studio 2026 comparing two versions of a sample XML file", "XML comparison · sample files"],
  "/projects/condor-charge.webp": ["Condor Energy website introducing the Condor Charge app", "Condor Charge"],
  "/projects/condor-red.webp": ["Condor Energy's charging network page", "Charging network"],
  "/projects/condor-instalaciones-pf.webp": ["Charger installation options on Condor Energy's website", "Installation options"],
  "/projects/condor-catalogo.webp": ["Condor Energy catalog of chargers and adapters", "Store catalog"],
  "/projects/gunter-multimedia.webp": ["Gunter displaying trimming controls for a sample video", "Video and audio · trim preview"],
};

export const englishExperience = {
  "Alexsoft S.A.": {
    period: "Sep 2025 – Present",
    role: "Systems Architecture Engineer",
    description: "I develop, maintain, and modernize financial software, including full stack applications, ATM integrations, monitoring, and production deployments.",
    previous: "Previously: Junior Developer · Jul 2024 – Sep 2025.",
  },
  "Condor Energy Ecuador": {
    period: "Sep 2023 – Present",
    role: "Web Designer and Developer",
    description: "Website design and development, e-commerce, SEO, and improvements to the shopping experience.",
    previous: "Contract work · Remote.",
  },
  PayConer: {
    period: "Dec 2023 – Mar 2024",
    role: "Software Development Intern",
    description: "React and Django development, API integration, and server automation with Bash. I also helped with deployments and performance improvements.",
    previous: "Part-time · Remote.",
  },
  Independiente: {
    period: "Nov 2022 – Present",
    role: "Freelance Web Developer",
    description: "I build React websites and applications, develop REST APIs, work with relational databases, and administer Linux servers.",
    previous: "Web projects · Remote.",
  },
};

export const englishCompanyDetails = {
  "Alexsoft S.A.": "Financial software",
  "Condor Energy Ecuador": "Electric mobility",
  PayConer: "Construction software",
  "Hermanos Courier": "Logistics and shipping",
};

export const englishTechnologyDetails = {
  "C# / .NET": "Backend and desktop",
  React: "Web interfaces",
  "SQL Server": "Databases",
  TypeScript: "Web development",
  Vite: "Web development and builds",
};

export const englishCapabilities = {
  "01": { name: "Backend & data", stack: "C# · .NET · REST APIs · SQL Server · PostgreSQL" },
  "02": { name: "Interfaces & product" },
  "03": { name: "Integration & deployment" },
};
