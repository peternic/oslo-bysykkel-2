import {
  mockStationInformation,
  mockStationStatus,
} from '../../testData/mockStations';
import { merge } from './dataMerger';

describe('dataMerger', () => {
  it('shall merge station and bike info', () => {
    expect(
      merge(
        [
          {
            station_id: '627',
            name: 'Skøyen Stasjon',
            address: 'Skøyen Stasjon',
            lat: 59.9226729,
            lon: 10.6788129,
            capacity: 20,
          },
        ],
        [
          {
            is_installed: 1,
            is_renting: 1,
            num_bikes_available: 7,
            num_docks_available: 5,
            last_reported: 1540219230,
            is_returning: 1,
            station_id: '627',
          },
        ]
      )
    ).toMatchObject([
      {
        station_id: '627',
        name: 'Skøyen Stasjon',
        address: 'Skøyen Stasjon',
        lat: 59.9226729,
        lon: 10.6788129,
        capacity: 20,
        is_installed: 1,
        is_renting: 1,
        num_bikes_available: 7,
        num_docks_available: 5,
        last_reported: 1540219230,
        is_returning: 1,
      },
    ]);
  });

  it('shall return empty list if station information is undefined', () => {
    expect(merge(undefined, [mockStationStatus])).toEqual([]);
  });

  it('shall return empty list if station status is undefined', () => {
    expect(merge([mockStationInformation], undefined)).toEqual([]);
  });

  it('shall return empty list if station status is empty', () => {
    expect(merge([mockStationInformation], [])).toEqual([]);
  });
});
