import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Fayllabs: a digital products and online services company serving customers worldwide with software, tools, and online stores.",
  openGraph: {
    title: "About Fayllabs",
    description:
      "Fayllabs builds and sells digital products, operates online stores, and provides software tools to customers worldwide.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">About</span>
          <h1>A digital merchant, plainly stated</h1>
          <p className="lead">
            Fayllabs builds software, creates digital tools, and operates online
            stores for customers around the world.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container about-grid">
          <div className="prose">
            <h2>What the company does</h2>
            <p>
              Fayllabs develops and sells digital products that customers can
              purchase and use online. That includes software tools, digital
              downloads, and related online offerings. We also run e-commerce /
              online storefronts where those products and services are listed,
              purchased, and delivered electronically.
            </p>
            <p>
              In short: we are a merchant of digital goods and online services —
              not a brick-and-mortar retailer. Our day-to-day work is creating
              products, operating stores, accepting payments through payment
              partners, and supporting buyers.
            </p>

            <h2>Who we serve</h2>
            <p>
              We serve individual customers and businesses worldwide who need
              digital products, software tools, or online purchases delivered
              electronically. Communication is multilingual so partners and
              customers can work with us clearly across regions.
            </p>

            <h2>How we work with partners</h2>
            <p>
              Fayllabs maintains this company website for business presence and
              for payment / merchant onboarding with providers such as
              Paymentwall and similar partners. Official business email:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              Domain: {siteConfig.domain}.
            </p>

            <h2>Honesty on this site</h2>
            <p>
              We do not list fake clients, fake reviews, invented office
              addresses, or fabricated statistics. For product categories, see{" "}
              <Link href="/products">Products</Link>. For a shorter overview, see{" "}
              <Link href="/services">Services</Link>. For purchases and issues,
              see <Link href="/support">Support &amp; Refund Policy</Link>. To
              reach us, use <Link href="/contact">Contact</Link>.
            </p>
          </div>

          <aside className="about-aside" aria-label="Company facts">
            <h3>At a glance</h3>
            <dl>
              <div>
                <dt>Focus</dt>
                <dd>Digital products, online stores, software tools</dd>
              </div>
              <div>
                <dt>Reach</dt>
                <dd>Customers worldwide · multilingual communication</dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>Electronic — download, license, or account access</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
