import { redirect } from 'next/navigation';

interface Props {
  params: { page: string };
}

export default async function PaginatedPostPage({ params }: Props) {
  const page = Number(params.page) || 1;

  if (page === 1) {
    redirect('/posts');
  }

  return (
    <main>
      <h2>PaginatedPostPage</h2>
      <h1 className='h2'>{page}</h1>
    </main>
  );
}

/**
 * 1. page를 params로 받고 1인 경우는 posts로 리다이렉트한다.
 * */
