import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

function HomeHero() {
  const heroRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /*
   * -------------------------------------------------------
   * SCROLL / PARALLAX
   * -------------------------------------------------------
   */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "18%"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  /*
   * -------------------------------------------------------
   * MOUSE MOVEMENT
   * -------------------------------------------------------
   */

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({
        x,
        y,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  /*
   * -------------------------------------------------------
   * ANIMATION SETTINGS
   * -------------------------------------------------------
   */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /*
   * -------------------------------------------------------
   * RENDER
   * -------------------------------------------------------
   */

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
      "
    >
      {/* ===================================================
          BACKGROUND IMAGE / VIDEO AREA
      ==================================================== */}

      <motion.div
        style={{
          y: imageY,
        }}
        className="
          absolute
          inset-0
          z-0
          scale-[1.08]
        "
      >
        {/* Replace this div with a real gym video/image later */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_70%_35%,rgba(182,255,0,0.12),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,0.06),transparent_25%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,var(--bg-primary)_0%,rgba(5,5,5,0.78)_38%,rgba(5,5,5,0.38)_75%,rgba(5,5,5,0.68)_100%)]
            dark:bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.76)_38%,rgba(5,5,5,0.35)_75%,rgba(5,5,5,0.68)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(0deg,var(--bg-primary)_0%,transparent_35%,rgba(0,0,0,0.2)_100%)]
          "
        />

        {/* Cinematic abstract gym background */}

        <div className="absolute inset-0">
          <div
            className="
              absolute
              right-[-10%]
              top-[10%]
              h-[65vw]
              w-[65vw]
              max-h-[850px]
              max-w-[850px]
              rounded-full
              border
              border-white/[0.04]
            "
          />

          <div
            className="
              absolute
              right-[5%]
              top-[20%]
              h-[48vw]
              w-[48vw]
              max-h-[650px]
              max-w-[650px]
              rounded-full
              border
              border-white/[0.035]
            "
          />

          <motion.div
            animate={{
              x: mousePosition.x * 12,
              y: mousePosition.y * 12,
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 20,
            }}
            className="
              absolute
              right-[8%]
              top-[18%]
              h-[38vw]
              w-[38vw]
              max-h-[580px]
              max-w-[580px]
              rounded-full
              bg-[radial-gradient(circle,rgba(182,255,0,0.10),transparent_65%)]
              blur-3xl
            "
          />
        </div>
      </motion.div>

      {/* ===================================================
          GRAIN / ATMOSPHERE
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          opacity-[0.035]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.45'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ===================================================
          HERO CONTENT
      ==================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1440px]
          flex-col
          justify-center
          px-6
          pb-20
          pt-32
          sm:px-8
          lg:px-10
        "
      >
        {/* =================================================
            TOP META
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            mb-8
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              h-px
              w-10
              bg-[var(--accent)]
            "
          />

          <span
            className="
              font-space
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[var(--text-primary)]
              opacity-60
            "
          >
            EST. 2026 · PERFORMANCE FACILITY
          </span>
        </motion.div>

        {/* =================================================
            MAIN HEADING
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            max-w-[1050px]
          "
        >
          <h1
            className="
              font-bebas
              text-[clamp(5.5rem,16vw,15rem)]
              leading-[0.76]
              tracking-[-0.025em]
              text-[var(--text-primary)]
            "
          >
            <span className="block">
              BUILT
            </span>

            <span
              className="
                block
                pl-[8vw]
                text-[var(--accent)]
              "
            >
              FOR
            </span>

            <span className="block">
              MORE.
            </span>
          </h1>
        </motion.div>

        {/* =================================================
            LOWER CONTENT
        ================================================== */}

        <div
          className="
            mt-10
            grid
            gap-8
            lg:mt-12
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          {/* Description */}

          <motion.div
            variants={revealVariants}
            className="
              max-w-[460px]
            "
          >
            <p
              className="
                font-manrope
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
                sm:leading-8
              "
            >
              A performance-driven training environment
              built for people who refuse average.
              Train harder. Move better. Become stronger.
            </p>

            {/* CTA ROW */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* Primary CTA */}

              <Link
                to="/free-trial"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-full
                  bg-[var(--accent)]
                  px-6
                  py-4
                  font-manrope
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <span className="relative z-10">
                  Start Training
                </span>

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight
                    size={14}
                  />
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -z-0
                    translate-y-full
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:translate-y-0
                  "
                />
              </Link>

              {/* Secondary CTA */}

              <Link
                to="/programs"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-6
                  py-4
                  font-manrope
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white/[0.08]
                  hover:-translate-y-1
                  dark:border-white/15
                "
              >
                <span>
                  Explore Programs
                </span>

                <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              STATS
          ================================================== */}

          <motion.div
            variants={revealVariants}
            className="
              flex
              items-end
              gap-8
              lg:gap-10
            "
          >
            <HeroStat
              value="24/7"
              label="ACCESS"
            />

            <HeroStat
              value="12K+"
              label="MEMBERS"
            />

            <HeroStat
              value="15+"
              label="COACHES"
            />
          </motion.div>
        </div>

        {/* =================================================
            RIGHT SIDE VERTICAL LABEL
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            absolute
            right-6
            top-1/2
            hidden
            -translate-y-1/2
            xl:block
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-4
            "
          >
            <span
              className="
                h-16
                w-px
                bg-gradient-to-b
                from-transparent
                via-white/30
                to-transparent
              "
            />

            <span
              className="
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-white/35
                [writing-mode:vertical-rl]
              "
            >
              NO EXCUSES · JUST WORK
            </span>

            <span
              className="
                h-16
                w-px
                bg-gradient-to-b
                from-transparent
                via-white/30
                to-transparent
              "
            />
          </div>
        </motion.div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            absolute
            bottom-8
            left-6
            flex
            items-center
            gap-4
            sm:left-8
            lg:left-10
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-md
            "
          >
            <motion.span
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown
                size={14}
                className="text-white/60"
              />
            </motion.span>
          </div>

          <span
            className="
              hidden
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/35
              sm:block
            "
          >
            SCROLL TO EXPLORE
          </span>
        </motion.div>

        {/* =================================================
            PLAY / EXPERIENCE BUTTON
        ================================================== */}

        <motion.button
          variants={revealVariants}
          type="button"
          className="
            absolute
            bottom-8
            right-6
            hidden
            items-center
            gap-4
            lg:flex
          "
        >
          <span
            className="
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/40
            "
          >
            WATCH THE ARENA
          </span>

          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/[0.04]
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
              hover:text-black
            "
          >
            <Play
              size={15}
              fill="currentColor"
              strokeWidth={0}
            />
          </span>
        </motion.button>
      </motion.div>

      {/* ===================================================
          EDGE LINE
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </section>
  );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function HeroStat({ value, label }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="
          font-space
          text-lg
          font-bold
          tracking-tight
          text-[var(--text-primary)]
          sm:text-xl
        "
      >
        {value}
      </span>

      <span
        className="
          font-space
          text-[7px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-[var(--text-secondary)]
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   SMALL ARROW COMPONENT
========================================================= */

function ArrowRightIcon() {
  return (
    <span
      className="
        flex
        h-6
        w-6
        items-center
        justify-center
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      <ArrowUpRight
        size={15}
      />
    </span>
  );
}

export default HomeHero;