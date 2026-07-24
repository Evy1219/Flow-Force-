import { ArrowRight, ShieldCheck, Layers3, Users } from 'lucide-react';

const featureCards = [
  {
    title: 'Adaptive onboarding',
    body: 'Every organization picks an industry and Flow Force reshapes the modules, terminology, and navigation to match the workflow.',
    icon: Layers3,
  },
  {
    title: 'Enterprise security',
    body: 'JWT sessions, secure cookies, bcrypt password hashing, activity audit logs, and permission-aware UI patterns are built in.',
    icon: ShieldCheck,
  },
  {
    title: 'Collaboration-ready',
    body: 'Dashboard analytics, notifications, reporting, search, and role-aware employee management support real business operations.',
    icon: Users,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 text-slate-900 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
              Flow Force • Adaptive Workplace Management
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Build smarter operations across every industry.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Flow Force is a premium, scalable SaaS workspace that personalizes itself by business type while preserving a durable, enterprise-grade architecture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 font-semibold text-white transition hover:bg-brand-700" href="/login">
                Login
                <ArrowRight size={16} />
              </a>
              <a className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700" href="/register">
                Free Trial
              </a>
            </div>
          </div>

          <div className="grid gap-3 rounded-3xl bg-slate-950 p-5 text-white shadow-soft md:min-w-[360px]">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">Today’s Overview</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-xs text-slate-300">Organizations</p>
                  <p className="text-2xl font-bold">124</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-xs text-slate-300">Active users</p>
                  <p className="text-2xl font-bold">2.3k</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-brand-500/20 p-4">
              <p className="text-sm text-brand-100">Adaptive modules</p>
              <p className="mt-1 text-lg font-semibold">Construction, Healthcare, Retail, SaaS, and more</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3">
        {featureCards.map(({ title, body, icon: Icon }) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
              <Icon size={22} />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-slate-600">{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
