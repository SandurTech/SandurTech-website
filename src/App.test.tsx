import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock scrollTo since JSDOM doesn't implement it
window.scrollTo = vi.fn();

describe('App Component Root', () => {
  it('renders the main layout elements', async () => {
    render(<App />);
    
    // Check for Header and Footer which are always present
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('renders the Home page by default', async () => {
    render(<App />);
    
    // The home page has the "Handcrafted niche products" text
    expect(screen.getByText(/handcrafted niche products/i)).toBeInTheDocument();
  });
});
