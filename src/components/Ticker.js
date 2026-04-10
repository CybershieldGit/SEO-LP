export default function Ticker() {
  const items = [
    "Free SEO Masterclass — 12th April",
    "Only 18 Seats Left — Closing Fast",
    "Certificate of Completion Included",
    "11 AM – 1 PM · Google Meet",
    "₹0 Registration — Zero Hidden Charges",
    "Trainer: Jitender Singh · SEO Expert",
  ];

  // Repeat items for seamless animation
  const tickerItems = [...items, ...items];

  return (
    <div className="fomo-ticker">
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
