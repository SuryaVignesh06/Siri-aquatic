import { assetUrl } from './assets';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Search,
  Menu,
  X,
  Waves,
  Settings2,
  Droplets,
  Plus,
  Minus,
  MoveUpRight,
  Play,
  Pause
} from 'lucide-react';
import './style.css';
import './brand-motion.css';
import './editorial-refinement.css';
import './water-animations.css';
import './product-showcase.css';
import './plan-sections.css';
import { AmbientBubbles } from './AmbientBubbles';
import { FishCurrent } from './FishCurrent';
import { ScrollToTop } from './ScrollToTop';
import { ProductShowcase } from './ProductShowcase';
import { TrustStrip } from './TrustStrip';
import { HeroWordmark } from './HeroWordmark';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { SectionDivider } from './SectionDivider';
import { aeratorProducts, probioticProducts, spareEquipmentProducts } from './catalogData';
import { ProbioticsPage } from './ProbioticsPage';
import { QuotePage } from './QuotePage';
import {
  LanguageProvider,
  useSiteLang,
  siteText,
  aeratorTeluguMap,
  spareTeluguMap,
  probioticTeluguMap
} from './i18n';

function Link(props: React.ComponentProps<typeof RouterLink>) {
  return <RouterLink {...props} viewTransition />;
}

function Button({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link className={`button ${light ? 'light' : ''}`} to={to}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}

interface CardDisplayItem {
  id: string;
  series: string;
  name: string;
  desc: string;
  image: string;
  alt: string;
  chips: [string, string, string];
  to: string;
  isProbiotic?: boolean;
}

const allCatalogEntries = [
  ...aeratorProducts.map((a) => ({
    id: a.id,
    category: 'Aeration systems',
    name: a.name,
    desc: a.desc,
    image: a.image,
    alt: a.alt,
    credit: 'Product photograph',
    isCutout: true,
    specRows: [
      ['Power rating', a.specs.power],
      ['Configuration', a.specs.configuration],
      ['Floats / structure', a.specs.floats],
      ['Power supply', a.specs.supply],
      ['Pond coverage', a.specs.coverage],
      ['Oxygen transfer', a.specs.otr],
      ['Build & frame', a.specs.frame],
      ['Warranty', a.specs.warranty]
    ]
  })),
  ...probioticProducts.map((p) => ({
    id: p.id,
    category: 'Pond care & probiotics',
    name: p.name,
    desc: p.description,
    image: p.image,
    alt: `${p.name} — ${p.subtitle}`,
    credit: 'Product photograph',
    isCutout: false,
    specRows: [
      ['Product code', p.code],
      ['Category', p.series],
      ['Dosage & usage', p.dosage],
      ['Ingredients', p.ingredients],
      ['Package sizes', p.packageSize]
    ]
  })),
  ...spareEquipmentProducts.map((s) => ({
    id: s.id,
    category: 'Equipment & spares',
    name: s.name,
    desc: s.desc,
    image: s.image,
    alt: s.alt,
    credit: 'Product photograph',
    isCutout: true,
    specRows: [
      ['Category', s.specs.category],
      ['Capacity / rating', s.specs.capacity],
      ['Construction', s.specs.build],
      ['Compatibility', s.specs.compatibility],
      ['Power / drive', s.specs.power],
      ['Warranty', s.specs.warranty]
    ]
  }))
];

function Mark({ large = false }: { large?: boolean }) {
  return (
    <svg className={`mark ${large ? 'large' : ''}`} viewBox="30 8 580 440" role="img" aria-label="Siri Aquatic logo">
      <image href={assetUrl('/siri-logo-transparent.webp')} width="640" height="640" />
    </svg>
  );
}

function Brand() {
  return (
    <>
      <Mark />
      <svg className="wordmark" viewBox="45 475 565 140" role="img" aria-label="Siri Aquatic Solutions Pvt. Ltd. - Quality Comes First">
        <image href={assetUrl('/siri-logo-transparent.webp')} width="640" height="640" />
      </svg>
    </>
  );
}

interface HeaderProps {
  isHero?: boolean;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}

function Header({ isHero = false, menu, setMenu, setSearch, path }: HeaderProps) {
  const { lang, setLang } = useSiteLang();
  const t = siteText[lang].nav;
  const isProbioticDetail = probioticProducts.some((p) => path === `/products/${p.id}`);
  const isAeratorDetail = aeratorProducts.some((a) => path === `/products/${a.id}`);
  const isSpareDetail = spareEquipmentProducts.some((s) => path === `/products/${s.id}`);
  return (
    <header className={isHero ? 'calm-header calm-header-home' : 'calm-header calm-header-inner'}>
      <Link to="/" className="brand" aria-label="Siri Aquatic Solutions">
        <Brand />
      </Link>
      <nav aria-label="Main navigation" id="primary-navigation" className={menu ? 'open' : ''}>
        {[
          ['/', t.home],
          ['/aerators', t.aerators],
          ['/spares', t.spares],
          ['/probiotics', t.probiotics],
          ['/about', t.story]
        ].map(([url, name]) => {
          const isActive =
            url === '/'
              ? path === '/'
              : path === url ||
                path.startsWith(url + '/') ||
                (url === '/spares' && (path === '/equipment' || isSpareDetail)) ||
                (url === '/probiotics' && isProbioticDetail) ||
                (url === '/aerators' && isAeratorDetail);
          return (
            <Link className={isActive ? 'active' : ''} aria-current={isActive ? 'page' : undefined} key={url} to={url}>
              {name}
            </Link>
          );
        })}
      </nav>
      <div className="header-actions">
        <div className="site-lang-switch" role="group" aria-label="Website language">
          <button
            type="button"
            className={lang === 'en' ? 'is-active' : ''}
            aria-pressed={lang === 'en'}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === 'te' ? 'is-active' : ''}
            aria-pressed={lang === 'te'}
            onClick={() => setLang('te')}
          >
            తెలుగు
          </button>
        </div>
        <button
          className="icon-button search-trigger"
          aria-label={t.searchAria}
          onClick={() => setSearch(true)}
          type="button"
        >
          <Search size={19} />
        </button>
        <Link to="/request-a-quote" className="header-quote">
          {t.quote} <ArrowUpRight size={17} />
        </Link>
        <button
          className="icon-button menu-toggle"
          aria-expanded={menu}
          aria-controls="primary-navigation"
          aria-label={menu ? t.closeMenu : t.openMenu}
          onClick={() => setMenu((prev) => !prev)}
          type="button"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function HeroAtmosphere({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !reduced && !paused) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 }
    );
    observer.observe(v);
    if (reduced || paused) v.pause();
    return () => {
      observer.disconnect();
      v.pause();
    };
  }, [reduced, paused]);

  return (
    <>
      <div className="hero-atmosphere" aria-hidden="true">
        <video
          ref={ref}
          src={assetUrl('/hero-water-combined.mp4')}
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <button
        type="button"
        className="atmosphere-control"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
        aria-label={paused ? 'Play background video' : 'Pause background video'}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </>
  );
}

