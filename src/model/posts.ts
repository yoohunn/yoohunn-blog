import { ColorType } from '@/types/color';

export type Post = {
  createdAt: string;
  heading: string;
  description: string;
  imgUrl?: string;
  thumbnailKeyword: string;
  colorType: ColorType;
  notionUrl: string;
};
