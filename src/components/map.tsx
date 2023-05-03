import { Station } from '@/types';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import stationIcon from './icon';
import StationView from './station';

const MapView = ({ stations }: { stations: Station[] }) => {
  return (
    <MapContainer
      center={[59.9189978, 10.7362189]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {stations.map((station) => {
        const icon = stationIcon({ station });
        return (
          <Marker
            key={station.station_id}
            position={[station.lat, station.lon]}
            icon={icon}
          >
            <Popup>
              <StationView station={station} />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
