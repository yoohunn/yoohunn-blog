import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { getPost } from '@/api/posts';
import { getNotionPage } from '@/lib/notion';
import { NotionPage } from '@/components/common';

interface Props {
  params: { id: string };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  const {
    title,
    imgUrl,
    description,
    createdAt,
    notionUrl,
    tags,
    blurDataURL,
    collection,
  } = post;

  const recordMap = await getNotionPage(notionUrl);

  return (
    <main className='flex-col-center px-4 pt-10 max-w-[56.25rem] mx-auto'>
      <h1
        className={
          'mb-4 w-full md:w-[90%] text-center text-[32px] md:text-[44px] font-semibold leading-snug'
        }
      >
        {title}
      </h1>

      <div className='mb-10 md:text-lg text-gray-500 space-x-1'>
        <span>{collection.title}</span>
        <span>·</span>
        <span>{createdAt}</span>
      </div>

      <section className='mb-12 md:mb-16 relative w-full aspect-video rounded-2xl overflow-hidden'>
        <Image
          src={imgUrl || ''}
          alt={'post-thumbnail'}
          blurDataURL={blurDataURL}
          placeholder='blur'
          fill
          className='object-cover'
          priority
        />
      </section>

      <ul className='mb-12 post-tag-container'>
        {tags.map(({ id, title }) => (
          <li key={id}>
            <button className='post-tag'>{title}</button>
          </li>
        ))}
      </ul>

      <hr className='w-40 mb-12 border-gray-300' />

      <NotionPage recordMap={recordMap} />

      <div className='w-full'>
        <hr className='mb-10' />
        <section className='mb-20 flex-row-center gap-4'>
          <div className='w-12 h-12 rounded-full border' />
          <div>
            <p className='md:text-lg font-medium text-gray-700'>Yoohunn</p>
          </div>
        </section>
        <section className='mb-10 flex justify-between'>
          <Link
            href='/'
            className='flex-center gap-1 py-3 md:text-lg font-medium rounded-lg pr-6'
          >
            <ChevronLeftIcon className='w-4 h-4 md:w-5 md:h-5 text-gray-600 hover:bg-gray-100' />
            홈으로
          </Link>
        </section>
      </div>
    </main>
  );
}
