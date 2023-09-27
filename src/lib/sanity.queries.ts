import { groq } from 'next-sanity';

const postFields = groq`
  "id": _id,
  "slug": slug.current,
  title,
  publishedAt,
  description,
  imageUrl,
  notionUrl,
  blurDataURL,
  "author": author->{name, image, "slug": slug.current},
  tags[]->{name, "slug": slug.current},
  series[]->{title, description, "slug": slug.current, imageUrl},
  seriesOrder,
`;

export const postsQuery = groq`
*[_type == "post"]{
  ${postFields}
} | order(publishedAt desc)
`;

export const postsRecommendedQuery = groq`
*[_type == "post"]{
  ${postFields}
} | order(publishedAt desc)[0...3]
`;

export const postsBySeriesQuery = groq`
*[_type == "post" && $slug in series[]->slug.current]{
  ${postFields}
} | order(publishedAt desc)
`;

export const postsByTagsQuery = groq`
*[_type == "post" && count((tags[]->slug.current)[@ in $slugs]) > 0]{
  ${postFields}
} | order(publishedAt desc)
`;

export const postTagsQuery = groq`
*[_type == "tag"]{
  name,
  "slug": slug.current,
  "count": count(*[_type == "post" && references(^._id)])
}
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  ${postFields}
}
`;
