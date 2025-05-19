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
    "Portafolio profesional de Fernando Jácome, desarrollador Full Stack con experiencia en C#, React, SQL, .NET y tecnologías modernas.",
  applicationName: "Fernando Jácome Portfolio",
  authors: [{ name: "Fernando Jácome" }],
  generator: "Next.js 15",
  keywords: [
    "Fernando Jácome",
    "Portfolio",
    "Full Stack",
    "React",
    "C#",
    ".NET",
  ],
  creator: "Fernando Jácome",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Fernando Jácome | Full Stack Developer",
    description:
      "Portafolio profesional de Fernando Jácome, desarrollador especializado en soluciones reutilizables y de alto rendimiento.",
    url: "https://tu-dominio.com",
    siteName: "Fernando Jácome Portfolio",
    locale: "es_ES",
    type: "website",
  },
  themeColor: "transparent",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent", // o "default", "black"
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </head>
        <SectionProvider>
          {/* <Navbar /> */}
          <div className="canvasContainer" >
            <MoonCanvas />
          </div>

          <div>{children}</div>
        </SectionProvider>
      </body>
    </html>
  );
}
