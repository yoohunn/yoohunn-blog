'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import type { Post } from '@/model/posts';
import type { SeriesSorter as TSeriesSorter } from '@/model/series';
import { isUnionMemberOfSeriesSorter } from '@/utils/union';
import { SeriesPost, SeriesSorter } from '@/components/pages/series';

interface Props {
  posts: Post[];
  count: number;
  slug: string;
}

export function SortedSeriesPosts({ posts, count, slug }: Props) {
  const searchParams = useSearchParams();

  const sorter =
    isUnionMemberOfSeriesSorter(searchParams.get('sorter')) || 'LASTEST';

  const reversed = [...posts].reverse();
  const sorted = sorter === 'LASTEST' ? posts : reversed;

  return (
    <>
      <section className='flex justify-between mb-4 md:mb-6 text-sm md:text-base'>
        <div className='text-gray-600'>총 {count}개</div>
        <SeriesSorter
          sorter={sorter}
          getSeriesHref={(sorter: TSeriesSorter) =>
            `/series/${slug}?sorter=${sorter}`
          }
        />
      </section>

      <hr className='mb-8 md:mb-[60px]' />

      <ul className='mb-8 flex flex-col gap-4 md:gap-12'>
        {sorted.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <SeriesPost post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
