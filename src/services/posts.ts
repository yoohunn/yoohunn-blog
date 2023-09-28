import type { FilteredResponseQueryOptions } from 'next-sanity';

import type { Post } from '@/model/posts';
import { client } from '@/lib/sanity.client';
import {
  postBySlugQuery,
  postsBySeriesQuery,
  postsByTagsQuery,
  postsPaginatedQuery,
  postsRecommendedQuery,
  postsTotalCountQuery,
} from '@/lib/sanity.queries';

const options: FilteredResponseQueryOptions = { next: { revalidate: 60 * 10 } };

export async function getPostsRecommended() {
  return await client.fetch<Post[]>(postsRecommendedQuery, {}, options);
}

export async function getPostsPaginated(params: {
  limit: number;
  page: number;
}) {
  const { limit, page } = params;

  const start = (page - 1) * limit;
  const end = page * limit;

  return await client.fetch<Post[]>(
    postsPaginatedQuery,
    { start, end },
    options,
  );
}

export async function getPostsTotalCount() {
  return await client.fetch<number>(postsTotalCountQuery, {}, options);
}

export async function getPostBySeries(slug: string) {
  return await client.fetch<Post[]>(postsBySeriesQuery, { slug }, options);
}

export async function getPostByTags(slugs: string[]) {
  return await client.fetch<Post[]>(postsByTagsQuery, { slugs }, options);
}

export async function getPostBySlug(slug: string) {
  return await client.fetch<Post>(postBySlugQuery, { slug }, options);
}
