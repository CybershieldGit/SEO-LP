export default function TrainerSection() {
  const stats = [
    { num: "500+", label: "Students Trained" },
    { num: "5+", label: "Years Experience" },
    { num: "30+", label: "Certifications" },
    { num: "100%", label: "Practical Focus" },
  ];

  return (
    <div className="trainer-section">
      <div className="trainer-inner">
        <div>
          <div className="trainer-img-box">
            <div className="trainer-placeholder">JS</div>
            <div className="trainer-tag">Digital Marketing Trainer</div>
          </div>
        </div>
        <div className="trainer-info reveal">
          <div className="section-tag">Your Instructor</div>
          <h2>Jitender<br />Singh</h2>
          <p className="trainer-role">Digital Marketing Trainer · IDS</p>
          <p className="trainer-bio">
            Jitender Singh is a hands-on digital marketing professional who has run successful SEO campaigns for businesses across e-commerce, real estate, education, and healthcare. As lead trainer at the Institute of Digital Studies, Noida, he breaks down complex SEO into immediately actionable steps — no jargon, no fluff. 500+ students have landed their first SEO job or client under his guidance.
          </p>
          <div className="trainer-stats">
            {stats.map((stat, i) => (
              <div className="t-stat" key={i}>
                <div className="t-stat-num">{stat.num}</div>
                <div className="t-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <a href="tel:09315471293" className="btn-primary">📞 Call: 09315471293</a>
        </div>
      </div>
    </div>
  );
}
