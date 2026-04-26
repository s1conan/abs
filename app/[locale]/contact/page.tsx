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

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const content = dictionary.contact;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
      // image={"/your-image.jpg"} // Optional: pass custom image per page
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionReveal>
            <div className="rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 sm:p-8">
              <div className="space-y-4">
                {content.info.map((item, index) => (
                  <MotionReveal key={item.label} delay={index * 0.05}>
                    <div className="rounded-[1.3rem] border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_18px_52px_var(--shadow-soft)] sm:px-5">
                      <p className="font-display text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent)] sm:text-xs sm:tracking-[0.28em]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--foreground)] sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </MotionReveal>

          <div className="grid gap-6">
            {content.cards.map((card, index) => (
              <MotionReveal key={card.title} delay={index * 0.08}>
                <div className="rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:bg-[color:var(--panel-strong)] hover:shadow-[0_24px_72px_var(--shadow-soft)] sm:p-8">
                  <h2 className="font-display text-2xl font-semibold text-[color:var(--foreground)] sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
                    {card.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
