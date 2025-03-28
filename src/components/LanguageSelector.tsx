'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const t = useTranslations('LanguageSelector');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center space-x-2 text-sm">
        <span className="text-gray-800 dark:text-gray-200">
          {locale === 'en' ? '🇺🇸' : '🇪🇸'}
        </span>
      </button>
      <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <button
          onClick={() => handleLanguageChange('en')}
          className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {t('english')} 🇺🇸
        </button>
        <button
          onClick={() => handleLanguageChange('es')}
          className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {t('spanish')} 🇪🇸
        </button>
      </div>
    </div>
  );
} 