import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export function MoreLink() {
  return (
    <Link
      href={'/posts/2'}
      className='inline-flex items-center py-2.5 px-6 gap-1 mx-auto md:text-lg rounded-full text-gray-500
      group hover:text-gray-900'
    >
      <span className='ml-1.5 font-medium'>더보기</span>
      <ChevronRightIcon
        className={
          'w-4 h-4 md:w-5 md:h-5 transform duration-100 group-hover:translate-x-1'
        }
      />
    </Link>
  );
}
