import { posts } from '@/data/posts';
import { tag } from 'postcss-selector-parser';
import Image from 'next/image';

interface Props {
  params: { id: string };
}

export default function PostPage({ params }: Props) {
  console.log(params.id);
  const post = posts[1];
  const { heading, imgUrl, description, createdAt } = post;
  const tags = [
    { id: 'i', title: 'number' },
    { id: 'd', title: 'string' },
    { id: 'is', title: 'boolean' },
    { id: 'ig', title: 'symbol' },
  ];

  return (
    <main className='px-4 pt-14'>
      <h1 className={'mb-5 text-[32px] font-semibold leading-snug'}>
        {heading}
      </h1>
      <section className='mb-4 flex-row-center gap-4'>
        <div className='w-12 h-12 rounded-full border' />
        <div>
          <p className='md:text-lg font-medium text-gray-700'>author</p>
          <p className='text-sm md:text-base text-gray-600 font-light'>
            2023.9.10
          </p>
        </div>
      </section>
      <ul className='mb-4 flex flex-wrap gap-0.5'>
        {tags.map(({ id, title }) => (
          <li key={id}>
            <button
              className={
                'h-8 px-3 flex-center rounded-xl bg-gray-50 text-gray-700 text-sm md:text-base transform duration-150 hover:bg-green-50 hover:text-green-800'
              }
            >
              {title}
            </button>
          </li>
        ))}
      </ul>

      <section className='mb-5 relative w-full aspect-video rounded-2xl overflow-hidden'>
        <Image
          src={imgUrl || ''}
          alt={'post-thumbnail'}
          fill
          className='object-cover'
        />
      </section>
    </main>
  );
}

// collection
//  <section className={'rounded-2xl border w-full h-40'}>Next.js</section>
