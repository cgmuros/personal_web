'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type SkillGroup = {
  title: string;
  items: string[];
};
export default function Skills() {
  const t = useTranslations('Skills');
  const groups = t.raw('groups') as SkillGroup[];

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
      </div>
    </section>
  );
}
