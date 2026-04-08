export default function ScopeSection() {
  const scopeItems = [
    { icon: "📈", title: "Explosive Market Demand", text: "The global SEO industry is worth $122 Billion+ in 2025 and growing 17% annually. Indian businesses alone spend ₹8,000+ crore on SEO — and they're struggling to find skilled talent." },
    { icon: "💼", title: "Jobs Are Everywhere", text: "LinkedIn India lists 85,000+ active SEO job openings at any given time. From startups to MNCs — everyone needs SEO. Freshers land ₹3–5 LPA with zero experience after the right training." },
    { icon: "🌐", title: "Freelancing Gold Mine", text: "Freelance SEO consultants in India charge ₹15,000–₹80,000 per client/month. With just 3–5 clients you can earn more than most salaried jobs — from home, on your own schedule." },
    { icon: "🏢", title: "Business Owners Win Big", text: "Page 1 of Google gets 91% of all clicks. SEO delivers 5x better ROI than paid ads. Mastering it means cutting ₹50,000+/month in ad spend and owning your traffic permanently." },
    { icon: "🤖", title: "AI Makes SEO More Valuable", text: "Despite AI, Google still depends on human-optimized signals. SEO professionals who use AI tools earn 2x more. This masterclass covers modern AI-powered SEO workflows." },
    { icon: "🚀", title: "Fast Learning-to-Earning Curve", text: "Unlike coding, SEO has a rapid income curve. IDS students have landed their first client or job within 30–60 days of learning these exact strategies. This session is your starting pistol." }
  ];

  const salaries = [
    { role: "SEO Executive", exp: "0–1 Year (Fresher)", salary: "₹2.5 – ₹4.5 LPA", freelance: "₹15,000 – ₹25,000" },
    { role: "SEO Analyst", exp: "1–3 Years", salary: "₹4.5 – ₹7 LPA", freelance: "₹25,000 – ₹50,000" },
    { role: "SEO Manager", exp: "3–5 Years", salary: "₹7 – ₹14 LPA", freelance: "₹50,000 – ₹1,20,000" },
    { role: "SEO Consultant", exp: "5+ Years", salary: "₹14 – ₹25 LPA", freelance: "₹1,00,000 – ₹3,00,000" },
    { role: "Digital Marketing Head", exp: "7+ Years", salary: "₹20 – ₹40 LPA", freelance: "Unlimited (Agency)" },
  ];

  const demands = [
    { num: "93%", label: "Online journeys start on Google" },
    { num: "85K+", label: "Active SEO jobs on LinkedIn India" },
    { num: "$122B", label: "Global SEO industry value 2025" },
    { num: "5x", label: "Better ROI vs paid advertising" },
    { num: "91%", label: "Clicks go to Page 1 results only" },
  ];

  return (
    <div className="scope-section" id="scope">
      <div className="scope-inner">
        <div className="section-tag">The SEO Opportunity in 2025</div>
        <h2 className="section-title">SEO Is The <em>Hottest</em><br />Skill of The Decade</h2>
        <p className="section-body">93% of online experiences begin with a search engine. Businesses are desperate for people who can get them found on Google. That person could be YOU — after this masterclass.</p>

        <div className="scope-grid reveal">
          {scopeItems.map((item, i) => (
            <div className="scope-card" key={i}>
              <div className="scope-card-bg">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="section-tag" style={{ marginTop: 0 }}>Earning Potential</div>
        <h2 className="section-title" style={{ marginBottom: "28px" }}>What SEO Professionals <em>Earn</em> in India</h2>
        
        <div className="salary-table-wrap reveal">
          <table className="salary-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Experience</th>
                <th>Avg. Annual Salary</th>
                <th>Freelance / Month</th>
              </tr>
            </thead>
            <tbody>
              {salaries.map((row, i) => (
                <tr key={i}>
                  <td className="role-name">{row.role}</td>
                  <td>{row.exp}</td>
                  <td className="salary-num">{row.salary}</td>
                  <td className="salary-num">{row.freelance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="demand-row reveal">
          {demands.map((demand, i) => (
            <div className="demand-box" key={i}>
              <div className="demand-num">{demand.num}</div>
              <div className="demand-label">{demand.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
