import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';

describe('Nav', () => {
  it('should render Nav component', () => {
    render(<Nav />);

    const nav = screen.queryByTestId('nav');

    expect(nav).toBeInTheDocument();
  });
});
