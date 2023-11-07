import Image from 'next/image';

import type { Post } from '@/model/posts';

interface Props extends WithClassName {
  imageUrl: Post['imageUrl'];
  blurDataURL: Post['blurDataURL'];
}

export function PostImage({ imageUrl, blurDataURL, className }: Props) {
  return (
    <section
      className={`relative w-full aspect-[7/4] rounded-3xl overflow-hidden ${className}`}
    >
      <Image
        alt='post-thumbnail'
        src={imageUrl}
        placeholder='blur'
        blurDataURL={blurDataURL}
        width={900}
        height={514}
        className='object-cover w-full aspect-[7/4] rounded-3xl'
        priority
      />
    </section>
  );
}
