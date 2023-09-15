import { ColorType } from '@/types/color';

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
};

export type PostTag = { id: string; title: string };
