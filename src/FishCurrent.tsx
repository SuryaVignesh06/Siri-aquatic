import { useEffect, useRef, useState } from 'react';


/** Decorative, logo-inspired fish stay in their own lane, clear of page content. */
export function FishCurrent({ compact = false }: { compact?: boolean }) {
  const lane = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '60px' });
    if (lane.current) observer.observe(lane.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={lane} className={`fish-current${compact ? ' fish-current-compact' : ''}${visible ? ' is-swimming' : ''}`} aria-hidden="true">
    <span className="fish-current-line" />
    {[0, 1, 2].map(index => <span className={`fish-swimmer fish-swimmer-${index}`} key={index}>
      <svg viewBox="0 0 148 72" fill="none" focusable="false">
        <g className="fish-body">
          <path d="M12 36C32 7 61 7 94 36C61 65 32 65 12 36Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M30 20Q48 21 48 36Q48 51 30 52" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M33 23Q44 27 44 36Q44 45 33 49Q22 43 17 36Q22 29 33 23Z" fill={index === 1 ? '#e29136' : '#01b8c8'} opacity=".85"/>
          <circle cx="29" cy="34" r="3" fill="currentColor"/>
          <path d="M58 17Q65 7 75 11L71 23M58 55Q65 65 75 61L71 49" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        </g>
        <path className="fish-tail" d="M93 36L124 15Q135 36 124 57L93 36Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <circle className="fish-bubble" cx="4" cy="19" r="2.2" stroke="currentColor"/>
      </svg>
    </span>)}
  </div>;
}

