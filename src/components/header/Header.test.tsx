import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('should render Header component', () => {
    render(<Header />);

    const header = screen.queryByTestId('header');

    expect(header).toBeInTheDocument();
  });
});
