import { groq } from 'next-sanity';

export const tagFields = groq`
  name,
  "slug": slug.current,
  "count": count(*[_type == "post" && references(^._id)])
`;

export const seriesFields = groq`
  "id": _id,
  "slug": slug.current,
  title,
  description,
  "imageUrl": image.asset->url,
  "blurDataURL": image.asset->metadata.lqip,
  "count": count(*[_type == "post" && references(^._id)])
`;

export const authorFields = groq`
  name,
  "slug": slug.current,
  "imageUrl": image.asset->url,
`;

export const postFields = groq`
  "id": _id,
  "slug": slug.current,
  title,
  publishedAt,
  description,
  "imageUrl": image.asset->url,
  "blurDataURL": image.asset->metadata.lqip,
  series->{${seriesFields}},
`;

export const postDetailFields = groq`
  ...{${postFields}},
  notionUrl,
  seriesOrder,
  isRecommended,
  "author": author->{${authorFields}},
  tags[]->{${tagFields}},
`;
