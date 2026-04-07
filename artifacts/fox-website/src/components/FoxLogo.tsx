export function FoxLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M 5 22 A 15 15 0 0 0 35 22" fill="none" stroke="#FB461F" strokeWidth="3" strokeLinecap="round" />
      <path d="M 10 22 A 10 10 0 0 0 30 22" fill="none" stroke="#FB461F" strokeWidth="3" strokeLinecap="round" />
      <path d="M 15 22 A 5 5 0 0 0 25 22" fill="none" stroke="#FB461F" strokeWidth="3" strokeLinecap="round" />
      <rect x="5" y="22" width="30" height="26" rx="6" fill="#FB461F" />
      <text
        x="20"
        y="35"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="bold"
        fontSize="18"
      >
        F
      </text>
    </svg>
  );
}
