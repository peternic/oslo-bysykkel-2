import MapView from '@bysykkel/components/map';
import { fetchBikeDate } from '@bysykkel/services/stationService';
import { Station } from '@bysykkel/types';
import dynamic from 'next/dynamic';

const DynamicMapView = dynamic(() => import('@bysykkel/components/map'), {
  ssr: false,
});

export default function Bikes({ data }: { data: Station[] }) {
  if (!data || data.length === 0) {
    return (
      <div>Huff da, her må det ha skjedd noe rart, fant ingen stasjoner</div>
    );
  }
  return (
    <div style={{ aspectRatio: 600 / 600 }}>
      <DynamicMapView stations={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const stationData = await fetchBikeDate();
  return { props: { data: stationData } };
}
