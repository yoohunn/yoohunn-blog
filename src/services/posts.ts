import { getBase64 } from '@/lib/plaiceholder';
import { posts } from '@/data/posts';

export async function getPosts() {
  const promises = posts.map(async (post) => {
    const blurDataURL = await getBase64(post.imageUrl);
    return { ...post, blurDataURL };
  });

  return await Promise.all(promises);
}

export async function getPost(id: string) {
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return undefined;
  }

  const blurDataURL = await getBase64(post.imageUrl);
  return { ...post, blurDataURL };
}
