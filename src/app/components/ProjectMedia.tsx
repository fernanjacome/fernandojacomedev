"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "../portfolio.module.css";

type Media = { src: string; alt: string; caption: string };

export default function ProjectMedia({
  name,
  media,
}: {
  name: string;
  media: Media[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = media[index];
  if (!current) return null;

  function open(position: number) {
    setIndex(position);
    dialog.current?.showModal();
  }

  return (
    <div className={styles.mediaGallery}>
      <button
        className={styles.mediaTrigger}
        onClick={() => open(0)}
        aria-label={`Ampliar imágenes de ${name}`}
      >
        <Image
          src={media[0].src}
          alt={media[0].alt}
          width={1600}
          height={900}
          sizes="(max-width: 760px) 90vw, 560px"
          className={styles.projectScreenshot}
        />
        <span className={styles.expandImage}>
          Ver capturas <span aria-hidden="true">↗</span>
        </span>
      </button>
      <div className={styles.mediaBottom}>
        <p>{media[0].caption}</p>
        <div className={styles.thumbnails}>
          {media.map((item, position) => (
            <button
              key={item.src}
              onClick={() => open(position)}
              aria-label={`Ver ${item.caption}`}
            >
              <Image src={item.src} alt="" width={48} height={32} />
            </button>
          ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        className={styles.imageDialog}
        aria-label={`Capturas de ${name}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight")
            setIndex((value) => (value + 1) % media.length);
          if (event.key === "ArrowLeft")
            setIndex((value) => (value - 1 + media.length) % media.length);
        }}
      >
        <div className={styles.dialogContent}>
          <div className={styles.dialogHeader}>
            <span>
              {name}{" "}
              <small>
                {index + 1} / {media.length}
              </small>
            </span>
            <button
              onClick={() => dialog.current?.close()}
              autoFocus
              aria-label="Cerrar capturas"
            >
              Cerrar ×
            </button>
          </div>
          <Image
            className={styles.dialogImage}
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1000}
            sizes="95vw"
          />
          <div className={styles.dialogFooter}>
            <button
              onClick={() =>
                setIndex((value) => (value - 1 + media.length) % media.length)
              }
              aria-label="Captura anterior"
            >
              ←
            </button>
            <p>{current.caption}</p>
            <button
              onClick={() => setIndex((value) => (value + 1) % media.length)}
              aria-label="Captura siguiente"
            >
              →
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
