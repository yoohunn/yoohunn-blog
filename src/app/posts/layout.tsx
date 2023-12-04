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
      <h1 className='h1'>Posts</h1>
      <PostTags tags={tags} className='mb-16 !justify-start' />
      {children}
      <Pagination totalItems={totalCount} pageHref={'/posts'} />
    </main>
  );
}
