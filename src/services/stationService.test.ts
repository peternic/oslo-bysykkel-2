import fetchMock from 'jest-fetch-mock';
import { fetchBikeDate } from './stationService';
import logger from '@bysykkel/utils/logger';
import { error } from 'console';

jest.mock('@bysykkel/utils/logger');

const mockStations = [
  {
    station_id: '627',
    name: 'Skøyen Stasjon',
    address: 'Skøyen Stasjon',
    lat: 59.9226729,
    lon: 10.6788129,
    capacity: 20,
  },
];

const mockStationsStatus = [
  {
    is_installed: 1,
    is_renting: 1,
    num_bikes_available: 7,
    num_docks_available: 5,
    last_reported: 1540219230,
    is_returning: 1,
    station_id: '627',
  },
];

describe('stationService', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });
  it('shall fetch bike data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { stations: mockStations } })
    );
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { stations: mockStationsStatus } })
    );
    const result = await fetchBikeDate();
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Skøyen Stasjon',
          num_bikes_available: 7,
        }),
      ])
    );
  });

  it('shall fetch bike data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { stations: mockStations } })
    );
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { stations: mockStationsStatus } })
    );
    const result = await fetchBikeDate();
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Skøyen Stasjon',
          num_bikes_available: 7,
        }),
      ])
    );
  });

  it('shall handle failed station information call', async () => {
    const errorMessage = 'Failed fetching information';
    fetchMock.mockRejectOnce(new Error(errorMessage));
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { stations: mockStationsStatus } })
    );
    const result = await fetchBikeDate();
    expect(logger.error).toBeCalledWith(
      'Failed fetching station information',
      new Error(errorMessage)
    );
    expect(result).toEqual([]);
  });

  it('shall handle failed station status call', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { stations: mockStations } })
    );
    const errorMessage = 'Failed fetching status';
    fetchMock.mockRejectOnce(new Error(errorMessage));
    const result = await fetchBikeDate();
    expect(logger.error).toBeCalledWith(
      'Failed fetching station status',
      new Error(errorMessage)
    );
    expect(result).toEqual([]);
  });
});
