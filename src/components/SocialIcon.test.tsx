import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SocialIcon from './SocialIcon';

describe('SocialIcon Component', () => {
  it('renders a github icon when platform is github', () => {
    // We use container because react-icons usually render as svgs and don't always have easy labels
    // but the component adds aria-hidden="true"
    const { container } = render(<SocialIcon platform="github" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders a globe icon as fallback for unknown platforms', () => {
    const { container } = render(<SocialIcon platform="unknown-platform" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SocialIcon platform="github" className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });
});
