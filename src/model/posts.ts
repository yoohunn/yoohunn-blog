import { ColorType } from '@/types/color';
import { Collection } from './collections';

export type Post = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  imgUrl?: string;
  thumbnailKeyword: string;
  colorType: ColorType;
  notionUrl: string;
  tags: PostTag[];
  collection: Pick<Collection, 'id' | 'title'>;

  blurDataURL?: string;
  notionRecordMap?: any;
};

export type PostTag = { id: string; title: string };
