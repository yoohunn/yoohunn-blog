import { ColorType } from '@/types/color';

export type Post = {
  heading: string;
  description: string;
  thumbnailKeyword: string;
  colorType: ColorType;
  createdAt: string;
};
