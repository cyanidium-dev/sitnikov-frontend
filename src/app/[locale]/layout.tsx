import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";

import "./globals.css";

import Header from "@/components/module/header/Header";

export const metadata: Metadata = {
  title: "Консалтинг - Олександр Ситников",
  description: "Юридичний консалтинг, який вирішує",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="relative z-[1] flex min-h-screen flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow overflow-x-hidden">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
