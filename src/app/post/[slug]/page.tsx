import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { getPostBySlug, getPostsRecommended } from '@/services/posts';
import { getNotionPage } from '@/lib/notion';
import { Hr, NotionPage, Post, PostTags } from '@/components/common';
import { RelatedSeries } from '@/components/pages/post';

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

  const {
    title,
    imageUrl,
    notionUrl,
    tags,
    imageBlurHash,
    series,
    publishedAt,
  } = post;

  console.log('🌟🌟🌟🌟series: ', post);

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
            blurDataURL={imageBlurHash}
            fill
            className='object-cover'
            priority
          />
        </section>

        <PostTags tags={tags} className='mb-12 justify-center' />
      </section>

      <Hr />

      <NotionPage recordMap={recordMap} />

      <div className={`w-full px-4 ${maxWidthClass}`}>
        <hr className='mb-10' />
        <section className='mb-20 flex-row-center gap-4'>
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

      <section className='mb-10 flex justify-between'>
        <Link
          href='/'
          className='flex-center gap-1 py-3 md:text-lg font-medium rounded-lg pr-6'
        >
          <ChevronLeftIcon className='w-4 h-4 md:w-5 md:h-5 text-gray-600 hover:bg-gray-100' />
          홈으로
        </Link>
      </section>
    </main>
  );
}
