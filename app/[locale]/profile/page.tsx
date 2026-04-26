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

export default async function ProfilePage({
  params,
}: PageProps<"/[locale]/profile">) {
  const { locale } = await params;
  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const profile = dictionary.profile;

  return (
    <main>
      <PageHero
        eyebrow={profile.eyebrow}
        title={profile.title}
        intro={profile.intro}
        image={"/logo.jpg"} // Optional: pass custom image per page
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-8">
              <h2 className="font-display text-3xl font-semibold text-[color:var(--foreground)]">
                {profile.historyTitle}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[color:var(--muted)]">
                {profile.history.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </MotionReveal>

          <div className="space-y-8">
            <MotionReveal delay={0.08}>
              <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-8">
                <h2 className="font-display text-3xl font-semibold text-[color:var(--foreground)]">
                  {profile.visionTitle}
                </h2>
                <p className="mt-6 text-base leading-8 text-[color:var(--muted)]">
                  {profile.vision}
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.14}>
              <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-8">
                <h2 className="font-display text-3xl font-semibold text-[color:var(--foreground)]">
                  {profile.missionTitle}
                </h2>
                <div className="mt-6 space-y-4">
                  {profile.missions.map((mission) => (
                    <div
                      key={mission}
                      className="rounded-[1.4rem] border border-[color:var(--border)] bg-[color:var(--background)] px-5 py-4 text-base leading-7 text-[color:var(--muted)]"
                    >
                      {mission}
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
