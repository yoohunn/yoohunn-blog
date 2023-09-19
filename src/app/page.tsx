import { getPosts } from '@/api/posts';
import {
  Collections,
  ContactMe,
  Posts,
  RecommandPosts,
  Tags,
} from '@/components/pages/home';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='flex-col-center mx-auto pt-10 md:pt-[120px]  w-full max-w-[56.25rem] pl-4 pb-20'>
      <Posts posts={posts} />
    </main>
  );
}
