import { Station, StationInformation, StationStatus } from '@bysykkel/types';
import logger from '@bysykkel/utils/logger';

const clientIdentifier =
  process.env.clientIdentifier || 'origotest-peters-besvarelse';
const baseUrl =
  process.env.baseUrl || 'https://gbfs.urbansharing.com/oslobysykkel.no';

const fetchStationInformation = async () => {
  return fetch(`${baseUrl}/station_information.json`, {
    method: 'GET',
    headers: {
      'Client-Identifier': clientIdentifier,
    },
  })
    .then((response) => response.json())
    .catch((error) =>
      logger.error('Failed fetching station information', error)
    );
};

const fetchStationStatus = async () => {
  return fetch(`${baseUrl}/station_status.json`, {
    method: 'GET',
    headers: {
      'Client-Identifier': clientIdentifier,
    },
  })
    .then((response) => response.json())
    .catch((error) => logger.error('Failed fetching station status', error));
};

export const fetchBikeDate = async (): Promise<Station[]> => {
  const [stationInformation, stationStatus] = await Promise.all([
    fetchStationInformation(),
    fetchStationStatus(),
  ]);

  if (!stationStatus || stationStatus.length === 0) {
    return [];
  }

  return (
    stationInformation.data.stations?.map(
      (stationInformation: StationInformation) => {
        return {
          ...stationInformation,
          ...stationStatus.data.stations.find(
            (stationStatus: StationStatus) =>
              stationStatus.station_id === stationInformation.station_id
          ),
        };
      }
    ) || []
  );
};
