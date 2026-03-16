import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Products from './Products';
import { products } from '../../data/products';

describe('Products Page Integration', () => {
  it('renders all products initially', () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
    products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it('filters products based on search input', () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/find a product/i);
    fireEvent.change(searchInput, { target: { value: 'Sand UI' } });

    expect(screen.getByText('Sand UI')).toBeInTheDocument();
    // Bulk Barcode Generator should NOT be visible if filtered correctly
    expect(screen.queryByText('Bulk Barcode Generator')).not.toBeInTheDocument();
  });

  it('filters by category using dropdown', () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
    
    const dropdownToggle = screen.getByRole('button', { name: /all/i });
    fireEvent.click(dropdownToggle);

    // Filter by 'Website/WebApp'
    const categoryBtn = screen.getByRole('option', { name: 'Website/WebApp' });
    fireEvent.click(categoryBtn);

    // Website/WebApp product should be there
    expect(screen.getByText('Bulk Barcode Generator')).toBeInTheDocument();
    // Misc/Others product should NOT be there
    expect(screen.queryByText('Sand UI')).not.toBeInTheDocument();
  });

  it('shows no results message when no product matches', () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText(/find a product/i);
    fireEvent.change(searchInput, { target: { value: 'non-existent-product' } });

    expect(screen.getByText(/we're still building/i)).toBeInTheDocument();
  });
});
