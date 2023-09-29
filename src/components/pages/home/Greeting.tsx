import { ContactWith } from '@/components/common';

interface Props {
  heading: string;
  subheading: string;
  greeting: string;
}

export function Greeting({ heading, subheading, greeting }: Props) {
  return (
    <>
      <h1 className='h1 my-0 mb-2 md:mb-6'>{heading}</h1>
      <p className='mb-8 md:mb-10 font-poppins text-lg md:text-xl'>
        {subheading}
      </p>
      <div className='mb-14 md:mb-20 flex-row-center gap-4 md:gap-6 text-gray-500'>
        <ContactWith.github />
        <ContactWith.email />
        <ContactWith.phone />
      </div>
      <p className='mb-14 text-[15px] md:text-base text-gray-500'>{greeting}</p>
    </>
  );
}
