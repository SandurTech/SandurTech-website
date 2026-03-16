import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={`theme-toggle ${isAnimating ? 'animating' : ''}`}
      aria-label="Toggle Theme"
      aria-pressed={theme === 'dark'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '16px',
        backgroundColor: 'var(--theme-surface)',
        border: '1px solid var(--theme-border)',
        color: 'var(--theme-text)',
        cursor: 'pointer',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <span 
        className="material-symbols-rounded"
        style={{
          fontSize: '1.4rem',
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: isAnimating ? 'rotate(180deg) scale(0.5)' : 'rotate(0deg) scale(1)',
        }}
      >
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
      
      {/* Subtle feedback glow */}
      <div style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-accent)',
          opacity: isAnimating ? 0.15 : 0,
          transition: 'opacity 0.6s ease',
          zIndex: -1
      }} />
    </button>
  );
}
