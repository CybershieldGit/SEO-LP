export default function Stats() {
  const stats = [
    { num: "500+", label: "Already Registered" },
    { num: "2 Hrs", label: "Packed Session" },
    { num: "₹0", label: "Registration Fee" },
    { num: "10+", label: "Live Strategies" },
    { num: "1", label: "Certificate Included" },
  ];

  return (
    <div className="stats-strip">
      {stats.map((stat, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
