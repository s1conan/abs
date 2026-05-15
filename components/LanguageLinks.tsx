"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/lib/site-content";

type LanguageLinksProps = {
  locale: Locale;
  mobile?: boolean;
  label: string;
  onClick?: () => void;
};

function buildLocalePath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}/${segments.join("/")}`;
}

export default function LanguageLinks({
  locale,
  mobile = false,
  label,
  onClick,
}: LanguageLinksProps) {
  const pathname = usePathname();
  const nextLocale = locale === "id" ? "en" : "id";

  if (mobile) {
    return (
      <div className="rounded-[1.4rem] border border-[color:var(--border)] bg-[color:var(--background)] p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)]">
          {label}
        </div>
        <div className="flex gap-2">
          {locales.map((item) => {
            const active = item === locale;
            return (
              <Link
                key={item}
                href={buildLocalePath(pathname, item)}
                onClick={onClick}
                className={`inline-flex min-w-14 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                  active
                    ? "bg-[color:var(--accent)] text-[color:var(--accent-contrast)]"
                    : "border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent-soft)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {item.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={buildLocalePath(pathname, nextLocale)}
      className="hidden rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-2.5 text-xs font-semibold text-[color:var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent-soft)] hover:bg-[color:var(--panel-strong)] active:scale-95 lg:inline-flex"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}
