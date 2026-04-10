"use client";

export default function ThankYouPage() {
  return (
    <main className="hero thank-you-hero">
      <div className="hero-left">
        <div className="hero-badge">✅ Registration Successful</div>
        <h1 className="hero-title">
          Thank You<br />
          <span className="accent">For Joining!</span><br />
          <span className="outline">See You Soon.</span>
        </h1>
        <p className="hero-sub">
          <strong>Your seat is reserved!</strong> We've sent the Google Meet link and event details to your email and WhatsApp.<br /><br />
          Mark your calendar for <strong>April 12th at 11:00 AM IST</strong>.
          In the meantime, join our community for exclusive resources.
        </p>
      </div>

      <div className="hero-right">
        <div className="thank-you-cta-container">
          <div className="cta-card-wrapper">
            <a href="https://www.youtube.com/@instituteofdigitalstudies" target="_blank" rel="noopener noreferrer" className="cta-card youtube-card">
              <div className="cta-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="cta-info">
                <h3>Join Us On YouTube</h3>
                <p>Subscribe for digital marketing tutorials & tips</p>
              </div>
              <div className="cta-status">Join 5K+</div>
            </a>
          </div>

          <div className="cta-card-wrapper">
            <a href="https://chat.whatsapp.com/BV4zxB4MzdDIN86aomJOvU" target="_blank" rel="noopener noreferrer" className="cta-card whatsapp-card">
              <div className="cta-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div className="cta-info">
                <h3>Join Our WhatsApp Community</h3>
                <p>Get exclusive resources & links</p>
              </div>
              <div className="cta-status">Join 2K+</div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .thank-you-hero {
          padding-top: 100px;
        }

        .thank-you-cta-container {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeLeft 0.8s 0.2s ease both;
        }

        .cta-card-wrapper {
          perspective: 1000px;
        }

        .cta-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .cta-card:hover::before {
          transform: translateX(100%);
        }

        .cta-card:hover {
          transform: translateY(-5px) rotateX(2deg);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--red);
          box-shadow: 0 15px 35px rgba(224, 31, 31, 0.15);
        }

        .cta-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .youtube-card .cta-icon { color: #ff0000; }
        .whatsapp-card .cta-icon { color: #25d366; }

        .cta-info h3 {
          font-family: var(--font-barlow-condensed), sans-serif;
          font-size: 18px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: white;
          margin-bottom: 2px;
        }

        .cta-info p {
          font-size: 13px;
          color: var(--grey);
          margin: 0;
        }

        .cta-status {
          margin-left: auto;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 8px;
          background: rgba(224, 31, 31, 0.15);
          color: var(--red);
          border-radius: 2px;
        }

        .whatsapp-card .cta-status {
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
        }

        @media (max-width: 900px) {
          .thank-you-hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 120px 20px 60px;
          }

          .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .thank-you-cta-container {
            margin: 0 auto;
          }

          .btn-secondary {
            margin: 0 auto;
          }
        }
      `}</style>
    </main>
  );
}
