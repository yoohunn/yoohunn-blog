import { posts } from '@/data/posts';
import { colors } from '@/data/colors';

export function Posts() {
  return (
    <section className='mt-12 pr-4'>
      <h1 className='h1 mb-4'>최근 포스트</h1>
      <ul className={'flex flex-col gap-[6rem] mb-[6rem]'}>
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
                  {/*<p*/}
                  {/*  style={{*/}
                  {/*    textShadow: `${colors['gray']['300']} 0px 0px 40px`,*/}
                  {/*  }}*/}
                  {/*  className={*/}
                  {/*    'mb-4 font-montserrat font-bold text-white text-[38px] leading-none uppercase'*/}
                  {/*  }*/}
                  {/*>*/}
                  {/*  {thumbnailKeyword}*/}
                  {/*</p>*/}
                </section>
                <h2 className={'mb-4 h2'}>{heading}</h2>
                <p className='mb-4 text-gray-600 leading-[150%]'>
                  {description}
                </p>
                <p className='text-sm text-gray-600 font-light'>{createdAt}</p>
              </article>
            </li>
          ),
        )}
      </ul>
      <button className='mb-7 bg-gray-100/30 w-full py-4 rounded-2xl border'>
        More
      </button>
    </section>
  );
}
