'use client';

import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  BookOpenIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

interface Props {
  seriesHref: string;
  nextHref: string;
  prevHref: string;
}

export function PostNav({ seriesHref, nextHref, prevHref }: Props) {
  const menuContainerClass =
    'bg-white rounded-xl p-4 pr-6 border border-gray-100';
  const menuItemClass = 'flex-row-center gap-2';
  const iconClass = 'w-4 h-4 text-gray-500';

  return (
    <Popover
      as='nav'
      className='fixed right-4 bottom-4 flex flex-col items-end gap-4 z-[60]'
    >
      {({ open }) => (
        <>
          <WithTransition>
            <Popover.Panel>
              <ul className={`${menuContainerClass} mb-2 space-y-4`}>
                <li className={menuItemClass}>
                  <ArrowRightCircleIcon className={iconClass} />
                  다음글 보기
                </li>
                <li className={menuItemClass}>
                  <ArrowLeftCircleIcon className={iconClass} />
                  이전글 보기
                </li>
              </ul>
              <div className={`${menuContainerClass} ${menuItemClass}`}>
                <BookOpenIcon className={iconClass} />
                시리즈 보기
              </div>
            </Popover.Panel>
          </WithTransition>

          <Popover.Button
            className='text-gray-700 p-3 bg-white rounded-full border border-gray-100 z-[70]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            {open ? (
              <XMarkIcon className='w-5 h-5' />
            ) : (
              <Bars3Icon className='w-5 h-5' />
            )}
          </Popover.Button>
        </>
      )}
    </Popover>
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
      {children}
    </Transition>
  );
}

function TransitionOverlay() {
  return (
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div className='fixed inset-0 bg-black bg-opacity-30' />
    </Transition.Child>
  );
}
