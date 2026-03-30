'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSelector from '@/components/LanguageSelector';

export default function SiteHeader() {
  const t = useTranslations('Navigation');
  const locale = useLocale();

  const items = [
    { label: t('about'), href: '#about' },
    { label: t('skills'), href: '#skills' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(3,10,22,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href={`/${locale}`} className="min-w-0">
          <p className="truncate text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Cristian Muñoz
          </p>
          <p className="truncate text-xs text-slate-400">{t('role')}</p>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-300 hover:text-white md:inline-flex"
          >
            {t('cta')}
          </a>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
