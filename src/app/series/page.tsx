import { getSeries } from '@/services/series';
import { Series } from '@/components/common';

export default async function SeriesListPage() {
  const series = await getSeries();

  return (
    <main className='max-container'>
      <h1 className='h1'>Series</h1>
      <Series series={series} />
    </main>
  );
}
