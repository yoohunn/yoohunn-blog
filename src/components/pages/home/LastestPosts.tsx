import type { Post } from '@/model/posts';
import { Posts } from '@/components/common';
import { LastestPost, WithDimmerMoreLink } from '@/components/pages/home';

interface Props {
  posts: Post[];
}

export function LastestPosts({ posts }: Props) {
  return (
    <WithDimmerMoreLink>
      <h1 className='h1'>최신글</h1>
      <LastestPost post={posts.at(0)} />
      <Posts posts={posts.slice(1)} className='mt-24' />
    </WithDimmerMoreLink>
  );
}
