import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  Sparkles,
  FlaskConical,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Layers,
  Zap,
  Droplets,
  HeartPulse
} from 'lucide-react';
import { probioticProducts, ProbioticIconKey } from './catalogData';
import './probiotics-page.css';

function HighlightIcon({ icon }: { icon: ProbioticIconKey }) {
  const props = { size: 22, strokeWidth: 1.65, 'aria-hidden': true as const };
  switch (icon) {
    case 'shield':
      return <ShieldCheck {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'trending':
      return <TrendingUp {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'droplets':
      return <Droplets {...props} />;
    case 'heart':
      return <HeartPulse {...props} />;
  }
}

export function ProbioticsPage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <section className="section inner probiotics-world" aria-label="Probiotics and pond-care catalogue">
      <div className="probiotics-shell">
        <div className="probiotics-hero-header" data-scroll="fade-up">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Probiotics</span>
          </div>
          <span className="eyebrow">DB BIO-ORGANICS · ANTIBIOTIC-FREE AQUACULTURE</span>
          <h1>
            Biological pond care
            <br />
            &amp; shrimp probiotics.
          </h1>
          <p className="lead">
            Enzyme-rich probiotics, gut-health liquids, and ionic minerals from our brochure — protecting shrimp immunity,
            reducing ammonia &amp; sludge, and keeping pond water naturally balanced.
          </p>
        </div>

        {/* Ordered P1 -> P9 Side-by-Side Glassmorphism Cards */}
        <div className="probiotics-grid">
          {probioticProducts.map((item, idx) => (
            <article key={item.id} id={item.id} className="probiotic-glass-card">
              <div className="probiotic-card-top">
                <div className="probiotic-thumb">
                  <img src={item.image} alt={`${item.name} — ${item.subtitle}`} loading={idx < 3 ? 'eager' : 'lazy'} />
                </div>
                <div className="probiotic-head-text">
                  <span className="probiotic-series-tag">
                    {item.code} · {item.series}
                  </span>
                  <h2>{item.name}</h2>
                  <p>{item.subtitle}</p>
                </div>
                <Link
                  to={`/products/${item.id}`}
                  className="probiotic-circle-arrow"
                  aria-label={`View full details for ${item.name}`}
                >
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </Link>
              </div>

              <div className="probiotic-highlights-row">
                {item.highlights.map((hl) => (
                  <div key={`${item.id}-${hl.line1}-${hl.line2}`} className="probiotic-hl-item">
                    <HighlightIcon icon={hl.icon} />
                    <span>
                      {hl.line1}
                      <br />
                      {hl.line2}
                    </span>
                  </div>
                ))}
              </div>

              <div className="probiotic-bottom-split">
                <div>
                  <span>
                    <FlaskConical size={13} /> DOSAGE
                  </span>
                  <p>{item.shortDosage}</p>
                </div>
                <div>
                  <span>
                    <Leaf size={13} /> INGREDIENTS
                  </span>
                  <p>{item.shortIngredients}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProbioticsPage;
