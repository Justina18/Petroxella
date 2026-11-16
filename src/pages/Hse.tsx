import {
  Cta,
  Img,
  PageHero,
  SectionHead,
  Wrap,
  usePageMeta,
} from "../components/ui";
import { intlStd, localStd } from "../data/content";
const policy: [string, string[]][] = [
  [
    "Leadership & accountability",
    [
      "Management is fully committed to administering and enforcing CASHES standards.",
      "CASHES ranks alongside mainstream business operations and is a line-wide responsibility.",
      "Adequate resources are set aside for CASHES management.",
    ],
  ],
  [
    "Compliance",
    [
      "Unconditional acceptance of the CASHES policy is a condition of employment.",
      "Client safety regulations and all African legislation on safety and environment are observed.",
      "Work does not start until all CASHES issues are satisfied.",
    ],
  ],
  [
    "People & community",
    [
      "Everyone is responsible for their own and colleagues\u2019 safety.",
      "Regular CASHES training is a standing priority.",
      "The company respects host community culture; 60% of on-site workforce is to come from the host community.",
    ],
  ],
  [
    "Recognition & enforcement",
    [
      "Good HSE performance is recognised through a CASHES award.",
      "Flagrant or repeated breaches lead to disciplinary action.",
      "Any employee can raise concerns with a supervisor about acts or conditions contrary to the policy.",
    ],
  ],
];
export default function Hse() {
  usePageMeta(
    "HSE & Quality Assurance | Petroxella Energy Services",
    "CASHES policy, Total Quality Service and public relations commitments of Petroxella Energy Services Limited.",
  );
  return (
    <>
      <PageHero
        teal
        label="HSE & Quality Assurance"
        title="Safety, environment and quality before the work starts."
        crumb="HSE & QA"
      />
      <section className="py-16">
        <Wrap>
          <SectionHead
            accent="text-teal"
            label="CASHES policy"
            title="Company commitments."
          >
            The figures below are company commitments and policy statements, not
            independently verified performance records.
          </SectionHead>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              ["Zero", "Accidents"],
              ["60%", "Host community workforce"],
              ["100%", "Unconditional compliance"],
            ].map(([n, l]) => (
              <div key={l} className="border-t-4 border-teal pt-4">
                <p className="font-mono text-5xl font-semibold">{n}</p>
                <p className="label mt-2">{l}</p>
                <p className="label text-teal mt-1">Commitment</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {policy.map(([h, b]) => (
              <div key={h}>
                <h3 className="font-bold text-xl mb-3 border-l-4 border-teal pl-3">
                  {h}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-navy/80">
                  {b.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="bg-slate50 py-16">
        <Wrap className="grid md:grid-cols-[1.2fr_1fr] gap-12">
          <div>
            <SectionHead
              accent="text-teal"
              label="Quality assurance: TQS"
              title="Standards we work to."
            >
              Petroxella's policy is to assure that products and services meet
              client requirements, industry codes, and the local and
              international standards below. These are frameworks referenced in
              the company's quality policy, not certifications.
            </SectionHead>
            {(
              [
                ["Local", localStd],
                ["International", intlStd],
              ] as const
            ).map(([t, l]) => (
              <div key={t} className="mb-5">
                <p className="label mb-2">{t}</p>
                <div className="flex flex-wrap gap-2">
                  {l.map((x) => (
                    <span
                      key={x}
                      className="font-mono border border-navy/30 px-3 py-1.5 rounded"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Img
            src="/petroxella-img/12.jpeg"
            label="Environmental / QA"
            alt="Environmental imagery"
            dark={false}
            className="aspect-square"
          />
        </Wrap>
      </section>
      <section className="py-16">
        <Wrap className="max-w-4xl">
          <SectionHead
            accent="text-teal"
            label="Public relations policy"
            title="Peaceful, responsible project execution."
          />
          <ul className="list-disc pl-5 space-y-3 text-navy/80">
            <li>
              Public relations activity is carried out to maintain harmony and
              peace so projects can be executed peacefully.
            </li>
            <li>
              Host community needs are the responsibility of the asset holder,
              who operates the venture.
            </li>
            <li>
              Where the community cannot be pacified sufficiently for work to
              continue, the asset holder is invited to negotiate with the host
              community.
            </li>
          </ul>
        </Wrap>
      </section>
      <Cta />
    </>
  );
}
