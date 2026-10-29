import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Gauge, Weight, Cable, ShieldCheck } from 'lucide-react';
import './glass-gallery.css';

interface ShowcaseProduct {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  h2Headline: string;
  caption: string;
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
  thumbs: string[];
}

const showcaseProducts: ShowcaseProduct[] = [
  {
    id: 'paddle-wheel',
    name: 'SIRI PRO-4 PADDLE AERATOR',
    subtitle: 'Surface Aeration System',
    tagline: 'Oxygen, delivered.',
    h2Headline: 'AERATION THAT NEVER SLEEPS.',
    caption: 'Engineered for relentless 24/7 dissolved oxygen enrichment with high-torque copper motors and reinforced bevel gearboxes.',
    image: '/images/aerator-pro4-cutout.png',
    alt: 'Siri Pro-4 heavy duty commercial paddle wheel aerator for aquaculture ponds',
    featureChip: 'SS-304 SUBFRAME',
    featureDesc: 'Marine-grade anti-corrosion chassis with UV-stabilized virgin HDPE floats',
    specs: {
      type: 'Surface Paddle Wheel',
      coverage: 'Up to 1.5 Hectares',
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
    },
    thumbs: [
      '/images/aerator-pro4-cutout.png',
      '/hero.webp',
      '/images/ponds.webp',
      '/images/pump.webp'
    ]
  },
  {
    id: 'turbo-2',
    name: 'SIRI TURBO-2 COMPACT AERATOR',
    subtitle: 'Rapid Dissolved Oxygen Booster for Nursery Ponds',
    tagline: 'Power in every pulse.',
    h2Headline: 'HIGH VELOCITY. COMPACT FOOTPRINT.',
    caption: 'Specially configured for post-larvae nursery ponds, circular biofloc tanks and precision circulation corners.',
    image: '/images/aerator-turbo2-cutout.png',
    alt: 'Siri Turbo-2 compact two paddle aerator for shrimp nurseries',
    featureChip: 'HIGH-TORQUE MOTOR',
    featureDesc: 'IP55 moisture-sealed motor winding with integrated thermal overload protection',
    specs: {
      type: 'Compact 2-Paddle Wheel',
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
    },
    thumbs: [
      '/images/aerator-turbo2-cutout.png',
      '/hero.webp',
      '/images/pump.webp',
      '/images/ponds.webp'
    ]
  },
  {
    id: 'spiral-impeller',
    name: 'SIRI SPIRAL-FLOW DEEP IMPELLER',
    subtitle: 'Subsurface Destratification Wavemaker',
    tagline: 'Deep water renewed.',
    h2Headline: 'DEEP CIRCULATION. ZERO DEAD ZONES.',
    caption: 'Helical turbine lifts bottom anaerobic sludge, prevents temperature stratification and aerates the pond bottom floor.',
    image: '/images/aerator-spiral-cutout.png',
    alt: 'Siri Spiral-Flow subsurface helical impeller wave aerator',
    featureChip: 'HELICAL TURBINE',
    featureDesc: 'Hydrodynamically balanced marine bronze spiral blade with cavitation guard',
    specs: {
      type: 'Subsurface Spiral Impeller',
      coverage: 'Up to 2.0 Hectares',
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
    },
    thumbs: [
      '/images/aerator-spiral-cutout.png',
      '/images/pump.webp',
      '/hero.webp',
      '/images/ponds.webp'
    ]
  }
];

const titles=['Pro-4 Paddle Aerator','Turbo-2 Compact Aerator','Spiral-Flow Impeller'];
const headlines=[['Every ripple.','New possibility.'],['Small footprint.','Room to grow.'],['Go deeper.','Keep things moving.']];
const units=['Paddle wheel','Compact aeration','Deep circulation'];

