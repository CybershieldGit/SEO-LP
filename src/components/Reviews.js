export default function Reviews() {
  const reviews = [
    { name: "Rahul Patel", role: "Freelance SEO Consultant, Delhi", initial: "RP", text: "Within 3 weeks of applying what Jitender taught, my client's website jumped from Page 5 to Position 2 on Google. I've attended paid SEO courses that didn't give me this much practical value. Absolutely incredible for a free class!" },
    { name: "Sneha Kapoor", role: "E-commerce Business Owner, Noida", initial: "SK", text: "I was a total beginner — didn't even know what a meta tag was. By the end of the session I had a full SEO audit of my site done! The live Q&A was a game-changer. Got the certificate the same day. Highly recommended for everyone!" },
    { name: "Aarav Mehta", role: "Digital Marketing Executive, Mumbai", initial: "AM", text: "Best free webinar I've ever attended. No fluff — pure actionable SEO. Got the certificate, added it to LinkedIn, and landed a job interview the following week. IDS delivers real value without charging a single rupee." },
    { name: "Vikram Rathore", role: "Restaurant Owner, Gurugram", initial: "VR", text: "As a business owner with no marketing background, SEO always felt overwhelming. Jitender made it so simple and practical. I stopped spending ₹40K/month on Google Ads after implementing just 3 of his on-page techniques. The ROI is insane." },
    { name: "Priya Desai", role: "Content Marketer, Pune", initial: "PD", text: "I had already taken a ₹15,000 SEO course elsewhere. Honestly, this free 2-hour session covered more ground and was far more practical. Jitender's examples were all current, real-world, and immediately usable. Worth every minute of my time." },
    { name: "Karan Sharma", role: "Freelance SEO Specialist, Jaipur", initial: "KS", text: "Landed my first freelance SEO client within 45 days of this masterclass. The keyword research section alone was worth 10x any paid course. I now charge ₹25,000/month per client. This webinar was literally my turning point. Thank you IDS!" },
  ];

  const videos = [
    { name: "Rahul's Journey", role: "Page 1 in 3 Weeks" },
    { name: "Sneha's Story", role: "Zero to SEO Pro" },
    { name: "Vikram's Win", role: "Saved ₹40K/mo in Ads" },
    { name: "Karan's First Client", role: "₹25K/mo in 45 Days" },
    { name: "Meera's Agency", role: "18 Backlinks in 1 Month" },
  ];

  return (
    <div className="reviews-section">
      <div className="reviews-inner">
        <div className="section-tag">Student Reviews</div>
        <h2 className="section-title" style={{ marginBottom: "10px" }}>Real People. <em>Real Results.</em></h2>
        <p className="section-body" style={{ marginBottom: "44px" }}>Hear from past IDS webinar attendees who applied what they learned and transformed their careers and businesses.</p>
        
        <div className="reviews-grid reveal">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-quote">"</div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-role">{r.role}</div>
                  <div className="review-badge">✅ Verified Attendee</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "44px" }}>
          <div className="section-tag">Video Testimonials</div>
          <div className="video-row">
            {videos.map((v, i) => (
              <div className="video-pill" key={i}>
                <div className="video-play">▶</div>
                <div className="video-info">
                  <div className="vname">{v.name}</div>
                  <div className="vrole">{v.role}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,.2)", marginTop: "10px", letterSpacing: ".5px" }}>
            🎥 Replace these with real YouTube or Vimeo embed links
          </p>
        </div>
      </div>
    </div>
  );
}
