import type { ReactNode } from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  isValidLocale,
  locales,
  siteContent,
  type Locale,
} from "@/lib/site-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const activeLocale: Locale = isValidLocale(locale) ? locale : "id";
  const dictionary = siteContent[activeLocale];

  return (
    <>
      <SiteHeader locale={activeLocale} dictionary={dictionary} />
      <div className="flex-1">{children}</div>
      <SiteFooter locale={activeLocale} dictionary={dictionary} />
    </>
  );
}
