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
            <table class="statusTable">
                <tbody>
                    <tr>
                        <td class=${bikesAvailableClassName}>${station.num_bikes_available}</td>
                        <td class=${spotsAvailableClassName}>${station.num_docks_available}</td>
                    </tr>
                </tbody>
            </table>
        `,
  });
};

export default stationIcon;
