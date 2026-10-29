import React, { useEffect, useState } from 'react';

interface Dot {
  id: string;
  label: string;
}

const dots: Dot[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'trust-strip', label: 'Trust & Stats' },
  { id: 'range', label: 'Equipment Range' },
  { id: 'showcase', label: 'Flagship Aerators' },
  { id: 'why-siri', label: 'The Siri Approach' },
  { id: 'selector-tool', label: 'Sizing Tool' }
];

export function SectionDots() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = dots.length - 1; i >= 0; i--) {
        const el = document.getElementById(dots[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(dots[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="desktop-section-dots" aria-label="Page section navigation">
      {dots.map((d) => (
        <button
          key={d.id}
          type="button"
          className={`section-nav-dot ${activeSection === d.id ? 'is-active' : ''}`}
          onClick={() => scrollTo(d.id)}
          aria-label={`Jump to ${d.label}`}
        >
          <span className="dot-tooltip">{d.label}</span>
          <span className="dot-circle" />
        </button>
      ))}
    </nav>
  );
}
export default SectionDots;
