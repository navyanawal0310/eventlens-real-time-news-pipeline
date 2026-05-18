import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-[#071018] text-slate-200 min-h-screen flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 px-8 pt-10 pb-8">
          {children}
        </main>

      </div>

    </div>
  );
}