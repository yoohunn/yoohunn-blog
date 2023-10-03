import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getPostBySlug, getPostsRecommended } from '@/services/posts';
import { getNotionPage } from '@/lib/notion';
import { Hr, NotionPage, PostTags } from '@/components/common';
import { PostNav, RelatedSeries } from '@/components/pages/post';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getPostsRecommended();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const post = await getPostBySlug(slug);
  if (!post) {
    return {};
  }

  const { title, description, imageUrl } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [imageUrl],
    },
  };
}

const maxWidthClass = 'max-w-[56.25rem]';

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, imageUrl, notionUrl, tags, blurDataURL, series, publishedAt } =
    post;

  const recordMap = await getNotionPage(notionUrl);

  return (
    <main className='flex-col-center pt-12 mx-auto'>
      <section className='px-4 w-full flex-col-center text-center'>
        <h1
          className={
            'mb-4 w-full md:w-[90%] text-[32px] md:text-[44px] font-semibold leading-snug text-gray-800'
          }
        >
          {title}
        </h1>

        <div className='mb-10 md:text-lg text-gray-500 space-x-1'>
          {series && (
            <>
              <span>{series.title}</span>
              <span>·</span>
            </>
          )}
          <span>{publishedAt}</span>
        </div>
        <section
          className={`mb-12 md:mb-16 relative w-full ${maxWidthClass} aspect-[7/4] rounded-3xl overflow-hidden`}
        >
          <Image
            src={imageUrl}
            alt='post-thumbnail'
            placeholder='blur'
            blurDataURL={blurDataURL}
            fill
            className='object-cover'
            priority
          />
        </section>

        <PostTags tags={tags} className='mb-12 justify-center' />
      </section>

      <Hr />

      <NotionPage recordMap={recordMap} />

      <div className={`mt-10 px-4 w-full ${maxWidthClass}`}>
        <section
          className={`pt-6 pb-8 md:pt-10 md:pb-14 flex-row-center gap-4 border-t`}
        >
          <div className='w-12 h-12 rounded-full border' />
          <div>
            <p className='md:text-lg font-medium text-gray-700 mb-0.5 md:mb-1'>
              유현지
            </p>
            <p className='text-xs md:text-sm text-gray-500'>안녕하세. 소개말</p>
          </div>
        </section>
      </div>

      {series && (
        <RelatedSeries
          series={{
            title: series.title,
            slug: series.slug,
          }}
          prev={post}
          next={post}
        />
      )}

      <section className='my-10 flex justify-between'>
        <Link
          href='/'
          className='flex-center px-5 py-3 md:px-7 md:py-4 md:text-lg font-medium rounded-full bg-gray-50
          transform duration-100 hover:bg-gray-100'
        >
          홈으로
        </Link>
      </section>

      <PostNav nextHref={''} prevHref={''} seriesHref={''} />
    </main>
  );
}
