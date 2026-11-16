import {ReactNode,useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {motion,animate,useInView,useReducedMotion} from 'framer-motion';
export function usePageMeta(title:string,desc:string){useEffect(()=>{document.title=title;document.querySelector('meta[name=description]')?.setAttribute('content',desc)},[title,desc])}
export const Reveal=({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number})=>
<motion.div className={className} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.5,delay}}>{children}</motion.div>;
export function Counter({to,suffix=''}:{to:number;suffix?:string}){
 const ref=useRef<HTMLSpanElement>(null);const inView=useInView(ref,{once:true});const reduce=useReducedMotion();const [n,setN]=useState(0);
 useEffect(()=>{if(!inView)return;if(reduce){setN(to);return}const c=animate(0,to,{duration:1.6,onUpdate:v=>setN(Math.round(v))});return()=>c.stop()},[inView,to,reduce]);
 return <span ref={ref}>{n}{suffix}</span>}
export function Img({src,alt,label,className='',dark=true}:{src?:string;alt:string;label:string;className?:string;dark?:boolean}){
 if(src)return <img src={src} alt={alt} loading="lazy" className={`object-cover w-full h-full ${className}`}/>;
 return <div role="img" aria-label={alt} className={`${dark?'bg-navy grid-bg text-white/50':'bg-slate50 grid-bg-light text-navy/50'} flex items-end p-3 ${className}`}><span className="label">{label}</span></div>}
type BtnP={to?:string;href?:string;variant?:'primary'|'ghost'|'dark';children:ReactNode};
export function Btn({to,href,variant='primary',children}:BtnP){
 const base='inline-flex items-center gap-2 px-5 py-3 font-head font-medium text-sm rounded transition-colors ';
 const v={primary:'bg-amber text-white hover:bg-[#e55f00]',ghost:'border border-white/40 text-white hover:bg-white hover:text-navy',dark:'border border-navy text-navy hover:bg-navy hover:text-white'}[variant];
 return to?<Link to={to} className={base+v}>{children}</Link>:<a href={href} className={base+v}>{children}</a>}
export const SectionHead=({label,title,accent='text-amber',children}:{label:string;title:string;accent?:string;children?:ReactNode})=>
<div className="max-w-3xl mb-10"><p className={`label ${accent} mb-3`}>{label}</p><h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">{title}</h2>{children&&<p className="mt-4 text-navy/70 leading-relaxed">{children}</p>}</div>;
export const PageHero=({label,title,crumb,teal}:{label:string;title:string;crumb:string;teal?:boolean})=>
<section className="bg-navy grid-bg text-white pt-36 pb-16"><div className="max-w-7xl mx-auto px-5">
<nav aria-label="Breadcrumb" className="label text-white/50 mb-6"><Link to="/" className="hover:text-white">Home</Link> / <span className="text-white">{crumb}</span></nav>
<p className={`label mb-3 ${teal?'text-teal':'text-amber'}`}>{label}</p><h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">{title}</h1></div></section>;
export const Wrap=({children,className=''}:{children:ReactNode;className?:string})=><div className={`max-w-7xl mx-auto px-5 ${className}`}>{children}</div>;
export const Cta=({title='Ready to Partner with a Trusted Indigenous Firm?'}:{title?:string})=>
<section className="bg-navy text-white py-20"><Wrap className="flex flex-col md:flex-row md:items-center justify-between gap-6"><h2 className="text-3xl md:text-4xl font-bold max-w-2xl">{title}</h2><Btn to="/contact">Contact Our Team</Btn></Wrap></section>;
