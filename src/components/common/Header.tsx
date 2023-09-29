import { Logo, Navbar } from '@/components/common';

export function Header() {
  return (
    <header
      className='sticky z-50 top-0 w-full h-16 px-4 md:px-6 lg:px-10 bg-white
    mx-auto flex items-center justify-between md:justify-start'
    >
      <Logo />
      <Navbar />
    </header>
  );
}
