import Image from 'next/image';
import Link from 'next/link';

import { posts } from '@/data/posts';

export function RecommandPosts() {
  return (
    <>
      <h1 className='h1 mt-12 md:mt-[6.5rem] mb-4 md:mb-10'>추천 포스트</h1>
      <ul className='flex gap-4 pr-4 w-full overflow-scroll'>
        {posts.slice(0, 3).map(({ id, title, description, tags, imgUrl }) => (
          <li
            key={id}
            className='relative shrink-0 mb-2 flex flex-col w-[340px] bg-gray-100 rounded-2xl '
          >
            {/* <Link href={`/posts/${id}`}> */}
            <h2 className={'h1 text-gray-800 h-[96px] mt-5 ml-5 w-[250px]'}>
              {title}
            </h2>
            <div className='absolute top-0 left-0 right-0'>
              <PostThumbnail imgUrl={imgUrl} />
            </div>
            <section className='flex-1 flex-col-center mt-[270px] pt-12 pb-6 bg-white rounded-2xl rounded-t-[22px] shadow'>
              <p className='mb-4 text-center w-[75%] text-sm text-medium text-gray-700 line-clamp-2'>
                {description}
              </p>
              <ul className='post-tag-container'>
                {tags.slice(0, 4).map(({ id, title }) => (
                  <li key={id}>
                    <button className='post-tag'>{title}</button>
                  </li>
                ))}
              </ul>
            </section>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}

function PostThumbnail({ imgUrl }: { imgUrl?: string }) {
  return (
    <div className='relative shrink-0 mt-[8rem] mx-auto w-[230px] md:w-[216px] aspect-[4/5] rounded-lg md:rounded-xl bg-gray-50 overflow-hidden shadow-lg'>
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
