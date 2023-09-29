import { MoreLink } from '@/components/pages/home/MoreLink';

export function MoreLinkWithDimmer() {
  return (
    <div className='absolute bottom-0 flex-col-center w-full'>
      <div className='w-full h-[300px] md:h-[160px] bg-gradient-to-b from-transparent to-white' />
      <div className='w-full h-[50px] md:h-[100px] flex items-end justify-center bg-white'>
        <MoreLink />
      </div>
    </div>
  );
}
