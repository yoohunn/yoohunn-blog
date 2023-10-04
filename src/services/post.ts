import type { FilteredResponseQueryOptions } from 'next-sanity';

import type { Post, PostDetail } from '@/model/posts';
import { client } from '@/lib/sanity.client';
import { postBySlugQuery, postDetailBySlugQuery } from '@/lib/sanity.queries';
import { getNotionPage } from '@/lib/notion';

const options: FilteredResponseQueryOptions = { next: { revalidate: 60 * 10 } };

export async function getPostBySlug(slug: string) {
  return await client.fetch<Post>(postBySlugQuery, { slug }, options);
}

export async function getPostDetailBySlug(
  slug: string,
): Promise<PostDetail | null> {
  const post = await client.fetch<PostDetail>(
    postDetailBySlugQuery,
    { slug },
    options,
  );

  const notionRecordMap = await getNotionPage(post.notionUrl);

  return {
    ...post,
    notionRecordMap,
  };
}
