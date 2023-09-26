import type { Post, PostTag } from '@/model/posts';
import { getBase64 } from '@/lib/plaiceholder';
import { client } from '@/lib/sanity.client';
import {
  postsBySeriesQuery,
  postsByTagsQuery,
  postsQuery,
  postsRecommendedQuery,
  postTagsQuery,
} from '@/lib/sanity.queries';

import { posts } from '@/data/posts';

export async function getMockPosts() {
  const promises = posts.map(async (post) => {
    const blurDataURL = await getBase64(post.imageUrl);
    return { ...post, blurDataURL };
  });

  return await Promise.all(promises);
}

export async function getMockPost(id: string) {
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return undefined;
  }

  const blurDataURL = await getBase64(post.imageUrl);
  return { ...post, blurDataURL };
}

export async function getPosts() {
  return await client.fetch<Post[]>(postsQuery);
}

export async function getPostsRecommended() {
  return await client.fetch<Post[]>(postsRecommendedQuery);
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
