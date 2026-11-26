import { assetUrl } from './assets';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  Search,
  Menu,
  X,
  Waves,
  Settings2,
  Droplets,
  Plus,
  Minus,
  Check,
  Download,
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

const aeratorCardItems: CardDisplayItem[] = aeratorProducts.map((a) => ({
  id: a.id,
  series: a.series,
  name: a.name,
  desc: a.desc,
  image: a.image,
  alt: a.alt,
  chips: a.chips,
  to: `/products/${a.id}`,
  isProbiotic: false
}));

const probioticCardItems: CardDisplayItem[] = probioticProducts.map((p) => ({
  id: p.id,
  series: `${p.code} · ${p.series}`,
  name: p.name,
  desc: p.subtitle,
  image: p.image,
  alt: `${p.name} — ${p.subtitle}`,
  chips: p.chips,
  to: `/probiotics#${p.id}`,
  isProbiotic: true
}));

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
  const isProbioticDetail = probioticProducts.some((p) => path === `/products/${p.id}`);
  const isAeratorDetail = aeratorProducts.some((a) => path === `/products/${a.id}`);
  return (
    <header className={isHero ? 'calm-header calm-header-home' : 'calm-header calm-header-inner'}>
      <Link to="/" className="brand" aria-label="Siri Aquatic Solutions">
        <Brand />
      </Link>
      <nav aria-label="Main navigation" id="primary-navigation" className={menu ? 'open' : ''}>
        {[
          ['/', 'Home'],
          ['/aerators', 'Aerators'],
          ['/probiotics', 'Probiotics'],
          ['/about', 'Our story']
        ].map(([url, name]) => {
          const isActive =
            url === '/'
              ? path === '/'
              : path === url ||
                path.startsWith(url + '/') ||
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
        <button
          className="icon-button search-trigger"
          aria-label="Search"
          onClick={() => setSearch(true)}
          type="button"
        >
          <Search size={19} />
        </button>
        <Link to="/request-a-quote" className="header-quote">
          Quote <ArrowUpRight size={17} />
        </Link>
        <button
          className="icon-button menu-toggle"
          aria-expanded={menu}
          aria-controls="primary-navigation"
          aria-label={menu ? 'Close menu' : 'Open menu'}
          onClick={() => setMenu((prev) => !prev)}
          type="button"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

const HERO_VIDEO_SPEED = 0.58;

function HeroAtmosphere({ reduced }: { reduced: boolean }) {
  const videoZero = useRef<HTMLVideoElement>(null);
  const videoOne = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videos = [videoZero.current, videoOne.current];
    videos.forEach((v) => {
      if (v) {
        v.defaultPlaybackRate = HERO_VIDEO_SPEED;
        v.playbackRate = HERO_VIDEO_SPEED;
      }
    });
    const current = videos[activeVideo];
    const other = videos[activeVideo === 0 ? 1 : 0];
    if (other) other.pause();
    if (!current) return;
    if (visible && !reduced && !paused) {
      current.playbackRate = HERO_VIDEO_SPEED;
      current.play().catch(() => {});
    } else {
      current.pause();
    }
  }, [activeVideo, visible, reduced, paused]);

  const applySlowRate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.defaultPlaybackRate = HERO_VIDEO_SPEED;
    e.currentTarget.playbackRate = HERO_VIDEO_SPEED;
  };

  const switchTo = (next: 0 | 1) => {
    const nextVideo = next === 0 ? videoZero.current : videoOne.current;
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.defaultPlaybackRate = HERO_VIDEO_SPEED;
      nextVideo.playbackRate = HERO_VIDEO_SPEED;
      if (visible && !reduced && !paused) {
        nextVideo.play().catch(() => {});
      }
    }
    setActiveVideo(next);
  };

  return (
    <>
      <div ref={containerRef} className="hero-atmosphere" aria-hidden="true">
        <video
          ref={videoZero}
          className={`hero-video-layer${activeVideo === 0 ? ' is-active' : ''}`}
          src={assetUrl('/intro-one.mp4')}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={applySlowRate}
          onPlay={applySlowRate}
          onEnded={() => switchTo(1)}
        />
        <video
          ref={videoOne}
          className={`hero-video-layer${activeVideo === 1 ? ' is-active' : ''}`}
          src={assetUrl('/intro-two.mp4')}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={applySlowRate}
          onPlay={applySlowRate}
          onEnded={() => switchTo(0)}
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
    { src: assetUrl('/images/aerator-4paddle-real.png'), name: 'Pro-4 Paddle Wheel Aerator', to: '/products/paddle-wheel' },
    { src: assetUrl('/images/aerator-2paddle-real.png'), name: 'Turbo-2 Compact Aerator', to: '/products/compact-aerator' },
    { src: assetUrl('/images/aerator-impeller-real.png'), name: 'Surge Floating Impeller', to: '/products/spiral-impeller' }
  ];

  return (
    <section className="calm-hero machine-hero poster-hero" id="hero" aria-label="Siri Aquatic introduction">
      <HeroAtmosphere reduced={reduced} />
      <div className="poster-hero-content">
        <div className="poster-heading">
          <span className="poster-eyebrow">QUALITY COMES FIRST</span>
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
                key={item.name}
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
                key={item.name}
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
            Aquaculture equipment. <span>Thoughtful pond solutions.</span>
          </p>
          <button
            type="button"
            className="hero-rail-control"
            aria-label={paused ? 'Resume product carousel' : 'Pause product carousel'}
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={15} /> : <Pause size={15} />}
            <span>{paused ? 'Play' : 'Pause'} products</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [homeFilter, setHomeFilter] = useState<'All' | 'Aerators' | 'Probiotics'>('All');
  const [manualReduced, setReduced] = useState(() => localStorage.getItem('siri-motion') === 'reduced');
  const [systemReduced, setSystemReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const reduced = manualReduced || systemReduced;
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSystemReduced(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const [saved, setSaved] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const path = location.pathname.replace(/\/+$/, '') || '/';
  const activeProduct = allCatalogEntries.find((p) => path === `/products/${p.id}`);

  // Scroll to top on route change (unless hash anchor)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setMenu(false);
    setSaved(false);
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
  }, [path, homeFilter, activeProduct, query]);

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

  const cards = (items: CardDisplayItem[]) => (
    <div className="product-grid stagger-container">
      {items.map((item, i) => (
        <Link
          data-scroll="fade-up"
          data-reveal
          className="product-card"
          to={item.to}
          key={item.id}
          style={{ '--scroll-delay': `${(i % 6) * 90}ms` } as React.CSSProperties}
        >
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

  const homepageItems: CardDisplayItem[] =
    homeFilter === 'Aerators'
      ? aeratorCardItems
      : homeFilter === 'Probiotics'
      ? probioticCardItems
      : [
          aeratorCardItems[0],
          aeratorCardItems[1],
          aeratorCardItems[2],
          probioticCardItems[0],
          probioticCardItems[4],
          probioticCardItems[6]
        ];

  const cta = (
    <section className="cta" data-scroll="zoom-in" data-reveal>
      <div>
        <span className="eyebrow">LET'S TALK ABOUT YOUR POND</span>
        <h2>
          Good things start
          <br />
          with a conversation.
        </h2>
      </div>
      <Button to="/request-a-quote">Find your solution</Button>
    </section>
  );

  return (
    <>
      <LogoDarkFilter />
      <AmbientBubbles />
      <ScrollToTop />
      <FloatingWhatsApp />

      <a className="skip" href="#main">
        Skip to content
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
                  <Waves /> Equipment for aquaculture
                </span>
                <span>
                  <Settings2 /> Guidance for your requirements
                </span>
                <span>
                  <Droplets /> A pond-first perspective
                </span>
                <span className="aeration-badge">
                  <span className="aeration-pulse-dot" />
                  Active Aeration
                </span>
                <span className="principle-tag">
                  QUALITY COMES FIRST <ArrowUpRight size={17} />
                </span>
              </div>

              {/* Shop by category with Aerators / Probiotics filter */}
              <section id="range" className="section range">
                <div className="section-heading" data-scroll="fade-up" data-reveal>
                  <div>
                    <span className="eyebrow">01 / THE RIGHT START</span>
                    <h2>
                      Find the equipment
                      <br />
                      you need.
                    </h2>
                  </div>
                  <div className="section-intro">
                    <p>Different ponds. Different needs. Filter by aerators or probiotics to explore our range.</p>
                    <Link className="text-link dark" to={homeFilter === 'Probiotics' ? '/probiotics' : '/aerators'}>
                      Explore {homeFilter === 'Probiotics' ? 'all probiotics' : 'all aerators'} <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="range-filter-bar" role="group" aria-label="Filter equipment and probiotics">
                  {(['All', 'Aerators', 'Probiotics'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={`range-filter-pill ${homeFilter === tab ? 'is-active' : ''}`}
                      aria-pressed={homeFilter === tab}
                      onClick={() => setHomeFilter(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {cards(homepageItems)}
              </section>

              <SectionDivider />

              {/* Product Showcase: In Our Element */}
              <ProductShowcase />

              {/* Equipment & Spares section after In Our Element */}
              <section id="spares" className="spares-section" aria-labelledby="spares-heading">
                <div className="spares-shell">
                  <div className="spares-header" data-scroll="fade-up" data-reveal>
                    <div>
                      <span className="eyebrow">EQUIPMENT &amp; SPARES</span>
                      <h2 id="spares-heading">
                        Feeders, pumps &amp; every spare part.
                      </h2>
                    </div>
                    <p className="spares-lead">
                      Beyond aeration, Siri Aquatic supplies the full pond ecosystem — automatic feeders, engines,
                      pumps, gearboxes, control panels and genuine replacement parts.
                    </p>
                  </div>

                  <div className="spares-grid stagger-container">
                    {spareEquipmentProducts.map((item, idx) => (
                      <Link
                        key={item.id}
                        to={`/products/${item.id}`}
                        className="spares-card"
                        data-scroll="fade-up"
                        data-reveal
                        style={{ '--scroll-delay': `${idx * 90}ms` } as React.CSSProperties}
                      >
                        <div className="spares-card-media">
                          <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                          <span className="spares-card-arrow">
                            <ArrowUpRight size={17} />
                          </span>
                        </div>
                        <div className="spares-card-body">
                          <div>
                            <span className="spares-card-tag">{item.tag}</span>
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
                </div>
              </section>

              {cta}
            </>
          ) : path === '/aerators' || path === '/products' || path === '/equipment' ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name="Aerators" />
              <span className="eyebrow">AERATION SYSTEMS</span>
              <h1>
                Aerators built for
                <br />
                every pond.
              </h1>
              <p className="lead">
                Explore our complete range of paddle wheel, compact, impeller, and diffused aeration systems with key specifications below.
              </p>

              {cards(aeratorCardItems)}

              {/* Full Technical Specifications directly below the aerator cards */}
              <div className="aerator-specs-matrix" id="specifications">
                <div className="aerator-specs-matrix-head">
                  <div>
                    <span className="eyebrow">TECHNICAL SPECIFICATIONS</span>
                    <h2>Specifications at a glance.</h2>
                  </div>
                  <p>Compare motor ratings, float configurations, power supply, and pond coverage across every aerator model.</p>
                </div>

                <div className="aerator-spec-cards-grid">
                  {aeratorProducts.map((item) => (
                    <article key={item.id} className="aerator-spec-detail-card">
                      <div className="aerator-spec-detail-top">
                        <div>
                          <span>{item.series}</span>
                          <h3>{item.name}</h3>
                        </div>
                        <Link to={`/request-a-quote?product=${item.id}`}>
                          Quote <ArrowUpRight size={14} />
                        </Link>
                      </div>
                      <dl className="aerator-spec-dl">
                        <div>
                          <dt>Motor / Power</dt>
                          <dd>{item.specs.power}</dd>
                        </div>
                        <div>
                          <dt>Configuration</dt>
                          <dd>{item.specs.configuration}</dd>
                        </div>
                        <div>
                          <dt>Floats / Assembly</dt>
                          <dd>{item.specs.floats}</dd>
                        </div>
                        <div>
                          <dt>Power Supply</dt>
                          <dd>{item.specs.supply}</dd>
                        </div>
                        <div>
                          <dt>Pond Coverage</dt>
                          <dd>{item.specs.coverage}</dd>
                        </div>
                        <div>
                          <dt>Oxygen Transfer</dt>
                          <dd>{item.specs.otr}</dd>
                        </div>
                        <div>
                          <dt>Frame &amp; Build</dt>
                          <dd>{item.specs.frame}</dd>
                        </div>
                        <div>
                          <dt>Warranty</dt>
                          <dd>{item.specs.warranty}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
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
                  <p>Tell us about your pond requirements to discuss configurations, dosing, and current pricing.</p>
                  <Button to={`/request-a-quote?product=${activeProduct.id}`}>Prepare an enquiry</Button>
                </div>
              </div>
              <div className="spec-section" data-scroll="fade-up">
                <h2>Details that matter.</h2>
                <p>Technical specifications and application details.</p>
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
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name="Quote" />
              <div className="quote-grid">
                <div data-scroll="fade-right">
                  <span className="eyebrow">EVERY POND HAS A STORY</span>
                  <h1>
                    Let's start
                    <br />
                    with yours.
                  </h1>
                  <p className="lead">A few details help make the conversation more useful.</p>
                  <div className="steps">
                    <p>
                      <span>01</span> Tell us what you're looking for
                    </p>
                    <p>
                      <span>02</span> Save your enquiry brief
                    </p>
                    <p>
                      <span>03</span> Share it with your Siri representative
                    </p>
                  </div>
                  <div className="notice">
                    This preview saves an enquiry file to your device. It does not send your details. Direct contact options will
                    appear once the company’s phone and email are verified.
                  </div>
                </div>
                <form
                  data-scroll="fade-left"
                  className="quote-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    const blob = new Blob(
                      [
                        `SIRI AQUATIC — ENQUIRY BRIEF\n\n${Object.entries(data)
                          .map(([k, v]) => `${k}: ${v}`)
                          .join('\n')}\n\nPrepared locally. Not submitted to Siri.`
                      ],
                      { type: 'text/plain' }
                    );
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = 'siri-aquatic-enquiry.txt';
                    a.click();
                    URL.revokeObjectURL(a.href);
                    setSaved(true);
                  }}
                >
                  <h2>Your pond. Your plans.</h2>
                  <div className="form-row">
                    <label>
                      Your name
                      <input name="Name" required autoComplete="name" placeholder="Full name" />
                    </label>
                    <label>
                      Phone number
                      <input
                        name="Phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        pattern="[+0-9 ()-]{7,20}"
                        placeholder="+91"
                      />
                    </label>
                  </div>
                  <label>
                    Email address
                    <input name="Email" type="email" required autoComplete="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    I'm interested in
                    <select
                      name="Interest"
                      defaultValue={allCatalogEntries.find((p) => p.id === new URLSearchParams(location.search).get('product'))?.name || ''}
                    >
                      <option value="">Help me choose</option>
                      <optgroup label="Aerators">
                        {aeratorProducts.map((p) => (
                          <option key={p.id}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Equipment &amp; Spares">
                        {spareEquipmentProducts.map((p) => (
                          <option key={p.id}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Probiotics &amp; Pond Care">
                        {probioticProducts.map((p) => (
                          <option key={p.id}>{p.name}</option>
                        ))}
                      </optgroup>
                    </select>
                  </label>
                  <div className="form-row">
                    <label>
                      Pond area (optional)
                      <input name="Pond area" placeholder="Include units, e.g. 2 acres" />
                    </label>
                    <label>
                      Location
                      <input name="Location" required placeholder="Town / state" />
                    </label>
                  </div>
                  <label>
                    A little about your requirements
                    <textarea
                      name="Requirements"
                      rows={4}
                      placeholder="Pond depth, available power, species or equipment needs…"
                    />
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" required /> I understand this file is saved locally and isn't sent to Siri.
                  </label>
                  <button className="button" type="submit">
                    Save enquiry brief <Download size={18} />
                  </button>
                  {saved && (
                    <p className="success" role="status">
                      <Check size={18} /> Your brief is ready. Share the downloaded file with your representative.
                    </p>
                  )}
                </form>
              </div>
            </section>
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
                      {(items as string[]).map((t) => (
                        <li key={t}>{t}</li>
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
              <Breadcrumb name={path === '/about' ? 'Our story' : path === '/quality' ? 'Quality' : 'Solutions'} />
              <span className="eyebrow">SIRI AQUATIC SOLUTIONS PVT. LTD.</span>
              <h1>
                {path === '/solutions' ? (
                  <>
                    One pond.
                    <br />
                    Connected needs.
                  </>
                ) : (
                  <>
                    Quality comes first.
                    <br />
                    Always the intention.
                  </>
                )}
              </h1>
              <div className="editorial">
                <div data-scroll="fade-right">
                  <p className="lead">
                    Aquaculture starts with understanding the water, the equipment and the people who work with both.
                  </p>
                  <p>
                    Siri Aquatic brings equipment and pond-solution conversations together. Explore aeration, machinery and
                    spares, and pond-care categories with your requirements in mind.
                  </p>
                  <p>
                    Our guiding principle is simple: Quality Comes First. Before selecting equipment, ask for approved
                    specifications, current documentation and clear support terms.
                  </p>
                  <Button to="/request-a-quote">Start a conversation</Button>
                </div>
                <div className="brand-panel" data-scroll="zoom-in">
                  <Mark large />
                  <span>QUALITY COMES FIRST</span>
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
                Enquiry details are processed only in your browser to create a downloadable file. They are not sent to a server.
                This site stores only your animation preference locally and uses no analytics or advertising cookies.
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
              A little care. A better tomorrow.
              <br />
              <span>Quality Comes First.</span>
            </p>
            <Link to="/request-a-quote" className="footer-talk">
              Let’s make ripples. <MoveUpRight />
            </Link>
          </div>
          <div className="footer-links">
            <div data-scroll="fade-up" style={{ '--scroll-delay': '0ms' } as React.CSSProperties}>
              <span>EXPLORE</span>
              <Link to="/aerators">Aerators</Link>
              <Link to="/probiotics">Probiotics</Link>
              <Link to="/about">Our story</Link>
            </div>
            <div data-scroll="fade-up" style={{ '--scroll-delay': '100ms' } as React.CSSProperties}>
              <span>LET'S CONNECT</span>
              <Link to="/request-a-quote">Request a quote</Link>
              <Link to="/quality">Our approach to quality</Link>
              <Link to="/contact">Contact information</Link>
            </div>
            <div className="footer-note" data-scroll="fade-up" style={{ '--scroll-delay': '200ms' } as React.CSSProperties}>
              <span>A THOUGHTFUL PREVIEW</span>
              <p>
                Created around the Siri vision.
                <br />
                Verified product and company details
                <br />
                will complete the story.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Siri Aquatic Solutions Pvt. Ltd.</span>
            <div>
              <Link to="/image-credits">Image credits</Link>
              <Link to="/legal/privacy">Privacy</Link>
              <Link to="/legal/terms">Site information</Link>
              <Link to="/accessibility">Accessibility</Link>
              <button aria-pressed={reduced} onClick={() => setReduced(!reduced)}>
                {reduced ? 'Enable' : 'Reduce'} animations {reduced ? <Plus size={13} /> : <Minus size={13} />}
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
            <h2>What brings you here?</h2>
            <button className="icon-button" aria-label="Close search" onClick={() => setSearch(false)}>
              <X />
            </button>
          </div>
          <label className="search-field">
            <Search />
            <input
              autoFocus
              aria-label="Search site"
              placeholder="Search aerators, probiotics, equipment…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="search-results">
            {[
              ...aeratorProducts.map((p) => ({ name: p.name, url: `/products/${p.id}` })),
              ...spareEquipmentProducts.map((p) => ({ name: p.name, url: `/products/${p.id}` })),
              ...probioticProducts.map((p) => ({ name: `${p.code} · ${p.name}`, url: `/probiotics#${p.id}` })),
              { name: 'Aerators catalogue', url: '/aerators' },
              { name: 'Probiotics & pond care', url: '/probiotics' },
              { name: 'Request a quote', url: '/request-a-quote' }
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
          <p>Search aerators, probiotics and quote options.</p>
        </div>
      </dialog>
    </>
  );
}

function Breadcrumb({ name }: { name: string }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span>/</span>
      <span>{name}</span>
    </div>
  );
}

const router = createBrowserRouter([{ path: '*', element: <App /> }], { basename: import.meta.env.BASE_URL });
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
