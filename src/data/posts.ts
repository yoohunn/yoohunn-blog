import { Post } from '@/model/posts';

export const posts: Post[] = [
  {
    id: 'post-1',
    title: 'Next.js 13.3 마이그레이션을 완료하며',
    description:
      'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    thumbnailKeyword: 'migration',
    colorType: 'gray',
    createdAt: '2023.9.10',
    imgUrl:
      'https://images.unsplash.com/photo-1552291162-799c84751212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    notionUrl: 'Next-js-13-3-9c50d9f595a64336b9718383a8112fd7?pvs=4',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
    collection: {
      id: 'nextjs',
      title: 'Next.js',
    },
  },
  {
    id: 'post-2',
    title: 'Next.js 오픈소스 예시코드를 13.3버전으로 마이그레이션 하기',
    description:
      'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    thumbnailKeyword: 'problem solving',
    colorType: 'yellow',
    createdAt: '2023.9.10',
    imgUrl:
      'https://images.unsplash.com/photo-1602410141957-ee70b4739066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    notionUrl: 'Next-js-13-3-e0e4b0da247342289d87e5a7513b3cc8?pvs=4',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
    collection: {
      id: 'nextjs',
      title: 'Next.js',
    },
  },
  {
    id: 'post-3',
    title: 'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    description:
      'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    thumbnailKeyword: 'Optimizations',
    colorType: 'green',
    createdAt: '2023.9.10',
    imgUrl:
      'https://images.unsplash.com/photo-1690117670229-a114a6dd4ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80',
    notionUrl:
      'Next-js-13-4-Built-in-Optimizations-73-98-ec22bdf5b468483bab29a4321c01cc7e?pvs=4',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
    collection: {
      id: 'nextjs',
      title: 'Next.js',
    },
  },
  {
    id: 'post-4',
    title: '웹 접근성 75 → 90점으로 향상한 과정',
    description:
      'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    thumbnailKeyword: 'Web Accessibility',
    colorType: 'red',
    createdAt: '2023.9.10',
    notionUrl: '',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
    collection: {
      id: 'nextjs',
      title: 'Next.js',
    },
  },
];
