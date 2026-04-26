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

export default async function CustomersPage({
  params,
}: PageProps<"/[locale]/customers">) {
  const { locale } = await params;
  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const content = dictionary.customers;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        image={"/bg-cust.jpg"} // Optional: pass custom image per page
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {content.items.map((item, index) => (
            <MotionReveal key={item} delay={index * 0.06}>
              <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--panel)] px-5 py-5 shadow-[0_20px_60px_var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_28px_80px_var(--shadow-strong)]">
                <p className="text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                  {item}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.16} className="mt-8 sm:mt-10">
          <div className="rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--hero-surface)] p-6 sm:p-8">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-[color:var(--accent)] sm:text-sm sm:tracking-[0.28em]">
              {dictionary.labels.contentPresentation}
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-base sm:leading-8">
              {content.note}
            </p>
          </div>
        </MotionReveal>
      </section>
    </main>
  );
}
