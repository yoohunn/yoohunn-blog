import { getPostsPaginated } from '@/services/posts';
import { PER_PAGE } from '@/constants/posts';
import { Posts } from '@/components/common';

const page = 1;

export default async function PostsPage() {
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
