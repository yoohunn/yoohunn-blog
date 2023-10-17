import type { PostTag } from '@/model/post-tag';
import { options } from '@/services/posts';
import { client } from '@/lib/sanity.client';
import { postTagsQuery } from '@/lib/sanity.queries';

export async function getPostTags() {
  return await client.fetch<PostTag[]>(postTagsQuery, {}, options);
}
