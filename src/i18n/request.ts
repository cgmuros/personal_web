import { getRequestConfig } from 'next-intl/server';
import { locales } from './settings';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locales.includes(locale as any)) {
    return {
      locale: 'en',
      messages: (await import(`../../messages/en.json`)).default,
      timeZone: 'America/Santiago'
    };
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'America/Santiago'
  };
}); 