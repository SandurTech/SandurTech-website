import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import { companyLinks } from '../../data/socials';

describe('Footer Layout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock window.confirm
    vi.stubGlobal('confirm', vi.fn().mockReturnValue(true));
  });

  it('renders brand and navigation links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/sandurtech is a solo-venture/i)).toBeInTheDocument();
    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
  });

  it('handles email reveal and copy', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    const connectLink = screen.getByText(/connect directly/i);
    await user.click(connectLink);

    expect(window.confirm).toHaveBeenCalledWith(expect.stringContaining('Human Check'));
    
    // After confirm (mocked true), it should reveal the email in the link
    await waitFor(() => {
      expect(screen.getByText(new RegExp(`mail: ${companyLinks.email}`, 'i'))).toBeInTheDocument();
    });

    // Clicking again should reveal the "Copied" text
    const emailLink = screen.getByText(new RegExp(`mail: ${companyLinks.email}`, 'i'));
    await user.click(emailLink);
    
    await waitFor(() => {
        expect(screen.getByText(/Copied & Opening Mail/i)).toBeInTheDocument();
    });
  });
});
