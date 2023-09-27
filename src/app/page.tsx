import { getPostsRecommended } from '@/services/posts';
import { Posts } from '@/components/pages/home';

export default async function Home() {
  const posts = await getPostsRecommended();

  return (
    <main className='flex-col-center mx-auto pt-10 md:pt-[120px] px-4 md:px-6 lg:px-0 pb-20 w-full max-w-[56.25rem] lg:max-w-[1054px]'>
      <Posts posts={posts} />
    </main>
  );
}
