import { Station, StationInformation } from '@bysykkel/types';
import { StationStatus } from '@bysykkel/types';

export const merge = (
  stations: StationInformation[],
  stationsStatus: StationStatus[]
): Station[] => {
  if (!stationsStatus || stationsStatus.length === 0) {
    return [];
  }
  return (
    stations?.map((stationInformation: StationInformation) => {
      return {
        ...stationInformation,
        ...stationsStatus.find(
          (stationStatus: StationStatus) =>
            stationStatus.station_id === stationInformation.station_id
        ),
      } as Station;
    }) || []
  );
};
