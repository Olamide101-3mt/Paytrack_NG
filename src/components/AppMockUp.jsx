const MOCK_ROWS = [
  { name: "Kemi Fashion", init: "KF", amount: "₦120,000", status: "Pending", statusColor: "#F5A623", statusBg: "rgba(245,166,35,0.12)", avatarBg: "rgba(0,196,140,0.15)", avatarColor: "#00C48C" },
  { name: "Ade Bakery", init: "AB", amount: "₦45,000", status: "Paid", statusColor: "#00C48C", statusBg: "rgba(0,196,140,0.12)", avatarBg: "rgba(0,196,140,0.15)", avatarColor: "#00C48C" },
  { name: "Chukwu Logistics", init: "CL", amount: "₦75,000", status: "Overdue", statusColor: "#FF4D6D", statusBg: "rgba(255,77,109,0.12)", avatarBg: "rgba(255,77,109,0.15)", avatarColor: "#FF4D6D" },
  { name: "Ngozi Catering", init: "NC", amount: "₦58,000", status: "Pending", statusColor: "#F5A623", statusBg: "rgba(245,166,35,0.12)", avatarBg: "rgba(0,196,140,0.15)", avatarColor: "#00C48C" },
];

export default function AppMockUp() {
  return (
    <div style={{ padding: "0 24px 100px", display: "flex", justifyContent: "center" }}>
      <div style={{
        background: "#10162A",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        width: "100%", maxWidth: "900px",
        padding: "32px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Top green line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #00C48C, transparent)",
        }} />

        {/* Window dots */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
          {["#FF4D6D", "#F5A623", "#00C48C"].map(color => (
            <div key={color} style={{ width: "10px", height: "10px", borderRadius: "50%", background: color }} />
          ))}
          <div style={{ marginLeft: "auto", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            paytrackng.com/dashboard
          </div>
        </div>

        {/* Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {MOCK_ROWS.map(row => (
            <div key={row.name} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "14px 18px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              {/* Client info */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: row.avatarBg, color: row.avatarColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 700,
                }}>
                  {row.init}
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>{row.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>Invoice · May 2026</div>
                </div>
              </div>

              {/* Amount + Status */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px", color: "#fff" }}>
                  {row.amount}
                </div>
                <div style={{
                  fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px",
                  color: row.statusColor, background: row.statusBg,
                }}>
                  {row.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}