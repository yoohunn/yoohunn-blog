export function SeriesSorter() {
  return (
    <div className='space-x-2 md:space-x-4 text-gray-500'>
      <SortButton label='최신글 부터' isActive={true} />
      <span>|</span>
      <SortButton label='첫글 부터' isActive={false} />
    </div>
  );
}

function SortButton({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <button
      className={`hover:text-gray-900 ${
        isActive ? 'text-gray-800 font-medium' : ''
      }`}
    >
      {label}
    </button>
  );
}
