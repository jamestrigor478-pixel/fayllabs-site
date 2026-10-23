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
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Fayllabs · faycallabs.com</span>
            <h1>Digital products, software tools, and online stores.</h1>
            <p className="lead">
              Fayllabs is a digital products and online services company. We
              create software and digital offerings, operate e-commerce
              storefronts, and serve customers worldwide with electronic
              delivery and email support.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Contact / Get in touch
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View services
              </Link>
            </div>
          </div>

          <aside className="hero-card" aria-label="Company highlights">
            <ul>
              <li>
                <span className="dot" aria-hidden="true" />
                <span>
                  Merchant of digital goods — software, tools, and online
                  offerings sold and delivered electronically
                </span>
              </li>
              <li>
                <span className="dot" aria-hidden="true" />
                <span>
                  Online stores with product listings, checkout, and digital
                  delivery for buyers worldwide
                </span>
              </li>
              <li>
                <span className="dot" aria-hidden="true" />
                <span>
                  Multilingual communication for international customers and
                  partners
                </span>
              </li>
              <li>
                <span className="dot" aria-hidden="true" />
                <span>
                  Business contact: {siteConfig.email}
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Fayllabs does</h2>
            <p>
              We focus on practical digital commerce: building products people
              can buy and use, running online stores, and shipping software
              tools that support online work.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <div className="card-icon" aria-hidden="true">
                01
              </div>
              <h3>Digital products</h3>
              <p>
                Software, tools, and digital offerings customers purchase online
                and receive electronically.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">
                02
              </div>
              <h3>E-commerce &amp; stores</h3>
              <p>
                Online storefronts for listing, selling, and delivering digital
                products and services.
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">
                03
              </div>
              <h3>Software tools</h3>
              <p>
                Applications and utilities that help people and businesses work
                online more effectively.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2>Trust &amp; policies</h2>
            <p>
              Clear legal and support pages for customers and payment partners —
              Privacy, Terms, and Support &amp; Refunds.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <h3>Privacy Policy</h3>
              <p>
                How we handle contact emails and website data. No invented legal
                addresses.
              </p>
              <p style={{ marginTop: "0.85rem" }}>
                <Link href="/privacy" style={{ color: "var(--accent-hover)" }}>
                  Read Privacy →
                </Link>
              </p>
            </article>
            <article className="card">
              <h3>Terms of Service</h3>
              <p>
                Rules for using faycallabs.com and purchasing Fayllabs digital
                products.
              </p>
              <p style={{ marginTop: "0.85rem" }}>
                <Link href="/terms" style={{ color: "var(--accent-hover)" }}>
                  Read Terms →
                </Link>
              </p>
            </article>
            <article className="card">
              <h3>Support &amp; Refunds</h3>
              <p>
                How to get help and when refunds may apply for digital
                purchases.
              </p>
              <p style={{ marginTop: "0.85rem" }}>
                <Link href="/support" style={{ color: "var(--accent-hover)" }}>
                  Read Support →
                </Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 style={{ marginBottom: "0.4rem" }}>Ready to talk?</h2>
              <p>
                Reach Fayllabs at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
                for business inquiries, payment onboarding, or support.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
