import { Header } from '@/components/common';
import { posts } from '@/data/posts';
import { colors } from '@/data/colors';

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
      <h1 className='mb-1 text-2xl'>추천 포스트</h1>
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
      <ul className={'flex flex-col gap-[6rem]'}>
        {posts.map(
          (
            { heading, description, thumbnailKeyword, createdAt, colorType },
            index,
          ) => (
            <li key={index}>
              <article>
                <section
                  style={{ backgroundColor: colors['gray']['100'] }}
                  className={'mb-4 flex pt-3 pl-2 w-full h-[200px] rounded-2xl'}
                >
                  <p
                    style={{
                      textShadow: `${colors['gray']['200']} 0px 0px 30px`,
                    }}
                    className={
                      'mb-4 font-montserrat font-extrabold text-white text-[38px] leading-none uppercase'
                    }
                  >
                    {thumbnailKeyword}
                  </p>
                </section>
                <h1 className={'mb-4 text-xl font-semibold'}>{heading}</h1>
                <p className='mb-4 text-gray-600 leading-[150%]'>
                  {description}
                </p>
                <p className='text-sm text-gray-600 font-light'>{createdAt}</p>
              </article>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
