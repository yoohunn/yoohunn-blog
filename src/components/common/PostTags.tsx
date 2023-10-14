import { PostTag } from '@/model/post-tag';
import Link from 'next/link';

interface Props extends WithClassName {
  tags: PostTag[];
  currentSlug?: string;
}

export function PostTags({ tags, currentSlug, className }: Props) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      {tags.map(({ slug, name }) => (
        <li key={slug}>
          <Link
            href={`/tag/${slug}`}
            className={`py-2 px-4 flex-center text-sm md:text-base
            rounded-full text-gray-700 transform duration-100
            hover:bg-blue-50 hover:text-[#3864c1] hover:ring hover:ring-blue-50 ${
              currentSlug === slug ? 'bg-blue-50' : 'bg-gray-50'
            }`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
