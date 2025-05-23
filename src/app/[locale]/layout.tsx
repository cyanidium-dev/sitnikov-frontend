import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/locale";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

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
      <NextIntlClientProvider messages={messages}>
        <body className={`${geistSans.variable} antialiased`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
