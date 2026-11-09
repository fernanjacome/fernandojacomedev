"use client";

import { useSyncExternalStore } from "react";
import { ui, type Language } from "@/content/locale";
import styles from "../portfolio.module.css";
import ThemeToggle from "./ThemeToggle";

function subscribe(update: () => void) {
  window.addEventListener("hashchange", update);
  return () => window.removeEventListener("hashchange", update);
}

export default function HeaderControls({ language }: { language: Language }) {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  const target = language === "es" ? "en" : "es";
  const label = ui[language].switchLanguage;

  return (
    <div className={styles.headerControls}>
      <a className={styles.languageToggle} href={`${target === "en" ? "/en" : "/"}${hash}`} hrefLang={target} aria-label={label} title={label}>
        {target.toUpperCase()}
      </a>
      <ThemeToggle language={language} />
    </div>
  );
}
