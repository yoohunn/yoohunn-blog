import { Post } from '@/model/posts';
import { RecommandPost } from './RecommandPost';

interface Props {
  posts: Post[];
}

export function RecommandPosts({ posts }: Props) {
  return (
    <>
      <h1 className='h1 mt-12 md:mt-[6.5rem] mb-4 md:mb-10'>추천 포스트</h1>
      <ul className='flex gap-4 pr-4 w-full overflow-scroll'>
        {posts.slice(0, 3).map((post) => (
          <li key={post.id}>
            {/* <Link href={`/posts/${id}`}> */}
            <RecommandPost post={post} />
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
