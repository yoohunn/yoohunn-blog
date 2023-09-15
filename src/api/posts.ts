import { posts } from '@/data/posts';
import { Post } from '@/model/posts';

export async function getPosts(): Promise<Post[]> {
  const withBlur = posts;
  return withBlur;
}
