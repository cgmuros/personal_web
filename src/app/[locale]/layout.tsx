import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/i18n/settings";
import LanguageSelector from "@/components/LanguageSelector";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cristian Muñoz - Sr. Data Engineer",
  description: "Portfolio of Cristian Muñoz, Senior Data Engineer with over 16 years of experience in data engineering and analytics.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!locales.includes(locale as any)) notFound();

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.className}>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4 h-16 flex items-center justify-center">
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <span className="text-blue-500 font-medium">+15</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Professional Experience</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 font-medium">+10</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Data Engineer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 font-medium">+8</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Data Architect</span>
                  </div>
                </div>
                <div className="absolute right-4">
                  <LanguageSelector />
                </div>
              </div>
            </header>
            <main className="pt-16">
              {children}
            </main>
          </div>
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
