import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "large",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  const titleSize =
    size === "small"
      ? "text-5xl sm:text-6xl"
      : size === "medium"
        ? "text-6xl sm:text-7xl lg:text-8xl"
        : "text-7xl sm:text-8xl lg:text-[9rem]";

  return (
    <div
      className={`flex flex-col ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-space text-[9px] font-bold uppercase tracking-[0.22em] text-white/35"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`max-w-5xl font-bebas uppercase leading-[0.85] tracking-wide text-white ${titleSize}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/45 sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;