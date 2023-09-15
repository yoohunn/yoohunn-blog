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
    imgUrl: '/img/posts/migration-2.jpg',
    notionUrl: '',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
  },
  {
    id: 'post-2',
    title: 'Next.js 오픈소스 예시코드를 13.3버전으로 마이그레이션 하기',
    description:
      'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    thumbnailKeyword: 'problem solving',
    colorType: 'yellow',
    createdAt: '2023.9.10',
    imgUrl: '/img/posts/migration-1.jpg',
    notionUrl: 'Next-js-13-3-e0e4b0da247342289d87e5a7513b3cc8?pvs=4',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
  },
  {
    id: 'post-3',
    title: 'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    description:
      'Next.js 13.4 Built-in Optimizations 활용하여 진행한 성능 최적화',
    thumbnailKeyword: 'Optimizations',
    colorType: 'green',
    createdAt: '2023.9.10',
    imgUrl: '/img/posts/improvment.jpg',
    notionUrl: '',
    tags: [
      { id: 'i', title: 'number' },
      { id: 'd', title: 'string' },
      { id: 'is', title: 'boolean' },
      { id: 'ig', title: 'symbol' },
    ],
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
  },
];
