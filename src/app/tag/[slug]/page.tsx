import { notFound } from 'next/navigation';

import { getPostTags } from '@/services/post-tag';
import { getPostsByTags } from '@/services/posts';
import { Posts, PostTags } from '@/components/common';
import { Questions } from '@/components/pages/tags/Questions';

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = await getPostTags();

  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export default async function PostsByTagPage({ params }: Props) {
  const [tags, posts] = await Promise.all([
    getPostTags(),
    getPostsByTags([params.slug]),
  ]);

  const tag = tags.find((i) => i.slug === params.slug);

  if (!tag) {
    notFound();
  }

  return (
    <main className='max-container'>
      <h1 className='h1'>{tag?.name}</h1>
      <PostTags
        tags={tags}
        className='mb-4 !justify-start'
        currentSlug={params.slug}
      />
      <Questions questions={tag.questions} />
      <Posts posts={posts} className='mt-16' />
    </main>
  );
}
