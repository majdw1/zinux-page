import React from "react";
import logo from "./assets/zinex-logo.png";

const WHATSAPP_NUMBER = "972527004686"; // intl format without +

const App = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const phoneDisplay = "052-700-4686";
  const phoneHref = phoneDisplay.replace(/-/g, "");

  return (
    <div className="app">
      {/* Navbar */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo-wrap">
            <img src={logo} alt="Zinex Digital Logo" className="nav-logo" />
          </div>
          <div className="nav-brand">
            <span className="nav-title">Zinex Digital</span>
            <span className="nav-tagline">
              Hybrid Luxury • AI-Powered Lead Studio
            </span>
          </div>
        </div>
        <div className="nav-right">
          <button onClick={() => scrollToSection("services")} className="nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="nav-link">
            Results
          </button>
          <button onClick={() => scrollToSection("process")} className="nav-link">
            Process
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
          <a href={`tel:${phoneHref}`} className="nav-cta">
            Call {phoneDisplay}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-bg-orbit" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="pill pill-gold">Premium Leads • Real Clients</p>
            <h1 className="hero-title">
              Hybrid Luxury Marketing
              <br />
              for{" "}
              <span className="hero-highlight">
                businesses that need more calls.
              </span>
            </h1>
            <p className="hero-subtitle">
              Zinex Digital blends <span>elite brand look</span> with{" "}
              <span>neon AI performance</span>. No fluff. We focus on one KPI:
              how many qualified people contact you this week.
            </p>
            <div className="hero-actions">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Zinex%20Digital,%20I%20need%20more%20leads`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                WhatsApp: I need leads
              </a>
              <button
                className="btn btn-ghost"
                onClick={() => scrollToSection("contact")}
              >
                Get free lead plan
              </button>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <span className="metric-number">+320%</span>
                <span className="metric-label">Avg. lead growth</span>
              </div>
              <div className="metric">
                <span className="metric-number">100+</span>
                <span className="metric-label">Launched campaigns</span>
              </div>
              <div className="metric">
                <span className="metric-number">3–7x</span>
                <span className="metric-label">Typical ROAS</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-orbit">
              <div className="logo-glow" />
              <img src={logo} alt="Zinex Neon Logo" className="hero-logo" />
              <div className="orbit-ring orbit-gold" />
              <div className="orbit-ring orbit-neon" />
              <div className="orbit-pulse" />
            </div>
            <div className="signal-card">
              <p className="signal-label">Live snapshot</p>
              <h3 className="signal-title">Leads Generated (Last 30 days)</h3>
              <div className="signal-row">
                <span className="signal-business">Local services</span>
                <span className="signal-number">184</span>
              </div>
              <div className="signal-row">
                <span className="signal-business">High-ticket</span>
                <span className="signal-number">72</span>
              </div>
              <div className="signal-row">
                <span className="signal-business">E‑commerce</span>
                <span className="signal-number">540</span>
              </div>
              <p className="signal-footnote">
                Data from Google / Meta / TikTok campaigns managed by Zinex Digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section" id="why">
        <div className="section-inner">
          <div className="section-head">
            <h2>Why brands choose Zinex Digital</h2>
            <p>
              You don’t need more “posts”. You need your{" "}
              <strong>WhatsApp and phone to stay active with real clients.</strong>
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card card-soft">
              <h3>Lead-first thinking</h3>
              <p>
                Every decision—creatives, targeting, landing pages—is filtered
                through one question: does this bring better leads?
              </p>
            </div>
            <div className="card card-soft">
              <h3>Hybrid luxury look</h3>
              <p>
                Your brand feels high-end with gold & deep black, while neon
                details keep it modern and tech-forward.
              </p>
            </div>
            <div className="card card-soft">
              <h3>Simple for you</h3>
              <p>
                We handle strategy, setup and optimization. You just respond to
                calls and messages from qualified people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section-inner">
          <div className="section-head">
            <h2>All-in-one performance stack</h2>
            <p>
              All the services you need to generate leads—in one partner, with
              one clear strategy.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card card-outline">
              <h3>Lead generation campaigns</h3>
              <p>
                Google, Meta and TikTok campaigns with offers crafted to make
                people contact you now—not “some day”.
              </p>
            </div>
            <div className="card card-outline">
              <h3>Landing pages & funnels</h3>
              <p>
                Fast, premium pages with WhatsApp, click‑to‑call and forms
                integrated to your CRM or email.
              </p>
            </div>
            <div className="card card-outline">
              <h3>SEO & visibility</h3>
              <p>
                Local SEO and content that helps you appear when high-intent
                clients search for your service.
              </p>
            </div>
            <div className="card card-outline">
              <h3>Automation & follow‑up</h3>
              <p>
                Auto‑messages, reminders and tagging so no hot lead is lost or
                forgotten.
              </p>
            </div>
            <div className="card card-outline">
              <h3>Creative & branding</h3>
              <p>
                Ad creatives, copy and visual identity that feel expensive but
                stay clear and simple.
              </p>
            </div>
            <div className="card card-outline">
              <h3>Consulting & strategy</h3>
              <p>
                Offer, pricing and positioning refinement to attract better
                clients who pay more and stay longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section" id="portfolio">
        <div className="section-inner">
          <div className="section-head">
            <h2>Selected lead stories</h2>
            <p>
              A few examples of how we turned ad spend into{" "}
              <strong>real conversations and deals.</strong>
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card card-glow">
              <span className="pill pill-mini">Local services</span>
              <h3>Home renovation brand • Tel Aviv</h3>
              <ul className="result-list">
                <li>184 leads in 30 days</li>
                <li>≈ 38 ₪ per qualified lead</li>
                <li>4.6× return on ad spend</li>
              </ul>
              <p className="card-note">
                Simple funnel: search ads + landing page + direct call &
                WhatsApp options.
              </p>
            </div>
            <div className="card card-glow">
              <span className="pill pill-mini">High-ticket</span>
              <h3>Law firm • Personal injury</h3>
              <ul className="result-list">
                <li>72 qualified inquiries / month</li>
                <li>3× more than previous agency</li>
                <li>9 booked consultations per week</li>
              </ul>
              <p className="card-note">
                Focus on high-intent keywords and trust-building design with
                clear proof and social proof.
              </p>
            </div>
            <div className="card card-glow">
              <span className="pill pill-mini">E‑commerce</span>
              <h3>Premium beauty brand</h3>
              <ul className="result-list">
                <li>3.2× blended ROAS</li>
                <li>540 new customers in 90 days</li>
                <li>Automated email + remarketing flows</li>
              </ul>
              <p className="card-note">
                Creative testing across Meta & TikTok, with retargeting that
                keeps the brand present without annoying people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" id="process">
        <div className="section-inner">
          <div className="section-head">
            <h2>Simple process. Fast launch.</h2>
            <p>No heavy meetings. No confusion. Just a clear path to more leads.</p>
          </div>
          <div className="grid grid-4 process-grid">
            <div className="step">
              <span className="step-number">1</span>
              <h3>15‑minute call</h3>
              <p>
                You share your business, market and goals. English / Hebrew /
                Arabic available.
              </p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>Custom lead map</h3>
              <p>
                We design your lead system: channels, budget and expected
                volume—explained in simple language.
              </p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Launch & optimize</h3>
              <p>
                We build your campaigns, pages and tracking, then optimize every
                week for cost per lead.
              </p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h3>You answer new clients</h3>
              <p>
                Your only job: answer calls & WhatsApp messages from people who
                already know what you offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-contact" id="contact">
        <div className="section-inner contact-inner">
          <div className="contact-copy">
            <p className="pill pill-gold">Let’s fill your pipeline</p>
            <h2>Ready for a clean, powerful lead system?</h2>
            <p>
              Tell us a few details about your business and we’ll send you a{" "}
              <strong>simple lead plan</strong>—no pressure, no long PDF,
              just clear numbers and next steps.
            </p>
            <div className="contact-direct">
              <a href={`tel:${phoneHref}`} className="contact-link">
                📞 Call now: {phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Zinex%20Digital,%20I%20want%20a%20lead%20plan`}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                💬 WhatsApp: Talk with Zinex
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Form submitted. Connect this form to your backend or a form service (Formspree, Getform, etc.)."
              );
            }}
          >
            <div className="field-row">
              <input className="input" type="text" placeholder="Your name" required />
              <input
                className="input"
                type="tel"
                placeholder="Phone / WhatsApp"
                required
              />
            </div>
            <input
              className="input"
              type="email"
              placeholder="Email (optional)"
            />
            <input
              className="input"
              type="text"
              placeholder="Your business (e.g. dentist, SaaS, e‑commerce)"
              required
            />
            <textarea
              className="input textarea"
              rows="4"
              placeholder="What do you want most right now? (e.g. more calls, more booked meetings, leads from US/EU/IL...)"
            />
            <button type="submit" className="btn btn-primary btn-full">
              Send & get my lead plan
            </button>
            <p className="form-note">
              Response within 24 hours on business days.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-title">Zinex Digital</span>
            <span className="footer-text">
              Hybrid luxury & neon AI performance studio focused on real leads,
              not vanity metrics.
            </span>
          </div>
          <div className="footer-right">
            <span className="footer-text small">WhatsApp / Call: {phoneDisplay}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-text xsmall">
            © {new Date().getFullYear()} Zinex Digital. All rights reserved.
          </span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Zinex%20Digital,%20I%20need%20more%20leads`}
        target="_blank"
        rel="noreferrer"
        className="wa-float"
      >
        <span className="wa-dot" />
        <span className="wa-text">Chat</span>
      </a>
    </div>
  );
};

export default App;