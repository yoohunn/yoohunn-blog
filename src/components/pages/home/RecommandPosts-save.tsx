import { posts } from '@/data/posts';
import Image from 'next/image';
import { Post } from '@/model/posts';

export function RecommandPostsSaved() {
  return (
    <>
      <section className={'hidden md:flex mt-20 gap-6'}>
        <div
          className={
            'shrink-0 overflow-hidden relative flex flex-col w-[404px] aspect-square rounded-2xl'
          }
        >
          <div className='absolute inset-0 z-10 p-6 flex flex-col justify-between backdrop-blur-2xl text-white'>
            <Header imgUrl={posts.at(0)?.imgUrl} />
            <Buttons />
          </div>
          {
            <div
              className={'hidden md:block absolute inset-0 bg-white opacity-80'}
            >
              <Image
                src={posts.at(0)?.imgUrl || ''}
                alt={'post-thumbnail'}
                fill
                className='object-cover'
              />
            </div>
          }
        </div>
        <div>
          <Posts posts={posts} />
        </div>
      </section>
      <section className='block md:hidden mt-12 md:mt-[6.5rem] mr-4 bg-gray-100 rounded-2xl p-4'>
        <Header imgUrl={posts.at(0)?.imgUrl} />
        <Posts posts={posts} />
        <Buttons />
      </section>
    </>
  );
}

function Header({ imgUrl }: { imgUrl?: string }) {
  return (
    <div className='flex gap-4 md:flex-row-reverse md:justify-between mb-7'>
      <div className='relative overflow-hidden drop-shadow-2xl w-[100px] md:w-[90px] aspect-square rounded-lg md:rounded-xl'>
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
      <div className={'md:pt-1.5'}>
        <h1 className='mt-1 md:mb-4 h1'>추천 포스트</h1>
        <span className={'text-sm md:text-base md:ml-0.5 text-white/80'}>
          뭐 요런요런 입니다 🙌
        </span>
      </div>
    </div>
  );
}

function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul className={'mb-7 md:mb-0 space-y-4 md:py-1.5'}>
      {posts.slice(0, 3).map(({ title, createdAt, imgUrl }, index) => (
        <li key={index} className={'flex gap-4 md:gap-6'}>
          <PostThumbnail imgUrl={imgUrl} />
          <div>
            <p
              className={
                'mt-0.5 mb-[1px] md:mb-4 text-sm md:text-xl font-medium line-clamp-2'
              }
            >
              {title}
            </p>
            <p className={'text-xs md:text-sm text-gray-600'}>{createdAt}</p>
          </div>
        </li>
      ))}
    </ul>
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
