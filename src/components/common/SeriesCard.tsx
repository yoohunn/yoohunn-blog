import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import { BookShape, bookShapeId } from '@/components/icon/BookShape';

interface Props extends WithClassName {
  imageUrl: string;
  imageBlurHash?: string;
  count?: number;
  firstPostHref?: string;
}

export async function SeriesCard({
  imageUrl,
  imageBlurHash,
  count,
  className,
  firstPostHref,
}: Props) {
  return (
    <section
      style={{ clipPath: `url(#${bookShapeId})` }}
      className={`relative w-full aspect-[7/4] bg-gray-100 rounded-2xl overflow-hidden ${className}`}
    >
      <Image
        src={imageUrl}
        alt='post-thumbnail'
        // placeholder='blur'
        // blurDataURL={imageBlurHash}
        fill
        className='object-cover'
        priority
      />
      {typeof count === 'number' && <BookIndex count={count} />}
      {firstPostHref && <FirstPostLink href={firstPostHref} />}

      <BookShape />
    </section>
  );
}

function BookIndex({ count }: { count: number }) {
  return (
    <div
      className='absolute top-6 -right-1 flex
      border border-white rounded-l md:rounded-l-lg text-gray-600 bg-white/90'
    >
      <div className={'w-3 h-auto bg-white rounded-l md:rounded-l-lg'}></div>
      <div
        className='flex-row-center gap-0.5
        p-2 py-2.5 text-xs md:pl-2 md:p-3 md:text-sm'
      >
        {count}
        <span>Posts</span>
      </div>
    </div>
  );
}

function FirstPostLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className='absolute bottom-0 left-0 flex-row-center gap-1
       p-2 px-1.5 m-3 md:px-6 md:py-4 md:m-6 font-medium text-sm md:text-lg
       border border-white bg-white
       rounded-lg drop-shadow-2xl
       transform duration-100 backdrop-blur hover:bg-white/90'
    >
      <span className='ml-2'>첫글 읽기</span>
      <ChevronRightIcon className='w-3 h-3 md:w-5 md:h-5' />
    </Link>
  );
}
