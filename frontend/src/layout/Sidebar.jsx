import {
  LayoutDashboard,
  Newspaper,
  Activity,
  Database,
  Radar
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Newspaper, label: "Live Feed" },
  { icon: Radar, label: "Event Detection" },
  { icon: Activity, label: "Analytics" },
  { icon: Database, label: "Pipeline" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-[#081018] h-screen p-6 flex flex-col">

      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          EventLens
        </h1>

        <p className="text-slate-500 text-sm mt-1">
          Intelligence Platform
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-2">

        {items.map((item) => (
          <button
            key={item.label}
            className="
              flex items-center gap-4
              px-4 py-3 rounded-xl
              text-slate-400
              hover:bg-slate-900
              hover:text-green-400
              transition-all
              duration-200
            "
          >
            <item.icon size={18} />

            <span className="text-sm font-medium">
              {item.label}
            </span>
          </button>
        ))}

      </div>

      <div className="mt-auto border border-slate-800 rounded-2xl p-4 bg-[#0F172A]">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <div>
            <p className="text-sm text-green-400">
              Pipeline Active
            </p>

            <p className="text-xs text-slate-500">
              ETL systems operational
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}