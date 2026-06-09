import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shavin Dilsara Fernando — Software Engineer & Visiting Lecturer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Corner accents */}
        <div style={{ position: "absolute", top: 40, left: 40, width: 48, height: 48, borderTop: "1px solid #333", borderLeft: "1px solid #333" }} />
        <div style={{ position: "absolute", top: 40, right: 40, width: 48, height: 48, borderTop: "1px solid #333", borderRight: "1px solid #333" }} />
        <div style={{ position: "absolute", bottom: 40, left: 40, width: 48, height: 48, borderBottom: "1px solid #333", borderLeft: "1px solid #333" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 48, height: 48, borderBottom: "1px solid #333", borderRight: "1px solid #333" }} />

        {/* Eyebrow */}
        <p style={{ color: "#555", fontSize: 14, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 32, fontFamily: "sans-serif" }}>
          Based in Sri Lanka
        </p>

        {/* Name */}
        <h1 style={{ color: "#fafafa", fontSize: 88, fontWeight: 300, lineHeight: 1, margin: 0, textAlign: "center" }}>
          Shavin Fernando
        </h1>

        {/* Divider */}
        <div style={{ width: 1, height: 48, background: "#222", margin: "36px 0" }} />

        {/* Roles */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Software Engineer", "Visiting Lecturer", "Researcher", "Photographer"].map((role, i) => (
            <div key={role} style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {i > 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#333" }} />}
              <p style={{ color: "#666", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", margin: 0, fontFamily: "sans-serif" }}>
                {role}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <p style={{ position: "absolute", bottom: 52, color: "#333", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          IFS R&D International · IIT · IEEE Published
        </p>
      </div>
    ),
    { ...size }
  );
}
