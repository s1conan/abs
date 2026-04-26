import Link from "next/link";
import Gallery from "@/components/Gallery";
import MotionReveal from "@/components/MotionReveal";
import PageHero from "@/components/PageHero";
import {
  isValidLocale,
  locales,
  siteContent,
  type Locale,
} from "@/lib/site-content";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SpecificationsPage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  //const { view, type } = await searchParams;
  const { card, doc } = await searchParams;

  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const content = dictionary.specifications;

  // Logika penentuan dokumen yang dibuka
  //const selectedIndex = typeof view === "string" ? parseInt(view) : null;
  //const isSecondPdf = type === "msds"; // asumsi pdf2 adalah MSDS atau tipe lain
  const selectedCardIndex =
    typeof card === "string" && !isNaN(parseInt(card))
      ? parseInt(card)
      : null;

  const selectedDocIndex =
    typeof doc === "string" && !isNaN(parseInt(doc))
      ? parseInt(doc)
      : null;

  const selectedDocs =
    selectedCardIndex !== null &&
      content.cards[selectedCardIndex]
      ? content.cards[selectedCardIndex].docs
      : [];

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        image={"/bg-spek.jpg"}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {content.cards.map((card, index) => (
            <MotionReveal key={card.title} delay={index * 0.08}>
              <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-8 shadow-[0_20px_60px_var(--shadow-soft)] transition duration-300 hover:shadow-[0_30px_80px_var(--shadow-strong)]">
                <p className="font-display text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  {card.title}
                </p>
                <h2 className="font-display mt-5 text-3xl font-semibold text-[color:var(--foreground)]">
                  {card.value}
                </h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {card.note}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  {/* Tombol PDF 1 */}
                  <Link
                    href={`?card=${index}&doc=0`}
                    scroll={false}
                    className="flex items-center justify-center rounded-full bg-[color:var(--accent)] px-4 py-3.5 text-center text-sm font-semibold text-[color:var(--accent-contrast)] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 shadow-md"
                  >
                    {card.docs[0].title}
                  </Link>

                  {/* Tombol PDF 2 */}
                  <Link
                    href={`?card=${index}&doc=1`}
                    scroll={false}
                    className="flex items-center justify-center rounded-full bg-[color:var(--accent)] px-4 py-3.5 text-center text-sm font-semibold text-[color:var(--accent-contrast)] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 shadow-md"
                  >
                    {card.docs[1].title}
                  </Link>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Modal Gallery */}
        <Gallery
          docs={selectedDocs}
          initialIndex={selectedDocIndex}
          labels={{
            previewDocument: dictionary.labels.previewDocument,
            clickToPreview: dictionary.labels.clickToPreview,
            previousPage: dictionary.labels.previousPage,
            nextPage: dictionary.labels.nextPage,
            pageLabel: dictionary.labels.pageLabel,
            closePreview: dictionary.labels.closePreview,
          }}
        />

        {/* Disclaimer Section */}
        <div className="mt-12">
          <MotionReveal delay={0.1}>
            <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--hero-surface)] p-8">
              <p className="font-display text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">
                {dictionary.labels.note}
              </p>
              <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
                {content.disclaimer}
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}