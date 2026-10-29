import { assetUrl } from './assets';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Search,
  Menu,
  X,
  Waves,
  Wind,
  Settings2,
  Droplets,
  Plus,
  Minus,
  Check,
  Download,
  MoveUpRight,
  Sparkles,
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
import { AeratorSelectorTeaser } from './AeratorSelectorTeaser';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { SectionDivider } from './SectionDivider';


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

const photos = [
  { src: assetUrl('/hero.webp'), alt: 'Concept scene of a paddle wheel aerator operating in a pond', credit: 'Concept visual' },
  { src: assetUrl('/images/pump.webp'), alt: 'Reference photograph of an electric water pump', credit: 'Reference photograph' },
  { src: assetUrl('/images/ponds.webp'), alt: 'Aerial reference photograph of aquaculture ponds', credit: 'Reference photograph' },
  { src: assetUrl('/images/aerator-pro4-cutout.png'), alt: 'Illustrative paddle wheel aerator', credit: 'Concept product render' },
  { src: assetUrl('/images/aerator-turbo2-cutout.png'), alt: 'Illustrative compact paddle wheel aerator', credit: 'Concept product render' },
  { src: assetUrl('/images/aerator-spiral-cutout.png'), alt: 'Illustrative spiral impeller', credit: 'Concept product render' }
];

function Photo({ type = 0, className = '' }: { type?: number; className?: string }) {
  const p = photos[type];
  return (
    <img
      className={`card-photo photo-${type} ${type >= 3 ? 'product-cutout-photo' : ''} ${className}`}
      src={p.src}
      alt={p.alt}
      loading="lazy"
      decoding="async"
      width={1000}
      height={750}
      onLoad={(e) => e.currentTarget.classList.add('loaded')}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = assetUrl('/hero.webp');
        e.currentTarget.alt = 'Illustrative aquaculture pond';
        e.currentTarget.classList.add('loaded');
      }}
    />
  );
}

