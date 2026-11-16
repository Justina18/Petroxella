import {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Plus,Minus} from 'lucide-react';
import {Btn,Cta,Img,PageHero,Wrap,usePageMeta} from '../components/ui';
import {services} from '../data/content';
export default function Services(){
 usePageMeta('Services | Oil & Gas, Marine, Power, Environment | Petroxella','EPCI, marine logistics, environmental and civil engineering, power and renewables, industrial supply and manpower services in Nigeria.');
 const {hash}=useLocation();const [open,setOpen]=useState<string>(hash.slice(1)||services[0].id);
 useEffect(()=>{if(hash){setOpen(hash.slice(1));setTimeout(()=>document.getElementById(hash.slice(1))?.scrollIntoView(),50)}},[hash]);
 return <><PageHero label="Services" title="Six capability areas, one accountable partner." crumb="Services"/>
 <Wrap className="py-14 grid lg:grid-cols-[220px_1fr] gap-10"><nav aria-label="Service categories" className="hidden lg:block sticky top-24 self-start label space-y-3">{services.map(s=><a key={s.id} href={`#${s.id}`} className="block hover:text-amber">{s.no} {s.title}</a>)}</nav>
 <div className="divide-y divide-navy/15 border-y border-navy/15">{services.map(s=>{const o=open===s.id;return <section key={s.id} id={s.id} className="scroll-mt-24 py-6">
  <button aria-expanded={o} onClick={()=>setOpen(o?'':s.id)} className="w-full flex items-start gap-5 text-left"><span className="font-mono text-amber text-xl">{s.no}</span><span className="flex-1"><h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2><p className="text-navy/60 mt-1">{s.summary}</p></span>{o?<Minus/>:<Plus/>}</button>
  {o&&<div className="mt-6 grid md:grid-cols-2 gap-6 md:pl-12"><ul className="divide-y divide-navy/10">{s.items.map(i=><li key={i} className="py-2.5 hover:text-amber hover:pl-1 transition-all">{i}</li>)}</ul><Img src={s.image} label={s.title} alt={s.title} dark={false} className="aspect-[4/3]"/></div>}</section>})}</div></Wrap>
 <section className="pb-16"><Wrap><Btn to="/contact" variant="dark">Discuss your requirement</Btn></Wrap></section><Cta/></>}
