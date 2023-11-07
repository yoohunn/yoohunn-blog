import type { Post as IPost } from '@/model/posts';
import { Post } from '@/components/common';

interface Props extends WithClassName {
  posts: IPost[];
  title?: string;
}

export function Posts({ posts, title, className }: Props) {
  return (
    <section className={className}>
      {title && <h1 className='h1 '>{title}</h1>}
      <ul className='w-full flex flex-col gap-24 mb-[6rem] md:gap-12 md:mb-[5rem]'>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
