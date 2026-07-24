import { ArrowRight, BarChart3, Building2, ShieldCheck, Sparkles, Users } from 'lucide-react';

const featureCards = [
  {
    title: 'Adaptive onboarding',
    body: 'Select your industry and Flow Force reshapes the workspace so every module, label, and workflow fits your business rhythm.',
    icon: Sparkles,
    href: '/register',
  },
  {
    title: 'Enterprise security',
    body: 'Secure auth, audit-ready activity, and permission-aware workflows are designed to protect your operations from day one.',
    icon: ShieldCheck,
    href: '/login',
  },
  {
    title: 'Collaboration-ready',
    body: 'Bring teams together with streamlined reporting tools, people management, and role-aware visibility across the platform.',
    icon: Users,
    href: '/dashboard',
  },
];

const quickActions = [
  {
    title: 'Dashboard',
    description: 'See performance highlights and operational momentum.',
    href: '/dashboard',
    icon: BarChart3,
  },
  {
    title: 'Industry setup',
    description: 'Switch the experience to match your organization type.',
    href: '/register',
    icon: Building2,
  },
  {
    title: 'Secure access',
    description: 'Use trusted login and protected account workflows.',
    href: '/login',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-5 text-slate-900 sm:px-6 lg:px-10 lg:py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-90px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-40px] h-[220px] w-[220px] rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.45)] backdrop-blur sm:p-7">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
            <Sparkles size={14} />
            Flow Force
          </div>
          <div className="flex items-center gap-2">
            <a href="/login" className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700">
              Login
            </a>
            <a href="/register" className="rounded-full bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
              Start free
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Build smarter operations across every industry.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Flow Force is a premium workplace platform that personalizes the experience by industry while keeping the operations layer secure, consistent, and easy to scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                href="/login"
              >
                Open dashboard
                <ArrowRight size={16} />
              </a>
              <a
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
                href="/register"
              >
                Request demo
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {quickActions.map(({ title, description, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white"
                >
                  <div className="inline-flex rounded-xl bg-brand-50 p-2 text-brand-700">
                    <Icon size={18} />
                  </div>
                  <h2 className="mt-3 text-base font-bold text-slate-950">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-slate-950 p-4 text-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.9)] sm:p-5">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-300">Live overview</p>
                  <p className="mt-1 text-xl font-bold">Operational pulse</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  +12%
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Organizations</p>
                  <p className="mt-2 text-3xl font-black">124</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Active users</p>
                  <p className="mt-2 text-3xl font-black">2.3k</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand-500/20 to-cyan-400/15 p-4">
                <p className="text-sm text-brand-100">Adaptive modules</p>
                <p className="mt-2 text-base font-semibold">Construction, Healthcare, Retail, SaaS, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-6 grid max-w-6xl gap-4 md:grid-cols-3">
        {featureCards.map(({ title, body, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            className="group rounded-[24px] border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300"
          >
            <div className="inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
              <Icon size={20} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
              Explore
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
