'use client';

import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  isShowing: boolean;
  open: boolean;
}

export function QuestionsModalButton({ isShowing, open }: Props) {
  return (
    <MotionButton
      isShowing={isShowing}
      className={`text-gray-600 p-3.5 bg-white rounded-full border border-gray-100 z-[70] 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      {open ? (
        <XMarkIcon className='w-6 h-6' />
      ) : (
        <Bars3Icon className='w-6 h-6' />
      )}
    </MotionButton>
  );
}

interface MotionButtonProps extends WithChildren, WithClassName {
  isShowing: boolean;
}

function MotionButton({ isShowing, children, className }: MotionButtonProps) {
  return (
    <Transition
      show={isShowing}
      enter='transition duration-500 ease-in-out'
      enterFrom='transform translate-y-4 opacity-0'
      enterTo='transform translate-y-0 opacity-100'
      leave='transition duration-300 ease-in-out'
      leaveFrom='transform translate-y-0 opacity-100'
      leaveTo='transform translate-y-4 opacity-0'
    >
      <Popover.Button className={className}>{children}</Popover.Button>
    </Transition>
  );
}
