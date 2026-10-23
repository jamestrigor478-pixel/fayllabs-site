import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fayllabs merchant services: digital product sales, e-commerce storefronts, and software tools for customers worldwide.",
  openGraph: {
    title: "Services | Fayllabs",
    description:
      "How Fayllabs operates as a digital goods merchant — products, stores, and tools.",
    url: `${siteConfig.url}/services`,
  },
};

const services = [
  {
    title: "Digital product sales",
    body: "We sell software licenses and keys, digital tools, and account-based offerings. Customers pay online and receive electronic delivery. See the Products catalog for category detail.",
  },
  {
    title: "E-commerce / online stores",
    body: "We operate online storefronts — product listings, pricing, checkout, and digital delivery to buyers worldwide. One example is BoostCrown, a store Fayllabs runs for digital marketing tools and online growth services.",
  },
  {
    title: "Software tools",
    body: "We build and sell utilities and applications connected to our digital product lineup — tools people purchase and use for online work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Services</span>
          <h1>How Fayllabs operates as a merchant</h1>
          <p className="lead">
            The business activities behind our checkouts. For shelf-level
            categories and visuals, see{" "}
            <Link href="/products" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}>
              Products
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1.25rem" }}>
        <div className="container">
          <div className="service-stack">
            {services.map((service) => (
              <article className="service-block" key={service.title}>
                <h2>{service.title}</h2>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <h2>Customers and delivery</h2>
          <p>
            Our customers are people and organizations worldwide who purchase
            digital products or use our online services. Delivery is electronic
            (download, license, or account access). We communicate in English,
            French, and Arabic. Support and refund handling are on our{" "}
            <Link href="/support">Support &amp; Refund Policy</Link> page.
          </p>
          <p>
            For partnership, payment onboarding, or product questions, contact{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
            visit <Link href="/contact">Contact</Link>.
          </p>
        </div>

        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="contact-panel">
            <div>
              <h2>Business inquiries</h2>
              <p>
                Email{" "}
                <a className="email-link" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>{" "}
                for merchant, partnership, or product questions.
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
