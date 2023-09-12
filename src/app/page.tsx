import { Header } from '@/components/common';

export default function Home() {
  return (
    <main className='flex-col-center'>
      <Header />
      <div className='w-full pl-4'>
        <Tags />
        <Collections />
        <BlurCard />
        <Posts />
      </div>
    </main>
  );
}

function Tags() {
  return (
    <ul className='mt-10 flex flex-wrap gap-2.5 w-full'>
      {['All', 'Tags', 'Collections'].map((item) => (
        <li key={item} className='h-9 px-3 flex-center rounded-lg bg-gray-100'>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Collections() {
  return (
    <>
      <div className='mt-12 mb-4 flex justify-between items-center pr-4'>
        <h1 className='text-2xl'>컬렉션</h1>
        <button>더보기</button>
      </div>
      <ul className='w-full overflow-x-scroll flex gap-2.5'>
        {['커뮤니케이션', 'Next.js', 'Javascript', 'Browser'].map((i) => (
          <li
            key={i}
            className='shrink-0 w-[160px] aspect-square rounded-lg bg-gray-100'
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

function BlurCard() {
  return (
    <section className='mt-12 mr-4 bg-gray-100 rounded-2xl p-4'>
      <h1 className='mb-1 text-2xl'>
        Next.js 오픈소스 예시코드를 13.3버전으로 마이그레이션 하기
      </h1>
      <div className={'mb-4 text-sm text-gray-600'}>
        <p>Nextjs</p>
        <p>2023.9.10</p>
      </div>
      <ul className={'mb-4'}>
        {['', '', ''].map((i, index) => (
          <li
            key={index}
            className='mt-4 w-[60px] aspect-square rounded-lg bg-white'
          ></li>
        ))}
      </ul>
      <div className={'text-end'}>
        <button className='text-end px-2 py-2 rounded-full border'>
          자세히 보기
        </button>
      </div>
    </section>
  );
}

function Posts() {
  return (
    <section className='mt-12 pr-4'>
      <h1 className='text-2xl mb-4'>최근 포스트</h1>
      <ul className={'flex flex-col gap-14'}>
        {['', '', ''].map((i, index) => (
          <li key={index}>
            <article>
              <section
                className={'mb-4 w-full h-[200px] bg-gray-100 rounded-2xl'}
              ></section>
              <h1 className={'mb-4 text-xl font-semibold'}>
                Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화
              </h1>
              <p className='mb-4 text-gray-600 leading-[150%]'>
                처음에 pretendard 가변글꼴을 사용했는데 굵기가 반영되지 않아
                다시 굵기별로 다운받았었는데 블라블라가변 글꼴을 적용하기로
                했습니다.
              </p>
              <p className='text-sm text-gray-600 font-light'>2023.9.10</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
