import { ImageResponse } from "next/og";
import { getDictionary, isLocale, locales } from "@/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tryelson Marques";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getDictionary(isLocale(locale) ? locale : "pt");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#06080c",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(45,212,191,0.35), transparent 45%), radial-gradient(circle at 88% 80%, rgba(167,139,250,0.30), transparent 45%)",
          color: "#e8eef3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "3px solid #2dd4bf",
              fontSize: 28,
              fontWeight: 800,
              color: "#2dd4bf",
            }}
          >
            TM
          </div>
          <div style={{ fontSize: 26, color: "#8b98a5" }}>tryelsonmarques.vercel.app</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Tryelson Marques</div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              backgroundImage: "linear-gradient(90deg, #2dd4bf, #38bdf8, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t.hero.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 26, color: "#8b98a5" }}>
          {["React", "Next.js", "Vue", "TypeScript", "NestJS"].map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
