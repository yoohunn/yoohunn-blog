export function Collections() {
  return (
    <>
      <div className='mt-12 mb-4 flex justify-between items-center pr-4'>
        <h1 className='h1'>컬렉션</h1>
        <button className={'text-sm font-medium text-gray-700'}>더보기</button>
      </div>
      <ul className='w-full overflow-x-scroll flex gap-2.5'>
        {['커뮤니케이션', 'Next.js', 'Javascript', 'Browser'].map((i) => (
          <li
            key={i}
            style={{
              textShadow: `gray 0px 0px 30px`,
            }}
            className='h2 shrink-0 w-[160px] aspect-square flex-center rounded-lg text-white bg-gray-100'
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}
