import { useRef, useEffect, useState } from "react";

const FEATURES = [
  { icon: "⚡", title: "Instant Payment Tracking", desc: "Record every naira in and out in seconds. Never lose track of a client payment again.", accent: "#00C48C" },
  { icon: "📄", title: "Smart Invoicing", desc: "Generate professional invoices branded to your business. Send via WhatsApp or email.", accent: "#F5A623" },
  { icon: "🔔", title: "Overdue Reminders", desc: "Automatically follow up with clients who owe you. Stop chasing money manually.", accent: "#FF4D6D" },
  { icon: "📊", title: "Business Reports", desc: "See your monthly earnings, top clients, and growth trends in one clear dashboard.", accent: "#7C6AF7" },
  { icon: "🏦", title: "Multi-Bank Support", desc: "Works with GTBank, Access, Opay, Kuda, Moniepoint and all major Nigerian banks.", accent: "#00C48C" },
  { icon: "🔒", title: "Secure & Private", desc: "Your financial data is encrypted and belongs only to you. No sharing, ever.", accent: "#F5A623" },
];

export default function Features() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="features" ref={ref} style={{ padding: "100px 60px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#00C48C", fontWeight: 700, marginBottom: "14px" }}>
        Features
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.1 }}>
          Everything your business<br />needs to get paid
        </h2>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", maxWidth: "380px", lineHeight: 1.65 }}>
          Designed for traders, freelancers, and small business owners across Nigeria.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {FEATURES.map((f, i) => (
          <div key={f.title} style={{
            background: "#10162A",
            border: `1px solid rgba(255,255,255,0.06)`,
            borderTop: `2px solid ${f.accent}`,
            borderRadius: "16px", padding: "28px",
            transition: "all 0.4s",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transitionDelay: `${i * 0.08}s`,
          }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>{f.icon}</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "17px", fontWeight: 700, marginBottom: "8px" }}>{f.title}</div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}