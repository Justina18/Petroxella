import {PageHero,Wrap,usePageMeta} from '../components/ui';
import ContactForm from '../components/ContactForm';
import {contact} from '../data/content';
const Map=({title,addr}:{title:string;addr:string})=><div><p className="label mb-2">{title}</p><iframe title={`${title} map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-64 border border-navy/20" src={`https://www.google.com/maps?q=${encodeURIComponent(addr)}&output=embed`}/></div>;
export default function Contact(){
 usePageMeta('Contact Petroxella | Port Harcourt & Kaduna','Contact Petroxella Energy Services Limited: head office in Port Harcourt, branch office in Kaduna.');
 return <><PageHero label="Contact" title="Talk to our team." crumb="Contact"/><Wrap className="py-14 grid lg:grid-cols-[1fr_1.3fr] gap-14">
  <div className="space-y-6"><div><p className="label text-amber">Head office</p><p>{contact.head}</p></div><div><p className="label text-amber">Branch office</p><p>{contact.branch}</p></div>
   <div><p className="label text-amber">Telephone</p>{contact.phones.map(p=><a key={p} href={`tel:${p}`} className="block font-mono hover:text-amber">{p}</a>)}</div>
   <div><p className="label text-amber">Email</p><a href={`mailto:${contact.email}`} className="font-mono hover:text-amber">{contact.email}</a><p className="text-xs text-navy/50 mt-1">Provisional address, pending client confirmation.</p></div></div>
  <ContactForm/></Wrap>
  <Wrap className="pb-16 grid md:grid-cols-2 gap-6"><Map title="Head office, Port Harcourt" addr={contact.head}/><Map title="Branch office, Kaduna" addr={contact.branch}/></Wrap></>}
