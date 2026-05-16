export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-[#071018] px-8 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-semibold text-white">
          Global Intelligence Overview
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Real-time monitoring of global events and news systems
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2">
          <p className="text-xs text-slate-500">
            Active Articles
          </p>

          <p className="text-green-400 font-semibold">
            24,892
          </p>
        </div>

      </div>

    </header>
  );
}