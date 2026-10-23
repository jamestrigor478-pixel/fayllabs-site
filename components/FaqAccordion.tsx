"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    q: "How fast is delivery?",
    a: "Most digital purchases are delivered electronically soon after payment clears — typically by download link, license key, or account access sent to the email used at checkout. Exact timing can vary by product and payment method.",
  },
  {
    q: "What if something goes wrong with my order?",
    a: "Email bahria@faycallabs.com with your order details. Our Support & Refunds page explains eligible cases and how we handle access problems, technical faults, and billing questions.",
  },
  {
    q: "Do you serve international buyers?",
    a: "Yes. Fayllabs sells to customers worldwide. We communicate in English, French, and Arabic so buyers and partners can reach us clearly across regions.",
  },
  {
    q: "How do I contact support or ask about a partnership?",
    a: "Write to bahria@faycallabs.com. Use Contact for a quick overview of what to include, and Support for refunds and delivery issues.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-chevron" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="faq-a">
                <p>
                  {item.a.includes("Support & Refunds") ? (
                    <>
                      Email{" "}
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
                      with your order details. Our{" "}
                      <Link href="/support">Support &amp; Refunds</Link> page
                      explains eligible cases and how we handle access problems,
                      technical faults, and billing questions.
                    </>
                  ) : item.a.includes("Contact for a quick") ? (
                    <>
                      Write to{" "}
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                      . Use <Link href="/contact">Contact</Link> for a quick
                      overview of what to include, and{" "}
                      <Link href="/support">Support</Link> for refunds and
                      delivery issues.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
