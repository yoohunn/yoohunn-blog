'use client';

import { Popover, Transition } from '@headlessui/react';

import type { PostTag as IPostTag } from '@/model/post-tag';
import { PostTag } from '@/components/common';

export function QuestionsModalPanel({ tags }: { tags: IPostTag[] }) {
  return (
    <WithTransition>
      <ul
        className={
          'w-[calc(100vw-32px)] max-w-[22rem] ml-auto space-y-4 md:space-y-6 bg-white border ring-4 ring-white rounded p-4'
        }
      >
        {[...tags, ...tags].map((tag) => (
          <li key={tag.slug}>
            <span
              className={
                'inline-block mb-1.5 text-sm text-gray-400 hover:text-gray-600'
              }
            >
              {tag.name}
            </span>
            <ul className={'list-disc marker:text-gray-400 leading-loose px-4'}>
              {tag.questions?.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </WithTransition>
  );
}

function WithTransition({ children }: WithChildren) {
  return (
    <Transition
      enter='transition duration-100 ease-in-out'
      enterFrom='transform translate-y-2 opacity-0'
      enterTo='transform translate-y-0 opacity-100'
      leave='transition duration-75 ease-in-out'
      leaveFrom='transform translate-y-0 opacity-100'
      leaveTo='transform translate-y-2 opacity-0'
    >
      <Popover.Panel className='w-full'>{children}</Popover.Panel>
    </Transition>
  );
}
