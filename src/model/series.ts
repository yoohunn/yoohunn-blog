export type Series = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  count: number;
  imageUrl: string;
  blurDataURL: string;
};

export const seriesSorter = ['LASTEST', 'OLDEST'] as const;
export type SeriesSorter = (typeof seriesSorter)[number];
