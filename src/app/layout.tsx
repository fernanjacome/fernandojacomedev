// Archivo: src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MoonCanvas from "./components/MoonCanvas";
import { SectionProvider } from "./context/SectionContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fernando Jácome | Full Stack Developer",
  description:
    "Portafolio profesional de Fernando Jácome, desarrollador Full Stack con enfoque en diseño UI/UX, eficiencia y arquitectura modular.",
  applicationName: "Fernando Jácome Portfolio",
  authors: [{ name: "Fernando Jácome", url: "https://tu-dominio.com" }],
  generator: "Next.js 15",
  keywords: [
    "Fernando Jácome",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "C#",
    ".NET",
    "Frontend",
    "Backend",
    "UI",
    "UX",
    "Desarrollador Web",
    "Landing Page",
    "Dashboards",
  ],
  creator: "Fernando Jácome",
  publisher: "Fernando Jácome",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    title: "Fernando Jácome | Full Stack Developer",
    description:
      "Desarrollador Full Stack con enfoque en sistemas reutilizables, diseño técnico y experiencia de usuario.",
    url: "https://tu-dominio.com",
    siteName: "Fernando Jácome Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png", // asegurate de tener esta imagen en public/
        width: 1200,
        height: 630,
        alt: "Fernando Jácome Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Jácome | Full Stack Developer",
    description:
      "Desarrollador Full Stack especializado en React, C#, .NET y diseño de interfaces funcionales.",
    creator: "@jazattt", // opcional
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // opcional si tenés uno
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Fernando Jácome",
    statusBarStyle: "black-translucent",
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  themeColor: "#000000", // o un color que combine con el fondo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <SectionProvider>
          <div className="canvasContainer">
            <MoonCanvas />
          </div>
          <div>{children}</div>
        </SectionProvider>
      </body>
    </html>
  );
}
