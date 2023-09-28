import type { Series } from './series';
import type { PostTag } from './post-tag';

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

export type Author = {
  name: string;
  slug: string;
  image: any;
};
