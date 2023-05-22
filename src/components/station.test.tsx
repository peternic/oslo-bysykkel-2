import { render, screen } from '@testing-library/react';
import StationView from './station';
import { mockStation } from '../../testData/mockStations';
describe('station', () => {
  it('shall render station view with available bikes and docks', () => {
    render(<StationView station={mockStation} />);
    const station = screen.getByLabelText('Stasjonsnavn');
    expect(station.textContent).toContain('Skøyen Stasjon');

    const bikes = screen.getByLabelText('Sykler');
    expect(bikes.textContent).toContain('Ledige sykler: 7');

    const docks = screen.getByLabelText('Låser');
    expect(docks.textContent).toContain('Ledige låser: 5');
  });
});
