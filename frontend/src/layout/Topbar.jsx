export default function Topbar() {
  return (
    <header
      className="
        border-b border-border
        bg-background
        px-10
        pt-8
        pb-6
        flex
        items-end
        justify-between
      "
    >

      {/* LEFT */}
      <div>

        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
          Global Monitoring System
        </p>

        <h2 className="text-[48px] font-bold tracking-[-0.04em]">
          Intelligence Overview
        </h2>

        <p className="text-slate-500 mt-5 text-[15px] tracking-[0.01em] leading-relaxed">
          Real-time monitoring of geopolitical events, media streams and intelligence pipelines
        </p>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <div
          className="
            bg-surface/90
            border border-primary/20
            rounded-3xl
            px-6 py-4
            shadow-glow
            min-w-[150px]
          "
        >

          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Active Articles
          </p>

          <p className="text-primary font-semibold text-2xl mt-2">
            24,892
          </p>

        </div>

      </div>

    </header>
  );
}