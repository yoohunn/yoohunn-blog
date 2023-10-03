'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { NotionRenderer } from 'react-notion-x';
import clsx from 'clsx';

const Code = dynamic(
  () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
  { ssr: false },
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection,
  ),
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  },
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false,
  },
);

interface Props extends WithClassName {
  recordMap?: any;
}

export function NotionPage({ recordMap, className }: Props) {
  return (
    <main
      className={clsx(
        'mx-auto w-full px-6 lg:px-0 md:pb-10 lg:pb-15',
        className,
      )}
    >
      {recordMap ? (
        <NotionRenderer
          recordMap={recordMap}
          components={{
            nextImage: Image,
            nextLink: Link,
            Code,
            Collection,
            Equation,
            Modal,
            Pdf,
          }}
        />
      ) : (
        <AlertText />
      )}
    </main>
  );
}

function AlertText() {
  return (
    <div>
      <p>
        https://www.notion.so/
        <strong className='text-primary-600'>
          9d54c795c9db4a5faa5cdd6738410fde
        </strong>
      </p>
      <p>파란 글씨에 해당하는 부분만 전달해주세요.</p>
    </div>
  );
}
