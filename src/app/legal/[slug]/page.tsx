import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LEGAL_DOCS, findLegalDoc } from "@/lib/legal";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return LEGAL_DOCS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = findLegalDoc(slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.description, alternates: { canonical: `/legal/${doc.slug}` } };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = findLegalDoc(slug);
  if (!doc) notFound();

  return (
    <section className="pb-24 pt-32 sm:pt-36">
      <Container className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[13px] text-muted">Legal</p>
          <nav aria-label="Policies" className="-mx-1 mt-4 flex gap-1 overflow-x-auto lg:mx-0 lg:flex-col">
            {LEGAL_DOCS.map((item) => (
              <Link
                key={item.slug}
                href={`/legal/${item.slug}`}
                aria-current={item.slug === doc.slug ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-2 text-[14px] transition-colors",
                  item.slug === doc.slug ? "bg-fg/[0.06] text-fg" : "text-fg-2 hover:bg-fg/[0.04] hover:text-fg"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl">
          <h1 className="text-[clamp(2rem,1.5rem+2vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em] text-fg">{doc.title}</h1>
          <p className="mt-4 text-lead leading-relaxed text-fg-2">{doc.description}</p>
          <p className="mt-6 border-b border-line pb-8 text-[13px] text-muted">Last updated {doc.updated}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((section, i) => (
              <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-28">
                <h2 className="text-[19px] font-medium tracking-[-0.02em] text-fg">
                  <span className="mr-2 text-muted">{i + 1}.</span>
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-[15.5px] leading-[1.75] text-fg-2">
                  {section.body.map((block, b) =>
                    typeof block === "string" ? (
                      <p key={b}>{block}</p>
                    ) : (
                      <ul key={b} className="space-y-2 pl-5 marker:text-muted [list-style:disc]">
                        {block.list.map((item) => (
                          <li key={item} className="pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
