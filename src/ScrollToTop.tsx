import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      
      setScrollProgress(progress);
      setVisible(scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const offset = circumference - scrollProgress * circumference;

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? 'is-active' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg className="progress-ring" viewBox="0 0 58 58" aria-hidden="true">
        <defs>
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01b8c8" />
            <stop offset="60%" stopColor="#20d8e5" />
            <stop offset="100%" stopColor="#e29136" />
          </linearGradient>
        </defs>
        <circle
          className="ring-bg"
          cx="29"
          cy="29"
          r={radius}
        />
        <circle
          className="ring-fill"
          cx="29"
          cy="29"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <ArrowUp size={20} strokeWidth={2.2} />
    </button>
  );
}
