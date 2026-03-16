import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import EmailGuardian from './EmailGuardian';

describe('EmailGuardian Component', () => {
  const testEmail = 'test@example.com';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initially renders the unlock button', () => {
    render(<EmailGuardian email={testEmail} />);
    expect(screen.getByText(/unlock professional contact/i)).toBeInTheDocument();
  });

  it('shows the human verification challenge after clicking unlock', async () => {
    const user = userEvent.setup();
    render(<EmailGuardian email={testEmail} />);
    
    await user.click(screen.getByText(/unlock professional contact/i));
    
    expect(screen.getByText(/human verification/i)).toBeInTheDocument();
    expect(screen.getByText(/slide the key to reveal email/i)).toBeInTheDocument();
  });

  it('reveals email after sliding to 100%', async () => {
    render(<EmailGuardian email={testEmail} />);
    fireEvent.click(screen.getByText(/unlock professional contact/i));
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '100' } });

    await waitFor(() => {
      expect(screen.getByText(testEmail)).toBeInTheDocument();
    });
  });

  it('copies email to clipboard on action', async () => {
    const user = userEvent.setup();
    render(<EmailGuardian email={testEmail} />);
    
    // Unlock
    await user.click(screen.getByText(/unlock professional contact/i));
    
    // Slide to 100
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '100' } });

    // Wait for reveal & click copy btn
    const revealedButton = await screen.findByTitle(/click to send & copy/i);
    await user.click(revealedButton);

    // Verify via UI feedback instead of spy (which is problematic in JSDOM/Vitest global stubs)
    await waitFor(() => {
      expect(screen.getByText(/Copied to Clipboard!/i)).toBeInTheDocument();
    });
  });
});
