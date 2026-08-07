export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "500px",
        background: "radial-gradient(ellipse, rgba(0,196,140,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        background: "rgba(0,196,140,0.1)", border: "1px solid rgba(0,196,140,0.25)",
        color: "#00C48C", padding: "6px 16px", borderRadius: "20px",
        fontSize: "12px", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "28px",
        animation: "fadeUp 0.6s ease both",
      }}>
        🇳🇬 Built for Nigerian Business Owners
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(42px, 7vw, 82px)",
        fontWeight: 800, lineHeight: 1.05,
        letterSpacing: "-2px", marginBottom: '24px',
        animation: "fadeUp 0.6s ease 0.1s both",
      }}>
        Stop Losing Money<br />
        to{" "}
        <span style={{ color: "#00C48C" }}>Unpaid</span>{" "}
        <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.25)", color: "transparent" }}>Invoices</span>
      </h1>
      {/* Subtext */}
      <p style={{
        fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.5)",
        maxWidth: "520px", lineHeight: 1.65, marginBottom: "44px",
        animation: "fadeUp 0.6s ease 0.2s both",
      }}>
        PayTrack NG helps small businesses across Nigeria track payments, send invoices,
        and chase overdue clients — all in one place.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.6s ease 0.3s both" }}>
        <button style={{
          background: "#00C48C", color: "#060A14", border: "none",
          padding: "15px 36px", borderRadius: "10px", fontSize: "15px",
          fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans", transition: "all 0.25s",
        }}
          onMouseEnter={e => { e.target.style.background = "#00daa0"; e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 16px 40px rgba(0,196,140,0.3)"; }}
          onMouseLeave={e => { e.target.style.background = "#00C48C"; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
        >
          Start Free — No Card Needed
        </button>
        <button style={{
          background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(255,255,255,0.12)", padding: "15px 36px",
          borderRadius: "10px", fontSize: "15px", fontWeight: 600,
          cursor: "pointer", fontFamily: "DM Sans", transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.color = "rgba(255,255,255,0.8)"; }}
        >
          Watch How It Works →
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: "48px", marginTop: "64px", justifyContent: "center", animation: "fadeUp 0.6s ease 0.4s both" }}>
        {[["5,000+", "Active Businesses"], ["₦2.4B+", "Payments Tracked"], ["98%", "Customer Satisfaction"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "28px", fontWeight: 800, color: "#fff" }}>{num}</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}