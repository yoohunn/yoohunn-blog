import { PostTags } from '@/components/common';
import { getPostTags } from '@/services/post-tag';
import { getPostByTags, getPostsRecommended } from '@/services/posts';
import { Posts } from '@/components/pages/home';
import { notFound } from 'next/navigation';

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
    getPostByTags([params.slug]),
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
        className='mb-16 !justify-start'
        currentSlug={params.slug}
      />
      <Posts posts={posts} />
    </main>
  );
}
