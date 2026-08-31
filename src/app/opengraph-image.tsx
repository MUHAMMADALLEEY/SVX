import { ImageResponse } from "next/og";

export const alt = "SportsVentureX — custom sports goods manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f7f8fb",
        color: "#11131b",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "66px 72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ background: "#245bff", height: 10, left: 0, position: "absolute", right: 0, top: 0 }} />
      <div style={{ display: "flex", fontSize: 58, fontWeight: 900, letterSpacing: "-5px" }}>
        SV<span style={{ color: "#245bff" }}>X</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: "-5px", lineHeight: 0.92 }}>
          Built for every kind of play.
        </div>
        <div style={{ color: "#555b68", fontSize: 28 }}>
          Custom footballs · socks · bags · product development
        </div>
      </div>
    </div>,
    size,
  );
}
