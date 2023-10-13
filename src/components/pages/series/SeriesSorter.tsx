'use client';

import Link from 'next/link';

import type { SeriesSorter } from '@/model/series';

interface Props {
  sorter: SeriesSorter;
  getSeriesHref: (sorter: SeriesSorter) => string;
}

export function SeriesSorter({ sorter, getSeriesHref }: Props) {
  return (
    <div className='space-x-2 md:space-x-4 text-gray-500'>
      <SortButton
        label='최신글 부터'
        isActive={sorter === 'LASTEST'}
        herf={getSeriesHref('LASTEST')}
      />
      <span>|</span>
      <SortButton
        label='첫글 부터'
        isActive={sorter === 'OLDEST'}
        herf={getSeriesHref('OLDEST')}
      />
    </div>
  );
}

interface SortButtonProps {
  label: string;
  isActive: boolean;
  herf: string;
}

function SortButton({ label, isActive, herf }: SortButtonProps) {
  return (
    <Link
      className={`hover:text-gray-900 ${
        isActive ? 'text-gray-800 font-medium' : ''
      }`}
      href={herf}
    >
      {label}
    </Link>
  );
}
