import { Post } from '@/model/posts';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  post: Post;
}

export function Post({ post }: Props) {
  const { slug, title, description, publishedAt, imageUrl, blurDataURL } = post;

  return (
    <Link href={`/post/${slug}`}>
      <article className='@container'>
        <div className='@post-md:flex @post-md:gap-6'>
          <section
            className={
              'shrink-0 relative mb-4 @post-md:mb-0 flex w-full @post-md:w-[216px] h-[200px] @post-md:h-[216px] rounded-2xl'
            }
          >
            <Image
              src={imageUrl}
              alt={'post-thumbnail'}
              sizes='(min-width: 780px) 216px, (min-width: 620px) 548px, 93.33vw'
              priority
              fill
              placeholder='blur'
              blurDataURL={blurDataURL}
              className={'object-cover rounded-2xl'}
            />
          </section>
          <section className='px-1 @post-md:px-0 @post-md:py-2.5'>
            <h2 className={'mb-4 @post-md:mb-6 h2'}>{title}</h2>
            <p className='mb-4 @post-md:mb-6 text-gray-600 leading-[150%] @post-md:text-lg'>
              {description}
            </p>
            <p className='text-sm @post-md:text-base text-gray-600 font-light'>
              {publishedAt}
            </p>
          </section>
        </div>
      </article>
    </Link>
  );
}
