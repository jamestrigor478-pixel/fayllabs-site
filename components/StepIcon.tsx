import type { ReactNode } from "react";

type Step = 1 | 2 | 3 | 4;

export default function StepIcon({ step }: { step: Step }) {
  const icons: Record<Step, ReactNode> = {
    1: (
      <path
        d="M8 10h16v14H8V10Zm4-3h8v3H12V7Zm2 8h8M14 22h5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    ),
    2: (
      <>
        <rect x="7" y="11" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M11 11V9a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="17" r="1.6" fill="currentColor" />
      </>
    ),
    3: (
      <>
        <path
          d="M8 20l4-8h8l4 8H8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path d="M16 8v4M12 14h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 23l3 2.5 3-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
    4: (
      <>
        <rect x="6" y="9" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 13h20M10 18h8M10 21h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <span className="step-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        {icons[step]}
      </svg>
    </span>
  );
}
