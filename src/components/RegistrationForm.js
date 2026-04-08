"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Use environment variable or fallback for development
  const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const payload = { ...data, timestamp: new Date().toISOString() };

    // 1. Netlify Forms submission
    const netlifyData = new URLSearchParams();
    netlifyData.append("form-name", "webinar-registrations");
    Object.entries(data).forEach(([key, value]) => {
      netlifyData.append(key, value);
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyData.toString(),
      });
    } catch (err) {
      console.warn("Netlify form post failed:", err);
    }

    // 2. Google Sheets sync
    if (GOOGLE_SHEET_URL && GOOGLE_SHEET_URL !== "YOUR_APPS_SCRIPT_WEB_APP_URL_HERE") {
      try {
        // Send as JSON string to match the user's doPost logic
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.warn("Google Sheet sync failed:", err);
      }
    }

    setLoading(false);
    setSuccess(true);
    e.target.reset();

    // Redirect to Thank You page
    router.push("/thank-you");
  };

  return (
    <div className="registration-card" id="register">
      <div className="card-title">Reserve Your Seat Now</div>
      <div className="card-subtitle">
        Join <strong>500+ learners</strong> already registered
      </div>

      <form name="webinar-registrations" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="webinar-registrations" />
        
        <div className="form-group">
          <label htmlFor="fieldName">Full Name</label>
          <input type="text" name="name" id="fieldName" placeholder="Enter your full name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="fieldPhone">WhatsApp Number</label>
          <input type="tel" name="phone" id="fieldPhone" placeholder="+91 00000 00000" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="fieldEmail">Email Address</label>
          <input type="email" name="email" id="fieldEmail" placeholder="your@email.com" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="fieldRole">Your Current Role</label>
          <select name="role" id="fieldRole" required defaultValue="">
            <option value="" disabled>Select your role</option>
            <option>Student</option>
            <option>Working Professional</option>
            <option>Business Owner</option>
            <option>Freelancer</option>
            <option>Job Seeker</option>
          </select>
        </div>
        
        <button type="submit" className="form-submit" disabled={loading || success}>
          {success ? "You are Registered!" : loading ? "Submitting..." : "Register for FREE →"}
        </button>
      </form>

      <p className="form-trust">
        🔒 No spam. Your data is safe. <span>Pinky promise.</span>
      </p>

      {success && (
        <div id="reg-success-banner" style={{
          marginTop: "14px",
          padding: "14px",
          background: "rgba(39,174,96,.15)",
          border: "1px solid rgba(39,174,96,.4)",
          borderRadius: "2px",
          textAlign: "center",
          fontSize: "14px",
          color: "#2ecc71",
          fontWeight: "700",
          letterSpacing: ".5px"
        }}>
          Registered! Check WhatsApp & email for the Google Meet link.<br />
          <span style={{ fontWeight: "400", opacity: ".8" }}>See you on April 11th at 11 AM!</span>
        </div>
      )}

      <div className="seats-bar">
        <div className="seats-label">
          <span>🔥 Seats Filling Fast</span>
          <span>82% Full</span>
        </div>
        <div className="seats-progress">
          <div className="seats-fill"></div>
        </div>
      </div>
    </div>
  );
}
