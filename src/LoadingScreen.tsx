import { assetUrl } from './assets';
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onFinish: () => void;
}

const statusMessages = [
  'Initializing pond equipment...',
  'Calibrating aeration dynamics...',
  'Balancing dissolved oxygen flow...',
  'Connecting aquaculture solutions...',
  'Quality Comes First · Ready'
];

export function LoadingScreen({ isLoading, onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(statusMessages[0]);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    let current = 0;
    const interval = setInterval(() => {
      // Easing speed: faster at start, slight pause near 85%, then smooth finish
      const step = current < 60 ? 3.5 : current < 88 ? 2 : 4;
      current = Math.min(100, current + step);
      setProgress(current);

      if (current < 25) setStatus(statusMessages[0]);
      else if (current < 55) setStatus(statusMessages[1]);
      else if (current < 80) setStatus(statusMessages[2]);
      else if (current < 98) setStatus(statusMessages[3]);
      else setStatus(statusMessages[4]);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            onFinish();
          }, 700);
        }, 350);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isLoading, onFinish]);

  if (!isLoading && !isFading) return null;

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      onFinish();
    }, 400);
  };

  return (
    <div
      className={`siri-preloader ${isFading ? 'fade-out' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Loading Siri Aquatic Solutions"
    >
      <div className="preloader-ambient" aria-hidden="true" />

      <div className="preloader-core">
        <div className="preloader-emblem-wrap">
          <div className="preloader-ripple" />
          <div className="preloader-ripple" />
          <div className="preloader-ripple" />
          <div className="preloader-orbit-ring" />

          <div className="preloader-logo-card">
            <img
              src={assetUrl('/siri-logo.png')}
              alt="Siri Aquatic Solutions emblem"
              className="preloader-logo-img"
              width={140}
              height={140}
            />
          </div>
        </div>

        <h2 className="preloader-title">Siri Aquatic</h2>
        <div className="preloader-tagline">
          <span>Quality Comes First</span>
        </div>

        <div className="preloader-progress-track">
          <div
            className="preloader-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="preloader-meta">
          <span className="preloader-status">{status}</span>
          <span className="preloader-percent">{Math.round(progress)}%</span>
        </div>
      </div>

      <button
        type="button"
        className="preloader-skip"
        onClick={handleSkip}
        aria-label="Skip intro animation"
      >
        Skip Intro &rarr;
      </button>
    </div>
  );
}
