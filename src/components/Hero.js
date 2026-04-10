import RegistrationForm from "./RegistrationForm";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-badge">🔥 One-Time Live Event · April 12th Only</div>
        <h1 className="hero-title">
          Master SEO.<br />
          <span className="accent">Get Found.</span><br />
          <span className="outline">Get Hired.</span>
          <span className="free-tag">FREE</span>
        </h1>
        <p className="hero-sub">
          <strong>A 2-hour live masterclass</strong> where you'll learn Advanced SEO from scratch —
          the skills that get websites ranked, get marketers hired, and get careers moving.
          Certification included.
        </p>
        <div className="hero-meta">
          <div className="hero-meta-pill">📅 12th April 2026</div>
          <div className="hero-meta-pill">⏰ 11:00 AM – 1:00 PM</div>
          <div className="hero-meta-pill">🎥 Google Meet</div>
          <div className="hero-meta-pill">🏅 Certificate Included</div>
        </div>
        <div className="hero-actions">
          <a href="#register" className="btn-primary">🚀 Claim My Free Seat</a>
          <a href="#scope" className="btn-secondary">Why SEO Matters ↓</a>
        </div>
      </div>
      <div className="hero-right">
        <RegistrationForm />
      </div>
    </div>
  );
}
