import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProgramCard({
  number,
  title,
  description,
  image,
  path,
  meta,
  className = "",
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group ${className}`}
    >
      <Link
        to={path}
        className="relative block h-full overflow-hidden border border-white/10 bg-[#0a0a0a]"
      >
        {/* IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            variants={{
              rest: {
                scale: 1,
              },
              hover: {
                scale: 1.06,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* TOP META */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            <span className="font-space text-[9px] font-bold tracking-[0.2em] text-white/45">
              {number}
            </span>

            <span className="border border-white/15 bg-black/30 px-3 py-1.5 font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
              {meta}
            </span>
          </div>

          {/* ARROW */}
          <motion.div
            variants={{
              rest: {
                x: 0,
                y: 0,
                opacity: 0.6,
              },
              hover: {
                x: 4,
                y: -4,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/30 text-white backdrop-blur-md"
          >
            <ArrowUpRight size={18} />
          </motion.div>

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <motion.p
              variants={{
                rest: {
                  color: "rgba(255,255,255,0.45)",
                },
                hover: {
                  color: "rgba(255,255,255,0.8)",
                },
              }}
              className="mb-2 font-space text-[9px] font-semibold uppercase tracking-[0.2em]"
            >
              MAX ARENA / PROGRAM
            </motion.p>

            <h3 className="font-bebas text-4xl uppercase leading-none tracking-wide text-white sm:text-5xl">
              {title}
            </h3>

            <p className="mt-3 max-w-md font-manrope text-xs leading-relaxed text-white/50 sm:text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
          <span className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
            Explore Program
          </span>

          <span className="h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-16 group-hover:bg-white/40" />
        </div>
      </Link>
    </motion.div>
  );
}

export default ProgramCard;