'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Props {
  href: string;
  pageNumber: number;
}

export function PaginationItem({ href, pageNumber }: Props) {
  const params = useParams();
  const currentPage = Number(params.page) || 1;

  return (
    <Link
      href={href}
      className={`${
        pageNumber === currentPage ? 'text-gray-900' : 'text-gray-400'
      } px-4 py-2 mx-1 rounded-full text-sm font-semibold no-underline`}
    >
      {pageNumber}
    </Link>
  );
}
