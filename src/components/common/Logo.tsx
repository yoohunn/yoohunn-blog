import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='flex-row-center gap-2'>
      <LogoIcon />
      <span className='font-poppins'>YooBlog</span>
    </Link>
  );
}

export function LogoIcon() {
  return (
    <span className='flex-col-center'>
      <span className='w-[7px] h-[7px] rounded-full bg-gray-900 relative translate-y-[1px]' />
      <span className='w-2 h-2 rounded-full bg-gray-900 relative -translate-y-[1px]' />
    </span>
    // 로고 후보 2
    // <span className='flex-col-center'>
    //   <span className='w-2 h-2 rounded-full bg-gray-900 relative translate-y-0.5' />
    //   <span className='w-3 h-3 rounded-full bg-gray-900 relative -translate-y-0.5' />
    // </span>
  );
}
