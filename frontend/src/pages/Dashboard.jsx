import DashboardLayout from "../layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-[#0F172A] border border-slate-800 rounded-3xl p-6 h-[400px]">
          <h3 className="text-lg font-semibold text-white">
            Live Intelligence Feed
          </h3>

          <p className="text-slate-500 mt-2">
            Real-time global event monitoring and classification
          </p>
        </div>

        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 h-[400px]">
          <h3 className="text-lg font-semibold text-white">
            Pipeline Health
          </h3>

          <p className="text-slate-500 mt-2">
            ETL system telemetry and ingestion metrics
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}