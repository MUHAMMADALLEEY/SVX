type BrandLogoProps = {
  className?: string;
  title?: string;
};

export function BrandLogo({ className = "h-8 w-auto", title = "SportsVentureX" }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 112"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M17 18h89l12 19H55l-7 8v9h57l14 18v19l-16 17H15L1 89h68l7-9V70H20L6 54V36z"
      />
      <path fill="currentColor" d="M121 18h27l38 61 38-61h27l-51 92h-29z" />
      <path fill="var(--blue, #086dff)" d="M246 18h31l25 30 26-30h31l-42 47h-29z" />
      <path fill="var(--orange, #ff4c18)" d="M287 74h29l43 36h-31l-26-29-25 29h-31z" />
    </svg>
  );
}

export default BrandLogo;
