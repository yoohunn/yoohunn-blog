'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

import { PER_PAGE } from '@/constants/posts';
import { usePagination } from '@/hooks/usePagination';
import { PaginationItem } from '@/components/common/PaginationItem';

interface Props {
  totalItems: number;
  pageHref: string;
  itemsPerPage?: number;
}

export const dotts = '...';

export function Pagination({
  totalItems,
  pageHref,
  itemsPerPage = PER_PAGE,
}: Props) {
  const segment = useSelectedLayoutSegment();
  const currentPage = segment ? +segment : 1;

  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  const renderPageLink = (page: number) => `${pageHref}/${page}`;

  return (
    <div className='flex items-center justify-center my-8'>
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span
            key={i}
            className='px-4 py-2 rounded-full text-sm font-semibold text-black'
          >
            {pageNumber}
          </span>
        ) : (
          <PaginationItem
            key={i}
            href={renderPageLink(+pageNumber)}
            pageNumber={+pageNumber}
          />
        ),
      )}
    </div>
  );
}
