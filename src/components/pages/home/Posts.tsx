import { posts } from '@/data/posts';
import { colors } from '@/data/colors';

export function Posts() {
  return (
    <section className='mt-12 md:mt-[180px]  pr-4'>
      <h1 className='h1 mb-4 md:mb-10'>최근 포스트</h1>
      <ul
        className={
          'flex flex-col gap-[6rem] mb-[6rem] md:gap-[3rem] md:mb-[5rem]'
        }
      >
        {posts.map(
          (
            { heading, description, thumbnailKeyword, createdAt, colorType },
            index,
          ) => (
            <li key={index}>
              <article className={'md:flex md:gap-6'}>
                <section
                  style={{ backgroundColor: colors['gray']['100'] }}
                  className={
                    'mb-4 md:mb-0 flex pt-3 pl-2 w-full md:w-[216px] h-[200px] md:h-[216px] rounded-2xl'
                  }
                >
                  {/*<p*/}
                  {/*  style={{*/}
                  {/*    textShadow: `${colors['gray']['300']} 0px 0px 40px`,*/}
                  {/*  }}*/}
                  {/*  className={*/}
                  {/*    'mb-4 md:mb-10 font-montserrat font-bold text-white text-[38px] leading-none uppercase'*/}
                  {/*  }*/}
                  {/*>*/}
                  {/*  {thumbnailKeyword}*/}
                  {/*</p>*/}
                </section>
                <section className='px-1 md:px-0 md:py-2.5'>
                  <h2 className={'mb-4 md:mb-6 h2'}>{heading}</h2>
                  <p className='mb-4 md:mb-6 text-gray-600 leading-[150%] md:text-lg'>
                    {description}
                  </p>
                  <p className='text-sm md:text-base text-gray-600 font-light'>
                    {createdAt}
                  </p>
                </section>
              </article>
            </li>
          ),
        )}
      </ul>
      <button className='mb-7 w-full py-4 rounded-2xl'>More</button>
    </section>
  );
}
