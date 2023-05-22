import { Station } from '@bysykkel/types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import stationIcon from './icon';
import StationView from './station';

const MapView = ({ stations }: { stations: Station[] }) => {
  return (
    <div className='maptest'>
      <MapContainer
        id='map'
        center={[59.9129978, 10.7362189]}
        zoom={15}
        scrollWheelZoom={false}
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
    </div>
  );
};

export default MapView;
