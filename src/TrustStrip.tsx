import { ShieldCheck, Check } from 'lucide-react';
import './proof-section.css';

export function TrustStrip() {
  const stats = [
    { value: '15+', label: 'Years in aquaculture', sub: 'Coastal farming engineering since 2011' },
    { value: '12,000+', label: 'Ponds aerated', sub: 'Shrimp & fish farms across India' },
    { value: '8+', label: 'Coastal states served', sub: 'AP, TN, Gujarat, Odisha, WB & Kerala' },
    { value: '100%', label: 'Tested before dispatch', sub: 'Submerged run & power consumption test' }
  ];
  const assurances = ['Quality management', 'Tested motors & gears', 'UV-stabilized floats', 'Factory support'];
  return (
    <section className="proof-section" id="trust-strip" aria-labelledby="proof-title">
      <div className="proof-heading"><span>THE SIRI STANDARD</span><h2 id="proof-title">Built for the long run.</h2><p>From the first installation to everyday pond care.</p></div>
      <div className="proof-grid">
        {stats.map((stat, index) => <article className="proof-stat" key={stat.label}>
          <span className="proof-index">0{index + 1}</span><strong className="proof-value">{stat.value}</strong>
          <h3>{stat.label}</h3><p>{stat.sub}</p>
        </article>)}
      </div>
      <div className="proof-assurance"><span><ShieldCheck size={21}/>Quality comes first</span><ul>{assurances.map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul></div>
    </section>
  );
}
export default TrustStrip;
