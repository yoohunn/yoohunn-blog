import { Post } from '@/model/posts';

interface Props {
  author: Post['author'];
}

export function PostAuthor({ author }: Props) {
  return (
    <div className={`mt-10 px-4 w-full max-w-[56.25rem]`}>
      <section
        className={`pt-6 pb-8 md:pt-10 md:pb-14 flex-row-center gap-4 border-t`}
      >
        <div className='w-12 h-12 rounded-full border' />
        <div>
          <p className='md:text-lg font-medium text-gray-700 mb-0.5 md:mb-1'>
            {author.name}
          </p>
          <p className='text-xs md:text-sm text-gray-500'>안녕하세. 소개말</p>
        </div>
      </section>
    </div>
  );
}
