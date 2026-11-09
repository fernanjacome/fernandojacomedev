"use client";

import { useEffect, useSyncExternalStore } from "react";
import { themeStorageKey } from "../theme";
import { ui, type Language } from "@/content/locale";
import styles from "../portfolio.module.css";

const themeChanged = "portfolio:theme-changed";

function subscribe(update: () => void) {
  function syncTheme(event: StorageEvent) {
    if (event.key !== themeStorageKey && event.key !== null) return;
    document.documentElement.dataset.theme = event.newValue === "light" ? "light" : "dark";
    update();
  }

  window.addEventListener(themeChanged, update);
  window.addEventListener("storage", syncTheme);
  return () => {
    window.removeEventListener(themeChanged, update);
    window.removeEventListener("storage", syncTheme);
  };
}

function isLightTheme() {
  return document.documentElement.dataset.theme === "light";
}

export default function ThemeToggle({ language }: { language: Language }) {
  const light = useSyncExternalStore(subscribe, isLightTheme, () => false);
  const label = light ? ui[language].darkMode : ui[language].lightMode;

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", light ? "#ffffff" : "#000000");
  }, [light]);

  function toggleTheme() {
    const theme = isLightTheme() ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // The theme can still change for the current page.
    }
    window.dispatchEvent(new Event(themeChanged));
  }

  return (
    <button type="button" className={styles.themeToggle} onClick={toggleTheme} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {light ? (
          <path d="M20.9 13.3A9 9 0 0 1 10.7 3.1a9 9 0 1 0 10.2 10.2Z" />
        ) : (
          <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19" /></>
        )}
      </svg>
    </button>
  );
}
