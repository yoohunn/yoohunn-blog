import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(src?: string) {
  if (!src) return undefined;

  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer, { size: 4 });

  return base64;
}
