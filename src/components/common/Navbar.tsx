'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/posts', name: 'Posts' },
  { href: '/series', name: 'Series' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='ml-20 space-x-4 md:space-x-8'>
      {navLinks.map(({ href, name }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`text-sm hover:text-gray-900 ${
              isActive ? 'text-gray-900' : 'text-gray-500'
            }`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
