import { redirect } from 'next/navigation';

import { getPostsPaginated } from '@/services/posts';
import { PER_PAGE } from '@/constants/posts';
import { Posts } from '@/components/common';

interface Props {
  params: { page: string };
}

const PRE_RENDER = 2;

export async function generateStaticParams() {
  return Array.from({ length: PRE_RENDER }).map((_, i) => ({ slug: i + 2 }));
}

export default async function PaginatedPostPage({ params }: Props) {
  const page = Number(params.page) || 1;

  if (page === 1) {
    redirect('/posts');
  }

  const posts = await getPostsPaginated({
    limit: PER_PAGE,
    page,
  });

  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
}
