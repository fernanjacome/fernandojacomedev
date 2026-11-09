import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Language } from "@/content/locale";
import { profile } from "@/content/portfolio";
import { seoCopy, socialImageSize } from "./portfolio-seo";

export function renderSocialImage(language: Language) {
  const logo = readFileSync(join(process.cwd(), "public", "brand.png"), "base64");

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        gap: 23,
        background: "linear-gradient(145deg, #071a25 0%, #090f16 52%, #0b2432 100%)",
        color: "#e7e9ea",
        fontFamily: "sans-serif",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders a raw image. */}
      <img src={`data:image/png;base64,${logo}`} alt="fj" width={176} height={176} style={{ borderRadius: 38 }} />
      <span style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</span>
      <span style={{ fontSize: 33, color: "#63d4ff" }}>{seoCopy[language].jobTitle}</span>
      <span style={{ fontSize: 25, color: "#b4c7d4" }}>C#/.NET · React · SQL Server</span>
    </div>,
    socialImageSize,
  );
}

export function renderDefaultSocialImage() {
  return renderSocialImage("es");
}
