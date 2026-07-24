export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold text-brand-700">Create account</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Join Flow Force</h1>
        <p className="mt-2 text-slate-600">Start your organization with secure onboarding and business type selection.</p>

        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">First name</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" type="text" placeholder="Avery" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Last name</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" type="text" placeholder="Stone" />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-1 block text-sm font-medium text-slate-700">Work email</span>
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" type="email" placeholder="admin@company.com" />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-1 block text-sm font-medium text-slate-700">Business type</span>
            <select className="w-full rounded-2xl border border-slate-200 px-4 py-3">
              <option>Software Company</option>
              <option>Construction</option>
              <option>Healthcare</option>
              <option>Restaurant</option>
            </select>
          </label>
          <button type="button" className="md:col-span-2 rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Create organization
          </button>
        </form>
      </div>
    </main>
  );
}
