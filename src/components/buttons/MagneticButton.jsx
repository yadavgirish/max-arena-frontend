import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const variants = {
  primary:
    "bg-white text-black border border-white hover:bg-white/90",
  outline:
    "bg-transparent text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.05]",
  dark:
    "bg-[#111111] text-white border border-white/10 hover:bg-[#181818] hover:border-white/20",
};

function MagneticButton({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  showArrow = true,
  className = "",
  disabled = false,
  magneticStrength = 0.25,
}) {
  const buttonRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
    mass: 0.3,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
    mass: 0.3,
  });

  const handleMouseMove = (event) => {
    if (disabled) return;

    const element = buttonRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const relativeX =
      event.clientX - (rect.left + rect.width / 2);

    const relativeY =
      event.clientY - (rect.top + rect.height / 2);

    x.set(relativeX * magneticStrength);
    y.set(relativeY * magneticStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden
    px-6
    py-4
    font-manrope
    text-xs
    font-extrabold
    uppercase
    tracking-[0.08em]
    transition-colors
    duration-300
    select-none
  `;

  const disabledClasses = disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant] || variants.primary}
    ${disabledClasses}
    ${className}
  `;

  const content = (
    <>
      {/* HOVER LIGHT */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/[0.08] transition-transform duration-500 ease-out group-hover:translate-x-0" />

      {/* CONTENT */}
      <span className="relative z-10">{children}</span>

      {/* ARROW */}
      {showArrow && (
        <span className="relative z-10 flex h-5 w-5 items-center justify-center overflow-hidden">
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      )}
    </>
  );

  const commonProps = {
    ref: buttonRef,
    style: {
      x: springX,
      y: springY,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: disabled
      ? undefined
      : {
          scale: 0.97,
        },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  };

  /* --------------------------------
     ROUTER LINK
  -------------------------------- */

  if (to && !disabled) {
    return (
      <motion.div
        {...commonProps}
        className="inline-flex"
      >
        <Link
          to={to}
          className={buttonClasses}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  /* --------------------------------
     EXTERNAL LINK
  -------------------------------- */

  if (href && !disabled) {
    return (
      <motion.div
        {...commonProps}
        className="inline-flex"
      >
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noreferrer"
        >
          {content}
        </a>
      </motion.div>
    );
  }

  /* --------------------------------
     NORMAL BUTTON
  -------------------------------- */

  return (
    <motion.button
      {...commonProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
}

export default MagneticButton;