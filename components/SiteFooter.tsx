import Link from "next/link";
import Image from "next/image";
import { type Locale, type SiteDictionary } from "@/lib/site-content";

type SiteFooterProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export default function SiteFooter({
  locale,
  dictionary,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--panel)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-w-0 items-center gap-3 transition-transform duration-200 active:scale-98">
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
              <span className="font-display block truncate text-[0.63rem] uppercase tracking-[0.12em] text-[color:var(--accent)] sm:text-xs sm:tracking-[0.29em]">
                {dictionary.brandTag}
              </span>
            </span>
          </div>

          <div className="grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-3 items-center">
            {dictionary.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition duration-200 hover:bg-[color:var(--background)] hover:text-[color:var(--foreground)] active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2022 - PT. Anugerah Buana Sriwijaya - All Rights Reserved</p>
          <p className="text-white">Conan - s1conan@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
}
