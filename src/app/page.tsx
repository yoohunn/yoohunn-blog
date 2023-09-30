import { getPostsLatest, getPostsRecommended } from '@/services/posts';
import { Greeting, WithDimmerMoreLink } from '@/components/pages/home';
import { Hr, Posts } from '@/components/common';

export default async function Home() {
  const [recommended, latest] = await Promise.all([
    getPostsRecommended(),
    getPostsLatest(),
  ]);

  return (
    <main className='max-container pt-10 md:pt-[120px]'>
      <Greeting
        heading='유현지'
        subheading='Frontend Developer'
        greeting='고민의 과정과 그 속에서 얻은 지식을 공유하는 블로그입니다. 👋🏻'
      />

      <Hr />

      <Posts title='추천 포스트' posts={recommended} />

      <WithDimmerMoreLink>
        <Posts title='최근 포스트' posts={latest} className='md:mt-[8rem]' />
      </WithDimmerMoreLink>
    </main>
  );
}
