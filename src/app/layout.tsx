import type { Metadata, Viewport } from "next";
import { profile } from "@/content/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} — Full Stack Software Engineer`,
  description: profile.description,
  applicationName: `${profile.name} · Portfolio`,
  authors: [{ name: profile.fullName, url: profile.linkedin }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — Full Stack Software Engineer`,
    description: profile.description,
    url: "/",
    siteName: profile.name,
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer`,
    description: profile.description,
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e1411",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
