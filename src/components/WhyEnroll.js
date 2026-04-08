export default function WhyEnroll() {
  const reasons = [
    { num: "01", title: "Expert Insights from Industry Leaders", text: "Learn from someone actively running real campaigns — not theory from outdated textbooks or recycled YouTube content." },
    { num: "02", title: "Certificate of Completion", text: "Add a verified IDS certificate to your LinkedIn and resume. Recruiters and clients notice credentials backed by real training." },
    { num: "03", title: "Practical Strategies That Work", text: "Every tactic is tested on real websites. You'll leave with a personalised action plan you can implement the very next day." },
    { num: "04", title: "Live Q&A — Direct Trainer Access", text: "Ask Jitender directly about your website, niche, or career. Get personalised guidance that paid consultants charge thousands for." },
    { num: "05", title: "₹5,000+ Value — Absolutely Free", text: "Zero registration, zero upsell, zero catches. This is IDS's way of giving back to India's growing digital marketing community." },
    { num: "06", title: "Career & Business Growth Guaranteed", text: "Whether you're a student, professional, or entrepreneur — SEO skills from this session will directly and measurably impact your income." },
  ];

  return (
    <div className="why-section">
      <div className="why-inner">
        <div className="section-tag">Why Attend?</div>
        <h2 className="section-title">6 Reasons You <em>Can't</em> Skip This</h2>
        <div className="why-grid reveal">
          {reasons.map((reason, i) => (
            <div className="why-item" key={i}>
              <div className="why-num">{reason.num}</div>
              <div className="why-text">
                <h4>{reason.title}</h4>
                <p>{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
