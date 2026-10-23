/** Decorative CSS/SVG storefront mock — not a live shop. */
export default function StorefrontMock() {
  return (
    <div className="storefront-mock" aria-hidden="true">
      <div className="sf-chrome">
        <span className="sf-dot" />
        <span className="sf-dot" />
        <span className="sf-dot" />
        <div className="sf-url">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1.2a2.4 2.4 0 0 0-1.7 4.1l-.9.9a.6.6 0 0 0 .85.85l.9-.9A2.4 2.4 0 1 0 5 1.2Zm0 1.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
              fill="currentColor"
            />
          </svg>
          store.faycallabs.com
        </div>
      </div>
      <div className="sf-body">
        <div className="sf-shelf-label">Digital shelf</div>
        <div className="sf-grid">
          <article className="sf-card">
            <div className="sf-card-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 14h28M14 8v6M26 8v6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 22h12M14 26h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <h4>License key</h4>
            <p>Software access · email delivery</p>
            <span className="sf-tag">Digital</span>
          </article>
          <article className="sf-card">
            <div className="sf-card-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="8" y="10" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M13 26c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <h4>Account access</h4>
            <p>Provisioned online · secure handoff</p>
            <span className="sf-tag">Service</span>
          </article>
          <article className="sf-card">
            <div className="sf-card-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M10 28V12l10-4 10 4v16l-10 4-10-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M20 8v24M10 12l10 4 10-4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <h4>Utility tool</h4>
            <p>Download or web app · instant</p>
            <span className="sf-tag">Tool</span>
          </article>
          <article className="sf-card sf-card-muted">
            <div className="sf-card-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="7" y="12" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 18h26M13 12v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <h4>Storefront</h4>
            <p>Checkout · worldwide buyers</p>
            <span className="sf-tag">Shop</span>
          </article>
        </div>
        <div className="sf-checkout">
          <div className="sf-checkout-bar">
            <span>Secure checkout</span>
            <span className="sf-checkout-pill">Electronic delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
