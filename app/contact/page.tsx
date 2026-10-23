import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Fayllabs at bahria@faycallabs.com for business inquiries, support, and payment onboarding questions.",
  openGraph: {
    title: "Contact Fayllabs",
    description:
      "Reach Fayllabs by email at bahria@faycallabs.com for business and support inquiries.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p className="lead">
            For business inquiries, customer support, payment onboarding, or
            general questions about Fayllabs digital products and online
            services, email us directly. We respond as promptly as we can.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-box">
          <div className="contact-item">
            <span>Business & general email</span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div className="contact-item">
            <span>Website</span>
            <a href={siteConfig.url}>{siteConfig.domain}</a>
          </div>
          <div className="contact-item">
            <span>What to include</span>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              Your name or company, how we can help, and any order or account
              details if your message is about a purchase or support request.
            </p>
          </div>
          <div className="contact-item">
            <span>Support & refunds</span>
            <p style={{ margin: 0, color: "var(--text-muted)" }}>
              See our{" "}
              <a href="/support" style={{ color: "var(--accent-hover)" }}>
                Support &amp; Refund Policy
              </a>{" "}
              for how we handle product questions and refund requests.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: "1.5rem" }}>
          <div className="cta-band">
            <div>
              <h2 style={{ marginBottom: "0.4rem" }}>Email Fayllabs</h2>
              <p>
                Prefer a one-click open? Use the button to start a message to{" "}
                {siteConfig.email}.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=Fayllabs%20inquiry`}
              className="btn btn-primary"
            >
              Email {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
