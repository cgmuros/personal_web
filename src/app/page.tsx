import Link from "next/link";

export default function RootPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="ambient-orb left-[-10rem] top-[-8rem] h-[24rem] w-[24rem] bg-cyan-500/20" />
      <div className="ambient-orb bottom-[-10rem] right-[-6rem] h-[22rem] w-[22rem] bg-indigo-500/20" />
      <div className="grid-lines absolute inset-0 opacity-40" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-10 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Cristian Muñoz Rosenfeld</p>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              Data Engineer, Data Architect and cloud modernization specialist.
            </p>
          </div>
          <a
            href="mailto:cgmuros@gmail.com"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white md:inline-flex"
          >
            cgmuros@gmail.com
          </a>
        </div>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Choose your language</p>
            <h1 className="display-title mt-6 max-w-4xl">
              Bilingual dark-mode portfolio for a senior data engineer and architect.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Explore modern data platform architecture, cloud migrations, lakehouse delivery and
              real project experience in English or Spanish.
            </p>
          </div>

          <div className="panel relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_40%)]" />
            <div className="relative space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
                Selecciona un idioma
              </p>
              <Link
                href="/es"
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div>
                  <p className="text-xl font-semibold text-white">Español</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Perfil, experiencia y stack técnico en español.
                  </p>
                </div>
                <span className="text-sm text-cyan-300 transition group-hover:translate-x-1">
                  Entrar
                </span>
              </Link>
              <Link
                href="/en"
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div>
                  <p className="text-xl font-semibold text-white">English</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Portfolio, project highlights and technical capabilities in English.
                  </p>
                </div>
                <span className="text-sm text-cyan-300 transition group-hover:translate-x-1">
                  Enter
                </span>
              </Link>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="rounded-full border border-white/10 px-3 py-1">Lakehouse</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Snowflake</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Databricks</span>
          <span className="rounded-full border border-white/10 px-3 py-1">AWS</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Real-time &amp; Batch</span>
        </div>
      </div>
    </main>
  );
}
