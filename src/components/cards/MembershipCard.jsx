import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

function MembershipCard({
  name,
  price,
  period = "/ month",
  description,
  features = [],
  path = "/join",
  featured = false,
  badge = "MOST POPULAR",
  className = "",
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative h-full ${className}`}
    >
      {/* FEATURED BADGE */}
      {featured && (
        <div className="absolute -top-px left-6 z-10 -translate-y-1/2">
          <span className="bg-white px-3 py-1.5 font-space text-[8px] font-bold uppercase tracking-[0.18em] text-black">
            {badge}
          </span>
        </div>
      )}

      <div
        className={`relative flex h-full flex-col overflow-hidden border ${
          featured
            ? "border-white/30 bg-white/[0.06]"
            : "border-white/10 bg-[#0a0a0a]"
        }`}
      >
        {/* TOP CONTENT */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                MAX ARENA / MEMBERSHIP
              </p>

              <h3 className="mt-4 font-bebas text-4xl uppercase tracking-wide text-white sm:text-5xl">
                {name}
              </h3>
            </div>

            <motion.div
              variants={{
                rest: {
                  rotate: 0,
                },
                hover: {
                  rotate: 45,
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40"
            >
              <ArrowRight size={15} />
            </motion.div>
          </div>

          <p className="mt-4 min-h-[48px] font-manrope text-xs leading-relaxed text-white/45">
            {description}
          </p>

          {/* PRICE */}
          <div className="mt-7 flex items-end gap-2 border-b border-white/10 pb-7">
            <span className="font-bebas text-5xl leading-none tracking-wide text-white sm:text-6xl">
              ₹{price}
            </span>

            <span className="mb-1 font-space text-[9px] uppercase tracking-[0.12em] text-white/30">
              {period}
            </span>
          </div>
        </div>

        {/* FEATURES */}
        <div className="flex flex-1 flex-col px-6 pb-6 sm:px-7 sm:pb-7">
          <p className="mb-4 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
            Included
          </p>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={`${feature}-${index}`}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-white/10">
                  <Check size={10} className="text-white/60" />
                </span>

                <span className="font-manrope text-xs leading-relaxed text-white/55">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to={`${path}?plan=${encodeURIComponent(name)}`}
            className={`group mt-8 flex items-center justify-between border px-4 py-4 font-manrope text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
              featured
                ? "border-white bg-white text-black hover:bg-white/90"
                : "border-white/15 text-white hover:border-white/30 hover:bg-white hover:text-black"
            }`}
          >
            <span>Choose {name}</span>

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
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
      </div>
    </motion.div>
  );
}

export default MembershipCard;