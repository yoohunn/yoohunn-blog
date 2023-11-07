import Link from 'next/link';

import type { PostTag as IPostTag } from '@/model/post-tag';

interface Props extends WithClassName {
  tag: IPostTag;
  isActive?: boolean;
}

export function PostTag({ tag, isActive, className }: Props) {
  return (
    <Link
      href={`/tag/${tag.slug}`}
      className={`py-2 px-4 flex-center !inline-flex text-sm md:text-base
            rounded-full text-gray-700 transform duration-100
            hover:bg-blue-50 hover:text-[#3864c1] hover:ring hover:ring-blue-50 ${
              isActive ? 'bg-blue-50' : 'bg-gray-50'
            } ${className}`}
    >
      {tag.name}
    </Link>
  );
}
