"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    { q: "Is this masterclass really 100% free?", a: "Yes, absolutely free with no hidden charges. The Institute of Digital Studies runs this as a community initiative. You'll receive full live access plus a certificate — zero cost, zero catches, zero upsells." },
    { q: "Who is this masterclass designed for?", a: "Students, working professionals, business owners, freelancers, bloggers, and job seekers — anyone who wants to learn SEO from scratch or sharpen existing skills. No prior digital marketing knowledge required." },
    { q: "Will I receive a certificate after attending?", a: "Yes! Every attendee who participates in the live session receives a Certificate of Webinar Completion from IDS. Download it and add it directly to your LinkedIn profile, resume, or portfolio." },
    { q: "How do I join the session on April 12th?", a: "After registering, you'll receive a Google Meet link via WhatsApp and email before the event. Click the link at 11:00 AM on April 12th from any device — phone, laptop, or tablet." },
    { q: "Will there be a recording available?", a: "This is an exclusive live-only session. A recording is not guaranteed. We strongly encourage attending live so you can participate in the Q&A, ask your questions, and claim your certificate." },
    { q: "I'm a business owner — will this help my business?", a: "Absolutely. You'll learn to rank your website on Google, generate free organic traffic, dominate local search, and reduce dependence on expensive paid ads — all in 2 focused hours." },
    { q: "Is SEO still relevant with AI tools everywhere?", a: "More relevant than ever. AI generates content, but SEO is what makes that content get found on Google. SEO professionals who use AI tools are among the highest earners in digital marketing — this session covers that directly." },
  ];

  return (
    <div className="faq-section">
      <div className="faq-inner">
        <div className="section-tag" style={{ textAlign: "center" }}>Got Questions?</div>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px" }}>Frequently Asked <em>Questions</em></h2>
        
        {faqs.map((faq, i) => (
          <div className={`faq-item ${openIndex === i ? "open" : ""}`} key={i}>
            <div className="faq-q" onClick={() => toggle(i)}>
              {faq.q}
              <div className="faq-icon">+</div>
            </div>
            <div className="faq-a">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
