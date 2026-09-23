import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CircleDot,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Premium strength & conditioning equipment",
  "Expert coaches and structured programming",
  "Dedicated training zones",
  "Performance-focused environment",
];

function ArenaExperience() {
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
          BACKGROUND
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.025]
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-px
          bg-current/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-0
          h-full
          w-px
          bg-current/5
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            gap-5
            border-b
            border-current/10
            pb-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--accent)]
                  shadow-[0_0_15px_var(--accent)]
                "
              />

              <span
                className="
                  font-space
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  opacity-40
                "
              >
                THE EXPERIENCE
              </span>
            </div>
          </div>

          <span
            className="
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              opacity-25
            "
          >
            MAX ARENA / 03
          </span>
        </motion.div>

        {/* =================================================
            MAIN STORY
        ================================================== */}

        <div
          className="
            mt-14
            grid
            gap-16
            lg:grid-cols-[1fr_1.35fr]
            lg:gap-24
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
            "
          >
            <span
              className="
                font-space
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[var(--accent)]
              "
            >
              MORE THAN A GYM
            </span>

            <h2
              className="
                mt-6
                font-bebas
                text-[clamp(4rem,8vw,8rem)]
                leading-[0.8]
                tracking-[-0.02em]
              "
            >
              TRAIN
              <br />

              <span className="opacity-35">
                WITH
              </span>

              <br />

              INTENT.
            </h2>

            <p
              className="
                mt-8
                max-w-[390px]
                font-manrope
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
              "
            >
              Everything inside MAX ARENA has one
              purpose — to help you train with more
              focus, more structure and more intent.
            </p>

            {/* CTA */}

            <Link
              to="/about"
              className="
                group
                mt-9
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-[var(--text-primary)]
                px-6
                py-4
                font-manrope
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.17em]
                text-[var(--bg-primary)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <span>
                Explore Our Story
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--accent)]
                  text-black
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL COMPOSITION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[520px]
              sm:min-h-[620px]
            "
          >
            {/* Main visual frame */}

            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-[#111]
              "
            >
              {/* =================================================
                  VISUAL PLACEHOLDER
                  Replace with real gym image later
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_65%_35%,rgba(182,255,0,0.18),transparent_25%),linear-gradient(135deg,#181818_0%,#080808_48%,#121212_100%)]
                "
              />

              {/* Architectural lines */}

              <div
                className="
                  absolute
                  left-[12%]
                  top-0
                  h-full
                  w-px
                  bg-white/10
                "
              />

              <div
                className="
                  absolute
                  left-[38%]
                  top-0
                  h-full
                  w-px
                  bg-white/5
                "
              />

              <div
                className="
                  absolute
                  right-[18%]
                  top-0
                  h-full
                  w-px
                  bg-white/5
                "
              />

              <div
                className="
                  absolute
                  left-0
                  top-[28%]
                  h-px
                  w-full
                  bg-white/5
                "
              />

              <div
                className="
                  absolute
                  left-0
                  top-[70%]
                  h-px
                  w-full
                  bg-white/5
                "
              />

              {/* Giant ARENA typography */}

              <div
                className="
                  absolute
                  left-[8%]
                  top-[18%]
                  select-none
                  font-bebas
                  text-[clamp(7rem,17vw,17rem)]
                  leading-[0.7]
                  tracking-[-0.03em]
                  text-white/[0.035]
                "
              >
                ARENA
              </div>

              {/* Accent circle */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  right-[12%]
                  top-[16%]
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--accent)]/30
                  sm:h-36
                  sm:w-36
                "
              >
                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[var(--accent)]
                    shadow-[0_0_20px_var(--accent)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-3
                    rounded-full
                    border
                    border-dashed
                    border-[var(--accent)]/20
                  "
                />
              </motion.div>

              {/* Center statement */}

              <div
                className="
                  absolute
                  bottom-[14%]
                  left-[8%]
                  max-w-[380px]
                "
              >
                <span
                  className="
                    font-space
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[var(--accent)]
                  "
                >
                  BUILT FOR THE COMMITTED
                </span>

                <p
                  className="
                    mt-4
                    font-manrope
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  The environment matters.
                  <br />
                  We built one that makes
                  <br />
                  you want to work.
                </p>
              </div>

              {/* Corner index */}

              <div
                className="
                  absolute
                  right-6
                  bottom-6
                  font-space
                  text-[8px]
                  font-bold
                  tracking-[0.2em]
                  text-white/30
                "
              >
                19° 42' / PERFORMANCE
              </div>
            </motion.div>

            {/* Floating label */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                absolute
                -right-2
                top-[12%]
                z-20
                hidden
                rounded-full
                border
                border-current/10
                bg-[var(--bg-primary)]
                px-5
                py-3
                shadow-2xl
                sm:right-[-20px]
                sm:block
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <CircleDot
                  size={13}
                  className="text-[var(--accent)]"
                />

                <span
                  className="
                    font-space
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                  "
                >
                  PERFORMANCE FIRST
                </span>
              </div>
            </motion.div>

            {/* Floating number */}

            <div
              className="
                absolute
                -bottom-5
                -left-3
                z-20
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-[var(--accent)]
                text-black
                shadow-2xl
                sm:-left-5
              "
            >
              <div className="text-center">
                <span
                  className="
                    block
                    font-bebas
                    text-4xl
                    leading-none
                  "
                >
                  100%
                </span>

                <span
                  className="
                    mt-1
                    block
                    font-space
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                  "
                >
                  COMMITMENT
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            BENEFITS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-24
            border-t
            border-current/10
            pt-10
            sm:mt-32
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.65fr_1.35fr]
              lg:items-start
            "
          >
            {/* Label */}

            <div>
              <span
                className="
                  font-space
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  opacity-35
                "
              >
                WHY MAX ARENA
              </span>

              <p
                className="
                  mt-3
                  max-w-[220px]
                  font-manrope
                  text-xs
                  leading-6
                  text-[var(--text-secondary)]
                "
              >
                Everything you need to take your
                training seriously.
              </p>
            </div>

            {/* Benefit list */}

            <div
              className="
                grid
                gap-px
                overflow-hidden
                rounded-2xl
                border
                border-current/10
                bg-current/10
                sm:grid-cols-2
              "
            >
              {benefits.map(
                (benefit, index) => (
                  <motion.div
                    key={benefit}
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      bg-[var(--bg-primary)]
                      p-6
                      transition-colors
                      duration-300
                      hover:bg-[var(--bg-secondary)]
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-current/10
                        transition-all
                        duration-300
                        group-hover:border-[var(--accent)]
                        group-hover:bg-[var(--accent)]
                        group-hover:text-black
                      "
                    >
                      <Check
                        size={14}
                        strokeWidth={2}
                      />
                    </span>

                    <span
                      className="
                        font-manrope
                        text-xs
                        font-bold
                        leading-5
                      "
                    >
                      {benefit}
                    </span>

                    <span
                      className="
                        ml-auto
                        font-space
                        text-[8px]
                        font-bold
                        opacity-20
                      "
                    >
                      0{index + 1}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FINAL MICRO CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-16
            flex
            items-center
            justify-center
          "
        >
          <Link
            to="/gallery"
            className="
              group
              flex
              items-center
              gap-4
              font-manrope
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              opacity-50
              transition-opacity
              duration-300
              hover:opacity-100
            "
          >
            <span>
              See The Arena
            </span>

            <span
              className="
                flex
                h-9
                w-9
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
              <MoveUpRight size={14} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ===================================================
          GIANT BACKGROUND NUMBER
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-2rem]
          top-[30%]
          select-none
          font-bebas
          text-[20rem]
          leading-none
          opacity-[0.018]
          sm:text-[30rem]
        "
      >
        03
      </div>
    </section>
  );
}

export default ArenaExperience;