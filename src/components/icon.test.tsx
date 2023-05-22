import { divIcon } from 'leaflet';
import stationIcon from './icon';
import { mockStation } from '../../testData/mockStations';

jest.mock('leaflet');

describe('icon', () => {
  it('shall render icon with available bikes and spots', async () => {
    stationIcon({
      station: {
        ...mockStation,
        num_bikes_available: 1,
        num_docks_available: 2,
      },
    });
    expect(divIcon).toBeCalledWith({
      className: 'leaflet-marker-icon arrow_box',
      html: `
            <table class="statusTable" aria-label="Kart markør" data-test-id="Marker Skøyen Stasjon">
                <tbody>
                    <tr>
                        <td aria-label="Antall sykler ledig" class="available">1</td>
                        <td aria-label="Antall plasser ledig" class="available">2</td>
                    </tr>
                </tbody>
            </table>
        `,
    });
  });

  it('shall render icon with available bikes and no spots', async () => {
    stationIcon({
      station: {
        ...mockStation,
        num_bikes_available: 1,
        num_docks_available: 0,
      },
    });
    expect(divIcon).toBeCalledWith({
      className: 'leaflet-marker-icon arrow_box',
      html: `
            <table class="statusTable" aria-label="Kart markør" data-test-id="Marker Skøyen Stasjon">
                <tbody>
                    <tr>
                        <td aria-label="Antall sykler ledig" class="available">1</td>
                        <td aria-label="Antall plasser ledig" class="notAvailable">0</td>
                    </tr>
                </tbody>
            </table>
        `,
    });
  });

  it('shall render icon with no available bikes and no spots', async () => {
    stationIcon({
      station: {
        ...mockStation,
        num_bikes_available: 0,
        num_docks_available: 0,
      },
    });
    expect(divIcon).toBeCalledWith({
      className: 'leaflet-marker-icon arrow_box',
      html: `
            <table class="statusTable" aria-label="Kart markør" data-test-id="Marker Skøyen Stasjon">
                <tbody>
                    <tr>
                        <td aria-label="Antall sykler ledig" class="notAvailable">0</td>
                        <td aria-label="Antall plasser ledig" class="notAvailable">0</td>
                    </tr>
                </tbody>
            </table>
        `,
    });
  });
});
