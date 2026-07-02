import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chris Dirks — Digital products with a point of view";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "62px 68px", background: "#10100f", color: "#f0eee8", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 999, right: -180, top: -190, background: "#ff5a36", opacity: .22, filter: "blur(20px)" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 20, letterSpacing: 2, textTransform: "uppercase" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}><div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #f0eee8", borderRadius: 999 }}>CD</div><span>Chris Dirks · Digital Studio</span></div>
        <span style={{ color: "#a4a19a" }}>Halifax, NS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 100, lineHeight: .88, letterSpacing: -6, fontWeight: 700 }}>
        <span>Digital products</span>
        <span>with a point <span style={{ color: "#ff5a36", fontStyle: "italic" }}>of view.</span></span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 26, borderTop: "1px solid rgba(240,238,232,.2)", fontSize: 20, color: "#a4a19a" }}>
        <span>Full-stack development · Product interfaces · Design engineering</span>
        <span style={{ color: "#ff5a36" }}>chrisdirks.com ↗</span>
      </div>
    </div>,
    size,
  );
}
