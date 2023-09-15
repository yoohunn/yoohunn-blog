import { getBase64 } from '@/lib/plaiceholder';
import { posts } from '@/data/posts';

export async function getPosts() {
  const promises = posts.map(async (post) => {
    const blurDataURL = await getBase64(post.imgUrl);
    return { ...post, blurDataURL };
  });

  return await Promise.all(promises);
}
