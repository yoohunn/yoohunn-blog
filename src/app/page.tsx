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
    <main className='flex-col-center'>
      <div className='w-full max-w-[1200px] pl-4 pb-20'>
        <Tags />
        <Collections />
        <RecommandPosts posts={posts} />
        <Posts posts={posts} />
        <ContactMe />
      </div>
    </main>
  );
}
