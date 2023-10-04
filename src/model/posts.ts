import type { Series } from './series';
import type { PostTag } from './post-tag';

export type Post = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  imageUrl: string;
  blurDataURL: string;
  series?: Series;
};

export type PostDetail = Post & {
  notionUrl: string;
  author: Author;
  tags: PostTag[];
  seriesOrder: number;
  isRecommended: boolean;
  notionRecordMap?: any;
  next: Post | null;
  prev: Post | null;
};

export type Author = {
  name: string;
  slug: string;
  imageUrl: string;
};
