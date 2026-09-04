import { useRef, useEffect, useState } from "react";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Perfect to get started",
    features: ["Up to 10 clients", "Basic invoicing", "Payment tracking", "Email support"],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Business",
    price: "₦3,500",
    period: "/month",
    desc: "For growing businesses",
    features: ["Unlimited clients", "Smart invoicing + PDF", "Overdue reminders", "WhatsApp integration", "Monthly reports", "Priority support"],
    cta: "Start 14-day Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₦12,000",
    period: "/month",
    desc: "For teams & agencies",
    features: ["Everything in Business", "Multi-user access", "Custom branding", "API access", "Dedicated account manager"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="pricing" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div ref={ref} style={{ padding: "100px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#00C48C", fontWeight: 700, marginBottom: "14px" }}>
            Pricing
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: "16px" }}>
            Simple, honest pricing
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", maxWidth: "420px", margin: "0 auto", lineHeight: 1.65 }}>
            Start free. Upgrade when your business is ready. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {PLANS.map((plan, i) => (
            <div key={plan.name} style={{
              borderRadius: "18px", padding: "32px",
              background: plan.highlight ? "#00C48C" : "#10162A",
              border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.07)",
              color: plan.highlight ? "#060A14" : "#E8EAF0",
              position: "relative", overflow: "hidden",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s",
              transitionDelay: `${i * 0.1}s`,
            }}>
              {/* Most popular badge */}
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: "16px", right: "-28px",
                  background: "#060A14", color: "#00C48C",
                  fontSize: "10px", fontWeight: 700, padding: "4px 40px",
                  transform: "rotate(45deg)", letterSpacing: "1px",
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, marginBottom: "12px", opacity: 0.6 }}>
                {plan.name}
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "36px", fontWeight: 800, letterSpacing: "-1px" }}>
                {plan.price}
                <span style={{ fontSize: "14px", fontWeight: 400, opacity: 0.5 }}>{plan.period}</span>
              </div>
              <div style={{ fontSize: "13px", opacity: 0.5, margin: "8px 0 24px" }}>{plan.desc}</div>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {plan.features.map(f => (
                  <li key={f} style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: plan.highlight ? "#060A14" : "#00C48C", fontWeight: 700, fontSize: "12px" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button style={{
                width: "100%", padding: "13px", borderRadius: "10px",
                fontSize: "14px", fontWeight: 700, cursor: "pointer",
                fontFamily: "DM Sans", transition: "all 0.2s", border: "none",
                background: plan.highlight ? "#060A14" : i === 0 ? "#00C48C" : "transparent",
                color: plan.highlight ? "#00C48C" : i === 0 ? "#060A14" : "rgba(255,255,255,0.6)",
                border: i === 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}