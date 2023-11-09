import type { Series } from '@/model/series';
import { client } from '@/lib/sanity.client';
import {
  seriesBySlugQuery,
  seriesQuery,
  seriesRecommandedQuery,
} from '@/lib/sanity.queries';
import { options } from '@/services/posts';

export async function getSeries() {
  return await client.fetch<Series[]>(seriesQuery, {}, options);
}

export async function getSeriesBySlug(slug: string) {
  return await client.fetch<Series>(seriesBySlugQuery, { slug }, options);
}

export async function getSeriesRecommanded() {
  return await client.fetch<Series[]>(seriesRecommandedQuery, {}, options);
}
