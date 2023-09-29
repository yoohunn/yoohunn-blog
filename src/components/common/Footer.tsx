import { ContactWith } from '@/components/common';

export function Footer() {
  return (
    <footer className='border-t py-20 md:pb-40'>
      <div className='mx-auto w-full max-w-[1448px] px-4 md:px-6 flex-row-center gap-10'>
        <ContactWith.github />
        <ContactWith.email />
        <ContactWith.phone />
      </div>
    </footer>
  );
}
