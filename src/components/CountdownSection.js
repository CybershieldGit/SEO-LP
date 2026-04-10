"use client";
import { useState, useEffect } from "react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", mins: "00", secs: "00", live: false });

  useEffect(() => {
    const target = new Date('2026-04-11T11:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      
      if (diff <= 0) {
        setTimeLeft({ ...timeLeft, live: true });
        clearInterval(timer);
        return;
      }
      
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        mins: String(m).padStart(2, '0'),
        secs: String(s).padStart(2, '0'),
        live: false
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fomo-section">
      <h2>⚠️ Registrations Close in...</h2>
      <p>This is a ONE-TIME live event. No replay. No second chance. Every minute you wait is a seat someone else is claiming.</p>
      
      <div className="countdown" id="countdown">
        {timeLeft.live ? (
          <div style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "32px" }}>
            LIVE NOW - Join on Google Meet!
          </div>
        ) : (
          <>
            <div className="count-box"><span className="count-num">{timeLeft.days}</span><span className="count-label">Days</span></div>
            <div className="count-box"><span className="count-num">{timeLeft.hours}</span><span className="count-label">Hours</span></div>
            <div className="count-box"><span className="count-num">{timeLeft.mins}</span><span className="count-label">Minutes</span></div>
            <div className="count-box"><span className="count-num">{timeLeft.secs}</span><span className="count-label">Seconds</span></div>
          </>
        )}
      </div>

      <div className="spots-alert">
        <div className="pulse-dot"></div>
        Only <strong>&nbsp;18 Seats&nbsp;</strong> Remaining Out of 500
      </div>
      <br /><br />
      <a href="#register" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex" }}>
        🔥 Secure My Seat Before It's Gone
      </a>
    </div>
  );
}
