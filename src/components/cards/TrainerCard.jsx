import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function TrainerCard({
  name,
  role,
  specialty,
  image,
  path,
  number,
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
        className="relative block overflow-hidden border border-white/10 bg-[#0a0a0a]"
      >
        {/* IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover grayscale"
            variants={{
              rest: {
                scale: 1,
                filter: "grayscale(100%)",
              },
              hover: {
                scale: 1.05,
                filter: "grayscale(0%)",
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* NUMBER */}
          <span className="absolute left-5 top-5 font-space text-[9px] font-bold tracking-[0.2em] text-white/35">
            {number}
          </span>

          {/* ARROW */}
          <motion.div
            variants={{
              rest: {
                x: 0,
                y: 0,
                opacity: 0.55,
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
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/30 text-white backdrop-blur-md"
          >
            <ArrowUpRight size={17} />
          </motion.div>

          {/* TRAINER INFO */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p className="mb-2 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
              {role}
            </p>

            <h3 className="font-bebas text-4xl uppercase leading-none tracking-wide text-white sm:text-5xl">
              {name}
            </h3>

            <p className="mt-2 font-manrope text-xs text-white/50">
              {specialty}
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
          <span className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/30">
            View Profile
          </span>

          <span className="h-px w-8 bg-white/15 transition-all duration-500 group-hover:w-14 group-hover:bg-white/40" />
        </div>
      </Link>
    </motion.div>
  );
}

export default TrainerCard;