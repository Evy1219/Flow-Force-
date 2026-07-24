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
    <main className="relative min-h-screen overflow-hidden px-4 py-6 text-slate-900 sm:px-6 lg:px-10 lg:py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-120px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-400/25 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[340px] w-[340px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur xl:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
              <Sparkles size={14} />
              Flow Force • Adaptive Workplace Management
            </span>

            <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl xl:text-7xl">
              Own the flow of your business.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Flow Force gives ambitious companies a clean, premium command center with industry-aware setup, secure collaboration, and bold decision-making tools in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700"
                href="/login"
              >
                Enter workspace
                <ArrowRight size={16} />
              </a>
              <a
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
                href="/register"
              >
                Start free trial
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickActions.map(({ title, description, href, icon: Icon }) => (
                <a
                  key={title}
                  href={href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition duration-200 hover:-translate-y-1 hover:border-brand-300 hover:bg-white"
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

          <div className="rounded-[28px] bg-slate-950 p-4 text-white shadow-[0_25px_70px_-35px_rgba(15,23,42,0.85)] sm:p-5">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-300">Live overview</p>
                  <p className="mt-1 text-2xl font-black">Operational pulse</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Active +12%
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

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand-500/25 to-cyan-400/20 p-4">
                <p className="text-sm text-brand-100">Adaptive modules</p>
                <p className="mt-2 text-lg font-semibold text-white">Construction, Healthcare, Retail, SaaS, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
        {featureCards.map(({ title, body, icon: Icon, href }) => (
          <a
            key={title}
            href={href}
            className="group rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_20px_45px_-25px_rgba(37,99,235,0.45)]"
          >
            <div className="inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
              <Icon size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-950">{title}</h2>
            <p className="mt-2 text-slate-600">{body}</p>
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
