'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  nextHref?: string;
  prevHref?: string;
}

const SHOWING_HEIGHT = 200;

export function PostNav({ seriesHref, nextHref, prevHref }: Props) {
  const [isShowing, setIsShowing] = useState(false);

  const onScroll = () => {
    const scrollHeight = window.scrollY;
    const shouldShow = scrollHeight > SHOWING_HEIGHT;

    if (shouldShow !== isShowing) {
      setIsShowing(shouldShow);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isShowing, onScroll]);

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
                {nextHref && (
                  <Link href={nextHref} className={menuItemClass}>
                    <ArrowRightCircleIcon className={iconClass} />
                    다음글 보기
                  </Link>
                )}
                {prevHref && (
                  <Link href={prevHref} className={menuItemClass}>
                    <ArrowLeftCircleIcon className={iconClass} />
                    이전글 보기
                  </Link>
                )}
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

          <WithButtonTransition isShowing={isShowing}>
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
          </WithButtonTransition>
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

interface WithButtonTransitionProps extends WithChildren {
  isShowing: boolean;
}

function WithButtonTransition({
  isShowing,
  children,
}: WithButtonTransitionProps) {
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
      {children}
    </Transition>
  );
}
