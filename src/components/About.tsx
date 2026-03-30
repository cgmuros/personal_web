'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type FocusItem = {
  title: string;
  description: string;
};

export default function About() {
  const t = useTranslations('About');
  const focus = t.raw('focus') as FocusItem[];
  const badges = t.raw('badges') as string[];
  const flowCards = t.raw('flowCards') as { title: string; description: string }[];

  return (
    <section id="about" className="section-shell">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="space-y-6">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="section-title max-w-xl">{t('title')}</h2>
          <p className="section-copy">{t('intro')}</p>
          <p className="section-copy">{t('description1')}</p>
          <p className="section-copy">{t('description2')}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 opacity-30 [background-image:url('/images/pipeline-map.svg')] bg-cover bg-center" />
            <div className="relative min-h-[25rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,#0b1525_0%,#09111e_100%)] p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.2),transparent_30%)]" />
              <div className="relative flex h-full flex-col">
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-cyan-300">
                  {t('flowEyebrow')}
                </p>
                <h3 className="mt-3 max-w-xs text-2xl font-semibold leading-tight text-white">
                  {t('flowTitle')}
                </h3>

                <div className="mt-8 space-y-4">
                  {flowCards.map((card, index) => (
                    <div
                      key={card.title}
                      className={`${index % 2 === 1 ? 'ml-8 border-sky-400/30' : 'border-cyan-400/30'} ${index === 3 ? 'ml-10' : ''} rounded-[1.2rem] border bg-slate-950/70 p-4`}
                    >
                      <p className="text-sm font-semibold text-white">{card.title}</p>
                      <p className="mt-2 text-sm text-slate-400">{card.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute left-[3.4rem] top-[10.5rem] h-[15rem] w-px bg-gradient-to-b from-cyan-400/60 via-sky-400/40 to-transparent" />
                <div className="pointer-events-none absolute left-[6.2rem] top-[14.7rem] h-[12rem] w-px bg-gradient-to-b from-sky-400/50 via-cyan-400/30 to-transparent" />
                <div className="pointer-events-none absolute left-[3.4rem] top-[14.7rem] h-px w-8 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <div className="pointer-events-none absolute left-[6.2rem] top-[21.2rem] h-px w-10 bg-gradient-to-r from-sky-400/60 to-transparent" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {focus.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="panel rounded-[1.6rem] p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
