import Link from 'next/link';

import type { Series } from '@/model/series';
import { SeriesCard } from '@/components/common/SeriesCard';

interface Props {
  series: Series[];
}

export function Series({ series }: Props) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-14 md:gap-y-16 max-w-[499px] md:max-w-full mb-10'>
      {series.map(
        ({ id, title, description, imageUrl, slug, count, imageBlurHash }) => (
          <li key={id}>
            <Link href={`/series/${slug}`}>
              <SeriesCard
                imageUrl={imageUrl}
                count={count}
                imageBlurHash={imageBlurHash}
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
    </ul>
  );
}
