import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import StorefrontMock from "@/components/StorefrontMock";
import OfferingIcon from "@/components/OfferingIcon";
import StepIcon from "@/components/StepIcon";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Fayllabs — Digital Products & Online Services",
  description:
    "Fayllabs sells digital products worldwide: software licenses & keys, digital tools, online storefronts, and account-based services — with electronic delivery and email support.",
  openGraph: {
    title: "Fayllabs — Digital Products & Online Services",
    description:
      "Browse what Fayllabs sells: digital goods, tools, storefronts, and electronic delivery for buyers worldwide.",
    url: siteConfig.url,
  },
};

const offerings = [
  {
    name: "license" as const,
    title: "Software licenses & keys",
    blurb:
      "Paid access to software sold as license keys or activation codes, delivered to the buyer’s email after checkout.",
  },
  {
    name: "tools" as const,
    title: "Digital tools & utilities",
    blurb:
      "Practical apps and utilities for online work — downloads or web-based access tied to a clear purchase.",
  },
  {
    name: "store" as const,
    title: "Online storefronts",
    blurb:
      "E-commerce shops we operate for listing digital goods, taking payment, and handing off delivery electronically.",
  },
  {
    name: "account" as const,
    title: "Account-based digital services",
    blurb:
      "Services fulfilled by provisioning account access or credentials after a successful online payment.",
  },
];

const steps = [
  {
    n: 1 as const,
    title: "Choose a product",
    body: "Pick a digital offering from a Fayllabs storefront or catalog — licenses, tools, or account-based services.",
  },
  {
    n: 2 as const,
    title: "Secure checkout",
    body: "Pay through our payment partners. Cards and supported methods are processed on secure checkout pages.",
  },
  {
    n: 3 as const,
    title: "Electronic delivery",
    body: "Receive a download link, license key, or account access by email — no physical shipping.",
  },
  {
    n: 4 as const,
    title: "Email support",
    body: "Questions or delivery issues go to bahria@faycallabs.com. Refunds are covered on Support.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout hero-layout-visual">
          <div className="hero-copy">
            <span className="kicker">Digital commerce · worldwide</span>
            <h1>A storefront for digital goods people actually buy.</h1>
            <p className="lead">
              Fayllabs is a merchant of digital products: software licenses and
              keys, tools and utilities, online storefronts, and account-based
              services. Buyers check out online and receive electronic delivery —
              with email support in English, French, and Arabic.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">
                Browse products
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Fayllabs
              </Link>
            </div>
          </div>
          <StorefrontMock />
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-header section-header-wide">
            <span className="kicker">Featured offerings</span>
            <h2>What shoppers find on our shelves</h2>
            <p>
              Concrete categories — not vague “we do digital.” Catalog detail
              lives on <Link href="/products">Products</Link>.
            </p>
          </div>

          <div className="offering-grid">
            {offerings.map((o) => (
              <article className="offering-card" key={o.title}>
                <OfferingIcon name={o.name} />
                <h3>{o.title}</h3>
                <p>{o.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <div className="section-header">
            <span className="kicker">How buying works</span>
            <h2>From cart to inbox</h2>
            <p>
              A simple path payment partners and buyers can verify — choose,
              pay, receive, get help.
            </p>
          </div>

          <ol className="steps-strip">
            {steps.map((s) => (
              <li className="step-card" key={s.n}>
                <div className="step-top">
                  <StepIcon step={s.n} />
                  <span className="step-num">0{s.n}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="worldwide-strip">
            <div className="worldwide-copy">
              <span className="kicker">Worldwide</span>
              <h2>Built for international buyers</h2>
              <p>
                Fayllabs sells digital goods to customers across regions.
                Support and business mail are handled in{" "}
                <strong>English</strong>, <strong>French</strong>, and{" "}
                <strong>Arabic</strong> — so partners and shoppers can write in
                the language that works for them.
              </p>
            </div>
            <ul className="lang-pills" aria-label="Languages we support">
              <li>
                <span className="lang-code">EN</span>
                English
              </li>
              <li>
                <span className="lang-code">FR</span>
                Français
              </li>
              <li>
                <span className="lang-code">AR</span>
                العربية
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container faq-layout">
          <div className="section-header">
            <span className="kicker">FAQ</span>
            <h2>Quick answers</h2>
            <p>
              Delivery, refunds, and how to reach us. Full policy on{" "}
              <Link href="/support">Support</Link>.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <blockquote className="pull-quote">
            <p>
              “Digital goods, clear checkout, electronic delivery, and a real
              inbox for support — that is the merchant story we stand behind.”
            </p>
            <cite>— Fayllabs</cite>
          </blockquote>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-panel">
            <div>
              <h2>Contact for business or support</h2>
              <p>
                Inquiries, payment onboarding, and customer support:{" "}
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

          <ul className="policy-list quiet-legal">
            <li>
              <Link href="/privacy">
                Privacy Policy
                <span>Contact &amp; site data</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                Terms of Service
                <span>Site &amp; purchases</span>
              </Link>
            </li>
            <li>
              <Link href="/support">
                Support &amp; Refunds
                <span>Help &amp; eligibility</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
