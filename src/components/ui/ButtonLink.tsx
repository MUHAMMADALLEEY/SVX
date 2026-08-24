type ButtonLinkProps = {
  href: string;
  children: string;
  variant?: "dark" | "light";
};

export function ButtonLink({ href, children, variant = "dark" }: ButtonLinkProps) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}
