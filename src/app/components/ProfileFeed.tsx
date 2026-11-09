"use client";

import {
  useEffect,
  useRef,
  useSyncExternalStore,
  type MouseEvent,
  type ReactNode,
} from "react";
import styles from "../portfolio.module.css";
import { ui, type Language } from "@/content/locale";
import HeaderControls from "./HeaderControls";

const sections = ["experiencia", "proyectos", "posts", "perfil", "contacto"] as const;
type Section = (typeof sections)[number];

function subscribe(update: () => void) {
  window.addEventListener("hashchange", update);
  return () => window.removeEventListener("hashchange", update);
}

function readHash() {
  return window.location.hash.slice(1);
}

export default function ProfileFeed({
  panels,
  postSections,
  activityPosts,
  language,
}: {
  panels: Record<Exclude<Section, "posts">, ReactNode>;
  postSections: Record<string, Section>;
  activityPosts: { id: string; content: ReactNode }[];
  language: Language;
}) {
  const text = ui[language];
  const hash = useSyncExternalStore(subscribe, readHash, () => "");
  const selected = sections.find((id) => id === hash);
  const postSection = Object.hasOwn(postSections, hash)
    ? postSections[hash]
    : undefined;
  const active = selected ?? postSection ?? sections[0];
  const activePost = postSection === "posts" ? hash : undefined;
  const previousPost = useRef<string>(undefined);
  const previousHash = useRef<string>(undefined);
  const openedFromFeed = useRef(false);

  useEffect(() => {
    if (activePost) {
      openedFromFeed.current = previousHash.current === "posts";
      document.getElementById(activePost)?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (postSection) {
      const post = document.getElementById(hash);
      post?.focus({ preventScroll: true });
      post?.scrollIntoView({ block: "start" });
    } else if (active === "posts" && previousPost.current) {
      const post = document.getElementById(previousPost.current);
      post?.querySelector("a")?.focus({ preventScroll: true });
      post?.scrollIntoView({ block: "start", behavior: "instant" });
    }
    previousPost.current = activePost;
    previousHash.current = hash;
  }, [active, activePost, hash, postSection]);

  function select(event: MouseEvent<HTMLAnchorElement>, id: Section) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    if (activePost && id === "posts" && openedFromFeed.current) {
      window.history.back();
      return;
    }

    const panel = document.getElementById(active);
    const panelTop = panel?.getBoundingClientRect().top;
    const tabs = document.querySelector(`.${styles.tabsAnchor}`);
    const tabsBottom = tabs?.getBoundingClientRect().bottom ?? 0;
    if (!activePost && panelTop !== undefined && panelTop < tabsBottom) {
      panel?.scrollIntoView({ block: "start", behavior: "instant" });
    }
    if (hash !== id) {
      if (activePost && id === "posts") {
        window.history.replaceState(null, "", `#${id}`);
      } else {
        window.history.pushState(null, "", `#${id}`);
      }
      window.dispatchEvent(new Event("hashchange"));
    }
  }

  return (
    <>
      {activePost && (
        <header className={`${styles.topBar} ${styles.detailBar}`}>
          <a href="#posts" onClick={(event) => select(event, "posts")} aria-label={text.backToPosts}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
          </a>
          <h1>{text.post}</h1>
          <HeaderControls language={language} />
        </header>
      )}
      <div className={styles.tabsAnchor} hidden={!!activePost}>
        <nav className={styles.tabs} aria-label={text.portfolioSections}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={(event) => select(event, id)}
            >
              <span>{text.sections[id]}</span>
            </a>
          ))}
        </nav>
      </div>
      {sections.map((id) => (
        <section
          className={styles.feedPanel}
          key={id}
          id={id}
          aria-label={text.sections[id]}
          hidden={id !== active}
        >
          {id === "posts"
            ? activityPosts.map((post) => (
                <div key={post.id} hidden={!!activePost && activePost !== post.id}>
                  {post.content}
                </div>
              ))
            : panels[id]}
        </section>
      ))}
    </>
  );
}
