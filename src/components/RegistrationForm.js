"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // API Configuration
  const API_URL = process.env.NEXT_PUBLIC_APP_API_URL;
  const MASTER_SEO_ENDPOINT = `${API_URL}/master-seo-leads/submit/`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Map form field names to API field names
    const payload = {
      full_name: data.name,
      phone: data.phone,
      email: data.email,
      role: data.role,
    };

    try {
      // 1. Call Django API to save to database
      const apiResponse = await fetch(MASTER_SEO_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(
          errorData.error || "Failed to register. Please try again."
        );
      }

      // 2. Netlify Forms submission (optional, for backup)
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

      setSuccess(true);
      e.target.reset();

      // Redirect to Thank You page after 2 seconds
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-card" id="register">
      <div className="card-title">Reserve Your Seat Now</div>
      <div className="card-subtitle">
        Join <strong>500+ learners</strong> already registered
      </div>

      <form name="webinar-registrations" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fieldName">Full Name</label>
          <input
            type="text"
            name="name"
            id="fieldName"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fieldPhone">WhatsApp Number</label>
          <input
            type="tel"
            name="phone"
            id="fieldPhone"
            placeholder="+91 00000 00000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fieldEmail">Email Address</label>
          <input
            type="email"
            name="email"
            id="fieldEmail"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fieldRole">Your Current Role</label>
          <select
            name="role"
            id="fieldRole"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="student">Student</option>
            <option value="working_professional">Working Professional</option>
            <option value="business_owner">Business Owner</option>
            <option value="freelancer">Freelancer</option>
            <option value="job_seeker">Job Seeker</option>
          </select>
        </div>

        {error && (
          <div
            style={{
              marginBottom: "14px",
              padding: "12px",
              background: "rgba(220, 38, 38, 0.15)",
              border: "1px solid rgba(220, 38, 38, 0.4)",
              borderRadius: "2px",
              textAlign: "center",
              fontSize: "14px",
              color: "#dc2626",
              fontWeight: "700",
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          className="form-submit"
          disabled={loading || success}
        >
          {success
            ? "You are Registered!"
            : loading
              ? "Submitting..."
              : "Register for FREE →"}
        </button>
      </form>

      <p className="form-trust">
        🔒 No spam. Your data is safe. <span>Pinky promise.</span>
      </p>

      {success && (
        <div
          id="reg-success-banner"
          style={{
            marginTop: "14px",
            padding: "14px",
            background: "rgba(39,174,96,.15)",
            border: "1px solid rgba(39,174,96,.4)",
            borderRadius: "2px",
            textAlign: "center",
            fontSize: "14px",
            color: "#2ecc71",
            fontWeight: "700",
            letterSpacing: ".5px",
          }}
        >
          Registered! Check WhatsApp & email for the Google Meet link.
          <br />
          <span style={{ fontWeight: "400", opacity: ".8" }}>
            See you on April 11th at 11 AM!
          </span>
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
