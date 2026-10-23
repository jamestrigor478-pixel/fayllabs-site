import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="logo" style={{ marginBottom: "0.75rem" }}>
            <span className="logo-mark" aria-hidden="true">
              F
            </span>
            Fayllabs
          </div>
          <p className="footer-copy" style={{ margin: "0 0 0.75rem" }}>
            Digital products &amp; online services ·{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support &amp; Refunds</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <p className="footer-copy">© {year} Fayllabs</p>
      </div>
    </footer>
  );
}
