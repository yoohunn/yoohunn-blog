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
  series: Pick<Series, 'slug' | 'title'>[];
  seriesOrder: number;

  blurDataURL: string;
  notionRecordMap?: any;
};

export type PostTag = { slug: string; name: string };

export type Author = {
  name: string;
  slug: string;
  image: any;
};
