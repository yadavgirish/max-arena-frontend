import { motion } from "framer-motion";
import { Quote } from "lucide-react";

function TestimonialCard({
  quote,
  name,
  role = "MAX ARENA MEMBER",
  image,
  rating = 5,
  className = "",
}) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative h-full overflow-hidden border border-white/10 bg-[#0a0a0a] p-6 sm:p-7 ${className}`}
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <span
              key={index}
              className="font-space text-xs text-white/70"
            >
              ★
            </span>
          ))}
        </div>

        <motion.div
          variants={{
            rest: {
              rotate: 0,
              opacity: 0.25,
            },
            hover: {
              rotate: -8,
              opacity: 0.6,
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <Quote
            size={28}
            strokeWidth={1.2}
            className="text-white"
          />
        </motion.div>
      </div>

      {/* QUOTE */}
      <blockquote className="mt-8 font-manrope text-sm font-medium leading-[1.8] text-white/65 sm:text-[15px]">
        “{quote}”
      </blockquote>

      {/* MEMBER */}
      <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
            <span className="font-space text-xs font-bold text-white/50">
              {name?.charAt(0)?.toUpperCase()}
            </span>
          </div>
        )}

        <div>
          <p className="font-manrope text-xs font-bold uppercase tracking-wide text-white">
            {name}
          </p>

          <p className="mt-1 font-space text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
            {role}
          </p>
        </div>
      </div>

      {/* HOVER LINE */}
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
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-white"
      />
    </motion.article>
  );
}

export default TestimonialCard;