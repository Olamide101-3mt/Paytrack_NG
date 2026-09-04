import { useRef, useEffect, useState } from "react";

const STEPS = [
  { num: "01", title: "Create your account", desc: "Sign up free in under 2 minutes. No card required." },
  { num: "02", title: "Add your clients", desc: "Import your customer list or add them one by one." },
  { num: "03", title: "Record payments", desc: "Log transactions as they happen — cash, transfer, POS." },
  { num: "04", title: "Get paid faster", desc: "Send invoices and reminders. Watch your cashflow improve." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="how-it-works" style={{
      background: "rgba(255,255,255,0.02)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div ref={ref} style={{ padding: "100px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#00C48C", fontWeight: 700, marginBottom: "14px" }}>
            How It Works
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: "16px" }}>
            Up and running in minutes
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", maxWidth: "420px", margin: "0 auto", lineHeight: 1.65 }}>
            No training needed. If you can use WhatsApp, you can use PayTrack.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", position: "relative" }}>
          {/* Connecting line */}
          <div style={{
            position: "absolute", top: "28px", left: "10%", right: "10%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,196,140,0.3), transparent)",
          }} />

          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              textAlign: "center", padding: "24px 16px",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s",
              transitionDelay: `${i * 0.1}s`,
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "rgba(0,196,140,0.1)", border: "1px solid rgba(0,196,140,0.3)",
                color: "#00C48C", fontFamily: "'Syne', sans-serif", fontSize: "15px", fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                {step.num}
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                {step.title}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}