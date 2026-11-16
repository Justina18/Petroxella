import {useEffect,useState} from 'react';
import {Link,NavLink,Outlet,useLocation} from 'react-router-dom';
import {AnimatePresence,motion} from 'framer-motion';
import {Menu,X,MessageCircle,Phone} from 'lucide-react';
import {nav,contact,rc} from '../data/content';
export default function Layout(){
 const {pathname}=useLocation();const [y,setY]=useState(0);const [open,setOpen]=useState(false);
 useEffect(()=>{const h=()=>setY(window.scrollY);h();window.addEventListener('scroll',h,{passive:true});return()=>window.removeEventListener('scroll',h)},[]);
 useEffect(()=>{setOpen(false);if(!window.location.hash)window.scrollTo(0,0)},[pathname]);
 const solid=y>40||open;
 return <>
 <header className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${solid?'bg-navy shadow-lg':'bg-transparent'}`}><div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between text-white">
  <Link to="/" aria-label="Petroxella Energy home" className="flex items-center shrink-0"><img src="/petroxella-img/logo-white.png" alt="Petroxella Energy Services Limited" className="h-10 w-auto" /></Link>
  <nav aria-label="Main" className="hidden lg:flex gap-7">{nav.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>`text-sm py-1 border-b-2 ${isActive?'border-amber':'border-transparent hover:border-white/40'}`}>{n.label}</NavLink>)}</nav>
  <button className="lg:hidden p-2" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  <AnimatePresence>{open&&<motion.nav aria-label="Mobile" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="lg:hidden overflow-hidden bg-navy text-white border-t border-white/10">
   {nav.map(n=><Link key={n.to} to={n.to} className="block px-5 py-4 border-b border-white/10 font-head">{n.label}</Link>)}</motion.nav>}</AnimatePresence></header>
 <motion.main key={pathname} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.25}}><Outlet/></motion.main>
 <footer className="bg-navy text-white/80 pt-16 pb-8"><div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10">
  <div><img src="/petroxella-img/logo-white.png" alt="Petroxella Energy Services Limited" className="h-14 w-auto max-w-full"/><p className="label mt-3">RC: {rc} · Established 2013</p><p className="mt-3 text-sm">Quality service assured.</p></div>
  <div><p className="label text-amber mb-3">Pages</p><ul className="space-y-2 text-sm">{nav.map(n=><li key={n.to}><Link className="hover:text-white" to={n.to}>{n.label}</Link></li>)}</ul></div>
  <div className="text-sm space-y-2"><p className="label text-amber mb-3">Contact</p><p>{contact.head}</p>{contact.phones.map(p=><a key={p} href={`tel:${p}`} className="block hover:text-white">{p}</a>)}<a href={`mailto:${contact.email}`} className="block hover:text-white">{contact.email}</a></div></div>
  <p className="max-w-7xl mx-auto px-5 mt-12 pt-6 border-t border-white/10 label text-white/40">© {new Date().getFullYear()} Petroxella Energy Services Limited</p></footer>
 <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 bg-[#25D366] text-white p-3.5 rounded shadow-lg"><MessageCircle/></a>
 <a href={`tel:${contact.phones[0]}`} aria-label="Call us" className="fixed bottom-5 right-20 z-40 bg-amber text-white p-3.5 rounded shadow-lg lg:hidden"><Phone/></a></>}
