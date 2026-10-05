import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Abinava Yeshwanth KJ — AI, Agricultural Engineering & Irrigation Research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const rows = Array.from({ length: 14 }, (_, i) => i);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f5f0",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 520, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          {rows.map((i) => (
            <div key={i} style={{ height: 1, background: "#dcdad1", width: "100%" }} />
          ))}
        </div>
        <div style={{ position: "absolute", right: 120, top: 165, width: 300, height: 300, borderRadius: 300, border: "2px solid #2f5d46", display: "flex", alignItems: "center", justifyContent: "center", background: "#e2ebe4" }}>
          <div style={{ width: 150, height: 2, background: "#2b6688", marginLeft: 150 }} />
        </div>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#5b6770" }}>
          <span style={{ color: "#2f5d46" }}>AI</span>
          <span style={{ margin: "0 14px" }}>•</span>
          <span style={{ color: "#2b6688" }}>AGRICULTURE</span>
          <span style={{ margin: "0 14px" }}>•</span>
          <span style={{ color: "#8a6a4a" }}>WATER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, color: "#13202b", letterSpacing: -3, lineHeight: 1 }}>Abinava</div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#13202b", letterSpacing: -3, lineHeight: 1.05 }}>
            Yeshwanth&nbsp;<span style={{ color: "#2f5d46" }}>KJ</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#364450", maxWidth: 640, lineHeight: 1.35 }}>
            Computer science and machine learning for irrigation and agricultural water management.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#5b6770" }}>PhD Researcher · Biosystems & Agricultural Engineering · Oklahoma State University</div>
      </div>
    ),
    size,
  );
}
