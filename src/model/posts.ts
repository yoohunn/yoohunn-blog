import { Series } from './series';

export type Post = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  imageUrl: string;
  notionUrl: string;
  author: Author;
  tags: PostTag[];
  series: Pick<Series, 'id' | 'title'>;
  seriesOrder: number;

  blurDataURL?: string;
  notionRecordMap?: any;
};

export type PostTag = { slug: string; title: string };

export type Author = {
  name: string;
  slug: string;
  image: any;
};
