'use client';

import 'client-only';

import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export default function ClientLink({
  children,
  className,
  href,
}: Props): React.ReactElement {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
