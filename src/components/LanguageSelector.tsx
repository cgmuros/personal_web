'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSelector() {
  const t = useTranslations('LanguageSelector');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const nextPath = pathname.replace(/^\/(en|es)/, `/${newLocale}`);
    router.push(nextPath);
  };

  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
      {['es', 'en'].map((value) => {
        const active = locale === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => switchLocale(value)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.24em] transition ${
              active
                ? 'bg-white text-slate-950'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {value === 'en' ? t('english') : t('spanish')}
          </button>
        );
      })}
    </div>
  );
}
