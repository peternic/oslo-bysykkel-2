import { Station } from '@bysykkel/types';
import { divIcon } from 'leaflet';

const stationIcon = ({ station }: { station: Station }) => {
  const bikesAvailableClassName =
    station.num_bikes_available > 0 ? 'available' : 'notAvailable';
  const spotsAvailableClassName =
    station.num_docks_available > 0 ? 'available' : 'notAvailable';
  return divIcon({
    className: 'leaflet-marker-icon arrow_box',
    html: `
            <table class="statusTable" aria-label="Kart markør" data-test-id="Marker ${station.name}">
                <tbody>
                    <tr>
                        <td aria-label="Antall sykler ledig" class="${bikesAvailableClassName}">${station.num_bikes_available}</td>
                        <td aria-label="Antall plasser ledig" class="${spotsAvailableClassName}">${station.num_docks_available}</td>
                    </tr>
                </tbody>
            </table>
        `,
  });
};

export default stationIcon;
