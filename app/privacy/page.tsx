import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Fayllabs (faycallabs.com). How we handle contact emails, website data, and cookies.",
  openGraph: {
    title: "Privacy Policy | Fayllabs",
    description:
      "How Fayllabs handles personal information on faycallabs.com.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="lead">
            Last updated: October 23, 2026. This policy explains how Fayllabs
            handles information when you use {siteConfig.domain} or contact us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Who we are</h2>
          <p>
            Fayllabs operates the website {siteConfig.domain} and related digital
            products and online services. For privacy questions, contact{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Information we collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>
              <strong>Information you send us</strong> — when you email{" "}
              {siteConfig.email}, we receive your email address, message content,
              and any details you choose to include (for example name, company,
              or order information).
            </li>
            <li>
              <strong>Basic technical data</strong> — our hosting provider may
              automatically log standard server data such as IP address, browser
              type, pages requested, and timestamps. This is used for security,
              reliability, and diagnosing issues.
            </li>
          </ul>

          <h2>Cookies and analytics</h2>
          <p>
            This company website does not currently use third-party advertising
            cookies or marketing trackers. If we add analytics or other cookies
            later, we will update this policy to describe what is used and why.
            Essential cookies required for the site to function (for example
            security or preference cookies set by the hosting platform) may be
            present.
          </p>

          <h2>How we use information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Respond to inquiries, support requests, and business messages</li>
            <li>Operate, secure, and improve our website and digital services</li>
            <li>Meet legal or contractual obligations when required</li>
          </ul>
          <p>
            We do not sell your personal information. We do not share it with
            third parties for their own marketing.
          </p>

          <h2>Payments and processors</h2>
          <p>
            If you purchase digital products or services through Fayllabs or our
            online stores, payment may be processed by third-party payment
            providers. Those providers handle payment details according to their
            own privacy policies. Fayllabs does not store full payment card
            numbers on this website.
          </p>

          <h2>Data retention</h2>
          <p>
            Email and support correspondence is kept as long as needed to handle
            your request and maintain ordinary business records. Server logs are
            retained according to our hosting provider’s practices and our
            operational needs.
          </p>

          <h2>International visitors</h2>
          <p>
            Fayllabs serves customers worldwide. If you contact us from outside
            the country where our systems are hosted, your information may be
            processed in other locations as needed to provide our services.
          </p>

          <h2>Your choices</h2>
          <p>
            You may email us to ask what personal information we hold about you
            from correspondence, to request a correction, or to ask us to delete
            information that is not required for legal or legitimate business
            purposes. Contact{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Children</h2>
          <p>
            Our website and services are directed at adults and businesses. We
            do not knowingly collect personal information from children.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top will change when we do. Continued use of the
            site after updates means you acknowledge the revised policy.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
