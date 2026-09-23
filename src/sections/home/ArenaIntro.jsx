import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  MoveUpRight,
  Zap,
} from "lucide-react";

function ArenaIntro() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 45,
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

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
        px-6
        py-24
        text-[var(--text-primary)]
        sm:px-8
        sm:py-32
        lg:px-10
        lg:py-40
      "
    >
      {/* ===================================================
          BACKGROUND DETAILS
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-[-150px]
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-current
          opacity-[0.025]
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
        "
      >
        {/* =================================================
            TOP LABEL
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            mb-14
            flex
            items-center
            justify-between
            border-b
            border-current/10
            pb-5
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[var(--accent)]
                text-black
              "
            >
              <Zap
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
              />
            </span>

            <span
              className="
                font-space
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                opacity-50
              "
            >
              THE ARENA
            </span>
          </div>

          <span
            className="
              hidden
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              opacity-30
              sm:block
            "
          >
            01 / 06
          </span>
        </motion.div>

        {/* =================================================
            INTRO GRID
        ================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          {/* LEFT SIDE */}

          <motion.div
            variants={revealVariants}
            className="
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <p
                className="
                  max-w-[310px]
                  font-manrope
                  text-sm
                  leading-7
                  text-[var(--text-secondary)]
                  sm:text-base
                "
              >
                MAX ARENA is more than a place to
                train. It's a space designed around
                discipline, progression and the people
                who show up every day.
              </p>
            </div>

            {/* MINI INFO */}

            <div
              className="
                mt-12
                hidden
                items-center
                gap-4
                lg:flex
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-current/10
                "
              >
                <Dumbbell
                  size={17}
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <p
                  className="
                    font-space
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    opacity-35
                  "
                >
                  TRAIN WITH PURPOSE
                </p>

                <p
                  className="
                    mt-1
                    font-manrope
                    text-xs
                    font-semibold
                  "
                >
                  Every rep has a reason.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            variants={revealVariants}
          >
            <h2
              className="
                font-bebas
                text-[clamp(4rem,9vw,9rem)]
                leading-[0.82]
                tracking-[-0.02em]
              "
            >
              WHERE
              <br />

              <span className="text-[var(--accent)]">
                POTENTIAL
              </span>

              <br />

              BECOMES
              <br />

              POWER.
            </h2>
          </motion.div>
        </div>

        {/* =================================================
            LARGE DIVIDER
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            my-16
            h-px
            w-full
            bg-current/10
            sm:my-24
          "
        />

        {/* =================================================
            BOTTOM CONTENT
        ================================================== */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1fr_1.5fr]
            lg:items-end
          "
        >
          {/* STATEMENT */}

          <motion.div
            variants={revealVariants}
          >
            <span
              className="
                font-space
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[var(--accent)]
              "
            >
              BUILT DIFFERENT
            </span>

            <p
              className="
                mt-5
                max-w-[380px]
                font-display
                text-2xl
                leading-[1.35]
                opacity-90
                sm:text-3xl
              "
            >
              “The goal isn't simply to look
              stronger. It's to become harder
              to break.”
            </p>
          </motion.div>

          {/* FEATURE CARDS */}

          <motion.div
            variants={revealVariants}
            className="
              grid
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-current/10
              bg-current/10
              sm:grid-cols-3
            "
          >
            <FeatureCard
              number="01"
              title="Performance"
              description="Train with purpose and measurable progression."
            />

            <FeatureCard
              number="02"
              title="Community"
              description="Surround yourself with people who keep moving."
            />

            <FeatureCard
              number="03"
              title="Progress"
              description="Build strength that compounds over time."
            />
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            mt-14
            flex
            flex-col
            gap-6
            border-t
            border-current/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[var(--accent)]
                shadow-[0_0_14px_var(--accent)]
              "
            />

            <span
              className="
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                opacity-40
              "
            >
              YOUR NEXT LEVEL STARTS HERE
            </span>
          </div>

          <motion.a
            href="/about"
            whileHover={{
              x: 5,
            }}
            className="
              group
              flex
              items-center
              gap-3
              font-manrope
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
            "
          >
            <span>
              Discover MAX ARENA
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-current/15
                transition-all
                duration-300
                group-hover:border-[var(--accent)]
                group-hover:bg-[var(--accent)]
                group-hover:text-black
              "
            >
              <ArrowUpRight size={14} />
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ===================================================
          GIANT BACKGROUND NUMBER
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-5rem]
          right-[-1rem]
          select-none
          font-bebas
          text-[22rem]
          leading-none
          opacity-[0.025]
          sm:text-[30rem]
        "
      >
        01
      </div>
    </section>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  number,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
        p-6
        transition-colors
        duration-300
        hover:bg-[var(--bg-secondary)]
        sm:p-7
      "
    >
      {/* Hover accent */}

      <span
        className="
          absolute
          left-0
          top-0
          h-0
          w-0.5
          bg-[var(--accent)]
          transition-all
          duration-500
          group-hover:h-full
        "
      />

      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <span
          className="
            font-space
            text-[8px]
            font-bold
            tracking-[0.2em]
            opacity-30
          "
        >
          {number}
        </span>

        <MoveUpRight
          size={15}
          strokeWidth={1.5}
          className="
            opacity-20
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:opacity-100
          "
        />
      </div>

      <h3
        className="
          mt-12
          font-manrope
          text-sm
          font-extrabold
          uppercase
          tracking-[0.08em]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          font-manrope
          text-xs
          leading-6
          text-[var(--text-secondary)]
        "
      >
        {description}
      </p>

      <div
        className="
          mt-8
          h-px
          w-8
          bg-current/20
          transition-all
          duration-500
          group-hover:w-16
          group-hover:bg-[var(--accent)]
        "
      />
    </motion.div>
  );
}

export default ArenaIntro;