import type { Post, PostTag } from '@/model/posts';
import { client } from '@/lib/sanity.client';
import {
  postBySlugQuery,
  postsBySeriesQuery,
  postsByTagsQuery,
  postsQuery,
  postsRecommendedQuery,
  postTagsQuery,
} from '@/lib/sanity.queries';

export async function getPosts(params: { limit: number; page: number }) {
  return await client.fetch<Post[]>(postsQuery, params);
}

export async function getPostsRecommended() {
  return await client.fetch<Post[]>(
    postsRecommendedQuery,
    {},
    { next: { revalidate: 60 * 10 } },
  );
}

export async function getPostBySeries(slug: string) {
  return await client.fetch<Post[]>(postsBySeriesQuery, { slug });
}

export async function getPostByTags(slugs: string[]) {
  return await client.fetch<Post[]>(postsByTagsQuery, { slugs });
}

export async function getPostTags() {
  return await client.fetch<PostTag[]>(postTagsQuery);
}

export async function getPostBySlug(slug: string) {
  return await client.fetch<Post>(
    postBySlugQuery,
    { slug },
    { next: { revalidate: 60 * 10 } },
  );
}
