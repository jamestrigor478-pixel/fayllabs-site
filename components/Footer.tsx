import Link from "next/link";
import { siteConfig } from "@/lib/site";
import LogoMark from "./LogoMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <LogoMark />
              Fayllabs
            </div>
            <p>
              Digital products, online stores, and software tools for customers
              worldwide. Support in English, French, and Arabic.
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/support">Support &amp; Refunds</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Fayllabs</span>
          <span>{siteConfig.domain}</span>
        </div>
      </div>
    </footer>
  );
}