const categories = ['All solutions', 'Aeration systems', 'Equipment & spares', 'Pond care'];
const products = [
  { id: 'paddle-wheel', name: 'Paddle wheel aerators', category: 'Aeration systems', desc: 'Explore surface aeration equipment for your pond.', type: 3 },
  { id: 'compact-aerator', name: 'Compact paddle aerators', category: 'Aeration systems', desc: 'Explore compact aeration for smaller ponds and flexible layouts.', type: 4 },
  { id: 'spiral-impeller', name: 'Spiral impellers', category: 'Aeration systems', desc: 'Discuss circulation below the surface and your pond configuration.', type: 5 },
  { id: 'water-pumps', name: 'Water pumps', category: 'Equipment & spares', desc: 'Find a starting point for water transfer, circulation and pumping requirements.', type: 1 },
  { id: 'pond-equipment', name: 'Pond equipment & spares', category: 'Equipment & spares', desc: 'Discuss pumps, motors, gearboxes and replacement parts.', type: 1 },
  { id: 'pond-care', name: 'Pond-care solutions', category: 'Pond care', desc: 'Discuss water, soil and nutrition requirements with the team.', type: 2 }
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
  return (
    <header className={isHero ? 'calm-header calm-header-home' : 'calm-header calm-header-inner'}>
      <Link to="/" className="brand" aria-label="Siri Aquatic Solutions">
        <Brand />
      </Link>
      <nav aria-label="Main navigation" id="primary-navigation" className={menu ? 'open' : ''}>
        {[
          ['/', 'Home'],
          ['/products', 'Products'],
          ['/solutions', 'Solutions'],
          ['/about', 'Our story'],
          ['/knowledge', 'Knowledge']
        ].map(([url, name]) => (
          <Link className={(url === "/" ? path === "/" : path === url || path.startsWith(url + "/")) ? "active" : ""} aria-current={(url === "/" ? path === "/" : path === url || path.startsWith(url + "/")) ? "page" : undefined} key={url} to={url}>
            {name}
          </Link>
        ))}
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
          Let’s talk <ArrowUpRight size={17} />
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

function HeroAtmosphere({reduced}:{reduced:boolean}){
 const ref=useRef<HTMLVideoElement>(null);const [paused,setPaused]=useState(false);
 useEffect(()=>{const v=ref.current;if(!v)return;const observer=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!reduced&&!paused)v.play().catch(()=>{});else v.pause()},{threshold:.1});observer.observe(v);if(reduced||paused)v.pause();return()=>{observer.disconnect();v.pause()}},[reduced,paused]);
 return <><div className="hero-atmosphere" aria-hidden="true"><video ref={ref} src={assetUrl('/water-reel.mp4#t=5')} muted loop playsInline preload="metadata"/></div><button type="button" className="atmosphere-control" onClick={()=>setPaused(!paused)} aria-pressed={paused} aria-label={paused?'Play background video':'Pause background video'}>{paused?<Play size={14}/>:<Pause size={14}/>}</button></>
}
function LogoDarkFilter(){return <svg width="0" height="0" className="logo-filter-defs" aria-hidden="true"><defs><filter id="siri-logo-dark" colorInterpolationFilters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  2 2 2 0 -0.45" result="colors"/><feComposite in="colors" in2="SourceAlpha" operator="in" result="colorPixels"/><feFlood floodColor="#ffffff" result="white"/><feComposite in="white" in2="SourceAlpha" operator="in" result="whiteLogo"/><feMerge><feMergeNode in="whiteLogo"/><feMergeNode in="colorPixels"/></feMerge></filter></defs></svg>}

function HeroSection({reduced}:{reduced:boolean;menu:boolean;setMenu:React.Dispatch<React.SetStateAction<boolean>>;setSearch:React.Dispatch<React.SetStateAction<boolean>>;path:string}) {
  const [paused,setPaused]=useState(false);
  const [visible,setVisible]=useState(true);
  const [activeEquipment,setActiveEquipment]=useState(0);
  const [interacting,setInteracting]=useState(false);
  useEffect(()=>{if(paused||reduced||!visible||interacting)return;const interval=window.setInterval(()=>setActiveEquipment(index=>(index+1)%3),4200);return()=>window.clearInterval(interval)},[paused,reduced,visible,interacting]);
  const rail=useRef<HTMLDivElement>(null);
  useEffect(()=>{const node=rail.current;if(!node)return;const io=new IntersectionObserver(([e])=>setVisible(e.isIntersecting),{threshold:.05});io.observe(node);return()=>io.disconnect()},[]);
  const equipment=[{src:assetUrl('/images/aerator-pro4-cutout.png'),name:'Paddle wheel aerator'},{src:assetUrl('/images/aerator-turbo2-cutout.png'),name:'Compact aerator'},{src:assetUrl('/images/aerator-spiral-cutout.png'),name:'Spiral impeller'}];
  return <section className="calm-hero machine-hero poster-hero" id="hero" aria-label="Siri Aquatic introduction">
    <HeroAtmosphere reduced={reduced}/>
    <div className="poster-hero-content">
      <div className="poster-heading"><span className="poster-eyebrow">QUALITY COMES FIRST</span><h1 className="hero-brand-heading" aria-label="Siri Aquatic Solutions Pvt. Ltd."><HeroWordmark/></h1></div>
      <div ref={rail} className="hero-focus-carousel" aria-label="Aeration equipment carousel" aria-roledescription="carousel" onMouseEnter={()=>setInteracting(true)} onMouseLeave={()=>setInteracting(false)} onFocusCapture={()=>setInteracting(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setInteracting(false)}}>
        {equipment.map((item,index)=>{const position=(index-activeEquipment+3)%3;const side=position===0?'center':position===1?'right':'left';return <Link key={item.name} to="/products/paddle-wheel" className={`hero-focus-item is-${side}`} aria-current={position===0?'true':undefined} aria-label={position===0?`Explore ${item.name}`:`Show ${item.name}`} onClick={e=>{if(position!==0){e.preventDefault();setActiveEquipment(index)}}}><img src={item.src} alt={item.name} width="1254" height="1254" decoding="async" fetchPriority={index===0?'high':undefined}/><span>{item.name}</span></Link>})}
        <div className="hero-focus-dots" role="group" aria-label="Choose featured aerator">{equipment.map((item,index)=><button key={item.name} type="button" aria-label={`Feature ${item.name}`} aria-pressed={activeEquipment===index} onClick={()=>setActiveEquipment(index)}><span/></button>)}</div>
      </div>
      <div className="poster-hero-bottom"><p>Aquaculture equipment. <span>Thoughtful pond solutions.</span></p><button type="button" className="hero-rail-control" aria-label={paused?'Resume product carousel':'Pause product carousel'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={15}/>:<Pause size={15}/>}<span>{paused?'Play':'Pause'} products</span></button></div>
    </div>
  </section>;
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();


  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All solutions');
  const [manualReduced, setReduced] = useState(() => localStorage.getItem('siri-motion') === 'reduced');
  const [systemReduced,setSystemReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const reduced=manualReduced||systemReduced;
  useEffect(()=>{const mq=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setSystemReduced(mq.matches);mq.addEventListener('change',update);return()=>mq.removeEventListener('change',update)},[]);
  const [saved, setSaved] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const path = location.pathname.replace(/\/+$/, '') || '/';
  const activeProduct = products.find((p) => path === `/products/${p.id}`);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMenu(false);
    setSaved(false);
  }, [path]);

  // One navigation bar smoothly gains a rounded surface when the page scrolls.
  useEffect(()=>{
    const header=document.querySelector('header');
    const update=()=>{
      if(!header)return;
      header.classList.toggle('is-scrolled',window.scrollY>32);
      // Sample the surface behind the bar, rather than the next section below it.
      const bounds=header.getBoundingClientRect();
      const sampleY=bounds.top+bounds.height*.5;
      const dark=Array.from(document.querySelectorAll('.machine-hero,.equipment-gallery,footer')).some(section=>{
        const rect=section.getBoundingClientRect();
        return rect.top<=sampleY && rect.bottom>=sampleY;
      });
      header.setAttribute('data-surface',dark?'dark':'light');
    };
    update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
    const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false)};
    window.addEventListener('keydown',onKey);
    return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);window.removeEventListener('keydown',onKey)}
  },[path]);

  // Enhanced On-Scroll Reveal Observer
  useEffect(() => {
    document.title = `${path === '/' ? 'Quality Comes First' : activeProduct?.name || path.slice(1).replaceAll('-', ' ')} - Siri Aquatic`;

    // Attribute scroll reveal types to standard sections and components
    document.querySelectorAll('.section-heading, .inner h1, .inner .lead, .spec-section h2, .quote-grid h1, .articles details').forEach((el, i) => {
      if (!el.hasAttribute('data-scroll')) {
        el.setAttribute('data-scroll', 'fade-up');
        (el as HTMLElement).style.setProperty('--scroll-delay', `${(i % 3) * 75}ms`);
      }
    });

    document.querySelectorAll('.detail-grid > div, .spec-row, .quote-grid > div, .editorial > div, .approach-list > div, .footer-links > div, .principles > span').forEach((el, i) => {
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

    const visibility = new IntersectionObserver((entries) =>
      entries.forEach((e) => e.target.classList.toggle('in-view', e.isIntersecting))
    );
    document.querySelectorAll('.water-story, .hero, .brand-panel, .section').forEach((el) => visibility.observe(el));

    return () => {
      observer.disconnect();
      visibility.disconnect();
    };
  }, [path, filter, activeProduct, query]);

  // Scroll reading progress & story rotation parallax
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty('--reading', `${total > 0 ? scrollY / total : 0}`);

      const hero = document.querySelector('.hero') as HTMLElement | null;
      if (hero && !reduced && !media.matches && innerWidth > 760) {
        const r = hero.getBoundingClientRect();
        if (r.bottom > 0) hero.style.setProperty('--hero-drift', `${Math.min(24, Math.max(0, -r.top * 0.08))}px`);
      }

      const story = document.querySelector('.water-story') as HTMLElement | null;
      if (story && !reduced && !media.matches) {
        const r = story.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (innerHeight - r.top) / (innerHeight + r.height)));
        story.style.setProperty('--scroll-turn', `${progress * 100 - 50}deg`);
        story.style.setProperty('--story-progress', String(progress));
      }
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
  }, [path, reduced]);

  useEffect(() => {
    document.documentElement.classList.toggle('reduce-motion', reduced);
    localStorage.setItem('siri-motion', manualReduced ? 'reduced' : 'full');
    if(reduced)document.querySelectorAll('video').forEach(v=>v.pause());
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

  const cards = (items = products) => (
    <div className="product-grid stagger-container">
      {items.map((p, i) => (
        <Link
          data-scroll="fade-up"
          data-reveal
          className="product-card"
          to={`/products/${p.id}`}
          key={p.id}
          style={{ '--scroll-delay': `${i * 120}ms` } as React.CSSProperties}
        >
          <div className={`product-art tone-${i}`}>
            <span className="tiny-label">{p.category}</span>
            <Photo type={p.type} />
            <span className="round-arrow">
              <ArrowUpRight size={21} />
            </span>
            <small>{photos[p.type].credit}</small>
          </div>
          <div className="product-caption">
            <div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
            <span>0{i + 1}</span>
          </div>
        </Link>
      ))}
    </div>
  );

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
      <LogoDarkFilter/>
      <AmbientBubbles />
      <ScrollToTop />
      <FloatingWhatsApp />

      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="reading-progress" aria-hidden="true" />

      {/* Standard top header on subpages */}
      {(
        <Header
          isHero={path === '/'}
          menu={menu}
          setMenu={setMenu}
          setSearch={setSearch}
          path={path}
        />
      )}

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

              {/* H2: Trust strip (Count-up stats + certifications sheet slide-over) */}


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

              {/* H3: Shop by category */}
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
                    <p>Different ponds. Different needs. Explore the essentials that bring your aquaculture plans to life.</p>
                    <Link className="text-link dark" to="/products">
                      Explore all solutions <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </div>
                {cards()}
              </section>

              {/* Section-break mini-mark (Plan 10.3 B) */}
              <SectionDivider />

              {/* H4: Product Showcase (Section 8 dark glass stage reference) */}
              <ProductShowcase />

              {/* H5: Water story (Wheel turns, water wakes) */}
              <section className="water-story water-story-refined" data-scroll="fade-up" data-reveal>
                <div className="water-story-copy">
                  <span className="eyebrow">A CONNECTED POND</span>
                  <h2><span>When water moves,</span><span>life moves</span><span className="water-accent">with it.</span></h2>
                  <p>Aeration is part of a bigger picture. Your water, your equipment and your everyday decisions all work together.</p>
                  <Link to="/solutions" className="water-story-link">Explore the connection <ArrowUpRight size={20}/></Link>
                </div>
                <div className="water-visual" data-scroll="fade-left">
                  <img src={assetUrl('/images/ponds.webp')} alt="Aerial reference photograph of connected aquaculture ponds" width="600" height="400" loading="lazy"/>
                  <div className="water-photo-shade"/>
                  <div className="water-visual-caption"><Waves size={28}/><span>Air. Water.<br/>Movement.</span></div>
                  <span className="water-photo-credit">Reference photograph</span>
                </div>
              </section>

              {/* H6: Why Siri Aquatic (4 pillars) */}
              <section id="why-siri" className="section approach">
                <div data-scroll="fade-right" data-reveal>
                  <span className="eyebrow">03 / THE SIRI APPROACH</span>
                  <h2>
                    Quality isn't a feature.
                    <br />
                    It's the starting point.
                  </h2>
                  <p>
                    Our name comes with a simple promise of intent:
                    <br />
                    Quality Comes First. It shapes the questions we ask
                    <br />
                    and the conversations we have.
                  </p>
                  <Link to="/about" className="text-link dark">
                    Get to know Siri <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="approach-list stagger-container">
                  {[
                    ['01', 'Build quality & precision', 'Field-tested materials, stainless shafts, and virgin HDPE floats designed for harsh saltwater ponds.'],
                    ['02', 'Technical guidance', 'Calculate required dissolved oxygen and motor sizing tailored to your stocking density and pond geometry.'],
                    ['03', 'Spares availability', 'Factory-direct access to impellers, gearboxes, motors, tripods, and replacement assemblies without delay.'],
                    ['04', 'After-sales support', 'Direct engineering support and technician consultation throughout your culture lifecycle.']
                  ].map(([n, t, d], i) => (
                    <div data-scroll="fade-left" data-reveal key={n} style={{ '--scroll-delay': `${i * 120}ms` } as React.CSSProperties}>
                      <span>{n}</span>
                      <div>
                        <h3>{t}</h3>
                        <p>{d}</p>
                      </div>
                      <ArrowUpRight size={20} />
                    </div>
                  ))}
                </div>
              </section>

              {/* H7: Aerator Selector Teaser with sizing mini-tool */}
              <AeratorSelectorTeaser />

              {/* Section-break mini-mark (Plan 10.3 B) */}
              <SectionDivider />

              <section className="knowledge-preview section">
                <div className="section-heading" data-scroll="fade-up" data-reveal>
                  <div>
                    <span className="eyebrow">04 / A LITTLE KNOW-HOW</span>
                    <h2>
                      Better questions.
                      <br />
                      Informed decisions.
                    </h2>
                  </div>
                  <Link to="/knowledge" className="text-link dark">
                    Visit the knowledge centre <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="guide-grid stagger-container">
                  {['Before choosing an aerator', 'Get your pond brief ready', 'A closer look at maintenance'].map((t, i) => (
                    <Link
                      to={`/knowledge?guide=${i}`}
                      data-scroll="fade-up"
                      data-reveal
                      className="guide"
                      key={t}
                      style={{ '--scroll-delay': `${i * 140}ms` } as React.CSSProperties}
                    >
                      <span>FIELD NOTES / 0{i + 1}</span>
                      <div className="guide-image">
                        <Photo type={i === 0 ? 0 : i === 1 ? 2 : 1} />
                        <span className="guide-icon">
                          {i === 0 ? <Wind /> : i === 1 ? <Waves /> : <Settings2 />}
                        </span>
                      </div>
                      <h3>{t}</h3>
                      <span className="text-link">
                        Read the checklist <ArrowUpRight size={17} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
              {cta}
            </>
          ) : path === '/products' || ['/aerators', '/equipment', '/probiotics'].includes(path) ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name="Products" />
              <span className="eyebrow">FIND YOUR FIT</span>
              <h1>
                Made for your
                <br />
                water world.
              </h1>
              <p className="lead">
                Explore solution categories. Final models, specifications and availability are confirmed with the Siri team.
              </p>
              <div className="catalogue-controls" data-scroll="fade-up">
                <div className="filters">
                  {categories.map((c) => (
                    <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'selected' : ''}>
                      {c}
                    </button>
                  ))}
                </div>
                <label className="search-field">
                  <Search size={18} />
                  <input
                    aria-label="Search solutions"
                    placeholder="Find a solution…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>
              </div>
              {cards(
                products.filter(
                  (p) =>
                    (filter === 'All solutions' || filter === p.category) &&
                    `${p.name} ${p.desc}`.toLowerCase().includes(query.toLowerCase())
                )
              )}
              {!products.some(
                (p) =>
                  (filter === 'All solutions' || filter === p.category) &&
                  `${p.name} ${p.desc}`.toLowerCase().includes(query.toLowerCase())
              ) && (
                <div className="empty" data-scroll="fade-up">
                  <Waves />
                  <h3>No matching solutions</h3>
                  <p>Try another search or reset the filters.</p>
                  <button
                    className="button"
                    onClick={() => {
                      setQuery('');
                      setFilter('All solutions');
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              )}
              <p className="content-note">
                Range preview · Images are illustrative or external references, not verified Siri products. Approved models and
                datasheets will be added to the catalogue.
              </p>
            </section>
          ) : activeProduct ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name={activeProduct.name} />
              <div className="detail-grid">
                <div className="detail-art" data-scroll="fade-right">
                  <Photo type={activeProduct.type} />
                  <small>{photos[activeProduct.type].credit} · not a verified Siri product</small>
                </div>
                <div data-scroll="fade-left">
                  <span className="eyebrow">{activeProduct.category}</span>
                  <h1>{activeProduct.name}</h1>
                  <p className="lead">{activeProduct.desc}</p>
                  <p>Tell us about your requirements to discuss suitable options, current specifications and pricing.</p>
                  <Button to={`/request-a-quote?product=${activeProduct.id}`}>Prepare an enquiry</Button>
                </div>
              </div>
              <div className="spec-section" data-scroll="fade-up">
                <h2>Details that matter.</h2>
                <p>Confirm the current product documentation before making a purchase.</p>
                {[
                  'Model & configuration',
                  'Power supply & rating',
                  'Materials & dimensions',
                  'Availability & warranty',
                  'Datasheet & installation guide'
                ].map((s, idx) => (
                  <div className="spec-row" key={s} data-scroll="fade-up" style={{ '--scroll-delay': `${idx * 70}ms` } as React.CSSProperties}>
                    <span>{s}</span>
                    <span>To be confirmed with Siri</span>
                  </div>
                ))}
              </div>
              {cta}
            </section>
          ) : path === '/request-a-quote' || path === '/contact' ? (
            <section className="section inner" data-scroll="fade-up">
              <Breadcrumb name="Let's talk" />
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
                      defaultValue={products.find((p) => p.id === new URLSearchParams(location.search).get('product'))?.name || ''}
                    >
                      <option value="">Help me choose</option>
                      {products.map((p) => (
                        <option key={p.id}>{p.name}</option>
                      ))}
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
              {cards()}
              {cta}
            </section>
          ) : path === '/image-credits' ? (
            <section className="section inner legal" data-scroll="fade-up">
              <Breadcrumb name="Image credits" />
              <h1>Behind the imagery.</h1>
              <p>
                Photography gives context to this design preview. External reference photographs do not identify Siri
                products, installations or partnerships.
              </p>
              <div className="credit-list">
                <p>
                  <strong>Aeration and hero imagery</strong>
                  <br />
                  Original AI-generated concept scene, created for this preview.
                </p>
                <p>
                  <strong>Water pump reference photograph</strong>
                  <br />
                  <a href="https://www.freepnglogos.com/images/motor-20803.html" target="_blank" rel="noreferrer">
                    View the original image source ↗
                  </a>
                </p>
                <p>
                  <strong>Aquaculture pond reference photograph</strong>
                  <br />
                  <a href="https://zjnews.zjol.com.cn/zjnews/202212/t20221205_25147358.shtml" target="_blank" rel="noreferrer">
                    View the original image source ↗
                  </a>
                </p>
                <p>Replace reference photographs with approved, licensed company assets before public commercial launch.</p>
              </div>
            </section>
          ) : path.startsWith('/legal') || path === '/accessibility' ? (
            <section className="section inner legal" data-scroll="fade-up">
              <Breadcrumb name="Site information" />
              <h1>{path.includes('privacy') ? 'Your privacy.' : path === '/accessibility' ? 'Open to everyone.' : 'About this preview.'}</h1>
              <p>
                This website is a design and catalogue preview for Siri Aquatic Solutions Pvt. Ltd. Product visuals are
                illustrative; specifications, commercial terms, contact details and policies require company approval before
                launch.
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
        <FishCurrent /></main>

        {path === "/" && <TrustStrip/>}
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
              <Link to="/products">Our solutions</Link>
              <Link to="/about">Our story</Link>
              <Link to="/quality">Our approach to quality</Link>
            </div>
            <div data-scroll="fade-up" style={{ '--scroll-delay': '100ms' } as React.CSSProperties}>
              <span>LET'S CONNECT</span>
              <Link to="/request-a-quote">Prepare an enquiry</Link>
              <Link to="/knowledge">Knowledge centre</Link>
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
              placeholder="Search equipment, pond care, guides…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="search-results">
            {[
              ...products.map((p) => ({ name: p.name, url: `/products/${p.id}` })),
              { name: 'Knowledge centre & checklists', url: '/knowledge' },
              { name: 'Prepare an enquiry', url: '/request-a-quote' }
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
          <p>Search solution categories and helpful resources.</p>
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
