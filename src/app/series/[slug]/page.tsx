import Link from 'next/link';

import { getPostsBySeries } from '@/services/posts';
import { getSeries } from '@/services/series';
import { SeriesPost, SeriesSorter, SeriesCard } from '@/components/common';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const series = await getSeries();

  return series.map((item) => ({
    slug: item.slug,
  }));
}

export default async function SeriesPage({ params }: Props) {
  const posts = await getPostsBySeries(params.slug);
  const series = posts.at(0)?.series;

  if (!series) {
    return <p>no post in series</p>;
  }

  const { title, imageUrl, count } = series;

  return (
    <main className='max-container'>
      <h1 className='h1 text-center'>{title}</h1>
      <SeriesCard
        imageUrl={imageUrl}
        firstPostHref={`/post/${posts[0].slug}?series=${series.slug}`}
        className='mb-10 md:mb-20'
      />

      <section className='flex justify-between mb-4 md:mb-6 text-sm md:text-base'>
        <div className='text-gray-600'>총 {count}개</div>
        <SeriesSorter />
      </section>

      <hr className='mb-8 md:mb-[60px]' />

      <ul className='mb-8 flex flex-col gap-4 md:gap-12'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}?series=${series.slug}`}>
              <SeriesPost post={post} />
            </Link>
          </li>
        ))}
      </ul>

      {/*<section>Other series</section>*/}
    </main>
  );
}
