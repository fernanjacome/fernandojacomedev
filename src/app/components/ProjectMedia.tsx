"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ui, type Language } from "@/content/locale";
import styles from "../portfolio.module.css";
import LikePost from "./LikePost";
import SharePost from "./SharePost";

type Media = { src: string; alt: string; caption: string };

export default function ProjectMedia({
  language,
  postId,
  name,
  media,
  compact = false,
  aspectRatio,
  postContent,
}: {
  language: Language;
  postId: string;
  name: string;
  media: Media[];
  compact?: boolean;
  aspectRatio?: string;
  postContent: ReactNode;
}) {
  const text = ui[language];
  const dialog = useRef<HTMLDialogElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const [slide, setSlide] = useState(0);
  const [index, setIndex] = useState(0);
  const current = media[index];
  if (!current) return null;

  function open(position: number) {
    setIndex(position);
    dialog.current?.showModal();
  }

  function moveViewer(step: number) {
    setIndex((value) => Math.min(media.length - 1, Math.max(0, value + step)));
  }

  function goTo(position: number, focusSlide = false) {
    const element = track.current;
    if (!element) return;
    const next = Math.min(media.length - 1, Math.max(0, position));
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollTo({
      left: next * element.clientWidth,
      behavior: reducedMotion ? "instant" : "smooth",
    });
    if (focusSlide) {
      const button = element.children[next] as HTMLButtonElement | undefined;
      button?.focus({ preventScroll: true });
    }
  }

  return (
    <div className={compact ? `${styles.mediaGallery} ${styles.compactGallery}` : styles.mediaGallery}>
      <div
        className={styles.carousel}
        role="group"
        aria-label={`${text.gallery} ${name}`}
      >
        <div
          ref={track}
          className={styles.carouselTrack}
          style={aspectRatio ? { "--media-ratio": aspectRatio } as CSSProperties : undefined}
          onScroll={({ currentTarget }) => {
            if (currentTarget.clientWidth > 0) {
              setSlide(
                Math.round(
                  currentTarget.scrollLeft / currentTarget.clientWidth,
                ),
              );
            }
          }}
          onKeyDown={(event) => {
            if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
            event.preventDefault();
            goTo(slide + (event.key === "ArrowRight" ? 1 : -1), true);
          }}
        >
          {media.map((item, position) => (
            <button
              key={item.src}
              className={styles.mediaTrigger}
              onClick={() => open(position)}
              aria-label={`${text.openImage} ${item.caption}`}
              tabIndex={slide === position ? 0 : -1}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 660px) 84vw, 528px"
                className={styles.projectScreenshot}
              />
            </button>
          ))}
        </div>
        {media.length > 1 && (
          <>
            <button
              type="button"
              className={styles.carouselPrevious}
              disabled={slide === 0}
              onClick={() => goTo(slide - 1)}
              aria-label={`${text.previousIn} ${name}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 5-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.carouselNext}
              disabled={slide === media.length - 1}
              onClick={() => goTo(slide + 1)}
              aria-label={`${text.nextIn} ${name}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      <div className={styles.carouselFooter}>
        <p className={styles.mediaCaption} aria-live="polite">
          {media[slide]?.caption}
        </p>
        {media.length > 1 && (
          <div className={styles.carouselDots} role="group" aria-label={text.chooseImage}>
            {media.map((item, position) => (
              <button
                key={item.src}
                type="button"
                aria-label={`${text.image} ${position + 1}: ${item.caption}`}
                aria-current={position === slide ? "true" : undefined}
                onClick={() => goTo(position)}
              />
            ))}
          </div>
        )}
      </div>
      <dialog
        ref={dialog}
        className={styles.imageDialog}
        aria-label={`${text.imagesOf} ${name}`}
        onClose={() => goTo(index, true)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          moveViewer(event.key === "ArrowRight" ? 1 : -1);
        }}
      >
        <div className={styles.viewerStage}>
          <header className={styles.viewerHeader}>
            <button type="button" className={styles.viewerControl} onClick={() => dialog.current?.close()} autoFocus aria-label={text.closeImages}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
            <span className={styles.viewerIndex} aria-live="polite">{index + 1} / {media.length}</span>
          </header>
          <div
            className={styles.viewerMedia}
            onTouchStart={({ touches }) => {
              swipeStart.current = touches.length === 1 ? { x: touches[0].clientX, y: touches[0].clientY } : null;
            }}
            onTouchCancel={() => { swipeStart.current = null; }}
            onTouchEnd={({ changedTouches, touches }) => {
              const start = swipeStart.current;
              swipeStart.current = null;
              const end = changedTouches[0];
              if (!start || !end || touches.length) return;
              const x = end.clientX - start.x;
              const y = end.clientY - start.y;
              if (Math.abs(x) > 48 && Math.abs(x) > Math.abs(y)) moveViewer(x < 0 ? 1 : -1);
              else if (y > 76 && y > Math.abs(x)) dialog.current?.close();
            }}
          >
            <Image className={styles.dialogImage} src={current.src} alt={current.alt} fill sizes="(max-width: 900px) 100vw, calc(100vw - 360px)" draggable={false} />
          </div>
          {media.length > 1 && (
            <>
              <button type="button" className={`${styles.viewerControl} ${styles.viewerPrevious}`} disabled={index === 0} onClick={() => moveViewer(-1)} aria-label={text.previousImage}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
              </button>
              <button type="button" className={`${styles.viewerControl} ${styles.viewerNext}`} disabled={index === media.length - 1} onClick={() => moveViewer(1)} aria-label={text.nextImage}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
              </button>
            </>
          )}
          <footer className={styles.viewerFooter}>
            <p className={styles.viewerCaption} aria-live="polite">{current.caption}</p>
            <div className={styles.viewerActions}>
              <LikePost id={postId} name={name} language={language} />
              <SharePost id={postId} name={name} language={language} />
            </div>
          </footer>
        </div>
        <aside className={styles.viewerPost} aria-label={text.post}>
          {postContent}
          <a className={styles.textLink} href={`#${postId}`} onClick={() => dialog.current?.close()}>{text.viewPost}</a>
        </aside>
      </dialog>
    </div>
  );
}
