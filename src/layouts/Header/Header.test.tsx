import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Layout', () => {
  it('renders the logo and name', () => {
    render(
      <MemoryRouter>
        <Header onMenuClick={vi.fn()} />
      </MemoryRouter>
    );
    expect(screen.getByAltText(/sandurtech logo/i)).toBeInTheDocument();
    expect(screen.getByText(/sandur/i)).toBeInTheDocument();
    expect(screen.getByText(/tech/i)).toBeInTheDocument();
  });

  it('contains navigation links', () => {
    render(
      <MemoryRouter>
        <Header onMenuClick={vi.fn()} />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /products/i })).toHaveAttribute('href', '/products');
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
  });

  it('calls onMenuClick when menu button is clicked', () => {
    const onMenuClick = vi.fn();
    render(
      <MemoryRouter>
        <Header onMenuClick={onMenuClick} />
      </MemoryRouter>
    );
    const menuButton = screen.getByLabelText(/menu/i);
    menuButton.click();
    expect(onMenuClick).toHaveBeenCalledTimes(1);
  });
});
