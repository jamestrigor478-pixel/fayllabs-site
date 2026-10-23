import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support & Refund Policy",
  description:
    "Fayllabs support and refund policy for digital products and online services. Contact bahria@faycallabs.com.",
  openGraph: {
    title: "Support & Refund Policy | Fayllabs",
    description:
      "How Fayllabs handles customer support and refund requests for digital products.",
    url: `${siteConfig.url}/support`,
  },
};

export default function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Trust &amp; support</span>
          <h1>Support &amp; Refund Policy</h1>
          <p className="lead">
            Last updated: October 23, 2026. This page explains how Fayllabs
            handles customer support and refund requests for digital products
            and online services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>How to get support</h2>
          <p>
            Email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with:
          </p>
          <ul>
            <li>Your name and the email used for the purchase (if any)</li>
            <li>Order or transaction reference when available</li>
            <li>A clear description of the issue or question</li>
            <li>Screenshots or error messages when relevant</li>
          </ul>
          <p>
            We aim to respond within a reasonable time during normal business
            handling. Complex technical issues may take longer while we
            investigate.
          </p>

          <h2>What we support</h2>
          <ul>
            <li>Access or delivery problems with digital products you purchased</li>
            <li>Questions about how a Fayllabs product or tool is meant to work</li>
            <li>Billing questions related to a Fayllabs purchase</li>
            <li>General business inquiries about our online services</li>
          </ul>

          <h2>Refund policy</h2>
          <p>
            Because digital products are delivered electronically, refunds are
            handled case by case. In general:
          </p>
          <ul>
            <li>
              <strong>Eligible situations</strong> — you did not receive access
              or delivery after payment; the product is materially not as
              described; a confirmed technical fault prevents reasonable use and
              we cannot provide a fix or suitable alternative within a
              reasonable time.
            </li>
            <li>
              <strong>Usually not eligible</strong> — change of mind after
              successful delivery and access; issues caused by incompatible
              devices or environments clearly disclosed before purchase; abuse,
              unauthorized sharing, or violation of product terms.
            </li>
          </ul>
          <p>
            To request a refund, email {siteConfig.email} with your order
            details and reason. If a refund is approved, it is issued through
            the original payment method or processor where possible. Timing
            depends on the payment provider.
          </p>

          <h2>Chargebacks</h2>
          <p>
            Please contact us first so we can help resolve delivery or billing
            issues. Opening a dispute with your bank or payment provider without
            contacting us may delay resolution. We cooperate with payment
            partners in good faith to resolve legitimate disputes.
          </p>

          <h2>Related pages</h2>
          <p>
            See also our <Link href="/privacy">Privacy Policy</Link>,{" "}
            <Link href="/terms">Terms of Service</Link>, and{" "}
            <Link href="/contact">Contact</Link> page.
          </p>

          <h2>Contact</h2>
          <p>
            Support:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
