import DashboardLayout from "../layout/DashboardLayout";
import MetricCard from "../components/MetricCard";
import LiveFeed from "../components/LiveFeed";

export default function Dashboard() {
  return (
    <DashboardLayout>

      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">

        <MetricCard
          title="Articles Processed"
          value="24.8K"
          change="+18.2%"
        />

        <MetricCard
          title="Detected Events"
          value="312"
          change="+6.4%"
        />

        <MetricCard
          title="Pipeline Accuracy"
          value="98.2%"
          change="+1.2%"
        />

        <MetricCard
          title="System Latency"
          value="142ms"
          change="-3.1%"
          positive={false}
        />

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6">

       {/* LIVE FEED */}
<div className="col-span-12 xl:col-span-6 bg-surface border border-border rounded-3xl p-6 h-[520px] flex flex-col">

  <h3 className="text-xl font-semibold mb-6">
    Live Intelligence Feed
  </h3>

  <div className="flex-1 overflow-hidden">
    <LiveFeed />
  </div>

</div>

        {/* PIPELINE */}
        <div className="col-span-12 xl:col-span-6 bg-surface border border-border rounded-3xl p-6 h-[520px]">

          <h3 className="text-xl font-semibold">
            Pipeline Monitoring
          </h3>

        </div>

        {/* EVENT TIMELINE */}
        <div className="col-span-12 xl:col-span-7 bg-surface border border-border rounded-3xl p-6 h-[420px]">

          <h3 className="text-xl font-semibold">
            Event Timeline
          </h3>

        </div>

        {/* ANALYTICS */}
        <div className="col-span-12 xl:col-span-5 bg-surface border border-border rounded-3xl p-6 h-[420px]">

          <h3 className="text-xl font-semibold">
            Trend Analytics
          </h3>

        </div>

        {/* GLOBAL MAP */}
        <div className="col-span-12 bg-surface border border-border rounded-3xl p-6 h-[500px]">

          <h3 className="text-xl font-semibold">
            Global Intelligence Map
          </h3>

        </div>

      </div>

    </DashboardLayout>
  );
}