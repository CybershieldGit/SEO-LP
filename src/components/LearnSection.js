export default function LearnSection() {
  const cards = [
    { icon: "🔍", title: "SEO Fundamentals", text: "How search engines crawl, index and rank pages — the essential foundation every digital marketer must master first." },
    { icon: "🔑", title: "Keyword Research", text: "Find high-volume, low-competition keywords using tools like Google Keyword Planner, Ubersuggest, and Ahrefs — for free." },
    { icon: "📄", title: "On-Page SEO", text: "Optimize titles, meta descriptions, headings, image tags, and URL structures to rank higher without spending a rupee on ads." },
    { icon: "🔗", title: "Off-Page & Backlinks", text: "Build authority through ethical link-building, guest posting, and DA improvements that Google genuinely trusts." },
    { icon: "⚡", title: "Technical SEO", text: "Fix crawl errors, boost site speed, improve Core Web Vitals and mobile UX to leapfrog competitors overnight." },
    { icon: "📊", title: "SEO Analytics", text: "Track rankings, traffic, and conversions using Google Search Console and Analytics like a data-driven pro." },
  ];

  return (
    <section id="learn">
      <div className="section-tag">Curriculum Overview</div>
      <h2 className="section-title">What You'll <em>Master</em> in 2 Hours</h2>
      <p className="section-body">Live, practical, zero fluff. Every topic is something you can apply to your website or client's business the very next day.</p>
      <div className="learn-grid reveal">
        {cards.map((card, i) => (
          <div className="learn-card" key={i}>
            <div className="learn-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
