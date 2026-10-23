import type { ReactNode } from "react";

type IconName = "license" | "tools" | "store" | "account";

const paths: Record<IconName, ReactNode> = {
  license: (
    <>
      <rect x="5" y="7" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M5 12h22M11 7v5M21 7v5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 18h10M11 21.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  tools: (
    <>
      <path
        d="M18.5 8.5a5 5 0 0 0-6.8 6.8L6 20.9 9.1 24l5.6-5.7a5 5 0 0 0 6.8-6.8l-3.2 3.2-2.8-2.8 3-3.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  store: (
    <>
      <path
        d="M6 14h20l-1.5 12H7.5L6 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 10l2-4h18l2 4H5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M12 26v-7h8v7" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  account: (
    <>
      <circle cx="16" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M6.5 25c1.8-4.2 5.2-6.2 9.5-6.2S23.7 20.8 25.5 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.35" />
    </>
  ),
};

export default function OfferingIcon({ name }: { name: IconName }) {
  return (
    <span className="offering-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {paths[name]}
      </svg>
    </span>
  );
}
