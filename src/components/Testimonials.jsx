import { useRef, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Funke Adeyemi",
    biz: "Funke's Fashion House, Ikeja",
    text: "Before PayTrack I had no idea who owed me money. Now I follow up confidently and my cash flow has improved so much.",
    avatar: "FA",
  },
  {
    name: "Emeka Okafor",
    biz: "Okafor Logistics, Aba",
    text: "My accountant used to spend hours every month reconciling payments. PayTrack cut that to 20 minutes. This app pays for itself.",
    avatar: "EO",
  },
  {
    name: "Bisi Lawal",
    biz: "BL Catering Services, Ibadan",
    text: "The invoice feature alone is worth it. I look so professional now. Clients pay faster because they know I'm serious.",
    avatar: "BL",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="testimonials">
      <div ref={ref} style={{ padding: "100px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#00C48C", fontWeight: 700, marginBottom: "14px" }}>
          Testimonials
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: "56px" }}>
          Nigerian business owners<br />love PayTrack
        </h2>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} style={{
              background: "#10162A",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px", padding: "28px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s",
              transitionDelay: `${i * 0.1}s`,
            }}>
              {/* Quote mark */}
              <div style={{ fontSize: "28px", color: "#00C48C", marginBottom: "16px", opacity: 0.5 }}>"</div>

              {/* Quote text */}
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "24px", fontStyle: "italic" }}>
                {t.text}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "rgba(0,196,140,0.15)", color: "#00C48C",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>{t.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}