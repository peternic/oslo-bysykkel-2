import { Station } from '@bysykkel/types';

const StationView = ({ station }: { station: Station }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>{station.name}</th>
        </tr>
        <tr>
          <td>Ledige sykler: {station.num_bikes_available}</td>
        </tr>
        <tr>
          <td>Ledige låser: {station.num_docks_available}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StationView;
