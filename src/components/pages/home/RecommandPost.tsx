import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/model/posts';

interface Props {
  post: Post;
}

export function RecommandPost({ post }: Props) {
  const { id, title, description, tags, imgUrl, blurDataURL } = post;

  return (
    <article
      style={{
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: 'cover',
      }}
      className='relative shrink-0 mb-2 flex flex-col w-[340px] bg-gray-100 rounded-2xl '
    >
      <h2
        className={
          'h1 md:h2 text-gray-800 h-[96px] mt-5 ml-5 md:mt-7 md:ml-7 w-[250px]'
        }
      >
        {title}
      </h2>
      <div className='absolute top-0 left-0 right-0'>
        <PostThumbnail imgUrl={imgUrl} blurDataURL={blurDataURL} />
      </div>
      <section className='flex-1 flex-col-center mt-[270px] pt-12 pb-6 bg-gradient-to-t from-white/90 to-white rounded-2xl rounded-t-[22px] shadow'>
        <p className='mb-4 text-center w-[75%] text-sm text-medium text-gray-700 line-clamp-2'>
          {description}
        </p>
        <ul className='post-tag-container'>
          {tags.slice(0, 4).map(({ id, title }) => (
            <li key={id}>
              <button className='post-tag bg-white'>{title}</button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function PostThumbnail({
  imgUrl,
  blurDataURL,
}: {
  imgUrl?: string;
  blurDataURL?: string;
}) {
  return (
    <div className='relative shrink-0 mt-[8rem] mx-auto w-[230px] md:w-[216px] aspect-[4/5] rounded-lg md:rounded-xl bg-gray-50 overflow-hidden shadow-lg'>
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={'post-thumbnail'}
          fill
          className='object-cover'
          placeholder='blur'
          blurDataURL={blurDataURL}
        />
      ) : (
        <DefaultThmbnail />
      )}
    </div>
  );
}

function DefaultThmbnail() {
  return <></>;
}

function Buttons() {
  return (
    <div className={'flex justify-end md:mt-auto'}>
      <button className='mr-3 h-12 flex-center text-sm md:text-base font-medium px-3.5 py-2 rounded-full border border-white bg-white/10 transform duration-150 hover:bg-white/30'>
        {'첫 글 읽기 >'}
      </button>
      <button className='h-12 aspect-square flex-center text-sm md:text-base font-medium px-3.5 py-2 rounded-full border border-white'>
        =
      </button>
    </div>
  );
}
