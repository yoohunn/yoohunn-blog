import { getPlaiceholder } from 'plaiceholder';

export async function getblurDataURL(src?: string) {
  if (!src) return undefined;

  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const { base64 } = await getPlaiceholder(buffer, { size: 4 });

  return base64;
}

/* Usage
 * const promises = post.map(async (post) => {
 *   const blurDataURL = await getblurDataURL(post.imageUrl);
 *   return { ...post, blurDataURL };
 * });
 */
