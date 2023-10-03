import { ChevronRightIcon } from '@heroicons/react/24/solid';

import type { Series } from '@/model/series';
import type { Post as IPost } from '@/model/posts';
import { Post } from '@/components/common';

interface Props {
  series: Pick<Series, 'title' | 'slug'>;
  prev: IPost;
  next: IPost;
}

export function RelatedSeries({ series, prev, next }: Props) {
  const { title, slug } = series;

  return (
    <section className={`bg-gray-50 w-full py-20`}>
      <div className={`w-full max-w-[56.25rem] mx-auto`}>
        <h2 className='group h2 mb-10 flex-row-center'>
          시리즈
          <span className='relative inline-block pl-4 text-sm font-medium leading-[28px]'>
            {title}

            <div
              className={
                'absolute inset-0 flex items-center bg-gray-50 transform duration-150 group-hover:translate-x-full'
              }
            >
              <ChevronRightIcon className='w-6 h-6 ml-1' />
            </div>
          </span>
        </h2>

        <ul className='flex gap-40'>
          <li className='flex-1'>
            <p className='flex-row-center text-gray-500 mb-2 mx-1.5'>이전글</p>
            <Post post={prev} />
          </li>
          <li className='flex-1'>
            <p className='flex-row-center justify-end text-gray-500 mb-2 mx-1.5'>
              다음글
            </p>
            <Post post={next} />
          </li>
        </ul>
      </div>
    </section>
  );
}
