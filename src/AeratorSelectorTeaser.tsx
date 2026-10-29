import { assetUrl } from './assets';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowUpRight,Check,Ruler,Layers,PlugZap,Fish} from 'lucide-react';
import './pond-planner.css';
const groups=[
 {id:'area',label:'Pond area',Icon:Ruler,options:[['1','0.5–1 acre'],['2','1–2.5 acres'],['5','3–5+ acres']]},
 {id:'depth',label:'Water depth',Icon:Layers,options:[['1.2','1–1.2 m'],['1.5','1.5 m'],['2','1.8–2.2 m']]},
 {id:'phase',label:'Power supply',Icon:PlugZap,options:[['3phase','3-phase / 415V'],['1phase','Single-phase / 230V']]},
 {id:'species',label:'What you farm',Icon:Fish,options:[['shrimp','Shrimp'],['fish','Freshwater fish']]}
] as const;
export function AeratorSelectorTeaser(){
 const [choices,setChoices]=useState<Record<string,string>>({area:'2',depth:'1.5',phase:'3phase',species:'shrimp'});
 const label=(id:string)=>{const g=groups.find(g=>g.id===id);return g?.options.find(o=>o[0]===choices[id])?.[1]||''};
 const category=choices.area==='1'?'Compact aeration':choices.area==='5'?'Aeration & circulation':'Paddle wheel aeration';
 const image=choices.area==='1'?assetUrl('/images/aerator-turbo2-cutout.png'):assetUrl('/images/aerator-pro4-cutout.png');
 const query=new URLSearchParams({product:'paddle-wheel',area:label('area'),depth:label('depth'),phase:label('phase'),species:label('species')});
 return <section className="pond-planner" id="selector-tool" aria-labelledby="pond-planner-heading">
  <div className="pond-planner-inner">
   <div className="pond-planner-heading" data-scroll="fade-up"><div><span className="planner-eyebrow">LET'S FIND YOUR FIT</span><h2 id="pond-planner-heading">Your pond.<br/>A better starting point.</h2></div><p>Every pond has its own needs. Share a few details to start the conversation about the right equipment.</p></div>
   <div className="pond-planner-layout" data-scroll="fade-up">
    <div className="planner-choices"><span className="planner-step-label">01 / TELL US ABOUT YOUR POND</span>{groups.map(({id,label:groupLabel,Icon,options},index)=><fieldset key={id} className="planner-group"><legend><Icon size={20} strokeWidth={1.5} aria-hidden="true"/><span>{groupLabel}</span><small>0{index+1}</small></legend><div className="planner-option-row">{options.map(([value,text])=><button key={value} type="button" aria-pressed={choices[id]===value} className={choices[id]===value?'selected':''} onClick={()=>setChoices(current=>({...current,[id]:value}))}>{text}{choices[id]===value&&<Check size={15} strokeWidth={1.7} aria-hidden="true"/>}</button>)}</div></fieldset>)}</div>
    <aside className="planner-summary" aria-label="Your pond brief"><div className="planner-summary-top"><span className="planner-step-label">02 / YOUR POND BRIEF</span><span className="planner-summary-badge"><Check size={13}/> Ready to discuss</span></div><div className="planner-preview"><span className="planner-preview-ring" aria-hidden="true"/><img src={image} alt="Illustrative aeration equipment" width="300" height="220" loading="lazy"/></div><div className="planner-summary-copy" aria-live="polite"><span className="planner-eyebrow">EQUIPMENT TO EXPLORE</span><h3>{category}</h3><dl>{groups.map(group=><div key={group.id}><dt>{group.label}</dt><dd>{label(group.id)}</dd></div>)}</dl></div><Link to={`/request-a-quote?${query.toString()}`} className="planner-cta">Discuss my pond <ArrowUpRight size={20} strokeWidth={1.6}/></Link><p className="planner-note">This is a starting brief. The Siri team will confirm sizing, compatibility and availability.</p></aside>
   </div>
  </div>
 </section>
}
export default AeratorSelectorTeaser;
