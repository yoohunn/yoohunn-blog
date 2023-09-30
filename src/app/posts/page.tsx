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

/*
 * 1. limit, page를 전달해서 posts를 가져온다.
 * 2. start, end 두가지 인자를 받아서 쿼리할 수 있는 쿼리문을 만든다.
 * 3. Pagination 컴포넌트를 만들어서 UI 구현하기
 * **/
