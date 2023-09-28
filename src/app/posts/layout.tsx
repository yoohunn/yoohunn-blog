import { getPostsTotalCount } from '@/services/posts';
import { getPostTags } from '@/services/post-tag';
import { Pagination, PostTags } from '@/components/common';

export default async function PostsPaginatedLayout({ children }: WithChildren) {
  const [tags, totalCount] = await Promise.all([
    getPostTags(),
    getPostsTotalCount(),
  ]);

  return (
    <main className='max-container'>
      <PostTags tags={tags} className='mt-12 mb-16 justify-start' />
      {children}
      <Pagination
        totalItems={totalCount}
        renderPageLink={(page: number) => `/posts/${page}`}
      />
    </main>
  );
}
