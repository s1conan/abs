// To use a custom hero background image per page, pass the `image` prop:
// <PageHero eyebrow={...} title={...} intro={...} image="/your-image.jpg" />
// If not provided, defaults to '/bg-home.jpg'.
import Image from "next/image";

import MotionReveal from "@/components/MotionReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string; // Optional custom background image
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  image = "/bg-home.jpg",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Ukuran tetap seperti mau mu */}
        <div className="relative h-[100%] w-[96%] max-w-[1150px]">
          <Image
            src={image}
            alt=""
            fill
            priority
            quality={78}
            sizes="(min-width: 1440px) 1180px, (min-width: 1024px) 90vw, 86vw"
            className="object-cover object-center opacity-[0.7] brightness-[1.08] contrast-[1.02] dark:opacity-[0.55] dark:brightness-[0.84] rounded-2xl"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,color-mix(in_srgb,var(--blur-color),transparent_86%)_72%,color-mix(in_srgb,var(--blur-color),transparent_60%)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-15 bg-gradient-to-b from-[color-mix(in_srgb,var(--blur-color),transparent_4%)] via-[color-mix(in_srgb,var(--blur-color),transparent_45%)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[color-mix(in_srgb,var(--blur-color),transparent_4%)] via-[color-mix(in_srgb,var(--blur-color),transparent_45%)] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[color-mix(in_srgb,var(--blur-color),transparent_8%)] to-transparent sm:w-28 lg:w-40" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[color-mix(in_srgb,var(--blur-color),transparent_8%)] to-transparent sm:w-28 lg:w-40" />
        </div>
      </div>

      {/* Glow pojok yang sebelumnya hilang di Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--hero-glow-strong),transparent_34%),radial-gradient(circle_at_bottom_right,var(--hero-glow-soft),transparent_24%)]" />

      {/* Overlay global agar warna sinkron dengan Home */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--blur-color),transparent_18%)_0%,color-mix(in_srgb,var(--blur-color),transparent_44%)_30%,color-mix(in_srgb,var(--blur-color),transparent_12%)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <MotionReveal className="max-w-4xl">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-[color:var(--accent)] sm:tracking-[0.28em]">
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 text-[2.25rem] font-bold tracking-[-0.04em] text-[color:var(--foreground)] sm:mt-5 sm:text-[2.9rem] md:text-[3.8rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--muted)] sm:mt-6 sm:text-xl sm:leading-8">
            {intro}
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}