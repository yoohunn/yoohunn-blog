import { PostTag } from '@/model/post-tag';

interface Props extends WithClassName {
  tags: PostTag[];
}

export function PostTags({ tags, className }: Props) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {tags.map(({ slug, name }) => (
        <li key={slug}>
          <button
            className='py-2 px-4 flex-center text-sm md:text-base
          rounded-full bg-gray-50 text-gray-700 transform duration-100
          hover:bg-blue-50 hover:text-blue-900 hover:ring hover:ring-blue-50'
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
