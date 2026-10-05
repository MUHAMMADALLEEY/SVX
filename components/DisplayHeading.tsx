import type {ReactNode} from 'react';

type DisplayHeadingProps = {
  as?: 'h1' | 'h2';
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'hero' | 'section' | 'compact';
};

export default function DisplayHeading({
  as: Tag = 'h2',
  children,
  className,
  id,
  variant = 'section',
}: DisplayHeadingProps) {
  const classes = [
    'display-heading',
    `display-heading--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} id={id}>
      {children}
    </Tag>
  );
}
