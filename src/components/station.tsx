import { Station } from '@bysykkel/types';

const StationView = ({ station }: { station: Station }) => {
  return (
    <table aria-label='Stasjonsinformasjon'>
      <tbody>
        <tr>
          <th aria-label='Stasjonsnavn'>{station.name}</th>
        </tr>
        <tr>
          <td aria-label='Sykler'>
            Ledige sykler: {station.num_bikes_available}
          </td>
        </tr>
        <tr>
          <td aria-label='Låser'>
            Ledige låser: {station.num_docks_available}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StationView;
