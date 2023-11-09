import { groq } from 'next-sanity';
import {
  postDetailFields,
  postFields,
  seriesFields,
  tagFields,
} from '@/lib/sanity.fields';

export const postsRecommendedQuery = groq`
*[_type == "post" && isRecommended ] | order(publishedAt desc) [0...3]{
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
*[_type == "post" && series->slug.current == $slug ] | order(publishedAt desc){
  ${postFields}
}
`;

export const postsByTagsQuery = groq`
*[_type == "post" && count((tags[]->slug.current)[@ in $slugs]) > 0] | order(publishedAt desc){
  ${postFields}
}
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  ${postFields}
}
`;

/* Better approach for Pagination in Sanity
 * https://www.sanity.io/docs/paginating-with-groq#99e2366d34f5
 */
export const postNextOfSeriesQuery = groq`
*[_type == "post" && series->slug.current == ^.series->slug.current  && (
  publishedAt > ^.publishedAt
  || (publishedAt == ^.publishedAt && _id > ^._id)
)] | order(publishedAt)[0]{
  ${postFields}
}`;

export const postPrevOfSeriesQuery = groq`
*[_type == "post" && series->slug.current == ^.series->slug.current  && (
  publishedAt < ^.publishedAt
  || (publishedAt == ^.publishedAt && _id < ^._id)
)] | order(publishedAt desc)[0]{
  ${postFields}
}`;

export const postDetailBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  ...{${postDetailFields}},
  "next": ${postNextOfSeriesQuery},
  "prev": ${postPrevOfSeriesQuery},
}
`;

export const postTagsQuery = groq`
*[_type == "tag"]| order(_createdAt desc){
  ${tagFields}
}
`;

export const postTagBySlugQuery = groq`
*[_type == "tag" && slug.current == $slug]| order(_createdAt desc)[0]{
  ${tagFields}
}
`;

export const seriesQuery = groq`
*[_type == "series"] | order(_createdAt desc)| order(isRecommended desc){
  ${seriesFields}
}
`;

export const seriesBySlugQuery = groq`
*[_type == "series" && slug.current == $slug] | order(_createdAt desc)| order(isRecommended desc)[0]{
  ${seriesFields}
}
`;

export const seriesRecommandedQuery = groq`
*[_type == "series" && isRecommended] [0...3]{
  ${seriesFields}
}
`;
