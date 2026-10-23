import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fayllabs services for worldwide customers: digital products, e-commerce online stores, and software tools.",
  openGraph: {
    title: "Services | Fayllabs",
    description:
      "Digital products, online stores, and software tools from Fayllabs for customers worldwide.",
    url: `${siteConfig.url}/services`,
  },
};

const services = [
  {
    title: "Digital products",
    body: "We create and sell digital products — software, tools, and downloadable or account-based offerings. Customers pay online and receive electronic delivery or access. This is our core merchant activity.",
  },
  {
    title: "E-commerce / online stores",
    body: "We operate online stores and digital storefronts: product listings, pricing, checkout, and delivery of digital goods. Stores are used by customers worldwide who buy online.",
  },
  {
    title: "Software tools",
    body: "We build software tools that help people and businesses get work done online — utilities and applications connected to our digital product lineup and customer workflows.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Digital products &amp; online services</h1>
          <p className="lead">
            Fayllabs is a digital merchant. Below is a concrete, high-level
            description of what we sell and operate — without invented case
            studies or fake client logos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          {services.map((service, index) => (
            <article className="card" key={service.title}>
              <div className="card-icon" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <h2>Customers and delivery</h2>
          <p>
            Our customers are people and organizations worldwide who purchase
            digital products or use our online services. Delivery is electronic
            (download, license, or account access). Support and refund handling
            are described on our{" "}
            <Link href="/support">Support &amp; Refund Policy</Link> page.
          </p>
          <p>
            For partnership, payment onboarding, or product questions, contact{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
            visit <Link href="/contact">Contact</Link>.
          </p>
        </div>

        <div className="container" style={{ marginTop: "1.75rem" }}>
          <div className="cta-band">
            <div>
              <h2 style={{ marginBottom: "0.4rem" }}>Business inquiries</h2>
              <p>
                Email{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
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
