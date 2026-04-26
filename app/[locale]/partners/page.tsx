import MotionReveal from "@/components/MotionReveal";
import PageHero from "@/components/PageHero";
import {
  isValidLocale,
  locales,
  siteContent,
  type Locale,
} from "@/lib/site-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PartnersPage({
  params,
}: PageProps<"/[locale]/partners">) {
  const { locale } = await params;
  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const content = dictionary.partners;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        image={"/bg-partners.jpg"} // Optional: pass custom image per page
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {content.partnersitems.map((item, index) => (
            <MotionReveal key={item.company} delay={index * 0.06}>
              <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--panel)] px-5 py-5 shadow-[0_20px_60px_var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_28px_80px_var(--shadow-strong)]">
                <h2 className="font-display text-3xl font-semibold text-[color:var(--foreground)]">
                  {item.company}
                </h2>
                <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.16} className="mt-8 sm:mt-10">
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--hero-surface)] p-8">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">
              {dictionary.labels.contentPresentation}
            </p>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
              {content.note}
            </p>
          </div>
        </MotionReveal>
      </section>
    </main>
  );
}
