export function Collections() {
  return (
    <>
      <div className='mt-12 md:mt-[6.5rem] mb-4 md:mb-10 flex justify-between items-center pr-4'>
        <h1 className='h1'>컬렉션</h1>
        <button className={'text-sm md:text-base font-medium text-gray-700'}>
          더보기
        </button>
      </div>
      <ul className='w-full overflow-x-scroll flex gap-2.5 md:gap-6'>
        {['커뮤니케이션', 'Next.js', 'Javascript', 'Browser'].map((i) => (
          <li
            key={i}
            className={`h2 shrink-0 w-[160px] md:w-[216px] aspect-square flex-center rounded-lg md:rounded-xl text-white bg-gray-100
            [text-shadow:gray_0px_0px_30px] md:[text-shadow:black_0px_0px_60px]`}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}
