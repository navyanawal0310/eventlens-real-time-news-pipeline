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
    <aside
      className="
        w-72
        border-r border-border
        bg-background
        h-screen
        px-6
        pt-8
        pb-6
        flex flex-col
      "
    >

      {/* LOGO */}
      <div>

        <h1 className="text-[42px] font-bold tracking-[-0.05em] text-white leading-none">
          EventLens
        </h1>

        <p className="text-slate-500 text-sm mt-3 tracking-wide">
          Real-Time Intelligence Platform
        </p>

      </div>

      {/* NAVIGATION */}
      <div className="mt-14 flex flex-col gap-3">

        {items.map((item) => (
          <button
            key={item.label}
            className="
              group
              flex items-center gap-5
              px-5 py-4
              rounded-2xl
              text-slate-400
              border border-transparent
              hover:bg-primary/10
              hover:border-primary/20
              hover:text-primary
              transition-all
              duration-300
            "
          >

            <item.icon
              size={21}
              strokeWidth={1.8}
              className="
                transition-all
                duration-300
                group-hover:scale-110
              "
            />

            <span className="text-[17px] font-medium tracking-wide">
              {item.label}
            </span>

          </button>
        ))}

      </div>

      {/* SYSTEM STATUS */}
      <div
        className="
          mt-auto
          border border-primary/20
          rounded-3xl
          p-5
          bg-surface/90
          backdrop-blur-sm
          shadow-glow
        "
      >

        <div className="flex items-start gap-4">

          <div className="mt-1 h-3 w-3 rounded-full bg-primary animate-pulse" />

          <div>

            <p className="text-[15px] text-primary font-medium tracking-wide">
              Pipeline Active
            </p>

            <p className="text-sm text-slate-500 mt-1 leading-relaxed">
              ETL systems operational and ingesting global intelligence streams
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}