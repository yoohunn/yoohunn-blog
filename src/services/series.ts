import type { Series } from '@/model/series';
import { client } from '@/lib/sanity.client';
import { seriesQuery, seriesRecommandedQuery } from '@/lib/sanity.queries';

export async function getSeries() {
  return await client.fetch<Series[]>(seriesQuery);
}

export async function getSeriesRecommanded() {
  return await client.fetch<Series[]>(seriesRecommandedQuery);
}
