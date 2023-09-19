import Image from 'next/image';
import { BookOpenIcon } from '@heroicons/react/24/solid';

import type { Post } from '@/model/posts';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

export function Posts({ posts }: Props) {
  return (
    <section className='pr-4'>
      <h1 className='h1 mb-4 md:mb-10'>최근 포스트</h1>
      <ul className='flex flex-col gap-[6rem] mb-[6rem] md:gap-[3rem] md:mb-[5rem]'>
        {posts.map(
          (
            {
              id,
              title,
              description,
              thumbnailKeyword,
              createdAt,
              colorType,
              imgUrl,
            },
            index
          ) => (
            <li key={index}>
              <Link href={`/posts/${id}`}>
                <article className={'md:flex md:gap-6'}>
                  <section
                    className={
                      'relative mb-4 md:mb-0 flex w-full md:w-[216px] h-[200px] md:h-[216px] rounded-2xl'
                    }
                  >
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={'post-thumbnail'}
                        fill
                        className={'object-cover rounded-2xl'}
                      />
                    ) : (
                      <p
                        className={
                          'border w-full flex-center rounded-2xl bg-gray-100 text-white'
                        }
                      >
                        <BookOpenIcon className={'w-[4.5rem] h-[4.5rem] '} />
                      </p>
                    )}
                  </section>
                  <section className='px-1 md:px-0 md:py-2.5'>
                    <h2 className={'mb-4 md:mb-6 h2'}>{title}</h2>
                    <p className='mb-4 md:mb-6 text-gray-600 leading-[150%] md:text-lg'>
                      {description}
                    </p>
                    <p className='text-sm md:text-base text-gray-600 font-light'>
                      {createdAt}
                    </p>
                  </section>
                </article>
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