export function ProductShowcase(){
 const [active,setActive]=useState(0);
 const tabs=useRef<HTMLDivElement>(null);
 const product=showcaseProducts[active];
 const change=(index:number)=>setActive((index+showcaseProducts.length)%showcaseProducts.length);
 const info=[{Icon:Weight,label:'Weight',value:product.mainInfo.weight},{Icon:Gauge,label:'Power',value:product.mainInfo.power},{Icon:Cable,label:'Power supply',value:product.mainInfo.supply},{Icon:ShieldCheck,label:'Warranty',value:product.mainInfo.warranty}];
 return <section className="equipment-gallery" id="showcase" aria-label="Explore aeration equipment">
   <div className="gallery-environment" aria-hidden="true"><img className="gallery-backdrop-photo" src="/images/gallery-backdrop.webp" alt="" width="1536" height="1024" loading="lazy"/><span className="gallery-light gallery-light-aqua"/><span className="gallery-light gallery-light-amber"/><span className="gallery-floor"/></div>
   <div className="gallery-layout">
     <div className="gallery-left" data-scroll="fade-up">
       <span className="gallery-eyebrow">IN OUR ELEMENT / 0{active+1}</span>
       <h2 className="gallery-headline" key={`headline-${active}`}>{headlines[active].map(line=><span key={line}>{line}</span>)}</h2>
       <div className="gallery-glass gallery-details" key={`details-${active}`}>
         <p className="gallery-caption">{["Surface aeration, thoughtfully configured around your pond.","Compact aeration for smaller spaces and flexible layouts.","Explore circulation below the surface with a spiral impeller."][active]}</p>
         <dl className="gallery-specs">
           {[['Type',product.specs.type],['Coverage',product.specs.coverage],['Power supply',product.specs.powerSupply],['Operating mode',product.specs.operatingMode]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
         </dl>
         <div className="gallery-feature"><div><span>A closer look</span><strong>{product.featureChip}</strong></div><p>{product.featureDesc}</p></div>
         <Link to="/products/paddle-wheel" className="gallery-cta">Explore the equipment <ArrowUpRight size={20} strokeWidth={1.6}/></Link>
         <Link to="/request-a-quote?product=paddle-wheel" className="gallery-enquire">Talk about your pond <ArrowRight size={16} strokeWidth={1.6}/></Link>
       </div>
     </div>
     <div className="gallery-center">
       <div className="gallery-image-stage" aria-live="polite">
         <div className="gallery-image-halo" aria-hidden="true"/>
         <img key={product.image} src={product.image} alt={product.alt} className={`gallery-product-image gallery-product-${active}`} width="1024" height="1024" decoding="async"/>
         <span className="gallery-contact-shadow" aria-hidden="true"/>
       </div>
       <div className="gallery-switcher">
         <div className="gallery-switcher-top"><span>Find your flow</span><div><button type="button" aria-label="Previous product" onClick={()=>change(active-1)}><ArrowLeft size={18} strokeWidth={1.5}/></button><span className="gallery-counter">0{active+1} <i>/ 03</i></span><button type="button" aria-label="Next product" onClick={()=>change(active+1)}><ArrowRight size={18} strokeWidth={1.5}/></button></div></div>
         <div ref={tabs} className="gallery-product-tabs" role="tablist" aria-label="Choose equipment" onKeyDown={e=>{let next=active;if(e.key==='ArrowRight')next=(active+1)%3;else if(e.key==='ArrowLeft')next=(active+2)%3;else if(e.key==='Home')next=0;else if(e.key==='End')next=2;else return;e.preventDefault();change(next);tabs.current?.querySelectorAll<HTMLButtonElement>('[role=tab]')[next]?.focus()}}>
           {showcaseProducts.map((item,index)=><button key={item.id} type="button" role="tab" id={`equipment-tab-${index}`} aria-selected={active===index} aria-controls="equipment-info" tabIndex={active===index?0:-1} className={active===index?'selected':''} onClick={()=>change(index)}><img src={item.image} alt="" width="88" height="70" loading="lazy"/><span>{units[index]}</span><span className="gallery-selection-dot" aria-hidden="true"/></button>)}
         </div>
       </div>
     </div>
     <div className="gallery-right" id="equipment-info" role="tabpanel" aria-labelledby={`equipment-tab-${active}`}>
       <div className="gallery-glass gallery-title-card" key={`title-${active}`}>
         <span className="gallery-eyebrow">{product.specs.type}</span>
         <h3>{titles[active]}</h3><p>{product.tagline}</p>
         <svg className="gallery-wave" viewBox="0 0 350 90" aria-hidden="true">{[0,1,2,3,4].map(i=><path key={i} d={`M0 ${45+i*2} C55 ${5+i*6},75 ${85-i*4},130 45 S205 ${5+i*7},260 45 S315 ${85-i*6},350 45`} fill="none" stroke="currentColor" strokeWidth={i===2?1.4:.65} opacity={1-i*.12}/>)}</svg>
         <span className="gallery-title-caption">Quality comes first. In every detail.</span>
       </div>
       <div className="gallery-glass gallery-main-info" key={`info-${active}`}>
         <h4>The details</h4>
         <div className="gallery-info-grid">{info.map(({Icon,label,value})=><div key={label}><Icon size={26} strokeWidth={1.35} aria-hidden="true"/><span>{label}</span><strong>{value}</strong></div>)}</div>
         <div className="gallery-stat"><span>{product.bigStat.value}</span><p>{product.bigStat.label}</p><small>{product.bigStat.standard}</small></div>
       </div>
     </div>
   </div>
 </section>;
}
export default ProductShowcase;
