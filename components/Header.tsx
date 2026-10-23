"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark" aria-hidden="true">
              F
            </span>
            Fayllabs
          </Link>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-primary nav-cta">
            Get in touch
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        <div
          id="mobile-nav"
          className={`mobile-nav${open ? " open" : ""}`}
          hidden={!open}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
