import Hairline from "@/components/fx/Hairline";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string[];
}

export default function LegalPageTemplate({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}) {
  return (
    <main className="pt-32">
      <section className="section">
        <div className="container-site max-w-3xl">
          <p className="overline text-cyan">Legal</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-light sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>
          <Hairline className="mt-8" />

          <div className="mt-8 space-y-4">
            {intro.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-silver">{p}</p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-lg font-semibold text-light">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-silver">{p}</p>
                  ))}
                  {s.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {s.list.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed text-silver">{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.afterList?.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-silver">{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
