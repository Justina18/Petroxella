import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  Btn,
  Counter,
  Cta,
  Img,
  Reveal,
  SectionHead,
  Wrap,
  usePageMeta,
} from "../components/ui";
import { compliance, services, stats, rc } from "../data/content";
const caps = [
  {
    t: "Oil & Gas",
    d: "EPCI, pipelines, tank farms and offshore and onshore support.",
    to: "/services#oil-gas",
    c: "01",
  },
  {
    t: "Logistics & Marine",
    d: "Vessel chartering and management, product supply, shipping and chandelling.",
    to: "/services#logistics-marine",
    c: "02",
  },
  {
    t: "Power & Environment",
    d: "Power equipment, solar and hydro, dredging, remediation and civil works.",
    to: "/services#power-renewables",
    c: "03",
  },
];
const c = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const u = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export default function Home() {
  usePageMeta(
    "Petroxella Energy Services | Oil, Gas, Logistics & Power in Nigeria",
    "100% African owned energy services firm. Specializing in EPCI, Marine Logistics, Environmental Engineering, and Industrial Supply. NCDMB Compliant. RC: 1144557.",
  );
  const nav = useNavigate();
  const [svc, setSvc] = useState(services[0].title);
  return (
    <>
      <section className="relative min-h-[92vh] bg-navy text-white overflow-hidden flex items-center">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 24, ease: "linear" }}
        >
          <Img
            src="/petroxella-img/11.jpeg"
            label="Hero: offshore rig / energy infrastructure"
            alt="Offshore energy infrastructure"
            className="w-full h-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-navy/70 grid-bg" />
        <Wrap className="relative pt-28 pb-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <motion.div variants={c} initial="hidden" animate="show">
            <motion.p variants={u} className="label text-amber mb-5">
              Port Harcourt · Established 2013 · RC {rc}
            </motion.p>
            <motion.h1
              variants={u}
              className="text-4xl md:text-7xl font-bold leading-[1.02]"
            >
              Engineering Nigeria's Energy, Logistics, and Industrial Future.
            </motion.h1>
            <motion.p
              variants={u}
              className="mt-6 text-lg text-white/80 max-w-xl"
            >
              100% African Owned. Delivering Total Quality Service (TQS) across
              the Oil & Gas, Marine, and Power sectors.
            </motion.p>
            <motion.div variants={u} className="mt-8 flex flex-wrap gap-3">
              <Btn to="/services">Explore Our Capabilities</Btn>
              <Btn to="/contact" variant="ghost">
                Talk to Our Team
              </Btn>
            </motion.div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              nav(`/contact?service=${encodeURIComponent(svc)}`);
            }}
            className="bg-white text-navy p-5 rounded border-t-4 border-amber"
          >
            <p className="label mb-3">Quick inquiry</p>
            <label htmlFor="q" className="text-sm font-medium">
              What do you need?
            </label>
            <select
              id="q"
              value={svc}
              onChange={(e) => setSvc(e.target.value)}
              className="w-full border border-navy/25 rounded px-3 py-3 my-2"
            >
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
            </select>
            <button className="w-full bg-navy text-white py-3 rounded font-head font-medium">
              Start inquiry
            </button>
          </motion.form>
        </Wrap>
        <ChevronDown
          aria-hidden
          className="absolute bottom-6 left-1/2 text-white/50 animate-bounce motion-reduce:animate-none"
        />
      </section>
      <section className="border-b border-navy/10">
        <Wrap className="py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
          <span className="label text-navy/50">Industry references</span>
          {compliance.map((x) => (
            <span key={x} className="font-mono font-semibold">
              {x}
            </span>
          ))}
        </Wrap>
      </section>
      <section className="py-20">
        <Wrap className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionHead
              label="Who we are"
              title="A African-owned, multidisciplinary energy services company."
            >
              Incorporated in September 2013 and headquartered in Port Harcourt,
              Petroxella delivers services from consultancy and project planning
              through to start-up and commissioning across several sectors.
            </SectionHead>
            <Btn to="/about" variant="dark">
              About Petroxella
            </Btn>
          </Reveal>
          <Img
            src="/petroxella-img/12.jpeg"
            label="Industrial site"
            alt="Industrial facility"
            dark={false}
            className="aspect-[4/3]"
          />
        </Wrap>
      </section>
      <section className="bg-slate50 py-20">
        <Wrap>
          <SectionHead
            label="Core capabilities"
            title="Three areas of operation."
          />
          <div className="grid md:grid-cols-3 gap-px bg-navy/15 border border-navy/15">
            {caps.map((k, i) => (
              <Link
                key={k.t}
                to={k.to}
                className="group bg-white p-6 hover:bg-navy hover:text-white transition-colors"
              >
                <Img
                  src={`/petroxella-img/${i + 1}.jpeg`}
                  label={k.t}
                  alt={k.t}
                  className="aspect-[3/2] mb-5"
                />
                <p className="label text-amber">{k.c}</p>
                <h3 className="text-2xl font-bold mt-1">{k.t}</h3>
                <p className="mt-2 text-sm opacity-75">{k.d}</p>
                <ArrowUpRight className="mt-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="py-20">
        <Wrap className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-t-2 border-navy pt-4">
              <p className="font-mono text-6xl font-semibold">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="label mt-2">{s.label}</p>
            </div>
          ))}
          <div className="border-t-2 border-navy pt-4">
            <p className="font-head text-3xl font-bold leading-tight">
              Multidisciplinary
            </p>
            <p className="label mt-2">Service delivery</p>
          </div>
        </Wrap>
      </section>
      <Cta />
    </>
  );
}
