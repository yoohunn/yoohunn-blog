import Link from 'next/link';
import { Logo } from '@/components/common/Logo';

export function Header() {
  return (
    <header
      className='sticky z-50 top-0 w-full h-16 px-4 md:px-6 lg:px-10 bg-white
    mx-auto flex items-center justify-between md:justify-start'
    >
      <Logo />
      <nav className='ml-20 space-x-4 md:space-x-8 text-sm text-gray-500'>
        <Link href={'/posts'} className='hover:text-gray-900'>
          Posts
        </Link>
        <Link href={'/series'} className='hover:text-gray-900'>
          Series
        </Link>
      </nav>
    </header>
  );
}
