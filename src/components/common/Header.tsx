import { CloudIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Header() {
  return (
    <header className='sticky z-50 top-0 w-full'>
      <nav className='mx-auto w-full max-w-[75rem] h-16 px-4 md:px-6 flex items-center justify-between bg-white'>
        <Link href='/' className='flex-row-center gap-2'>
          <span className='w-3 h-3 rounded-full bg-gray-900 relative' />
          <span className='font-poppins'>Yoohunn</span>
        </Link>
      </nav>
    </header>
  );
}
