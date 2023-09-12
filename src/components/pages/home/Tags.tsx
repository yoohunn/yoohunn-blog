export function Tags() {
  return (
    <ul className='mt-10 flex flex-wrap gap-2.5 w-full'>
      {['All', 'Tags', 'Collections'].map((item) => (
        <li
          key={item}
          className='h-9 px-3 flex-center rounded-lg bg-gray-100/60 border border-gray-200/50 text-sm md:text-base'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
