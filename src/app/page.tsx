import { getPostsLatest, getPostsRecommended } from '@/services/posts';
import { getSeriesRecommanded } from '@/services/series';
import { Hr, Posts } from '@/components/common';
import {
  Greeting,
  LastestPosts,
  RecommandSeries,
} from '@/components/pages/home';

export default async function Home() {
  const [series, recommended, latest] = await Promise.all([
    getSeriesRecommanded(),
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
      <LastestPosts posts={latest} />
      <RecommandSeries series={series} />
      <Posts title='추천글' posts={recommended} />
    </main>
  );
}
