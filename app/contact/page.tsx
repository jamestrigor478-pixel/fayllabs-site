import type { Metadata } from "next";
import Link from "next/link";
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
          <span className="kicker">Contact</span>
          <h1>Write to Fayllabs</h1>
          <p className="lead">
            For business inquiries, customer support, payment onboarding, or
            questions about our digital products and online services, email us
            directly. We respond as promptly as we can.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1.25rem" }}>
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="label">Business &amp; general email</span>
            <a className="value" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
          <div className="contact-card">
            <span className="label">Website</span>
            <a className="value" href={siteConfig.url}>
              {siteConfig.domain}
            </a>
          </div>
          <div className="contact-card">
            <span className="label">What to include</span>
            <p>
              Your name or company, how we can help, and any order or account
              details if your message is about a purchase or support request.
            </p>
          </div>
          <div className="contact-card">
            <span className="label">Support &amp; refunds</span>
            <p>
              See our{" "}
              <Link className="inline" href="/support">
                Support &amp; Refund Policy
              </Link>{" "}
              for how we handle product questions and refund requests.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: "1.75rem" }}>
          <div className="contact-panel">
            <div>
              <h2>Email Fayllabs</h2>
              <p>
                Open your mail client with a pre-filled address to{" "}
                {siteConfig.email}.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=Fayllabs%20inquiry`}
              className="btn btn-primary"
            >
              Compose email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
