import { assetUrl } from './assets';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Gauge, Weight, Cable, ShieldCheck, Play, Pause } from 'lucide-react';
import './glass-gallery.css';
import { siteText, useSiteLang } from './i18n';

interface ShowcaseProduct {
  id: string;
  name: string;
  image: string;
  alt: string;
  featureChip: string;
  featureDesc: string;
  specs: {
    type: string;
    coverage: string;
    powerSupply: string;
    operatingMode: string;
  };
  mainInfo: {
    power: string;
    weight: string;
    supply: string;
    warranty: string;
  };
  bigStat: {
    value: string;
    label: string;
    standard: string;
  };
}

const showcaseProducts: ShowcaseProduct[] = [
  {
    id: 'paddle-wheel',
    name: 'Pro-4 Paddle Aerator',
    image: assetUrl('/images/aerator-4paddle-real.png'),
    alt: '4-paddle wheel aerator with sealed blue drive hood and three virgin HDPE floats',
    featureChip: 'SEALED DRIVE HOOD',
    featureDesc: 'Marine-grade SS-304 frame with UV-stabilized virgin HDPE floats and weather-sealed gearbox cover',
    specs: {
      type: '4-Paddle Wheel',
      coverage: 'Up to 1.2 Hectares',
      powerSupply: '3-Phase / 415V / 50Hz',
      operatingMode: 'Continuous Duty S1'
    },
    mainInfo: {
      power: '2.0 HP / 1.5 kW',
      weight: '84 kg',
      supply: '3-Phase 415V',
      warranty: '24 Months'
    },
    bigStat: {
      value: '2.4 kg O₂/h',
      label: 'Standard Oxygen Transfer Rate (SOTR)',
      standard: 'Tested per ASCE standard guidelines'
    }
  },
  {
    id: 'compact-aerator',
    name: 'Turbo-2 Compact Aerator',
    image: assetUrl('/images/aerator-2paddle-real.png'),
    alt: '2-paddle compact wheel aerator with twin floats and yellow impellers',
    featureChip: 'HIGH-TORQUE MOTOR',
    featureDesc: 'IP55 moisture-sealed motor winding with integrated thermal overload protection',
    specs: {
      type: 'Compact 2-Paddle',
      coverage: 'Up to 0.6 Hectares',
      powerSupply: '1-Phase 230V / 3-Phase 415V',
      operatingMode: 'High Velocity Circulation'
    },
    mainInfo: {
      power: '1.0 HP / 0.75 kW',
      weight: '52 kg',
      supply: '1 / 3 Phase',
      warranty: '24 Months'
    },
    bigStat: {
      value: '1.6 kg O₂/h',
      label: 'Transfer Efficiency in Nursery Ponds',
      standard: 'Verified under saline brackish water tests'
    }
  },
  {
    id: 'spiral-impeller',
    name: 'Surge Impeller Aerator',
    image: assetUrl('/images/aerator-impeller-real.png'),
    alt: 'Floating impeller aerator with circular blue float ring and stainless steel intake strainer',
    featureChip: 'SS INTAKE STRAINER',
    featureDesc: 'Circular HDPE float ring paired with perforated stainless intake screen and corrosion-proof drive',
    specs: {
      type: 'Subsurface Impeller',
      coverage: 'Up to 1.5 Hectares',
      powerSupply: '3-Phase / 415V',
      operatingMode: 'Continuous Upwelling'
    },
    mainInfo: {
      power: '2.0 HP / 1.5 kW',
      weight: '44 kg',
      supply: '3-Phase 415V',
      warranty: '36 Months'
    },
    bigStat: {
      value: '98.4%',
      label: 'Pond Bottom Oxygenation Coverage',
      standard: 'Zero dead zone velocity verification'
    }
  },
  {
    id: 'pro-6-paddle',
    name: 'Pro-6 Heavy-Duty Aerator',
    image: assetUrl('/images/aerator-6paddle-real.png'),
    alt: '6-paddle wheel aerator with central vertical motor, gearbox and four blue floats',
    featureChip: 'CENTRE GEARBOX DRIVE',
    featureDesc: 'Balanced multi-float HDPE chassis with open-cooling vertical motor and reinforced spline couplings',
    specs: {
      type: '6-Paddle Wheel',
      coverage: 'Up to 1.8 Hectares',
      powerSupply: '3-Phase / 415V / 50Hz',
      operatingMode: 'Heavy-Duty Continuous'
    },
    mainInfo: {
      power: '3.0 HP / 2.2 kW',
      weight: '112 kg',
      supply: '3-Phase 415V',
      warranty: '24 Months'
    },
    bigStat: {
      value: '3.2 kg O₂/h',
      label: 'High-Density Pond Transfer Rate',
      standard: 'Balanced multi-float stability in coastal winds'
    }
  },
  {
    id: 'max-8-paddle',
    name: 'Max-8 Commercial Aerator',
    image: assetUrl('/images/aerator-8paddle-real.png'),
    alt: '8-paddle long-span commercial aerator with five blue floats and yellow paddle wheels',
    featureChip: '5-FLOAT STABILITY',
    featureDesc: 'Extended SS-304 twin-rail frame across five virgin HDPE pontoons for uniform full-pond currents',
    specs: {
      type: '8-Paddle Long-Span',
      coverage: 'Up to 2.5 Hectares',
      powerSupply: '3-Phase / 415V / 50Hz',
      operatingMode: 'Commercial Grow-Out'
    },
    mainInfo: {
      power: '3.0–5.0 HP',
      weight: '142 kg',
      supply: '3-Phase 415V',
      warranty: '24 Months'
    },
    bigStat: {
      value: '4.1 kg O₂/h',
      label: 'Wide-Span Surface Oxygenation',
      standard: 'Designed for large-acreage aquaculture farms'
    }
  }
];

