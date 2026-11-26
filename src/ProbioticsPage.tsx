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
import { probioticTeluguMap, siteText, useSiteLang } from './i18n';
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
  const { lang } = useSiteLang();
  const t = siteText[lang].probioticsPage;
  const homeLabel = siteText[lang].common.home;

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
            <Link to="/">{homeLabel}</Link>
            <span>/</span>
            <span>{t.breadcrumb}</span>
          </div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>
            {t.h1a}
            <br />
            {t.h1b}
          </h1>
          <p className="lead">{t.lead}</p>
        </div>

        {/* Ordered P1 -> P9 Side-by-Side Glassmorphism Cards */}
        <div className="probiotics-grid">
          {probioticProducts.map((item, idx) => {
            const te = lang === 'te' ? probioticTeluguMap[item.id] : undefined;
            const series = te ? te.series : item.series;
            const subtitle = te ? te.subtitle : item.subtitle;
            const dosage = te ? te.shortDosage : item.shortDosage;
            const ingredients = te ? te.shortIngredients : item.shortIngredients;

            return (
              <article key={item.id} id={item.id} className="probiotic-glass-card">
                <div className="probiotic-card-top">
                  <div className="probiotic-thumb">
                    <img src={item.image} alt={`${item.name} — ${subtitle}`} loading={idx < 3 ? 'eager' : 'lazy'} />
                  </div>
                  <div className="probiotic-head-text">
                    <span className="probiotic-series-tag">
                      {item.code} · {series}
                    </span>
                    <h2>{item.name}</h2>
                    <p>{subtitle}</p>
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
                  {item.highlights.map((hl, hIdx) => {
                    const l1 = te ? te.highlights[hIdx * 2] : hl.line1;
                    const l2 = te ? te.highlights[hIdx * 2 + 1] : hl.line2;
                    return (
                      <div key={`${item.id}-${hl.line1}-${hl.line2}`} className="probiotic-hl-item">
                        <HighlightIcon icon={hl.icon} />
                        <span>
                          {l1}
                          <br />
                          {l2}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="probiotic-bottom-split">
                  <div>
                    <span>
                      <FlaskConical size={13} /> {t.dosage}
                    </span>
                    <p>{dosage}</p>
                  </div>
                  <div>
                    <span>
                      <Leaf size={13} /> {t.ingredients}
                    </span>
                    <p>{ingredients}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProbioticsPage;
