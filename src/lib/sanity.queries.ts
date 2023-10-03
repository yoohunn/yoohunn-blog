import { groq } from 'next-sanity';

const tagFields = groq`
  name,
  "slug": slug.current,
  "count": count(*[_type == "post" && references(^._id)])
`;

const seriesFields = groq`
  "id": _id,
  "slug": slug.current,
  title,
  description,
  "imageUrl": image.asset->url,
  "imageBlurHash": image.asset->metadata.lqip,
  "count": count(*[_type == "post" && references(^._id)])
`;

const postFields = groq`
  "id": _id,
  "slug": slug.current,
  title,
  publishedAt,
  description,
  notionUrl,
  "imageUrl": image.asset->url,
  "imageBlurHash": image.asset->metadata.lqip,
  "author": author->{name, image, "slug": slug.current},
  tags[]->{${tagFields}},
  series->{${seriesFields}},
  seriesOrder,
  isRecommended,
`;

export const postsRecommendedQuery = groq`
*[_type == "post"] | order(publishedAt desc) [0...3]{
  ${postFields}
}
`;

export const postsPaginatedQuery = groq`
*[_type == "post"] | order(publishedAt desc) [$start...$end]{
  ${postFields}
}`;

export const postsTotalCountQuery = groq`
count(*[_type == 'post'])
`;

export const postsBySeriesQuery = groq`
*[_type == "post" && $slug in series->slug.current] | order(publishedAt desc){
  ${postFields}
}
`;

export const postsByTagsQuery = groq`
*[_type == "post" && count((tags[]->slug.current)[@ in $slugs]) > 0] | order(publishedAt desc){
  ${postFields}
}
`;

/* Better approach for Pagination in Sanity
 * 나는 ISR 페이지네이션을 사용해서 이 방법이 적합하지 않았지만 테스트해보니 좋았음... 못써서 아까운 코드
 * https://www.sanity.io/docs/paginating-with-groq#99e2366d34f5
 */
// export const postsNextQuery = groq`
// *[_type == "post" && (
//   publishedAt > $lastPublishedAt
//   || (publishedAt == $lastPublishedAt && _id > $lastId)
// )] | order(publishedAt) [0...$limit]{
//   ${postFields}
// }
// `;

// post
export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  ${postFields}
}
`;

// tag
export const postTagsQuery = groq`
*[_type == "tag"]{
  ${tagFields}
}
`;

// series

export const seriesQuery = groq`
*[_type == "series"]{
  ${seriesFields}
}
`;