export function ProductShowcase() {
  const { lang } = useSiteLang();
  const t = siteText[lang].showcase;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reduced, setReduced] = useState(
    () =>
      typeof document !== 'undefined' &&
      (document.documentElement.classList.contains('reduce-motion') ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  );

  const sectionRef = useRef<HTMLElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const count = showcaseProducts.length;
  const product = showcaseProducts[active];
  const change = (index: number) => setActive((index + count) % count);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => {
      setReduced(document.documentElement.classList.contains('reduce-motion') || mq.matches);
    };
    syncMotion();
    mq.addEventListener('change', syncMotion);
    const mo = new MutationObserver(syncMotion);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      mq.removeEventListener('change', syncMotion);
      mo.disconnect();
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.15 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || interacting || !isVisible || reduced) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused, interacting, isVisible, reduced, count]);

  const info = [
    { Icon: Weight, label: t.specLabels.weight, value: product.mainInfo.weight },
    { Icon: Gauge, label: t.specLabels.power, value: product.mainInfo.power },
    { Icon: Cable, label: t.specLabels.powerSupply, value: product.mainInfo.supply },
    { Icon: ShieldCheck, label: t.specLabels.warranty, value: product.mainInfo.warranty }
  ];

  const isPlaying = !paused && !interacting && isVisible && !reduced;

  return (
    <section
      ref={sectionRef}
      className="equipment-gallery"
      id="showcase"
      aria-label="Explore aeration equipment slideshow"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setInteracting(false);
      }}
    >
      <div className="gallery-environment" aria-hidden="true">
        <img
          className="gallery-backdrop-photo"
          src={assetUrl('/images/gallery-backdrop.webp')}
          alt=""
          width="1536"
          height="1024"
          loading="lazy"
        />
        <span className="gallery-light gallery-light-aqua" />
        <span className="gallery-light gallery-light-amber" />
        <span className="gallery-floor" />
      </div>

      <div className="gallery-layout">
        <div className="gallery-left">
          <span className="gallery-eyebrow">
            {t.eyebrowPrefix} / 0{active + 1}
          </span>
          <h2 className="gallery-headline" key={`headline-${active}-${lang}`}>
            {t.headlines[active].map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="gallery-glass gallery-details" key={`details-${active}-${lang}`}>
            <p className="gallery-caption">{t.captions[active]}</p>
            <dl className="gallery-specs">
              {[
                [t.specLabels.type, product.specs.type],
                [t.specLabels.coverage, product.specs.coverage],
                [t.specLabels.powerSupply, product.specs.powerSupply],
                [t.specLabels.operatingMode, product.specs.operatingMode]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="gallery-feature">
              <div>
                <span>{t.closerLook}</span>
                <strong>{product.featureChip}</strong>
              </div>
              <p>{product.featureDesc}</p>
            </div>
            <Link to={`/products/${product.id}`} className="gallery-cta">
              {t.exploreEquipment} <ArrowUpRight size={20} strokeWidth={1.6} />
            </Link>
            <Link to={`/request-a-quote?product=${product.id}`} className="gallery-enquire">
              {t.talkPond} <ArrowRight size={16} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        <div className="gallery-center">
          <div className="gallery-image-stage" aria-live="polite">
            <div className="gallery-image-halo" aria-hidden="true" />
            <img
              key={product.image}
              src={product.image}
              alt={product.alt}
              className={`gallery-product-image gallery-product-${active}`}
              width="1024"
              height="768"
              decoding="async"
            />
            <span className="gallery-contact-shadow" aria-hidden="true" />
          </div>

          <div className="gallery-switcher">
            <div className="gallery-switcher-top">
              <span>{t.findFlow}</span>
              <div>
                <button
                  type="button"
                  aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
                  aria-pressed={paused}
                  onClick={() => setPaused((p) => !p)}
                  title={paused ? 'Resume slideshow' : 'Pause slideshow'}
                >
                  {paused ? <Play size={14} strokeWidth={1.7} /> : <Pause size={14} strokeWidth={1.7} />}
                </button>
                <button type="button" aria-label="Previous product" onClick={() => change(active - 1)}>
                  <ArrowLeft size={18} strokeWidth={1.5} />
                </button>
                <span className="gallery-counter">
                  0{active + 1} <i>/ 0{count}</i>
                </span>
                <button type="button" aria-label="Next product" onClick={() => change(active + 1)}>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div
              ref={tabs}
              className="gallery-product-tabs"
              role="tablist"
              aria-label="Choose equipment"
              onKeyDown={(e) => {
                let next = active;
                if (e.key === 'ArrowRight') next = (active + 1) % count;
                else if (e.key === 'ArrowLeft') next = (active - 1 + count) % count;
                else if (e.key === 'Home') next = 0;
                else if (e.key === 'End') next = count - 1;
                else return;
                e.preventDefault();
                change(next);
                tabs.current?.querySelectorAll<HTMLButtonElement>('[role=tab]')[next]?.focus();
              }}
            >
              {showcaseProducts.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`equipment-tab-${index}`}
                  aria-selected={active === index}
                  aria-controls="equipment-info"
                  tabIndex={active === index ? 0 : -1}
                  className={active === index ? 'selected' : ''}
                  onClick={() => change(index)}
                >
                  <img src={item.image} alt="" width="88" height="70" loading="lazy" />
                  <span>{t.units[index]}</span>
                  <span className="gallery-selection-dot" aria-hidden="true" />
                  {active === index && isPlaying && (
                    <span className="gallery-slide-progress" key={`prog-${active}`} aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="gallery-right" id="equipment-info" role="tabpanel" aria-labelledby={`equipment-tab-${active}`}>
          <div className="gallery-glass gallery-title-card" key={`title-${active}-${lang}`}>
            <span className="gallery-eyebrow">{product.specs.type}</span>
            <h3>{product.name}</h3>
            <p>{t.taglines[active]}</p>
            <svg className="gallery-wave" viewBox="0 0 350 90" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M0 ${45 + i * 2} C55 ${5 + i * 6},75 ${85 - i * 4},130 45 S205 ${5 + i * 7},260 45 S315 ${85 - i * 6},350 45`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={i === 2 ? 1.4 : 0.65}
                  opacity={1 - i * 0.12}
                />
              ))}
            </svg>
            <span className="gallery-title-caption">{t.qualityCaption}</span>
          </div>

          <div className="gallery-glass gallery-main-info" key={`info-${active}-${lang}`}>
            <h4>{t.theDetails}</h4>
            <div className="gallery-info-grid">
              {info.map(({ Icon, label, value }) => (
                <div key={label}>
                  <Icon size={26} strokeWidth={1.35} aria-hidden="true" />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="gallery-stat">
              <span>{product.bigStat.value}</span>
              <p>{product.bigStat.label}</p>
              <small>{product.bigStat.standard}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
