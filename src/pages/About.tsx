import {
  Cta,
  Img,
  PageHero,
  Reveal,
  SectionHead,
  Wrap,
  usePageMeta,
} from "../components/ui";
import { rc } from "../data/content";
const pesl = [
  ["P", "Professionalism"],
  ["E", "Excellence"],
  ["S", "Service Delivery"],
  ["L", "Loyalty"],
];
export default function About() {
  usePageMeta(
    "About Petroxella | Nigerian-Owned Energy Services, RC 1144557",
    "Petroxella Energy Services Limited: incorporated 2013, headquartered in Port Harcourt, committed to Total Quality Service.",
  );
  return (
    <>
      <PageHero
        label="About us"
        title="A Nigerian-owned multidisciplinary energy services company."
        crumb="About"
      />
      <section className="py-16">
        <Wrap className="grid md:grid-cols-[1fr_1.2fr] gap-12">
          <dl className="font-mono text-sm divide-y divide-navy/15 border-y border-navy/15 self-start">
            {[
              ["Incorporated", "September 2013"],
              ["RC number", rc],
              ["Headquarters", "Port Harcourt, Rivers State"],
              ["Ownership", "100% Nigerian"],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between py-3">
                <dt className="text-navy/50 uppercase">{a}</dt>
                <dd>{b}</dd>
              </div>
            ))}
          </dl>
          <div className="space-y-4 text-navy/80 leading-relaxed">
            <p>
              Petroxella was incorporated by the Corporate Affairs Commission as
              a limited liability company in September 2013, with its head
              office in Port Harcourt, an oil and gas hub in West Africa.
            </p>
            <p>
              The company takes a multidisciplinary approach, using new
              technology and an experienced team to deliver services safely, on
              time and within budget, with partnerships across local and
              international companies.
            </p>
          </div>
        </Wrap>
      </section>
      <section className="bg-navy text-white py-16">
        <Wrap className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="label text-amber mb-2">Mission</p>
            <p className="text-2xl font-head">
              To profitably and efficiently provide Total Quality Service (TQS)
              and Total Quality Management (TQM) to our clients and areas of
              operation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label text-amber mb-2">Vision</p>
            <p className="text-white/80 leading-relaxed">
              A proud heritage of integrity, excellence and commitment to
              customers' interests, building team relationships with clients to
              deliver reliable, honest, well-engineered solutions.
            </p>
          </Reveal>
        </Wrap>
      </section>
      <section className="py-16">
        <Wrap>
          <SectionHead
            label="The PESL framework"
            title="Four standards behind every job."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 border border-navy/15">
            {pesl.map(([l, t]) => (
              <div
                key={l}
                className="p-6 border-r border-navy/15 last:border-0 hover:bg-navy hover:text-white transition-colors"
              >
                <p className="font-mono text-7xl text-amber">{l}</p>
                <p className="font-head font-bold mt-3">{t}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="bg-slate50 py-16">
        <Wrap className="grid md:grid-cols-2 gap-12">
          <SectionHead
            label="Local content"
            title="Committed to Nigerian content development."
          >
            Petroxella supports federal local content policy and aims to meet
            NCDMB objectives.
          </SectionHead>
          <ul className="space-y-3 self-center list-disc pl-5 text-navy/80">
            <li>
              Investing in the training and development of Nigerian citizens.
            </li>
            <li>
              Using competent, qualified local contractors where required.
            </li>
            <li>
              Buying office, logistics, accommodation and computing
              infrastructure locally.
            </li>
            <li>
              Building local infrastructure with offshore partners to meet NCDMB
              requirements.
            </li>
          </ul>
        </Wrap>
      </section>
      <Cta />
    </>
  );
}
