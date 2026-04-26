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

// Tipe untuk props halaman di Next.js 15
type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LegalityPage({
  params,
  searchParams,
}: PageProps) {
  // Await params dan searchParams
  const { locale } = await params;
  const { view } = await searchParams;

  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const content = dictionary.legality;

  // Cek apakah ada index yang dipilih di URL (misal: ?view=0)
  const selectedIndex = typeof view === "string" ? parseInt(view) : null;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        image={"/bg-legal.jpg"}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        {/* Grid Kartu Dokumen menggunakan Link */}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {content.docs.map((doc, index) => (
            <MotionReveal key={doc.title} delay={index * 0.1} className="h-full flex">
              <Link
                href={`?view=${index}`}
                scroll={false}
                className="group flex flex-1 flex-col justify-center rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 shadow-[0_20px_60px_var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_var(--shadow-strong)]"
              >
                <h3 className="font-display text-xl font-bold text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                  {doc.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {doc.description}
                </p>
              </Link>
            </MotionReveal>
          ))}
        </div>

        {/* Gallery hanya dirender/dibuka jika selectedIndex tidak null */}
        <div className="mt-16">
          <Gallery
            docs={content.docs}
            // Jika selectedIndex ada, Gallery akan membuka modal secara otomatis
            initialIndex={selectedIndex}
            labels={{
              previewDocument: dictionary.labels.previewDocument,
              clickToPreview: dictionary.labels.clickToPreview,
              previousPage: dictionary.labels.previousPage,
              nextPage: dictionary.labels.nextPage,
              pageLabel: dictionary.labels.pageLabel,
              closePreview: dictionary.labels.closePreview,
            }}
          />
        </div>

        {/* Bagian Catatan */}
        <MotionReveal delay={0.18} className="mt-12">
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--hero-surface)] p-8">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-[color:var(--accent)]">
              {dictionary.labels.nextEnhancement}
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