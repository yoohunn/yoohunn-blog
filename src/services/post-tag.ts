import type { PostTag } from '@/model/post-tag';
import { options } from '@/services/posts';
import { client } from '@/lib/sanity.client';
import { postTagBySlugQuery, postTagsQuery } from '@/lib/sanity.queries';

export async function getPostTags() {
  return await client.fetch<PostTag[]>(postTagsQuery, {}, options);
}

export async function getPostTagBySlug(slug: string) {
  return await client.fetch<PostTag>(postTagBySlugQuery, { slug }, options);
}
