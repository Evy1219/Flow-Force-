export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold text-brand-700">Flow Force</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Sign in</h1>
        <p className="mt-2 text-slate-600">Access your organization workspace.</p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-brand-500" type="email" placeholder="you@company.com" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Password</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-brand-500" type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
