"use client";

import { useState } from "react";
import { ui, type Language } from "@/content/locale";
import styles from "../portfolio.module.css";

export default function SharePost({ id, name, language }: { id: string; name: string; language: Language }) {
  const text = ui[language];
  const [message, setMessage] = useState("");

  async function share() {
    const url = new URL(`#${id}`, window.location.href).href;
    setMessage("");

    try {
      if (navigator.share) {
        await navigator.share({ title: name, url });
      } else {
        await navigator.clipboard.writeText(url);
        setMessage(text.copied);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMessage(text.copyFallback);
    }
  }

  return (
    <div className={styles.sharePost}>
      <span role="status">{message}</span>
      <button type="button" onClick={share} aria-label={`${text.share} ${name}`} title={text.sharePost}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 16V3m-4 4 4-4 4 4M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
        </svg>
      </button>
    </div>
  );
}
