"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircleMore } from "lucide-react";
import { motion } from "motion/react";

import LanguageLinks from "@/components/LanguageLinks";
import { type Locale, type SiteDictionary } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export default function SiteHeader({
  locale,
  dictionary,
}: SiteHeaderProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--header-surface)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="flex min-w-0 items-center gap-3 transition-transform duration-200 active:scale-98"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border border-[color:var(--accent-soft)] bg-[color:var(--panel-strong)] sm:h-14 sm:w-14">
            <Image
              src="/abs-logo.svg"
              alt="ABS logo"
              width={56}
              height={56}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[0.77rem] font-semibold text-[color:var(--foreground)] sm:text-lg">
              {dictionary.companyName}
            </span>
            <span className={`font-display block truncate text-[0.63rem] uppercase text-[color:var(--accent)] sm:text-xs
              ${locale === "id"
                ? "tracking-[0.14em] sm:tracking-[0.29em]" : "tracking-[0.08em] sm:tracking-[0.22em]"
              }
              `}>
              {dictionary.brandTag}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {dictionary.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2.5 text-[15px] text-[color:var(--muted)] transition duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--panel)] hover:text-[color:var(--foreground)] active:scale-95"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageLinks
            locale={locale}
            label={dictionary.languageLabel}
          />
          <motion.div
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href={dictionary.ctaHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[color:var(--accent)] px-6 py-4 text-[15px] font-semibold text-[color:var(--accent-contrast)] shadow-[0_18px_40px_var(--shadow-soft)] transition"
            >
              <MessageCircleMore size={16} />
              {dictionary.cta}
            </Link>
          </motion.div>
        </div>

        <details ref={detailsRef} className="group relative xl:hidden">
          <summary className="flex list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
            <motion.div whileTap={{ scale: 0.96 }}>
              <Link
                href={dictionary.ctaHref}
                onClick={(event) => {
                  event.stopPropagation();
                  closeMenu();
                }}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--accent-contrast)] sm:px-5 sm:py-3.5"
              >
                <MessageCircleMore size={15} />
                <span className="hidden sm:inline">{dictionary.cta}</span>
              </Link>
            </motion.div>

            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--foreground)] transition duration-200 active:scale-95">
              <Menu size={20} />
            </span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.9rem)] z-[60] w-[min(22rem,calc(100vw-2rem))] rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-4 shadow-[0_22px_60px_var(--shadow-soft)]">
            <div className="space-y-2">
              {dictionary.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-[1.2rem] border border-transparent bg-[color:var(--background)] px-4 py-3 text-sm font-medium text-[color:var(--foreground)] transition duration-200 active:scale-98"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <LanguageLinks
                locale={locale}
                mobile
                label={dictionary.languageLabel}
                onClick={closeMenu}
              />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
