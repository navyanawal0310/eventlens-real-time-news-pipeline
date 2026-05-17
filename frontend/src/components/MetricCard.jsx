import { motion } from "framer-motion";

export default function MetricCard({
  title,
  value,
  change,
  positive = true,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        bg-surface
        border border-border
        rounded-3xl
        p-6
        shadow-glow
        hover:border-primary/40
        transition-all
      "
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="text-4xl font-semibold mt-4 text-white tracking-tight">
            {value}
          </h3>

        </div>

        <div
          className={`
            text-sm px-3 py-1 rounded-full
            ${
              positive
                ? "bg-primary/10 text-primary"
                : "bg-red-500/10 text-red-400"
            }
          `}
        >
          {change}
        </div>

      </div>

    </motion.div>
  );
}