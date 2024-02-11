import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Main', () => {
  it('should render Main component', () => {
    render(<Main />);

    const main = screen.queryByTestId('main');

    expect(main).toBeInTheDocument();
  });
});
