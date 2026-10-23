import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Fayllabs website and digital products / online services.",
  openGraph: {
    title: "Terms of Service | Fayllabs",
    description: "Terms governing use of faycallabs.com and Fayllabs services.",
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Legal</span>
          <h1>Terms of Service</h1>
          <p className="lead">
            Last updated: October 23, 2026. These terms govern your use of the
            Fayllabs website ({siteConfig.domain}) and related digital products
            and online services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Agreement</h2>
          <p>
            By accessing {siteConfig.domain} or purchasing digital products or
            services from Fayllabs, you agree to these Terms of Service. If you
            do not agree, do not use the site or services.
          </p>

          <h2>Who we are</h2>
          <p>
            Fayllabs provides digital products, software tools, and online store
            / e-commerce offerings to customers worldwide. Business contact:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Use of the website</h2>
          <p>You agree to use this website only for lawful purposes. You must not:</p>
          <ul>
            <li>Attempt to disrupt, hack, or misuse the site or related systems</li>
            <li>Scrape or copy content at scale without permission</li>
            <li>Misrepresent your identity when contacting us or making purchases</li>
            <li>Use the site to send spam or abusive communications</li>
          </ul>

          <h2>Digital products and services</h2>
          <p>
            Descriptions of digital products, software tools, and online stores
            on this site are provided for information. Specific product terms,
            pricing, delivery method, and license or usage rules may appear at
            the point of purchase or on the relevant storefront. Where those
            conflict with this page for a particular purchase, the purchase-time
            terms apply to that purchase.
          </p>

          <h2>Accounts and access</h2>
          <p>
            If a product requires an account or access credentials, you are
            responsible for keeping them confidential and for activity under
            your account. Notify us promptly at {siteConfig.email} if you
            believe access has been compromised.
          </p>

          <h2>Payments</h2>
          <p>
            Payments for Fayllabs products or services may be processed by
            third-party payment providers. You agree to provide accurate billing
            information and authorize charges for the products or services you
            order. Chargebacks filed in bad faith may result in suspension of
            access where permitted by applicable rules.
          </p>

          <h2>Refunds and support</h2>
          <p>
            Refund and support handling is described in our{" "}
            <a href="/support">Support &amp; Refund Policy</a>. That policy
            forms part of these terms for purchases of Fayllabs digital products
            and services.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Site content, branding (including the Fayllabs name and logo mark),
            and our software and digital products remain the property of
            Fayllabs or our licensors. Purchasing a product grants you the
            usage rights stated for that product — not ownership of our
            trademarks or underlying source code unless expressly stated.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The website and services are provided on an “as is” and “as
            available” basis to the fullest extent permitted by law. We do not
            guarantee uninterrupted or error-free operation. Nothing in these
            terms excludes liability that cannot be excluded under applicable
            law.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Fayllabs is not liable for
            indirect, incidental, special, consequential, or punitive damages,
            or for loss of profits, data, or business opportunities arising from
            use of the site or services. Our total liability for any claim
            related to a purchase is limited to the amount you paid for that
            purchase, except where law requires otherwise.
          </p>

          <h2>Third-party links and services</h2>
          <p>
            The site may link to third-party websites or use third-party payment
            or hosting services. We are not responsible for their content or
            practices. Their terms and privacy policies apply to those services.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms. The “Last updated” date will change when
            we do. Continued use of the site after changes means you accept the
            updated terms. Material changes affecting existing purchases will be
            handled as required by applicable law and our support policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
