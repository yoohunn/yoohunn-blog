import { redirect } from 'next/navigation';
import { Posts } from '@/components/pages/home';
import { getPostsPaginated } from '@/services/posts';
import { PER_PAGE } from '@/constants/posts';

interface Props {
  params: { page: string };
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

/**
 * 1. page를 params로 받고 1인 경우는 posts로 리다이렉트한다.
 * */
