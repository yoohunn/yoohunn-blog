import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/data/posts';

export function RecommandPosts() {
  return (
    <>
      <h1 className='h1 mb-4 md:mb-10'>추천 포스트</h1>
      {posts
        .slice(0, 3)
        .map(({ id, title, description, tags, imgUrl }, index) => (
          <li key={index}>
            <Link href={`/posts/${id}`}>
              <h2 className={'h2'}>{title}</h2>
              <PostThumbnail imgUrl={imgUrl} />
              <p>{description}</p>
              <ul>
                {tags.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
    </>
  );
}

function PostThumbnail({ imgUrl }: { imgUrl?: string }) {
  return (
    <div className='relative shrink-0 w-[60px] md:w-[120px] aspect-square rounded-lg md:rounded-xl bg-gray-50 overflow-hidden'>
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={'post-thumbnail'}
          fill
          className='object-cover'
        />
      ) : (
        <DefaultThmbnail />
      )}
    </div>
  );
}

function DefaultThmbnail() {
  return <></>;
}

function Buttons() {
  return (
    <div className={'flex justify-end md:mt-auto'}>
      <button className='mr-3 h-12 flex-center text-sm md:text-base font-medium px-3.5 py-2 rounded-full border border-white bg-white/10 transform duration-150 hover:bg-white/30'>
        {'첫 글 읽기 >'}
      </button>
      <button className='h-12 aspect-square flex-center text-sm md:text-base font-medium px-3.5 py-2 rounded-full border border-white'>
        =
      </button>
    </div>
  );
}
