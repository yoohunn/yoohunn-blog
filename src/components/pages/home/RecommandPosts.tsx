import { posts } from '@/data/posts';

export function RecommandPosts() {
  return (
    <section className='mt-12 mr-4 bg-gray-100 rounded-2xl p-4'>
      <div className='flex gap-4 mb-7'>
        <div className='w-[100px] aspect-square rounded-lg bg-white'></div>
        <div>
          <h1 className='mt-1 h1'>추천 포스트</h1>
          <span className={'text-sm text-gray-600'}>뭐 요런요런 입니다 🙌</span>
        </div>
      </div>

      <ul className={'mb-7 space-y-4'}>
        {posts.slice(0, 3).map(({ heading, createdAt }, index) => (
          <li key={index} className={'flex gap-4'}>
            <div className='shrink-0 w-[60px] aspect-square rounded-lg bg-white'></div>
            <div>
              <p className={'mt-0.5 text-sm font-medium line-clamp-2'}>
                {heading}
              </p>
              <p className={'mt-[1px] text-xs text-gray-600'}>{createdAt}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={'flex justify-end'}>
        <button className='mr-3 h-12 aspect-square flex-center text-sm font-medium px-3.5 py-2 rounded-full border border-white bg-white/80'>
          {'>'}
        </button>
        <button className='h-12 aspect-square flex-center text-sm font-medium px-3.5 py-2 rounded-full border border-white'>
          =
        </button>
      </div>
    </section>
  );
}
