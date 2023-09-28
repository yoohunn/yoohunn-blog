import Image from 'next/image';
import Link from 'next/link';

import type { Post } from '@/model/posts';

interface Props {
  posts: Post[];
}

export function Posts({ posts }: Props) {
  return (
    <ul className='w-full flex flex-col gap-[6rem] mb-[6rem] md:gap-[3rem] md:mb-[5rem]'>
      {posts.map(
        ({ slug, title, description, publishedAt, imageUrl, blurDataURL }) => (
          <li key={slug}>
            <Link href={`/post/${slug}`}>
              <article className={'md:flex md:gap-6'}>
                <section
                  className={
                    'shrink-0 relative mb-4 md:mb-0 flex w-full md:w-[216px] h-[200px] md:h-[216px] rounded-2xl'
                  }
                >
                  <Image
                    src={imageUrl}
                    alt={'post-thumbnail'}
                    sizes='(min-width: 780px) 216px, (min-width: 620px) 548px, 93.33vw'
                    priority
                    fill
                    placeholder='blur'
                    blurDataURL={blurDataURL}
                    className={'object-cover rounded-2xl'}
                  />
                </section>
                <section className='px-1 md:px-0 md:py-2.5'>
                  <h2 className={'mb-4 md:mb-6 h2'}>{title}</h2>
                  <p className='mb-4 md:mb-6 text-gray-600 leading-[150%] md:text-lg'>
                    {description}
                  </p>
                  <p className='text-sm md:text-base text-gray-600 font-light'>
                    {publishedAt}
                  </p>
                </section>
              </article>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
