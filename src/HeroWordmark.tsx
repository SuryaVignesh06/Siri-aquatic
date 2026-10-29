// Resolution-independent geometric lettering, drawn as paths rather than an enlarged logo bitmap.
const glyphs: Record<string,string> = {
 S:'M70 5H22C-1 5-1 38 22 38H52C78 38 78 75 52 75H3',
 I:'M36 5V75',
 R:'M4 75V5H48C80 5 80 40 48 40H4M43 40L74 75',
 A:'M2 75L36 5H40L75 75M15 49H62',
 Q:'M25 5H51Q74 5 74 28V52Q74 75 51 75H25Q2 75 2 52V28Q2 5 25 5ZM47 54L80 84',
 U:'M3 5V51Q3 75 27 75H49Q73 75 73 51V5',
 T:'M0 5H76M38 5V75',
 C:'M73 5H27Q3 5 3 29V51Q3 75 27 75H73',
 O:'M26 5H50Q74 5 74 29V51Q74 75 50 75H26Q2 75 2 51V29Q2 5 26 5Z',
 L:'M4 5V75H73',
 N:'M4 75V5L72 75V5',
 P:'M4 75V5H49Q74 5 74 23Q74 41 49 41H4',
 V:'M2 5L36 75H40L74 5',
 D:'M4 5H44Q75 5 75 36V44Q75 75 44 75H4Z',
 '.':'M35 72H37'
};
function WordLine({text,y,height,width,stroke}:{text:string;y:number;height:number;width:number;stroke:number}){
 const advances=Array.from(text).map(char=>char===' '?40:char==='I'?40:char==='.'?30:88);
 const total=advances.reduce((sum,n)=>sum+n,0)-10;
 let cursor=0;
 return <svg x={(1200-width)/2} y={y} width={width} height={height} viewBox={`-5 -2 ${total+10} 90`} preserveAspectRatio="none" overflow="visible">
   {Array.from(text).map((char,i)=>{const x=cursor;cursor+=advances[i];return char===' '?null:<path key={i} d={glyphs[char]} transform={`translate(${x+(char==='I'?-15:0)} 0)`} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>})}
 </svg>;
}
export function HeroWordmark(){return <svg className="hero-brand-art hero-vector-wordmark" viewBox="0 0 1200 210" aria-hidden="true" focusable="false"><WordLine text="SIRI AQUATIC" y={8} width={1180} height={112} stroke={9}/><WordLine text="SOLUTIONS PVT. LTD." y={158} width={1170} height={42} stroke={8}/></svg>}

