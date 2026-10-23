import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import OfferingIcon from "@/components/OfferingIcon";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Fayllabs product lines: software licenses & keys, digital tools & utilities, online storefronts, and account-based digital services. Includes BoostCrown store.",
  openGraph: {
    title: "Products | Fayllabs",
    description:
      "Catalog of digital goods and online services sold by Fayllabs — licenses, tools, storefronts, and account-based services.",
    url: `${siteConfig.url}/products`,
  },
};

const lines = [
  {
    icon: "license" as const,
    title: "Software licenses & keys",
    lead: "Paid software access sold as a digital entitlement.",
    points: [
      "License keys or activation codes emailed after payment",
      "Clear product description before checkout — what the key unlocks",
      "Re-delivery help via email if a message is lost or delayed",
    ],
    visual: "key",
  },
  {
    icon: "tools" as const,
    title: "Digital tools & utilities",
    lead: "Applications and utilities that help people get work done online.",
    points: [
      "Downloadable software or browser-based access after purchase",
      "Tied to a specific SKU or plan — not open-ended consulting",
      "Support for access and how the tool is meant to work",
    ],
    visual: "tool",
  },
  {
    icon: "store" as const,
    title: "Online storefronts",
    lead: "E-commerce shops Fayllabs operates for digital goods.",
    points: [
      "Product listings, pricing, and checkout for worldwide buyers",
      "Electronic fulfillment — no warehouse or physical shipping",
      "Payment processed through established payment partners",
    ],
    visual: "shop",
  },
  {
    icon: "account" as const,
    title: "Account-based digital services",
    lead: "Services fulfilled by provisioning online account access.",
    points: [
      "Credentials or invites sent after successful payment",
      "Scope of access described on the product page before buy",
      "Email channel for delivery issues and refunds when eligible",
    ],
    visual: "account",
  },
];

function LineVisual({ kind }: { kind: string }) {
  if (kind === "key") {
    return (
      <svg className="line-visual" viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <rect x="12" y="20" width="176" height="80" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <rect x="28" y="40" width="90" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="48" cy="60" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M56 60h50M90 54v12M100 54v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="132" y="44" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
        <path d="M140 56h24M140 64h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "tool") {
    return (
      <svg className="line-visual" viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <rect x="40" y="18" width="120" height="84" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M40 34h120" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="52" cy="26" r="2.5" fill="currentColor" opacity="0.5" />
        <circle cx="62" cy="26" r="2.5" fill="currentColor" opacity="0.5" />
        <rect x="56" y="48" width="88" height="8" rx="1" fill="currentColor" opacity="0.12" />
        <rect x="56" y="64" width="64" height="8" rx="1" fill="currentColor" opacity="0.12" />
        <rect x="56" y="80" width="40" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }
  if (kind === "shop") {
    return (
      <svg className="line-visual" viewBox="0 0 200 120" fill="none" aria-hidden="true">
        <path d="M30 48h140l-10 52H40L30 48Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M26 36l8-12h132l8 12H26Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M80 100V72h40v28" stroke="currentColor" strokeWidth="1.5" />
        <rect x="50" y="58" width="28" height="20" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <rect x="122" y="58" width="28" height="20" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      </svg>
    );
  }
  return (
    <svg className="line-visual" viewBox="0 0 200 120" fill="none" aria-hidden="true">
      <rect x="50" y="22" width="100" height="76" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="52" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M72 86c5-12 14-18 28-18s23 6 28 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 36l8-6 8 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Products</span>
          <h1>What Fayllabs sells</h1>
          <p className="lead">
            Catalog-style detail for payment reviewers and visitors: the digital
            goods and online services behind our checkouts — without fake SKUs
            or invented prices.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0.5rem" }}>
        <div className="container">
          <div className="catalog-stack">
            {lines.map((line) => (
              <article className="catalog-block" key={line.title}>
                <div className="catalog-copy">
                  <div className="catalog-title-row">
                    <OfferingIcon name={line.icon} />
                    <h2>{line.title}</h2>
                  </div>
                  <p className="catalog-lead">{line.lead}</p>
                  <ul>
                    {line.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="catalog-visual">
                  <LineVisual kind={line.visual} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-header">
            <span className="kicker">Operated store</span>
            <h2>BoostCrown</h2>
            <p>
              An online store operated by Fayllabs for digital marketing tools
              and online growth services.
            </p>
          </div>

          <article className="portfolio-card">
            <div className="portfolio-visual" aria-hidden="true">
              <svg viewBox="0 0 280 160" fill="none" className="portfolio-svg">
                <rect x="8" y="8" width="264" height="144" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                <rect x="8" y="8" width="264" height="28" fill="currentColor" opacity="0.06" />
                <circle cx="24" cy="22" r="3" fill="currentColor" opacity="0.35" />
                <circle cx="36" cy="22" r="3" fill="currentColor" opacity="0.35" />
                <circle cx="48" cy="22" r="3" fill="currentColor" opacity="0.35" />
                <rect x="70" y="16" width="120" height="12" rx="2" fill="currentColor" opacity="0.1" />
                <rect x="28" y="52" width="100" height="72" rx="3" stroke="currentColor" strokeWidth="1.3" />
                <rect x="40" y="64" width="76" height="8" rx="1" fill="currentColor" opacity="0.12" />
                <rect x="40" y="80" width="56" height="6" rx="1" fill="currentColor" opacity="0.1" />
                <rect x="40" y="100" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <rect x="148" y="52" width="100" height="72" rx="3" stroke="currentColor" strokeWidth="1.3" />
                <rect x="160" y="64" width="76" height="8" rx="1" fill="currentColor" opacity="0.12" />
                <rect x="160" y="80" width="56" height="6" rx="1" fill="currentColor" opacity="0.1" />
                <rect x="160" y="100" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="portfolio-body">
              <p className="portfolio-kicker">Portfolio · live store</p>
              <h3>BoostCrown</h3>
              <p>
                BoostCrown is an online store operated by Fayllabs. It sells
                digital marketing tools and online growth services with
                electronic delivery after checkout — the same merchant model as
                our other digital storefronts.
              </p>
              <a
                className="btn btn-secondary"
                href="https://boostcrown.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit boostcrown.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <h2>Buying &amp; support</h2>
          <p>
            Purchases complete on the relevant storefront checkout. Delivery is
            electronic. For access problems, refunds, or billing questions, see{" "}
            <Link href="/support">Support &amp; Refunds</Link> or email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <p>
            Company background: <Link href="/about">About</Link>. Related
            overview: <Link href="/services">Services</Link>.
          </p>
        </div>

        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="contact-panel">
            <div>
              <h2>Product or partnership questions</h2>
              <p>
                Email{" "}
                <a className="email-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Contact Fayllabs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
