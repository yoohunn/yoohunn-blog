'use client';

import Link from 'next/link';
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
  return (
    <Popover
      as='nav'
      className='fixed right-4 bottom-4 flex flex-col items-end gap-4 z-[60]'
    >
      {({ open }) => (
        <>
          <WithTransition>
            <Popover.Panel>
              <div className={`${menuContainerClass} mb-2 space-y-4`}>
                <Link href={nextHref} className={menuItemClass}>
                  <ArrowRightCircleIcon className={iconClass} />
                  다음글 보기
                </Link>
                <Link href={prevHref} className={menuItemClass}>
                  <ArrowLeftCircleIcon className={iconClass} />
                  이전글 보기
                </Link>
              </div>
              <Link
                href={seriesHref}
                className={`${menuContainerClass} ${menuItemClass}`}
              >
                <BookOpenIcon className={iconClass} />
                시리즈 보기
              </Link>
            </Popover.Panel>
          </WithTransition>

          <Popover.Button
            className='text-gray-600 p-3.5 bg-white rounded-full border border-gray-100 z-[70]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            {open ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3Icon className='w-6 h-6' />
            )}
          </Popover.Button>
        </>
      )}
    </Popover>
  );
}

const menuContainerClass =
  'bg-white rounded-xl p-4 pr-7 border border-gray-100';
const menuItemClass = 'flex-row-center gap-2';
const iconClass = 'w-4 h-4 text-gray-400';

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
