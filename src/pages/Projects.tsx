import {useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {Cta,Img,PageHero,Wrap,usePageMeta} from '../components/ui';
import {projects} from '../data/content';
const sectors=['All',...Array.from(new Set(projects.map(p=>p.sector)))];
export default function Projects(){
 usePageMeta('Projects | Petroxella Energy Services','Project portfolio of Petroxella Energy Services Limited.');
 const [f,setF]=useState('All');const list=projects.filter(p=>f==='All'||p.sector===f);
 return <><PageHero label="Projects" title="Project portfolio." crumb="Projects"/><Wrap className="py-12">
  <p className="bg-amber/10 border border-amber/40 p-3 text-sm mb-8">Sample placeholders. Real case studies will be added once supplied by Petroxella.</p>
  <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by sector">{sectors.map(s=><button key={s} aria-pressed={f===s} onClick={()=>setF(s)} className={`label px-3 py-2 border rounded ${f===s?'bg-navy text-white border-navy':'border-navy/30'}`}>{s}</button>)}</div>
  <div className="grid md:grid-cols-2 gap-8">{list.map(p=><Link key={p.id} to={`/projects/${p.id}`} className="group"><Img src={p.image} label="Project photo" alt={p.name} className="aspect-[16/10] group-hover:opacity-90"/><p className="label text-amber mt-3">{p.sector} · {p.location}</p><h2 className="text-2xl font-bold">{p.name}</h2><p className="text-navy/60">{p.description}</p></Link>)}</div></Wrap><Cta/></>}
export function ProjectDetail(){
 const p=projects.find(x=>x.id===useParams().id);usePageMeta(`${p?.name??'Project'} | Petroxella`,p?.description??'Project');
 if(!p)return <PageHero label="Projects" title="Project not found." crumb="Projects"/>;
 return <><PageHero label={p.sector} title={p.name} crumb="Projects"/><Wrap className="py-12 grid md:grid-cols-2 gap-10"><Img src={p.image} label="Project photo" alt={p.name} className="aspect-[4/3]"/><div><p className="label">Location: {p.location}</p><p className="mt-4 text-navy/80">{p.description}</p><Link to="/projects" className="inline-block mt-6 underline">← All projects</Link></div></Wrap><Cta/></>}
