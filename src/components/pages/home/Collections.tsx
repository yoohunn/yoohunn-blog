import { collections } from '@/data/collections';
import Image from 'next/image';

export function Collections() {
  return (
    <>
      <header className='mt-12 md:mt-[6.5rem] mb-4 md:mb-10 flex justify-between items-center pr-4 hide-scrollbar'>
        <h1 className='h1'>컬렉션</h1>
        <button className={'text-sm md:text-base font-medium text-gray-700'}>
          더보기
        </button>
      </header>
      <ul className='w-full overflow-x-scroll flex gap-2.5 md:gap-6'>
        {collections.map(({ id, title, imageUrl }) => (
          <li key={id} className={`shrink-0`}>
            <section
              className={
                'relative overflow-hidden w-[160px] md:w-[216px] aspect-square rounded-lg md:rounded-xl mb-2 md:mb-4'
              }
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                priority
                sizes='(max-width: 786px) 216px, 160px'
                className='object-cover'
              />
            </section>

            <section className='px-1 md:px-1'>
              <h3 className={'text-lg font-medium md:text-xl '}>{title}</h3>
              <p className='text-xs md:text-sm text-gray-600'>20개</p>
            </section>
            {/*<div*/}
            {/*  style={{*/}
            {/*    background:*/}
            {/*      'radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.04), transparent)',*/}
            {/*  }}*/}
            {/*  className='absolute inset-0 flex-center'*/}
            {/*>*/}
            {/*  <p*/}
            {/*    className={*/}
            {/*      'h2 text-white [text-shadow:black_1px_0px] md:[text-shadow:black_0px_0px_60px]'*/}
            {/*    }*/}
            {/*  >*/}
            {/*    {title}*/}
            {/*  </p>*/}
            {/*</div>*/}
          </li>
        ))}
      </ul>
    </>
  );
}
