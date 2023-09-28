import { getPostsRecommended } from '@/services/posts';
import { Posts } from '@/components/pages/home';

export default async function Home() {
  const posts = await getPostsRecommended();

  return (
    <main className='max-container pt-10 md:pt-[120px]'>
      <h1 className='h1 mb-4 md:mb-10'>최근 포스트</h1>
      <Posts posts={posts} />
    </main>
  );
}
