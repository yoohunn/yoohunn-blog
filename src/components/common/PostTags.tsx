import type { PostTag as IPostTag } from '@/model/post-tag';
import { PostTag } from '@/components/common/PostTag';

interface Props extends WithClassName {
  tags: IPostTag[];
  currentSlug?: string;
}

export function PostTags({ tags, currentSlug, className }: Props) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      {tags.map((tag) => (
        <li key={tag.slug}>
          <PostTag tag={tag} isActive={currentSlug === tag.slug} />
        </li>
      ))}
    </ul>
  );
}
