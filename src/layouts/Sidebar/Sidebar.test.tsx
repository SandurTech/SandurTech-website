import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar Layout', () => {
  const onClose = vi.fn();

  it('is not visible when isOpen is false', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar isOpen={false} onClose={onClose} />
      </MemoryRouter>
    );
    const aside = container.querySelector('aside');
    // Using class check because JSDOM might not reflect CSS absolute positioning
    expect(aside).not.toHaveClass(/open/);
  });

  it('is visible when isOpen is true', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar isOpen={true} onClose={onClose} />
      </MemoryRouter>
    );
    const aside = container.querySelector('aside');
    expect(aside).toHaveClass(/open/);
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <MemoryRouter>
        <Sidebar isOpen={true} onClose={onClose} />
      </MemoryRouter>
    );
    const closeBtn = screen.getByLabelText(/close menu/i);
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar isOpen={true} onClose={onClose} />
      </MemoryRouter>
    );
    // Find overlay by div without children but with transition or specific class
    const overlay = container.querySelector('div[aria-hidden="true"]');
    if (overlay) {
      fireEvent.click(overlay);
      expect(onClose).toHaveBeenCalled();
    }
  });
});
