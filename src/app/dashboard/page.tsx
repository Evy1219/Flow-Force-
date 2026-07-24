import { getIndustryConfig } from '@/lib/industry';

export default function DashboardPage() {
  const config = getIndustryConfig('Software Company');

  return (
    <main className="min-h-screen p-6 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-700">Flow Force Dashboard</p>
            <h1 className="text-3xl font-bold">Adaptive workspace overview</h1>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 shadow-soft">Industry: Software Company</div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Sidebar modules</p>
            <ul className="mt-4 space-y-2">
              {config.navItems.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {config.dashboardWidgets.map((widget) => (
              <article key={widget} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Widget</p>
                <h2 className="mt-2 text-lg font-semibold">{widget}</h2>
                <div className="mt-4 h-24 rounded-2xl bg-gradient-to-br from-brand-50 to-slate-100" />
              </article>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
