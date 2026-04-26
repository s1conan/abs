import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, FileCheck2, Handshake, Users } from "lucide-react";

import MotionReveal from "@/components/MotionReveal";
import {
  isValidLocale,
  locales,
  siteContent,
  type Locale,
} from "@/lib/site-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];
  const iconMap = {
    profile: Building2,
    specifications: FileCheck2,
    legality: FileCheck2,
    partners: Handshake,
    customers: Users,
  } as const;

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-10 lg:pt-12">
          <div className="relative h-[62%] w-[86%] max-w-[1180px] sm:h-[68%] sm:w-[88%] lg:h-[74%] lg:w-[90%]">
            <Image
              src="/bg-home.jpg"
              alt=""
              fill
              priority
              quality={78}
              sizes="(min-width: 1440px) 1180px, (min-width: 1024px) 90vw, 86vw"
              className="object-cover object-center opacity-[0.7] brightness-[1.08] contrast-[1.02] dark:opacity-[0.55] dark:brightness-[0.84]"
            />
            {/* 1. Radial Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,color-mix(in_srgb,var(--blur-color),transparent_86%)_72%,color-mix(in_srgb,var(--blur-color),transparent_60%)_100%)]" />

            {/* 2. Gradient Top */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[color-mix(in_srgb,var(--blur-color),transparent_4%)] via-[color-mix(in_srgb,var(--blur-color),transparent_45%)] to-transparent" />

            {/* 3. Gradient Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color-mix(in_srgb,var(--blur-color),transparent_4%)] via-[color-mix(in_srgb,var(--blur-color),transparent_45%)] to-transparent" />

            {/* 4. Gradient Left */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[color-mix(in_srgb,var(--blur-color),transparent_8%)] to-transparent sm:w-28 lg:w-40" />

            {/* 5. Gradient Right */}
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[color-mix(in_srgb,var(--blur-color),transparent_8%)] to-transparent sm:w-28 lg:w-40" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--hero-glow-strong),transparent_34%),radial-gradient(circle_at_bottom_right,var(--hero-glow-soft),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--blur-color),transparent_18%)_0%,color-mix(in_srgb,var(--blur-color),transparent_44%)_30%,color-mix(in_srgb,var(--blur-color),transparent_12%)_100%)]" />
        <div className="relative mx-auto grid min-h-[660px] max-w-7xl gap-10 px-4 pt-32 pb-16 sm:gap-12 sm:px-6 sm:pt-40 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-48 lg:pb-24">
          <div className="flex flex-col justify-start">
            <MotionReveal>
              <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:var(--panel)] px-3.5 py-2 text-sm text-[color:var(--muted)] sm:px-4 sm:text-sm">
                <BadgeCheck size={15} className="shrink-0 text-[color:var(--accent)] sm:size-5" />
                {dictionary.home.badge}
              </span>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <h1 className="font-display mt-6 max-w-5xl text-[2.5rem] font-bold leading-[0.96] tracking-[-0.045em] text-[color:var(--foreground)] sm:mt-7 sm:text-[3.35rem] md:text-[4.4rem]">
                {dictionary.home.title}
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.14}>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-xl sm:leading-8">
                {dictionary.home.description}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`/${activeLocale}/profile`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3.5 text-sm font-semibold text-[color:var(--accent-contrast)] shadow-[0_18px_42px_var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_var(--shadow-strong)] active:scale-97 sm:px-7 sm:py-4"
                >
                  {dictionary.home.primaryCta}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href={dictionary.ctaHref}
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--panel)] px-6 py-3.5 text-sm font-semibold text-[color:var(--foreground)] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[color:var(--panel)] active:scale-97 sm:px-7 sm:py-4"
                >
                  {dictionary.home.secondaryCta}
                </Link>
              </div>
            </MotionReveal>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
              {dictionary.home.stats.map((item, index) => (
                <MotionReveal key={item.label} delay={0.12 + index * 0.06} className="h-full">
                  <div className="flex h-full flex-col rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-4 shadow-[0_24px_70px_var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_28px_80px_var(--shadow-strong)] sm:rounded-[1.75rem] sm:p-5">
                    <div className="font-display text-[1.7rem] font-bold text-[color:var(--accent)] sm:text-[2rem]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)] sm:text-[15px]">
                      {item.label}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <MotionReveal delay={0.16} className="w-full">
              <div className="rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--hero-surface)] p-4 shadow-[0_36px_120px_var(--shadow-strong)] sm:rounded-[2.2rem] sm:p-6">
                <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-5 sm:rounded-[1.8rem] sm:p-7">
                  <div className="flex items-start justify-between gap-4 border-b border-[color:var(--border)] pb-5">
                    <div>
                      <p className="font-display text-sm uppercase tracking-[0.18em] text-[color:var(--accent)] sm:tracking-[0.24em]">
                        {dictionary.home.panelTitle}
                      </p>
                      <p className="mt-3 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
                        {dictionary.home.panelSummary}
                      </p>
                    </div>
                    <span className="rounded-full bg-red-400 px-3 py-1 text-xs font-semibold text-[color:var(--foreground)]">
                      {dictionary.home.panelStatus}
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {dictionary.home.panelPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3.5 text-sm leading-6 text-[color:var(--muted)] sm:rounded-[1.4rem] sm:px-5 sm:py-4 sm:text-[15px] sm:leading-7"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-4">
          {dictionary.home.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <MotionReveal key={feature.title} delay={index * 0.08}>
                <Link
                  href={feature.href}
                  className="group flex h-full flex-col rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[color:var(--panel-strong)] hover:shadow-[0_26px_80px_var(--shadow-soft)] active:scale-98 sm:rounded-[1.9rem] sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--hero-surface)] text-[color:var(--accent)]">
                      <Icon size={24} />
                    </div>
                    <h2 className="font-display text-[1.45rem] font-semibold text-[color:var(--foreground)] sm:text-[1.75rem]">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="mt-4 flex-1 text-base leading-7 text-[color:var(--muted)] sm:text-[1.02rem]">
                    {feature.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)]">
                    {dictionary.labels.openPage}
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:gap-8 sm:px-6 sm:pb-24 lg:grid-cols-2 lg:px-8">
        {dictionary.home.sections.map((section, index) => (
          <MotionReveal key={section.title} delay={index * 0.08}>
            <div className="rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_80px_var(--shadow-soft)] sm:rounded-[2rem] sm:p-8">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--accent)] sm:text-sm sm:tracking-[0.28em]">
                {section.eyebrow}
              </p>
              <h2 className="font-display mt-4 text-[1.7rem] font-semibold tracking-[-0.03em] text-[color:var(--foreground)] sm:mt-5 sm:text-[2.1rem]">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:mt-5 sm:text-[1.02rem] sm:leading-8">
                {section.description}
              </p>
            </div>
          </MotionReveal>
        ))}
      </section>
    </main>
  );
}
