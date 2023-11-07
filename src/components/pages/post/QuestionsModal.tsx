'use client';

import { Popover } from '@headlessui/react';

import type { PostTag } from '@/model/post-tag';
import { useQuestionsModal } from '@/hooks/useQuestionsModal';
import {
  QuestionsModalButton,
  QuestionsModalPanel,
} from '@/components/pages/post';

interface Props {
  tags: PostTag[];
}

export function QuestionsModal({ tags }: Props) {
  const { isShowing } = useQuestionsModal();

  return (
    <Popover className='fixed right-4 bottom-4 flex flex-col items-end gap-4 z-[60]'>
      {({ open }) => (
        <>
          <QuestionsModalPanel tags={tags} />
          <QuestionsModalButton open={open} isShowing={isShowing} />
        </>
      )}
    </Popover>
  );
}
