import '@testing-library/jest-dom';
import { vi, afterEach, beforeEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo
window.scrollTo = vi.fn();

// Mock window.location for React Router compatibility
// JSDOM has a locked window.location, we need to bypass it carefully
const locationMock = {
  ...window.location,
  origin: 'http://localhost',
  href: 'http://localhost/',
  assign: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
};

// Use stubGlobal for wide compatibility
vi.stubGlobal('location', locationMock);

// Also try defineProperty on window
try {
    Object.defineProperty(window, 'location', {
        value: locationMock,
        configurable: true,
        writable: true
    });
} catch (e) {
    // Already defined or locked
}

// Mock navigator.clipboard
const mockClipboard = {
  writeText: vi.fn().mockResolvedValue(undefined),
};
vi.stubGlobal('navigator', {
  ...navigator,
  clipboard: mockClipboard,
});

beforeEach(() => {
  vi.clearAllMocks();
});
