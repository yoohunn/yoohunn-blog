import { posts } from '@/data/posts';

export function RecommandPosts() {
  return (
    <>
      <section className={'hidden md:flex mt-20 gap-6'}>
        <div
          className={
            'shrink-0 bg-gray-100 flex flex-col w-[404px] aspect-square p-6 rounded-2xl'
          }
        >
          <Header />
          <Buttons />
        </div>
        <div>
          <Posts />
        </div>
      </section>
      <section className='block md:hidden mt-12 md:mt-20 mr-4 bg-gray-100 rounded-2xl p-4'>
        <Header />
        <Posts />
        <Buttons />
      </section>
    </>
  );
}

function Header() {
  return (
    <div className='flex gap-4 md:gap-6 mb-7'>
      <div className='w-[100px] md:w-[90px] aspect-square rounded-lg md:rounded-xl bg-white'></div>
      <div className={'md:pt-1.5'}>
        <h1 className='mt-1 md:mb-4 h1'>추천 포스트</h1>
        <span className={'text-sm md:text-base md:ml-0.5 text-gray-600'}>
          뭐 요런요런 입니다 🙌
        </span>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <ul className={'mb-7 md:mb-0 space-y-4 md:py-1.5'}>
      {posts.slice(0, 3).map(({ heading, createdAt }, index) => (
        <li key={index} className={'flex gap-4 md:gap-6'}>
          <div className='shrink-0 w-[60px] md:w-[120px] aspect-square rounded-lg md:rounded-xl bg-gray-50'></div>
          <div>
            <p
              className={
                'mt-0.5 mb-[1px] md:mb-4 text-sm md:text-xl font-medium line-clamp-2'
              }
            >
              {heading}
            </p>
            <p className={'text-xs md:text-sm text-gray-600'}>{createdAt}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Buttons() {
  return (
    <div className={'flex justify-end md:mt-auto'}>
      <button className='mr-3 h-12 flex-center text-sm md:text-base font-medium px-3.5 py-2 rounded-full border border-white bg-white/80'>
        {'첫 글 읽기 >'}
      </button>
      <button className='h-12 aspect-square flex-center text-sm md:text-base font-medium px-3.5 py-2 rounded-full border border-white'>
        =
      </button>
    </div>
  );
}
