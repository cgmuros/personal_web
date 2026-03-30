'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiAmazonwebservices, SiDatabricks, SiSnowflake } from 'react-icons/si';

type Metric = {
  value: string;
  label: string;
};

export default function Hero() {
  const t = useTranslations('Hero');
  const metrics = t.raw('metrics') as Metric[];

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="ambient-orb left-[-12rem] top-[4rem] h-[26rem] w-[26rem] bg-cyan-500/20" />
      <div className="ambient-orb right-[-10rem] top-[10rem] h-[22rem] w-[22rem] bg-blue-500/20" />
      <div className="grid-lines absolute inset-0 opacity-50" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-14 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-10 lg:pb-20 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative z-10 flex flex-col justify-center"
        >
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1 className="display-title mt-5 max-w-3xl">{t('title')}</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">{t('subtitle')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="primary-button">
              {t('primaryCta')}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2">
              {t('availability')}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              {t('languages')}
            </span>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.1 }}
                className="panel rounded-[1.5rem] p-5"
              >
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative flex items-start justify-center lg:pt-2"
        >
          <div className="absolute inset-x-8 top-8 h-48 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="panel relative w-full overflow-hidden rounded-[2rem] p-5 md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_28%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:url('/images/data-grid.svg')] bg-cover bg-center" />

            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10">
              <Image
                src="/images/profile.jpg"
                alt="Cristian Muñoz Rosenfeld"
                width={900}
                height={1080}
                priority
                className="h-[26rem] w-full object-cover object-center md:h-[30rem] lg:h-[34rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {t('imageEyebrow')}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">{t('imageCaption')}</p>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-2 top-10 hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur md:block">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                {t('platformFocus')}
              </p>
              <div className="mt-4 flex items-center gap-3 text-slate-200">
                <SiDatabricks className="text-xl text-orange-300" />
                <SiSnowflake className="text-xl text-sky-300" />
                <SiAmazonwebservices className="text-xl text-amber-300" />
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 flex gap-3">
              <a
                href="https://www.linkedin.com/in/cgmuros/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/cgmuros"
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a href="mailto:cgmuros@gmail.com" className="social-badge" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
