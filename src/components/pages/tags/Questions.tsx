import { PostTag } from '@/model/post-tag';

interface Props extends WithClassName {
  questions: PostTag['questions'];
}

export function Questions({ questions, className }: Props) {
  if (!questions || questions.length === 0) {
    return <></>;
  }

  return (
    <section
      className={`p-4 md:p-6 rounded-lg border border-blue-100 bg-blue-50/20 
      text-sm md:text-base ${className}`}
    >
      <p className='mb-2 md:mb-3 text-base md:text-lg font-medium'>
        Think about.
      </p>
      {questions.map((q, index) => (
        <ol className='leading-loose' key={index}>
          <span className={'inline-block w-5 md:w-6 text-gray-400'}>
            {index + 1}.
          </span>
          {q}
        </ol>
      ))}
    </section>
  );
}
