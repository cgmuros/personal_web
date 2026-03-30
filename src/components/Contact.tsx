'use client';

import { useTranslations } from 'next-intl';
import { FaEnvelope, FaGlobe, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

type ContactChannel = {
  title: string;
  value: string;
  href: string;
};

export default function Contact() {
  const t = useTranslations('Contact');
  const channels = t.raw('channels') as ContactChannel[];
  const icons = [FaWhatsapp, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGlobe];

  return (
    <section id="contact" className="section-shell pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_34%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">{t('eyebrow')}</p>
              <h2 className="section-title mt-4">{t('title')}</h2>
              <p className="section-copy mt-5">{t('description')}</p>
            </div>

            <div className="space-y-4 rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-6 md:p-8">
              <a
                href={t('whatsappHref')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[1.5rem] border border-emerald-400/30 bg-emerald-400/10 px-5 py-5 transition hover:border-emerald-300/50 hover:bg-emerald-400/15"
              >
                <span className="flex items-center gap-4">
                  <span className="rounded-full border border-white/10 bg-slate-950/70 p-3 text-emerald-300">
                    <FaWhatsapp />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{t('whatsappTitle')}</span>
                    <span className="block text-base font-medium text-white">{t('whatsappText')}</span>
                  </span>
                </span>
                <span className="text-sm text-emerald-200">{t('whatsappCta')}</span>
              </a>

              <p className="text-sm leading-7 text-slate-400">{t('contactNote')}</p>

              <div className="space-y-4">
                {channels.map((channel, index) => {
                  const Icon = icons[index + 1] ?? FaEnvelope;

                  return (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 transition hover:border-cyan-400/40 hover:bg-white/10"
                    >
                      <span className="rounded-full border border-white/10 bg-slate-950/70 p-3 text-cyan-300">
                        <Icon />
                      </span>
                      <span>
                        <span className="block text-sm text-slate-400">{channel.title}</span>
                        <span className="block text-base text-white">{channel.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
