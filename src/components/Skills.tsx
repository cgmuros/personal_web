'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type SkillGroup = {
  title: string;
  items: string[];
};

const streamStyles = [
  {
    speed: 'animate-[marquee_28s_linear_infinite]',
    chip: 'from-cyan-400/18 to-cyan-400/4 hover:border-cyan-300/45',
  },
  {
    speed: 'animate-[marquee-reverse_34s_linear_infinite]',
    chip: 'from-sky-400/18 to-sky-400/4 hover:border-sky-300/45',
  },
  {
    speed: 'animate-[marquee_24s_linear_infinite]',
    chip: 'from-blue-400/18 to-indigo-400/4 hover:border-blue-300/45',
  },
];

export default function Skills() {
  const t = useTranslations('Skills');
  const groups = t.raw('groups') as SkillGroup[];
  const toolbelt = t.raw('toolbelt') as string[];

  const streams = [
    toolbelt.slice(0, 6),
    toolbelt.slice(6, 12),
    toolbelt.slice(12, 18),
  ];

  return (
    <section id="skills" className="section-shell overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">{t('eyebrow')}</p>
            <h2 className="section-title mt-4">{t('title')}</h2>
            <p className="section-copy mt-5">{t('description')}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {groups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group panel relative overflow-hidden rounded-[1.7rem] p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/6 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        whileHover={{
                          y: -4,
                          x: itemIndex % 2 === 0 ? 4 : -4,
                          scale: 1.05,
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 20 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="panel relative mt-12 overflow-hidden rounded-[2.2rem] px-5 py-8 md:px-8 md:py-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_32%)]" />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--background-soft)] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--background-soft)] to-transparent" />

          <div className="relative">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-cyan-300">
                  {t('streamEyebrow')}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  {t('streamTitle')}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-400">
                {t('streamDescription')}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {streams.map((stream, streamIndex) => (
                <div
                  key={streamIndex}
                  className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/[0.03] py-3"
                >
                  <div className={`flex w-max ${streamStyles[streamIndex].speed} hover:[animation-play-state:paused]`}>
                    {[...stream, ...stream, ...stream].map((item, index) => (
                      <motion.div
                        key={`${item}-${index}`}
                        whileHover={{
                          y: -7,
                          scale: 1.06,
                          rotate: index % 2 === 0 ? -2 : 2,
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 18 }}
                        className={`mx-2 flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-br ${streamStyles[streamIndex].chip} px-5 py-3 shadow-[0_8px_30px_rgba(2,6,23,0.22)]`}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
                        <span className="text-sm font-medium tracking-[0.02em] text-slate-100">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
