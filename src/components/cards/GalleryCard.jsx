import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

function GalleryCard({
  image,
  alt = "MAX ARENA",
  category = "GYM",
  number,
  className = "",
  onClick,
}) {
  return (
    <motion.button
      type="button"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden border border-white/10 bg-[#0a0a0a] text-left ${className}`}
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* OVERLAY */}
        <motion.div
          variants={{
            rest: {
              opacity: 0.35,
            },
            hover: {
              opacity: 0.6,
            },
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black"
        />

        {/* TOP INFO */}
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <span className="font-space text-[9px] font-bold tracking-[0.2em] text-white/45">
            {number}
          </span>

          <span className="border border-white/15 bg-black/30 px-3 py-1.5 font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* CENTER ICON */}
        <motion.div
          variants={{
            rest: {
              opacity: 0,
              scale: 0.8,
            },
            hover: {
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center border border-white/25 bg-black/30 text-white backdrop-blur-md">
            <Maximize2 size={18} strokeWidth={1.5} />
          </span>
        </motion.div>

        {/* BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.div
            variants={{
              rest: {
                y: 8,
                opacity: 0.55,
              },
              hover: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/50">
              MAX ARENA
            </p>

            <p className="mt-1 font-manrope text-xs font-semibold uppercase tracking-wide text-white">
              {category}
            </p>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="h-px w-full bg-white/10">
        <motion.div
          variants={{
            rest: {
              scaleX: 0,
            },
            hover: {
              scaleX: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full origin-left bg-white"
        />
      </div>
    </motion.button>
  );
}

export default GalleryCard;