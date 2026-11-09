"use client";

import { useSyncExternalStore } from "react";
import { ui, type Language } from "@/content/locale";
import styles from "../portfolio.module.css";

const likeChanged = "portfolio:like-changed";
const memoryLikes = new Map<string, boolean>();

function subscribe(update: () => void) {
  window.addEventListener(likeChanged, update);
  window.addEventListener("storage", update);
  return () => {
    window.removeEventListener(likeChanged, update);
    window.removeEventListener("storage", update);
  };
}

function readLike(key: string) {
  try {
    return window.localStorage.getItem(key) === "true";
  } catch {
    return memoryLikes.get(key) ?? false;
  }
}

export default function LikePost({ id, name, language }: { id: string; name: string; language: Language }) {
  const text = ui[language];
  const key = `portfolio:like:${id}`;
  const liked = useSyncExternalStore(subscribe, () => readLike(key), () => false);

  function toggle() {
    const next = !readLike(key);
    try {
      if (next) window.localStorage.setItem(key, "true");
      else window.localStorage.removeItem(key);
    } catch {
      memoryLikes.set(key, next);
    }
    window.dispatchEvent(new Event(likeChanged));
  }

  return (
    <button
      className={styles.likePost}
      type="button"
      onClick={toggle}
      aria-label={`${text.like} · ${name}`}
      aria-pressed={liked}
      title={liked ? text.unlike : text.like}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20.5 4.7 13.3a4.8 4.8 0 0 1 6.8-6.8l.5.5.5-.5a4.8 4.8 0 0 1 6.8 6.8Z" />
      </svg>
    </button>
  );
}
