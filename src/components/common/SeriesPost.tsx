import { Post } from '@/model/posts';
import Image from 'next/image';

interface Props {
  post: Post;
}

export function SeriesPost({ post }: Props) {
  const { slug, title, description, publishedAt, imageUrl, imageBlurHash } =
    post;

  return (
    <article className={'flex gap-4 md:gap-6'}>
      <section
        className={
          'shrink-0 relative mb-4 md:mb-0 flex w-[64px] md:w-[140px] h-[64px] md:h-[140px] rounded-xl md:rounded-2xl overflow-hidden'
        }
      >
        <Image
          src={imageUrl}
          alt={'post-thumbnail'}
          sizes='(min-width: 780px) 140px, 64px'
          priority
          fill
          placeholder='blur'
          blurDataURL={imageBlurHash}
          className={'object-cover'}
        />
      </section>
      <section className='flex-1 py-0.5 md:py-2'>
        <h2 className={'md:mb-4 font-semibold text-sm md:text-xl'}>{title}</h2>
        <p className='hidden md:block mb-4 md:mb-6 text-gray-600 leading-[150%] text-sm md:text-base'>
          {description}
        </p>
        <span className='block md:hidden text-xs md:text-sm text-gray-600 font-light'>
          {publishedAt}
        </span>
      </section>
      <span className='hidden md:block mt-2 text-xs md:text-sm text-gray-600 font-light'>
        {publishedAt}
      </span>
    </article>
  );
}
