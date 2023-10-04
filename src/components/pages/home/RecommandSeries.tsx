import { Series as ISeries } from '@/model/series';
import { Series } from '@/components/common';

interface Props {
  series: ISeries[];
}

export function RecommandSeries({ series }: Props) {
  return (
    <section className='my-20 md:mb-[100px]'>
      <h1 className='h1 mt-0'>추천 시리즈</h1>
      <Series series={series} />
    </section>
  );
}
