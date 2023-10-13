import { getPostsBySeries } from '@/services/posts';
import { getSeries } from '@/services/series';
import { SeriesCard, SortedSeriesPosts } from '@/components/pages/series';

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

  const { title, imageUrl, count, blurDataURL, slug } = series;

  return (
    <main className='max-container'>
      <h1 className='h1 text-center'>{title}</h1>
      <SeriesCard
        imageUrl={imageUrl}
        blurDataURL={blurDataURL}
        firstPostHref={`/post/${posts[0].slug}?series=${series.slug}`}
        className='mb-10 md:mb-20'
      />

      <SortedSeriesPosts posts={posts} count={count} slug={slug} />

      {/*<section>Other series</section>*/}
    </main>
  );
}
