import { ShieldCheck, Check } from 'lucide-react';
import './proof-section.css';
import { siteText, useSiteLang } from './i18n';

export function TrustStrip() {
  const { lang } = useSiteLang();
  const t = siteText[lang].trust;

  return (
    <section className="proof-section" id="trust-strip" aria-labelledby="proof-title">
      <div className="proof-heading">
        <span>{t.eyebrow}</span>
        <h2 id="proof-title">{t.title}</h2>
        <p>{t.sub}</p>
      </div>
      <div className="proof-grid">
        {t.stats.map((stat, index) => (
          <article className="proof-stat" key={stat.label}>
            <span className="proof-index">0{index + 1}</span>
            <strong className="proof-value">{stat.value}</strong>
            <h3>{stat.label}</h3>
            <p>{stat.sub}</p>
          </article>
        ))}
      </div>
      <div className="proof-assurance">
        <span>
          <ShieldCheck size={21} />
          {t.quality}
        </span>
        <ul>
          {t.assurances.map((item) => (
            <li key={item}>
              <Check size={16} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustStrip;
