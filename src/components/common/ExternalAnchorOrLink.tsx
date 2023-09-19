import Link from 'next/link';

interface Props extends WithChildren, WithClassName {
  href: string;
}

export function ExternalAnchorOrLink({ children, href, ...props }: Props) {
  if (href.includes('https')) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
