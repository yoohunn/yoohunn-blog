import { Series } from './series';

export type Post = {
  id: string;
  slug: string;
  publishedAt: string;
  title: string;
  description: string;
  imageUrl: string;
  notionUrl: string;
  tags: PostTag[];
  series: Pick<Series, 'id' | 'title'>;

  blurDataURL?: string;
  notionRecordMap?: any;
};

export type PostTag = { slug: string; title: string };
