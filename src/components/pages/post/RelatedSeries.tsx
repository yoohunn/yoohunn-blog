import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import type { Series } from '@/model/series';
import type { PostDetail } from '@/model/posts';
import { Post } from '@/components/common';

interface Props {
  series: Pick<Series, 'title' | 'slug'>;
  prev: PostDetail['prev'];
  next: PostDetail['next'];
}

export function RelatedSeries({ series, prev, next }: Props) {
  const { title, slug } = series;

  return (
    <section
      className={`bg-gray-50 w-full px-4 md:px-6 lg:px-0 py-10 md:py-20`}
    >
      <div className={`w-full max-w-[56.25rem] mx-auto`}>
        <Link href={`/series/${slug}`}>
          <h2 className='group h2 mb-7 md:mb-10 inline-flex items-center'>
            시리즈
            <span className='relative inline-block pl-4 text-sm font-medium leading-[28px]'>
              {title}

              <div
                className={
                  'absolute inset-0 flex items-center bg-gray-50 transform duration-150 translate-x-full md:translate-x-0 group-hover:translate-x-full'
                }
              >
                <ChevronRightIcon className='w-6 h-6 ml-1' />
              </div>
            </span>
          </h2>
        </Link>

        <ul className='flex flex-col-reverse md:flex-row gap-14 md:gap-20 lg:gap-40'>
          <li className='flex-1'>
            <p className='flex-row-center text-gray-500 mb-2 mx-1.5'>
              {prev ? '이전글' : '시리즈의 첫번째 글 입니다.'}
            </p>
            {prev && <Post post={prev} />}
          </li>
          <li className='flex-1'>
            <p className='flex-row-center md:justify-end text-gray-500 mb-2 mx-1.5'>
              {next ? '다음글' : '시리즈의 마지막 글 입니다.'}
            </p>
            {next && <Post post={next} />}
          </li>
        </ul>
      </div>
    </section>
  );
}