function LogoDarkFilter() {
  return (
    <svg width="0" height="0" className="logo-filter-defs" aria-hidden="true">
      <defs>
        <filter id="siri-logo-dark" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  2 2 2 0 -0.45"
            result="colors"
          />
          <feComposite in="colors" in2="SourceAlpha" operator="in" result="colorPixels" />
          <feFlood floodColor="#ffffff" result="white" />
          <feComposite in="white" in2="SourceAlpha" operator="in" result="whiteLogo" />
          <feMerge>
            <feMergeNode in="whiteLogo" />
            <feMergeNode in="colorPixels" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

function HeroSection({
  reduced
}: {
  reduced: boolean;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  path: string;
}) {
  const { lang } = useSiteLang();
  const t = siteText[lang].hero;

  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeEquipment, setActiveEquipment] = useState(0);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (paused || reduced || !visible || interacting) return;
    const interval = window.setInterval(() => setActiveEquipment((index) => (index + 1) % 3), 4200);
    return () => window.clearInterval(interval);
  }, [paused, reduced, visible, interacting]);

  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const equipment = [
    { src: assetUrl('/images/aerator-4paddle-real.png'), name: t.carouselNames[0], to: '/products/paddle-wheel' },
    { src: assetUrl('/images/aerator-2paddle-real.png'), name: t.carouselNames[1], to: '/products/compact-aerator' },
    { src: assetUrl('/images/aerator-impeller-real.png'), name: t.carouselNames[2], to: '/products/spiral-impeller' }
  ];

  return (
    <section className="calm-hero machine-hero poster-hero" id="hero" aria-label="Siri Aquatic introduction">
      <HeroAtmosphere reduced={reduced} />
      <div className="poster-hero-content">
        <div className="poster-heading">
          <span className="poster-eyebrow">{t.eyebrow}</span>
          <h1 className="hero-brand-heading" aria-label="Siri Aquatic Solutions Pvt. Ltd.">
            <HeroWordmark />
          </h1>
        </div>
        <div
          ref={rail}
          className="hero-focus-carousel"
          aria-label="Aeration equipment carousel"
          aria-roledescription="carousel"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setInteracting(false);
          }}
        >
          {equipment.map((item, index) => {
            const position = (index - activeEquipment + 3) % 3;
            const side = position === 0 ? 'center' : position === 1 ? 'right' : 'left';
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`hero-focus-item is-${side}`}
                aria-current={position === 0 ? 'true' : undefined}
                aria-label={position === 0 ? `Explore ${item.name}` : `Show ${item.name}`}
                onClick={(e) => {
                  if (position !== 0) {
                    e.preventDefault();
                    setActiveEquipment(index);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  width="1254"
                  height="1254"
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : undefined}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="hero-focus-dots" role="group" aria-label="Choose featured aerator">
            {equipment.map((item, index) => (
              <button
                key={item.to}
                type="button"
                aria-label={`Feature ${item.name}`}
                aria-pressed={activeEquipment === index}
                onClick={() => setActiveEquipment(index)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
        <div className="poster-hero-bottom">
          <p>
            {t.taglineLead} <span>{t.taglineSub}</span>
          </p>
          <button
            type="button"
            className="hero-rail-control"
            aria-label={paused ? 'Resume product carousel' : 'Pause product carousel'}
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={15} /> : <Pause size={15} />}
            <span>
              {paused ? t.play : t.pause} {t.productsWord}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useSiteLang();
  const t = siteText[lang];

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [manualReduced, setReduced] = useState(() => localStorage.getItem('siri-motion') === 'reduced');
  const [systemReduced, setSystemReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const reduced = manualReduced || systemReduced;
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSystemReduced(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const dialog = useRef<HTMLDialogElement>(null);

  const path = location.pathname.replace(/\/+$/, '') || '/';
  const activeProduct = allCatalogEntries.find((p) => path === `/products/${p.id}`);

  const aeratorCardItems: CardDisplayItem[] = aeratorProducts.map((a) => {
    const te = lang === 'te' ? aeratorTeluguMap[a.id] : undefined;
    return {
      id: a.id,
      series: te ? te.series : a.series,
      name: te ? te.name : a.name,
      desc: te ? te.desc : a.desc,
      image: a.image,
      alt: a.alt,
      chips: te ? te.chips : a.chips,
      to: `/products/${a.id}`,
      isProbiotic: false
    };
  });

  const spareCardItems: CardDisplayItem[] = spareEquipmentProducts.map((s) => {
    const te = lang === 'te' ? spareTeluguMap[s.id] : undefined;
    return {
      id: s.id,
      series: te ? te.tag : s.tag,
      name: te ? te.name : s.name,
      desc: te ? te.desc : s.desc,
      image: s.image,
      alt: s.alt,
      chips: te ? te.chips : s.chips,
      to: `/products/${s.id}`,
      isProbiotic: false
    };
  });

  const probioticCardItems: CardDisplayItem[] = probioticProducts.map((p) => {
    const te = lang === 'te' ? probioticTeluguMap[p.id] : undefined;
    return {
      id: p.id,
      series: `${p.code} · ${te ? te.series : p.series}`,
      name: p.name,
      desc: te ? te.subtitle : p.subtitle,
      image: p.image,
      alt: `${p.name} — ${p.subtitle}`,
      chips: te ? te.chips : p.chips,
      to: `/probiotics#${p.id}`,
      isProbiotic: true
    };
  });

  // Scroll to top on route change (unless hash anchor)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setMenu(false);
  }, [path, location.hash]);

  // One navigation bar smoothly gains a rounded surface when the page scrolls.
  useEffect(() => {
    const header = document.querySelector('header');
    const update = () => {
      if (!header) return;
      header.classList.toggle('is-scrolled', window.scrollY > 32);
      const bounds = header.getBoundingClientRect();
      const sampleY = bounds.top + bounds.height * 0.5;
      const dark = Array.from(document.querySelectorAll('.machine-hero,.equipment-gallery,footer')).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom >= sampleY;
      });
      header.setAttribute('data-surface', dark ? 'dark' : 'light');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('keydown', onKey);
    };
  }, [path]);

  // Enhanced On-Scroll Reveal Observer
  useEffect(() => {
    document.title = `${path === '/' ? 'Quality Comes First' : activeProduct?.name || path.slice(1).replaceAll('-', ' ')} - Siri Aquatic`;

    document.querySelectorAll('.section-heading, .inner h1, .inner .lead, .spec-section h2, .quote-grid h1, .articles details').forEach((el, i) => {
      if (!el.hasAttribute('data-scroll')) {
        el.setAttribute('data-scroll', 'fade-up');
        (el as HTMLElement).style.setProperty('--scroll-delay', `${(i % 3) * 75}ms`);
      }
    });

    document.querySelectorAll('.detail-grid > div, .spec-row, .quote-grid > div, .editorial > div, .footer-links > div, .principles > span').forEach((el, i) => {
      if (!el.hasAttribute('data-scroll')) {
        el.setAttribute('data-scroll', i % 2 === 0 ? 'fade-up' : 'fade-left');
        (el as HTMLElement).style.setProperty('--scroll-delay', `${(i % 4) * 80}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed', 'visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    document.querySelectorAll('[data-scroll], [data-reveal]').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [path, activeProduct, query, lang]);

  // Scroll reading progress
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty('--reading', `${total > 0 ? scrollY / total : 0}`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [path]);

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reduced);
    localStorage.setItem('siri-motion', manualReduced ? 'reduced' : 'full');
    if (reduced) document.querySelectorAll('video').forEach((v) => v.pause());
  }, [reduced, manualReduced]);

  useEffect(() => {
    if (search) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [search]);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, []);

  const cards = (items: CardDisplayItem[], gridClass = '', railRef?: React.RefObject<HTMLDivElement | null>) => (
    <div ref={railRef} className={`product-grid ${gridClass} stagger-container`}>
      {items.map((item, i) => (
        <Link className="product-card" to={item.to} key={item.id}>
          <div className={`product-art tone-${i % 3}`}>
            <img
              className={`card-photo ${item.isProbiotic ? 'probiotic-card-photo' : 'product-cutout-photo'} loaded`}
              src={item.image}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              width={1000}
              height={750}
            />
            <span className="round-arrow">
              <ArrowUpRight size={21} />
            </span>
          </div>
          <div className="product-caption">
            <div>
              <span className="product-card-series">{item.series}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="product-spec-chips">
              {item.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  const aeratorRailRef = useRef<HTMLDivElement>(null);
  const sparesRailRef = useRef<HTMLDivElement>(null);
  const probioticsRailRef = useRef<HTMLDivElement>(null);

  const scrollRail = (rail: React.RefObject<HTMLDivElement | null>, dir: -1 | 1) => {
    const el = rail.current;
    if (!el) return;
    const step = Math.max(300, el.clientWidth * 0.72);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const cta = (
    <section className="cta" data-scroll="zoom-in" data-reveal>
      <div>
        <span className="eyebrow">{t.cta.eyebrow}</span>
        <h2>
          {t.cta.h2a}
          <br />
          {t.cta.h2b}
        </h2>
      </div>
      <Button to="/request-a-quote">{t.cta.btn}</Button>
    </section>
  );

  return (
    <>
      <LogoDarkFilter />
      <AmbientBubbles />
      <ScrollToTop />
      <FloatingWhatsApp />

      <a className="skip" href="#main">
        {t.nav.skip}
      </a>
      <div className="reading-progress" aria-hidden="true" />

      <Header
        isHero={path === '/'}
        menu={menu}
        setMenu={setMenu}
        setSearch={setSearch}
        path={path}
      />

      <div className="site-shell">
        <main id="main" key={path}>
          {path === '/' ? (
            <>
              <HeroSection
                reduced={reduced}
                menu={menu}
                setMenu={setMenu}
                setSearch={setSearch}
                path={path}
              />

              <div className="principles stagger-container" data-scroll="fade-up">
                <span>
                  <Waves /> {t.principles.p1}
                </span>
                <span>
                  <Settings2 /> {t.principles.p2}
                </span>
                <span>
                  <Droplets /> {t.principles.p3}
                </span>
                <span className="aeration-badge">
                  <span className="aeration-pulse-dot" />
                  {t.principles.badge}
                </span>
                <span className="principle-tag">
                  {t.principles.tag} <ArrowUpRight size={17} />
                </span>
              </div>

              {/* Shop by category — Separate side-scrollable subsections */}
              <section id="range" className="section range">
                <div className="section-heading" data-scroll="fade-up" data-reveal>
                  <div>
                    <span className="eyebrow">{t.range.eyebrow}</span>
                    <h2>
                      {t.range.h2a}
                      <br />
                      {t.range.h2b}
                    </h2>
                  </div>
                  <div className="section-intro">
                    <p>{t.range.intro}</p>
                    <Link className="text-link dark" to="/aerators">
                      {t.range.exploreAllAerators} <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Subsection 1: Aerators */}
                <div className="range-subsection" id="range-aerators">
                  <div className="range-subsection-head">
                    <div>
                      <span className="eyebrow">{t.range.sub1Eyebrow}</span>
                      <h3>{t.range.sub1Title}</h3>
                    </div>
                    <div className="range-subsection-actions">
                      <div className="rail-scroll-controls">
                        <button type="button" className="rail-scroll-btn" aria-label="Scroll aerators left" onClick={() => scrollRail(aeratorRailRef, -1)}>
                          <ArrowLeft size={16} />
                        </button>
                        <button type="button" className="rail-scroll-btn" aria-label="Scroll aerators right" onClick={() => scrollRail(aeratorRailRef, 1)}>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                      <Link className="text-link dark" to="/aerators">
                        {t.range.sub1Link} <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                  {cards(aeratorCardItems, 'product-rail', aeratorRailRef)}
                </div>

                {/* Subsection 2: Equipment & Spares */}
                <div className="range-subsection" id="range-spares">
                  <div className="range-subsection-head">
                    <div>
                      <span className="eyebrow">{t.range.sub2Eyebrow}</span>
                      <h3>{t.range.sub2Title}</h3>
                    </div>
                    <div className="range-subsection-actions">
                      <div className="rail-scroll-controls">
                        <button type="button" className="rail-scroll-btn" aria-label="Scroll spares left" onClick={() => scrollRail(sparesRailRef, -1)}>
                          <ArrowLeft size={16} />
                        </button>
                        <button type="button" className="rail-scroll-btn" aria-label="Scroll spares right" onClick={() => scrollRail(sparesRailRef, 1)}>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                      <Link className="text-link dark" to="/spares">
                        {t.range.sub2Link} <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                  {cards(spareCardItems, 'product-rail', sparesRailRef)}
                </div>

                {/* Subsection 3: Probiotics */}
                <div className="range-subsection" id="range-probiotics">
                  <div className="range-subsection-head">
                    <div>
                      <span className="eyebrow">{t.range.sub3Eyebrow}</span>
                      <h3>{t.range.sub3Title}</h3>
                    </div>
                    <div className="range-subsection-actions">
                      <div className="rail-scroll-controls">
                        <button type="button" className="rail-scroll-btn" aria-label="Scroll probiotics left" onClick={() => scrollRail(probioticsRailRef, -1)}>
                          <ArrowLeft size={16} />
                        </button>
                        <button type="button" className="rail-scroll-btn" aria-label="Scroll probiotics right" onClick={() => scrollRail(probioticsRailRef, 1)}>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                      <Link className="text-link dark" to="/probiotics">
                        {t.range.sub3Link} <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                  {cards(probioticCardItems, 'product-rail', probioticsRailRef)}
                </div>
              </section>

              <SectionDivider />

              {/* Product Showcase: In Our Element */}
              <ProductShowcase />

              {cta}
            </>
          ) : path === '/spares' || path === '/equipment' ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name={t.sparesPage.breadcrumb} />
              <span className="eyebrow">{t.sparesPage.eyebrow}</span>
              <h1>
                {t.sparesPage.h1a}
                <br />
                {t.sparesPage.h1b}
              </h1>
              <p className="lead">{t.sparesPage.lead}</p>
              {cards(spareCardItems, 'product-grid-4')}

              <div className="aerator-specs-matrix" id="spares-specifications">
                <div className="aerator-specs-matrix-head">
                  <div>
                    <span className="eyebrow">{t.sparesPage.specsEyebrow}</span>
                    <h2>{t.sparesPage.specsTitle}</h2>
                  </div>
                  <p>{t.sparesPage.specsLead}</p>
                </div>

                <div className="aerator-spec-cards-grid">
                  {spareEquipmentProducts.map((item) => {
                    const te = lang === 'te' ? spareTeluguMap[item.id] : undefined;
                    return (
                      <article key={item.id} className="aerator-spec-detail-card">
                        <div className="aerator-spec-detail-top">
                          <div>
                            <span>{te ? te.tag : item.tag}</span>
                            <h3>{te ? te.name : item.name}</h3>
                          </div>
                          <Link to={`/request-a-quote?product=${item.id}`}>
                            {t.sparesPage.quoteBtn} <ArrowUpRight size={14} />
                          </Link>
                        </div>
                        <dl className="aerator-spec-dl">
                          <div>
                            <dt>{t.sparesPage.labels.category}</dt>
                            <dd>{item.specs.category}</dd>
                          </div>
                          <div>
                            <dt>{t.sparesPage.labels.capacity}</dt>
                            <dd>{item.specs.capacity}</dd>
                          </div>
                          <div>
                            <dt>{t.sparesPage.labels.build}</dt>
                            <dd>{item.specs.build}</dd>
                          </div>
                          <div>
                            <dt>{t.sparesPage.labels.compatibility}</dt>
                            <dd>{item.specs.compatibility}</dd>
                          </div>
                          <div>
                            <dt>{t.sparesPage.labels.power}</dt>
                            <dd>{item.specs.power}</dd>
                          </div>
                          <div>
                            <dt>{t.sparesPage.labels.warranty}</dt>
                            <dd>{item.specs.warranty}</dd>
                          </div>
                        </dl>
                      </article>
                    );
                  })}
                </div>
              </div>
              {cta}
            </section>
          ) : path === '/aerators' || path === '/products' ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name={t.aeratorsPage.breadcrumb} />
              <span className="eyebrow">{t.aeratorsPage.eyebrow}</span>
              <h1>
                {t.aeratorsPage.h1a}
                <br />
                {t.aeratorsPage.h1b}
              </h1>
              <p className="lead">{t.aeratorsPage.lead}</p>

              {cards(aeratorCardItems)}

              <div className="aerator-specs-matrix" id="specifications">
                <div className="aerator-specs-matrix-head">
                  <div>
                    <span className="eyebrow">{t.aeratorsPage.specsEyebrow}</span>
                    <h2>{t.aeratorsPage.specsTitle}</h2>
                  </div>
                  <p>{t.aeratorsPage.specsLead}</p>
                </div>

                <div className="aerator-spec-cards-grid">
                  {aeratorProducts.map((item) => {
                    const te = lang === 'te' ? aeratorTeluguMap[item.id] : undefined;
                    return (
                      <article key={item.id} className="aerator-spec-detail-card">
                        <div className="aerator-spec-detail-top">
                          <div>
                            <span>{te ? te.series : item.series}</span>
                            <h3>{te ? te.name : item.name}</h3>
                          </div>
                          <Link to={`/request-a-quote?product=${item.id}`}>
                            {t.aeratorsPage.quoteBtn} <ArrowUpRight size={14} />
                          </Link>
                        </div>
                        <dl className="aerator-spec-dl">
                          <div>
                            <dt>{t.aeratorsPage.labels.power}</dt>
                            <dd>{item.specs.power}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.configuration}</dt>
                            <dd>{item.specs.configuration}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.floats}</dt>
                            <dd>{item.specs.floats}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.supply}</dt>
                            <dd>{item.specs.supply}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.coverage}</dt>
                            <dd>{item.specs.coverage}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.otr}</dt>
                            <dd>{item.specs.otr}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.frame}</dt>
                            <dd>{item.specs.frame}</dd>
                          </div>
                          <div>
                            <dt>{t.aeratorsPage.labels.warranty}</dt>
                            <dd>{item.specs.warranty}</dd>
                          </div>
                        </dl>
                      </article>
                    );
                  })}
                </div>
              </div>

              {cta}
            </section>
          ) : path === '/probiotics' ? (
            <ProbioticsPage />
          ) : activeProduct ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name={activeProduct.name} />
              <div className="detail-grid">
                <div className="detail-art" data-scroll="fade-right">
                  <img
                    className={`card-photo ${activeProduct.isCutout ? 'product-cutout-photo' : ''} loaded`}
                    src={activeProduct.image}
                    alt={activeProduct.alt}
                  />
                  <small>{activeProduct.credit}</small>
                </div>
                <div data-scroll="fade-left">
                  <span className="eyebrow">{activeProduct.category}</span>
                  <h1>{activeProduct.name}</h1>
                  <p className="lead">{activeProduct.desc}</p>
                  <p>{t.detailPage.intro}</p>
                  <Button to={`/request-a-quote?product=${activeProduct.id}`}>{t.detailPage.prepare}</Button>
                </div>
              </div>
              <div className="spec-section" data-scroll="fade-up">
                <h2>{t.detailPage.specsHeading}</h2>
                <p>{t.detailPage.specsSub}</p>
                {activeProduct.specRows.map(([label, val], idx) => (
                  <div className="spec-row" key={label} data-scroll="fade-up" style={{ '--scroll-delay': `${idx * 70}ms` } as React.CSSProperties}>
                    <span>{label}</span>
                    <span>{val}</span>
                  </div>
                ))}
              </div>
              {cta}
            </section>
          ) : path === '/request-a-quote' || path === '/contact' ? (
            <QuotePage />
          ) : path === '/knowledge' ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name="Knowledge" />
              <span className="eyebrow">THE KNOWLEDGE CENTRE</span>
              <h1>
                A little knowledge.
                <br />A clearer next step.
              </h1>
              <p className="lead">Practical questions to bring to your equipment conversation.</p>
              <div className="articles stagger-container">
                {[
                  [
                    'Before choosing an aerator',
                    [
                      'Record pond area and average water depth.',
                      'Note the available electrical supply and existing equipment.',
                      'Ask for model-specific performance data and installation requirements.',
                      'Confirm the current warranty and service terms.'
                    ]
                  ],
                  [
                    'Get your pond brief ready',
                    [
                      'Record the farm location and access requirements.',
                      'Describe the species, pond stage and existing setup.',
                      'Gather photographs and existing equipment model details.',
                      'List the decisions you need help with.'
                    ]
                  ],
                  [
                    'A closer look at maintenance',
                    [
                      'Request the manufacturer’s current maintenance manual.',
                      'Arrange qualified personnel for electrical inspection and installation.',
                      'Confirm spare-part compatibility using the model and revision.',
                      'Follow documented isolation procedures before servicing.'
                    ]
                  ]
                ].map(([title, items], i) => (
                  <details
                    key={String(title)}
                    open={Number(new URLSearchParams(location.search).get('guide') || 0) === i}
                    data-scroll="fade-up"
                    style={{ '--scroll-delay': `${i * 100}ms` } as React.CSSProperties}
                  >
                    <summary>
                      <span>0{i + 1}</span>
                      {title}
                      <Plus size={20} />
                    </summary>
                    <ul>
                      {(items as string[]).map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
              <p className="content-note">
                General planning checklists. Product manuals and qualified professional guidance take precedence.
              </p>
              {cta}
            </section>
          ) : path === '/about' || path === '/quality' || path === '/solutions' ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb
                name={
                  path === '/about'
                    ? t.aboutPage.story
                    : path === '/quality'
                    ? t.aboutPage.quality
                    : t.aboutPage.solutions
                }
              />
              <span className="eyebrow">{t.aboutPage.eyebrow}</span>
              <h1>
                {path === '/solutions' ? (
                  <>
                    {t.aboutPage.h1SolA}
                    <br />
                    {t.aboutPage.h1SolB}
                  </>
                ) : (
                  <>
                    {t.aboutPage.h1StoryA}
                    <br />
                    {t.aboutPage.h1StoryB}
                  </>
                )}
              </h1>
              <div className="editorial">
                <div data-scroll="fade-right">
                  <p className="lead">{t.aboutPage.lead}</p>
                  <p>{t.aboutPage.p1}</p>
                  <p>{t.aboutPage.p2}</p>
                  <Button to="/request-a-quote">{t.aboutPage.cta}</Button>
                </div>
                <div className="brand-panel" data-scroll="zoom-in">
                  <Mark large />
                  <span>{t.aboutPage.badge}</span>
                </div>
              </div>
              {cards(aeratorCardItems.slice(0, 3))}
              {cta}
            </section>
          ) : path === '/image-credits' ? (
            <section className="section inner legal" data-scroll="fade-up">
              <Breadcrumb name="Image credits" />
              <h1>Behind the imagery.</h1>
              <p>
                Product photographs depict the aeration equipment and DB Bio-Organics aquaculture probiotic range featured on
                this website.
              </p>
              <div className="credit-list">
                <p>
                  <strong>Aeration &amp; probiotic imagery</strong>
                  <br />
                  Product photographs provided for Siri Aquatic Solutions Pvt. Ltd.
                </p>
              </div>
            </section>
          ) : path.startsWith('/legal') || path === '/accessibility' ? (
            <section className="section inner legal" data-scroll="fade-up">
              <Breadcrumb name="Site information" />
              <h1>{path.includes('privacy') ? 'Your privacy.' : path === '/accessibility' ? 'Open to everyone.' : 'About this preview.'}</h1>
              <p>
                This website is a design and catalogue preview for Siri Aquatic Solutions Pvt. Ltd. Specifications, commercial
                terms, contact details and policies require company approval before launch.
              </p>
              <p>
                Enquiry details are processed only in your browser to create a formatted WhatsApp message. This site stores
                only your language and animation preferences locally and uses no analytics or advertising cookies.
              </p>
              <p>
                Keyboard navigation, visible focus states, semantic controls and reduced-motion support are included. You can
                reduce animations using the footer control.
              </p>
            </section>
          ) : (
            <section className="section inner" data-scroll="fade-up">
              <span className="eyebrow">404 / A LITTLE OFF COURSE</span>
              <h1>
                Back to
                <br />
                calmer waters.
              </h1>
              <Button to="/">Return home</Button>
            </section>
          )}
          <FishCurrent />
        </main>

        {path === '/' && <TrustStrip />}
        <footer>
          <div className="footer-top" data-scroll="fade-up">
            <Link to="/" className="brand">
              <Brand />
            </Link>
            <p>
              {t.footer.tag}
              <br />
              <span>{t.footer.quality}</span>
            </p>
            <Link to="/request-a-quote" className="footer-talk">
              {t.footer.ripples} <MoveUpRight />
            </Link>
          </div>
          <div className="footer-links">
            <div data-scroll="fade-up" style={{ '--scroll-delay': '0ms' } as React.CSSProperties}>
              <span>{t.footer.explore}</span>
              <Link to="/aerators">{t.nav.aerators}</Link>
              <Link to="/spares">{t.nav.spares}</Link>
              <Link to="/probiotics">{t.nav.probiotics}</Link>
              <Link to="/about">{t.nav.story}</Link>
            </div>
            <div data-scroll="fade-up" style={{ '--scroll-delay': '100ms' } as React.CSSProperties}>
              <span>{t.footer.connect}</span>
              <Link to="/request-a-quote">{t.footer.requestQuote}</Link>
              <Link to="/quality">{t.footer.approachQuality}</Link>
              <Link to="/contact">{t.footer.contactInfo}</Link>
            </div>
            <div className="footer-note" data-scroll="fade-up" style={{ '--scroll-delay': '200ms' } as React.CSSProperties}>
              <span>{t.footer.previewTitle}</span>
              <p>
                {t.footer.previewBody1}
                <br />
                {t.footer.previewBody2}
                <br />
                {t.footer.previewBody3}
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Siri Aquatic Solutions Pvt. Ltd.</span>
            <div>
              <Link to="/image-credits">{t.footer.credits}</Link>
              <Link to="/legal/privacy">{t.footer.privacy}</Link>
              <Link to="/legal/terms">{t.footer.terms}</Link>
              <Link to="/accessibility">{t.footer.a11y}</Link>
              <button aria-pressed={reduced} onClick={() => setReduced(!reduced)}>
                {reduced ? t.footer.enableAnim : t.footer.reduceAnim} {t.footer.animations}{' '}
                {reduced ? <Plus size={13} /> : <Minus size={13} />}
              </button>
            </div>
            <a href="#main" aria-label="Back to top">
              <ArrowUpRight />
            </a>
          </div>
        </footer>
      </div>

      <dialog
        ref={dialog}
        onCancel={() => setSearch(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSearch(false);
        }}
      >
        <div className="search-dialog">
          <div>
            <h2>{t.search.title}</h2>
            <button className="icon-button" aria-label="Close search" onClick={() => setSearch(false)}>
              <X />
            </button>
          </div>
          <label className="search-field">
            <Search />
            <input
              autoFocus
              aria-label="Search site"
              placeholder={t.search.placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="search-results">
            {[
              ...aeratorProducts.map((p) => ({ name: p.name, url: `/products/${p.id}` })),
              ...spareEquipmentProducts.map((p) => ({ name: p.name, url: `/products/${p.id}` })),
              ...probioticProducts.map((p) => ({ name: `${p.code} · ${p.name}`, url: `/probiotics#${p.id}` })),
              { name: t.search.aeratorsCat, url: '/aerators' },
              { name: t.search.sparesCat, url: '/spares' },
              { name: t.search.probioticsCat, url: '/probiotics' },
              { name: t.search.quoteCat, url: '/request-a-quote' }
            ]
              .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
              .map((p) => (
                <button
                  key={p.url}
                  onClick={() => {
                    setSearch(false);
                    navigate(p.url);
                  }}
                >
                  {p.name}
                  <ArrowUpRight size={20} />
                </button>
              ))}
          </div>
          <p>{t.search.note}</p>
        </div>
      </dialog>
    </>
  );
}

function Breadcrumb({ name }: { name: string }) {
  const { lang } = useSiteLang();
  return (
    <div className="breadcrumb">
      <Link to="/">{siteText[lang].common.home}</Link>
      <span>/</span>
      <span>{name}</span>
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: '*',
      element: (
        <LanguageProvider>
          <App />
        </LanguageProvider>
      )
    }
  ],
  { basename: import.meta.env.BASE_URL }
);
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import './calm-layout.css';
import './machine-hero.css';
import './final-polish.css';
import './readability-layout.css';
import './gallery-frame.css';
import './poster-hero.css';
import './hero-focus.css';
import './hero-brand-heading.css';
import './clear-navigation.css';
import './fish-current.css';
import './catalog-cards.css';
