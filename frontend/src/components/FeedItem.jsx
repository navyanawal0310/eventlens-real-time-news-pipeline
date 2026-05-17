import { motion } from "framer-motion";

export default function FeedItem({
  title,
  source,
  time,
  category,
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
        className="
        w-full
        border border-border
        bg-background
        rounded-2xl
        p-5
        hover:border-primary/30
        transition-all
        cursor-pointer
      "
    >

      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />

          <span className="text-xs uppercase tracking-widest text-primary">
            {category}
          </span>

        </div>

        <span className="text-xs text-slate-500">
          {time}
        </span>

      </div>

      <h4 className="text-white text-lg leading-relaxed font-medium break-words">
        {title}
      </h4>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          {source}
        </span>

        <button className="text-sm text-primary hover:opacity-80">
          Analyze →
        </button>

      </div>

    </motion.div>
  );
}