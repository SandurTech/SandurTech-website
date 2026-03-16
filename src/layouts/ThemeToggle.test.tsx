import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    vi.clearAllMocks();
  });

  it('renders correctly with initial theme', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles theme on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    
    // Initial should be light (mocked matches: false)
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    
    fireEvent.click(button);
    
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('preserves theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
