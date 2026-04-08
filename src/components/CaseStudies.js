"use client";
import { useState } from "react";

export default function CaseStudies() {
  const [previews, setPreviews] = useState({});

  const handlePreview = (e, slotId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviews((prev) => ({ ...prev, [slotId]: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const cases = [
    {
      id: "slot1",
      title: "E-commerce Store · Delhi NCR",
      result1: "Page 1 in 45 Days",
      result2: "+320% Organic Traffic",
      text: "A fashion brand went from zero organic traffic to 12,000+ monthly visitors in under 2 months using on-page SEO and targeted keyword clustering — zero ad spend.",
      tags: ["On-Page SEO", "Keywords", "E-commerce"],
    },
    {
      id: "slot2",
      title: "Real Estate Agency · Noida",
      result1: "₹60K/mo Ads Saved",
      result2: "5x Lead Growth",
      text: "By fixing technical SEO and building local backlinks, this firm replaced ₹60,000/month in Google Ads with free organic leads — entirely within 60 days.",
      tags: ["Local SEO", "Backlinks", "Lead Gen"],
    },
    {
      id: "slot3",
      title: "EdTech Startup · Bengaluru",
      result1: "#1 Ranking · 40+ Keywords",
      result2: "8x Revenue",
      text: "An education startup ranked #1 for 40+ competitive keywords in 3 months using content clusters and technical SEO — resulting in 8x more course enrollments.",
      tags: ["Content SEO", "Technical SEO", "EdTech"],
    },
    {
      id: "slot4",
      title: "Your Success Story",
      result1: "Your Results Here",
      result2: null,
      text: "Upload a Google Search Console, Ahrefs, or Analytics screenshot to showcase your real campaign data. Click the image area above to add it.",
      tags: ["Add Screenshot", "Your Niche"],
      isPlaceholder: true,
    },
  ];

  return (
    <div className="case-section">
      <div className="case-inner">
        <div className="section-tag">Real Results · Proof It Works</div>
        <h2 className="section-title">Case Studies That <em>Speak</em><br />for Themselves</h2>
        <p className="section-body">These are real businesses and real websites that applied the exact SEO strategies taught in this masterclass. The numbers don't lie.</p>

        <div className="case-grid reveal">
          {cases.map((cs) => (
            <div className="case-card" key={cs.id}>
              <div className={`case-img-slot ${previews[cs.id] ? "loaded" : ""}`}>
                <input type="file" accept="image/*" onChange={(e) => handlePreview(e, cs.id)} />
                <span className="upload-icon">{cs.isPlaceholder ? "➕" : "📸"}</span>
                <div className="upload-hint">
                  <strong>{cs.isPlaceholder ? "Add Your Case Study" : "Upload Screenshot Here"}</strong>
                  <span>{cs.isPlaceholder ? "Click to upload your result screenshot" : "GSC / Ahrefs / Analytics proof"}</span>
                </div>
                {previews[cs.id] && <img src={previews[cs.id]} alt="Case Study Preview" />}
              </div>
              <div className="case-result-bar">
                <div className="case-result-pill"><span className="arr">↑</span> {cs.result1}</div>
                {cs.result2 && <div className="case-result-pill"><span className="arr">↑</span> {cs.result2}</div>}
              </div>
              <div className="case-body">
                <h4>{cs.title}</h4>
                <p>{cs.text}</p>
                <div className="case-tags">
                  {cs.tags.map((tag, i) => <span className="case-tag" key={i}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="case-add-note">💡 To add screenshots: click any image slot above and upload a PNG/JPG from your device. Images are displayed locally and not stored anywhere.</p>
      </div>
    </div>
  );
}
