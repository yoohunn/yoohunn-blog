import type { Series } from '@/model/series';
import { client } from '@/lib/sanity.client';
import { seriesQuery } from '@/lib/sanity.queries';

export async function getSeries() {
  return await client.fetch<Series[]>(seriesQuery);
}
