import Link from 'next/link';

import type { Series } from '@/model/series';
import { SeriesCard } from '@/components/pages/series';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Props {
  series: Series[];
  withMore?: boolean;
}

export function Series({ series, withMore }: Props) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-14 md:gap-y-16 max-w-[499px] md:max-w-full mb-10'>
      {series.map(
        ({ id, title, description, imageUrl, slug, count, blurDataURL }) => (
          <li key={id}>
            <Link href={`/series/${slug}`}>
              <SeriesCard
                imageUrl={imageUrl}
                count={count}
                blurDataURL={blurDataURL}
              />
              <section className='px-1 py-4 md:py-6'>
                <h2 className={'mb-2 md:mb-4 h2'}>{title}</h2>
                <p className='leading-[150%] text-sm md:text-base text-gray-500 '>
                  {description}
                </p>
              </section>
            </Link>
          </li>
        ),
      )}
      {withMore && <MoreSeriesLink />}
    </ul>
  );
}

function MoreSeriesLink() {
  return (
    <div className={'flex-center w-full aspect-[7/3] md:aspect-[7/4]'}>
      <Link
        href={'/series'}
        className='border border-gray-300 rounded-full p-4 md:p-6 ring-4 ring-white active:ring-gray-50 text-gray-500 hover:text-gray-800 transition duration-150'
      >
        <ArrowRightIcon strokeWidth={1} className={'w-7 h-7 md:w-10 md:h-10'} />
      </Link>
    </div>
  );
}
