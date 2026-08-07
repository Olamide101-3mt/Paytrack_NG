import { useState, useEffect } from "react";

 const NAV_LINKS = ["Features", "How It Works", "Pricing", "Testimonials"];

export default function Navbar() {
   const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  useEffect (() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top:0,left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: scrolled ? "14px 60px" : "20px 60px",
      background: scrolled ? "rgba(6, 10, 20, 0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255, 255, 0.06)" : "none",
      transition: "all 0.3s",

    }}>
      {/* `Logo` */}
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontweight: 800, color: "#fff", letterspacing: "-1px" }}>
        Pay<span style={{ color: "#00C48C", }}>Track</span> { " "}<span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.25)", fontweight: 400, letterSpacing: "1px", fontFamily: "DM Sans"}}>NG</span>


      </div>

      {/* Nav Links */}

      <ul style={{display: "flex", gap : "36px", listStyle: "none", margin: 0, padding: 0}}>
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              style={{fontSize: "14px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontweight: 500, transition: "color 0.2s"}}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}

      <div srtyle={{display: "flex", gap: "12px", alighItems: "center"}}>
        <button style={{
          background: "none", border: "1px solid rgba(255,255,255,0.15)", 
          color: "rgba(255,255,255,0.7)", padding: "9px 22px", borderRadius: "8px", 
          fontsize: "14px", cursor: "pointer", fontFamily: "DM Sans", fontweight: 500, transition: "all 0.2s",
          
          
        }}
        onMouseEnter={e => {e.target.style.borderColor = "rgba(255, 255, 255,0.4)"; e.target.style.color = "#fff"; }}
         onMouseLeave={e => {e.target.style.borderColor = "rgba(255, 255, 255,0.15)"; e.target.style.color = "rgba(255,255,255,0.7)"}}
        >
          Sign In
        </button>
        {/* Will have to work on this button css later */}
        <button style={{
          background: "none", border: "1px solid rgba(255,255,255,0.15)", 
          color: "rgba(255,255,255,0.7)", padding: "9px 22px", borderRadius: "8px", 
          fontsize: "14px", cursor: "pointer", fontFamily: "DM Sans", fontweight: 500, transition: "all 0.2s",
          
          
        }}
        onMouseEnter={e => {e.target.style.borderColor = "rgba(255, 255, 255,0.4)"; e.target.style.color = "#fff"; }}
         onMouseLeave={e => {e.target.style.borderColor = "rgba(255, 255, 255,0.15)"; e.target.style.color = "rgba(255,255,255,0.7)"}}
        >
          Get Started Free
        </button>
      </div>
    </nav>
  );
}