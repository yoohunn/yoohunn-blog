import Link from 'next/link';

export function Header() {
  return (
    <header className='sticky z-50 top-0 w-full bg-white'>
      <nav className='mx-auto w-full max-w-[1448px] h-16 px-4 md:px-6 flex items-center justify-between'>
        <Link href='/' className='flex-row-center gap-2'>
          <Logo />
          <span className='font-poppins'>YooBlog</span>
        </Link>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <span className='flex-col-center'>
      <span className='w-[7px] h-[7px] rounded-full bg-gray-900 relative translate-y-[1px]' />
      <span className='w-2 h-2 rounded-full bg-gray-900 relative -translate-y-[1px]' />
    </span>
    // <span className='flex-col-center'>
    //   <span className='w-2 h-2 rounded-full bg-gray-900 relative translate-y-0.5' />
    //   <span className='w-3 h-3 rounded-full bg-gray-900 relative -translate-y-0.5' />
    // </span>
  );
}
