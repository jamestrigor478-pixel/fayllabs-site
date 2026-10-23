import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fayllabs — Digital Products & Online Services",
  description:
    "Fayllabs builds and sells digital products, operates online stores, and provides software tools to customers worldwide. Contact bahria@faycallabs.com.",
  openGraph: {
    title: "Fayllabs — Digital Products & Online Services",
    description:
      "Digital products, e-commerce stores, and software tools from Fayllabs.",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="kicker">Digital commerce company</span>
            <h1>We sell digital products and run online stores.</h1>
            <p className="lead">
              Fayllabs is a merchant of digital goods: software, tools, and
              online offerings sold worldwide with electronic delivery. We also
              operate e-commerce storefronts and support buyers by email —
              including multilingual communication for international customers
              and partners.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Contact Fayllabs
              </Link>
              <Link href="/services" className="btn btn-secondary">
                See what we offer
              </Link>
            </div>
          </div>

          <aside className="hero-aside" aria-label="At a glance">
            <p>
              Practical digital commerce — products people can buy and use,
              storefronts that check out cleanly, and software tools that support
              online work.
            </p>
            <p className="meta">
              Business email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p className="meta">Domain · {siteConfig.domain}</p>
          </aside>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-header">
            <span className="kicker">What we do</span>
            <h2>Three lines of work</h2>
            <p>
              No invented portfolios or vanity metrics — just the merchant
              activities Fayllabs actually runs.
            </p>
          </div>

          <div className="service-strip">
            <article className="service-row">
              <h3>Digital products</h3>
              <p>
                Software, tools, and digital offerings customers purchase online
                and receive electronically — downloads, licenses, or account
                access.
              </p>
            </article>
            <article className="service-row">
              <h3>Online stores</h3>
              <p>
                E-commerce storefronts for listing, pricing, checkout, and
                digital delivery to buyers worldwide.
              </p>
            </article>
            <article className="service-row">
              <h3>Software tools</h3>
              <p>
                Applications and utilities that help people and businesses get
                work done online, tied to our product lineup.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Policies</span>
            <h2>Trust &amp; legal</h2>
            <p>
              Clear pages for customers and payment partners. Substance first —
              no filler marketing cards.
            </p>
          </div>

          <ul className="policy-list">
            <li>
              <Link href="/privacy">
                Privacy Policy
                <span>How we handle contact and site data</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                Terms of Service
                <span>Rules for the site and purchases</span>
              </Link>
            </li>
            <li>
              <Link href="/support">
                Support &amp; Refunds
                <span>Help and when refunds may apply</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-panel">
            <div>
              <h2>Contact for business or support</h2>
              <p>
                Inquiries, payment onboarding questions, and customer support
                go to{" "}
                <a className="email-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Open contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
