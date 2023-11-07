import Link from 'next/link';

import type { Post } from '@/model/posts';
import { PostImage } from '@/components/common';

interface Props {
  post?: Post;
}

export function LastestPost({ post }: Props) {
  if (!post) {
    return <></>;
  }

  const { slug, imageUrl, blurDataURL, title, description, publishedAt } = post;

  return (
    <Link href={`/post/${slug}`}>
      <PostImage imageUrl={imageUrl} blurDataURL={blurDataURL} />
      <h1 className={'h2 md:h1 text-gray-800 ' + 'my-4 md:my-6 ml-1'}>
        {title}
      </h1>
      <div className='px-1'>
        <p className='mb-4 md:mb-6 text-gray-600 leading-[150%] md:text-lg'>
          {description}
        </p>
        <p className='text-sm md:text-base text-gray-600 font-light'>
          {publishedAt}
        </p>
      </div>
    </Link>
  );
}
