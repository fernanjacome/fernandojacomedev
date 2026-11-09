import type { Metadata, Viewport } from "next";
import { profile } from "@/content/portfolio";
import type { Language } from "@/content/locale";
import { languagePaths, profileSchema, seoCopy, socialImageSize } from "./portfolio-seo";
import { themeScript } from "./theme";
import "./globals.css";

export function portfolioMetadata(language: Language): Metadata {
  const copy = seoCopy[language];
  const path = languagePaths[language];
  const title = `${profile.name} | ${copy.jobTitle}`;
  const image = { url: `/social/${language}/v1`, ...socialImageSize, type: "image/png", alt: copy.imageAlt };

  return {
    metadataBase: new URL(profile.url),
    title,
    description: copy.description,
    applicationName: `${profile.name} · Portfolio`,
    authors: [{ name: profile.fullName, url: profile.linkedin }],
    alternates: { canonical: path, languages: languagePaths },
    openGraph: {
      title,
      description: copy.socialDescription,
      url: path,
      siteName: profile.name,
      locale: copy.locale,
      alternateLocale: [seoCopy[language === "es" ? "en" : "es"].locale],
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.socialDescription,
      images: [{ url: image.url, alt: image.alt }],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema(language)).replace(/</g, "\\u003c") }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
