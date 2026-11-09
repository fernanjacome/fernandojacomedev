import type { Metadata, Viewport } from "next";
import { profile } from "@/content/portfolio";
import type { Language } from "@/content/locale";
import { englishProfile } from "@/content/portfolio.en";
import { themeScript } from "./theme";
import "./globals.css";

export function portfolioMetadata(language: Language): Metadata {
  const description = language === "en" ? englishProfile.description : profile.description;
  const path = language === "en" ? "/en" : "/";
  const imageAlt = `${profile.name} — Full Stack Software Engineer`;

  return {
    metadataBase: new URL(profile.url),
    title: `${profile.name} — Full Stack Software Engineer`,
    description,
    applicationName: `${profile.name} · Portfolio`,
    authors: [{ name: profile.fullName, url: profile.linkedin }],
    alternates: { canonical: path, languages: { es: "/", en: "/en" } },
    openGraph: {
      title: `${profile.name} — Full Stack Software Engineer`,
      description,
      url: path,
      siteName: profile.name,
      locale: language === "en" ? "en_US" : "es_EC",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} — Software Engineer`,
      description,
      images: [{ url: "/twitter-image", alt: imageAlt }],
    },
    icons: { icon: [{ url: "/brand.png", type: "image/png" }] },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function PortfolioLayout({
  children,
  language,
}: Readonly<{ children: React.ReactNode; language: Language }>) {
  return (
    <html lang={language} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
