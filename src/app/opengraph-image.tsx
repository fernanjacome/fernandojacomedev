import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

export const alt =
  "Fernando Jácome — Full Stack Software Engineer. C# / .NET, React y SQL Server.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        background: "#0e1411",
        color: "#edf2ee",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
        }}
      >
        <span>fj.</span>
        <span>{profile.location}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ fontSize: 96, letterSpacing: -5 }}>{profile.name}</span>
        <span style={{ fontSize: 32, color: "#8eb29b" }}>
          Full Stack Software Engineer
        </span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #293a30",
          paddingTop: 25,
          fontSize: 22,
        }}
      >
        C# / .NET · React · SQL Server · Fintech & ATM Systems
      </div>
    </div>,
    size,
  );
}
