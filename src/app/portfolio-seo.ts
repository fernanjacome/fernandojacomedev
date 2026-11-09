import { profile } from "@/content/portfolio";
import { englishProfile } from "@/content/portfolio.en";
import type { Language } from "@/content/locale";

export const languagePaths = { es: "/", en: "/en", "x-default": "/" };
export const socialImageSize = { width: 1200, height: 630 };

export const seoCopy = {
  es: {
    jobTitle: "Ingeniero de Software Full Stack",
    description: profile.description,
    socialDescription: "Portafolio de software con C#/.NET, React y SQL Server. Banca, sistemas ATM y aplicaciones web.",
    imageAlt: `Logotipo fj y presentación profesional de ${profile.name}`,
    locale: "es_EC",
  },
  en: {
    jobTitle: "Full Stack Software Engineer",
    description: englishProfile.description,
    socialDescription: "Software portfolio built around C#/.NET, React, and SQL Server. Banking, ATM systems, and web apps.",
    imageAlt: `fj logo and professional introduction for ${profile.name}`,
    locale: "en_US",
  },
} satisfies Record<Language, Record<string, string>>;

export function profileSchema(language: Language) {
  const copy = seoCopy[language];
  const pageUrl = new URL(languagePaths[language], profile.url).href;
  const homeUrl = new URL("/", profile.url).href;
  const websiteId = `${homeUrl}#website`;
  const personId = `${homeUrl}#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: profile.name,
        inLanguage: ["es", "en"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: `${profile.name} | ${copy.jobTitle}`,
        description: copy.description,
        inLanguage: language,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.fullName,
        alternateName: profile.name,
        url: homeUrl,
        jobTitle: copy.jobTitle,
        description: copy.description,
        image: new URL("/profile-pf.webp", profile.url).href,
        sameAs: [profile.github, profile.linkedin],
      },
    ],
  };
}
