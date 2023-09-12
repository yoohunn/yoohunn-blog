import { Header } from '@/components/common';
import {
  Collections,
  ContactMe,
  Posts,
  RecommandPosts,
  Tags,
} from '@/components/pages/home';

export default function Home() {
  return (
    <main className='flex-col-center'>
      <Header />
      <div className='w-full max-w-[1200px] pl-4 pb-20'>
        <Tags />
        <Collections />
        <RecommandPosts />
        <Posts />
        <ContactMe />
      </div>
    </main>
  );
}
