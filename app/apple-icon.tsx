import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          border: "1px solid #222",
        }}
      >
        <p style={{ color: "#c0c0c0", fontSize: 72, fontWeight: 300, margin: 0, letterSpacing: "0.05em" }}>
          SF
        </p>
      </div>
    ),
    { ...size }
  );
}
