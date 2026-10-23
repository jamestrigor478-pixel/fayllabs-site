export default function LogoMark({ className = "logo-mark" }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.25"
          y="1.25"
          width="25.5"
          height="25.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 19.5V8.5h8.2M9 14h6.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}
