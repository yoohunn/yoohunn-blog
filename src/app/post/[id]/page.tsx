import Image from 'next/image';

import { posts } from '@/data/posts';
import { getNotionPage } from '@/lib/notion';
import { NotionPage } from '@/components/common';

interface Props {
  params: { id: string };
}

export default async function PostPage({ params }: Props) {
  console.log(params.id);

  const post = posts[1];
  const { title, imgUrl, description, createdAt, notionUrl, tags } = post;

  const recordMap = await getNotionPage(notionUrl);

  const collectionTag = { id: 'collection-tag', title: 'nextjs' };

  return (
    <main className='px-4 pt-16 md:pt-24 max-w-[48rem] mx-auto'>
      <h1
        className={
          'mb-5 md:mb-8 text-[32px] md:text-[46px] font-semibold leading-snug'
        }
      >
        {title}
      </h1>
      <section className='mb-4 md:mb-8 flex-row-center gap-4'>
        <div className='w-12 h-12 rounded-full border' />
        <div>
          <p className='md:text-lg font-medium text-gray-700'>author</p>
          <p className='text-sm md:text-base text-gray-600 font-light'>
            2023.9.10
          </p>
        </div>
      </section>
      <ul className='mb-4 md:mb-8 post-tag-container'>
        {tags.map(({ id, title }) => (
          <li key={id}>
            <button className='post-tag'>{title}</button>
          </li>
        ))}
      </ul>

      <section className='mb-12 md:mb-16 relative w-full aspect-video rounded-2xl overflow-hidden'>
        <Image
          src={imgUrl || ''}
          alt={'post-thumbnail'}
          fill
          className='object-cover'
        />
      </section>

      <NotionPage recordMap={recordMap} />
    </main>
  );
}
