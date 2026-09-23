import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  MoveUpRight,
  Target,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    number: "01",
    title: "Strength",
    subtitle: "BUILD POWER",
    description:
      "Progressive training built around compound movements, raw strength and measurable performance.",
    icon: Dumbbell,
    path: "/programs/strength",
    stat: "STRENGTH",
  },
  {
    number: "02",
    title: "Muscle Building",
    subtitle: "BUILD MASS",
    description:
      "Structured hypertrophy training designed to build serious muscle while keeping progression consistent.",
    icon: Trophy,
    path: "/programs/muscle-building",
    stat: "HYPERTROPHY",
  },
  {
    number: "03",
    title: "Fat Loss",
    subtitle: "GET LEAN",
    description:
      "A smarter approach to conditioning, movement and nutrition-focused training for a stronger physique.",
    icon: Flame,
    path: "/programs/fat-loss",
    stat: "CONDITIONING",
  },
  {
    number: "04",
    title: "Personal Training",
    subtitle: "TRAIN SMARTER",
    description:
      "One-on-one coaching with programming built around your body, goals, lifestyle and performance.",
    icon: Target,
    path: "/programs/personal-training",
    stat: "1 — 1 COACHING",
  },
];

function ProgramsShowcase() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--bg-secondary)]
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
          left-[-15%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.025]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          bottom-[10%]
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-current
          opacity-[0.025]
        "
      />

      {/* ===================================================
          CONTAINER
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
            HEADER
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
            grid
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
          "
        >
          {/* LABEL */}

          <div>
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--text-primary)]
                  text-[var(--bg-primary)]
                "
              >
                <Dumbbell
                  size={14}
                  strokeWidth={1.7}
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
                TRAINING SYSTEMS
              </span>
            </div>

            <div
              className="
                mt-8
                h-px
                w-24
                bg-current/15
              "
            />
          </div>

          {/* HEADING */}

          <div>
            <h2
              className="
                font-bebas
                text-[clamp(4.5rem,9vw,9rem)]
                leading-[0.8]
                tracking-[-0.025em]
              "
            >
              FIND YOUR
              <br />

              <span className="text-[var(--accent)]">
                WEAPON.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[520px]
                font-manrope
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
              "
            >
              Different goals require different
              approaches. Choose your direction,
              commit to the process and let the work
              speak.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PROGRAM GRID
        ================================================== */}

        <div
          className="
            mt-16
            grid
            gap-px
            overflow-hidden
            rounded-2xl
            border
            border-current/10
            bg-current/10
            sm:mt-20
            lg:grid-cols-2
          "
        >
          {programs.map((program, index) => (
            <ProgramCard
              key={program.number}
              program={program}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <span
              className="
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                opacity-35
              "
            >
              NOT SURE WHERE TO START?
            </span>

            <p
              className="
                mt-2
                font-manrope
                text-sm
                font-semibold
              "
            >
              Talk to our team and find your path.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              group
              flex
              w-fit
              items-center
              gap-4
              rounded-full
              border
              border-current/15
              px-6
              py-4
              font-manrope
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
              hover:text-black
            "
          >
            <span>
              Talk To Us
            </span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-current/15
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ===================================================
          BACKGROUND NUMBER
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-6rem]
          left-[-1rem]
          select-none
          font-bebas
          text-[22rem]
          leading-none
          opacity-[0.02]
          sm:text-[32rem]
        "
      >
        02
      </div>
    </section>
  );
}

/* =========================================================
   PROGRAM CARD
========================================================= */

function ProgramCard({
  program,
  index,
}) {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
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
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={program.path}
        className="
          group
          relative
          flex
          min-h-[420px]
          flex-col
          overflow-hidden
          bg-[var(--bg-primary)]
          p-7
          transition-all
          duration-500
          sm:p-9
          lg:min-h-[470px]
          lg:p-10
        "
      >
        {/* =================================================
            HOVER GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-80px]
            top-[-80px]
            h-64
            w-64
            rounded-full
            bg-[var(--accent)]
            opacity-0
            blur-[90px]
            transition-opacity
            duration-700
            group-hover:opacity-[0.09]
          "
        />

        {/* =================================================
            TOP ROW
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-start
            justify-between
          "
        >
          <span
            className="
              font-space
              text-[9px]
              font-bold
              tracking-[0.25em]
              opacity-30
            "
          >
            {program.number}
          </span>

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-current/10
              transition-all
              duration-500
              group-hover:border-[var(--accent)]
              group-hover:bg-[var(--accent)]
              group-hover:text-black
            "
          >
            <Icon
              size={19}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mt-auto
          "
        >
          <div
            className="
              mb-4
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
              {program.subtitle}
            </span>
          </div>

          <h3
            className="
              font-bebas
              text-[clamp(3.5rem,6vw,6rem)]
              leading-[0.82]
              tracking-wide
              transition-transform
              duration-500
              group-hover:translate-x-2
            "
          >
            {program.title}
          </h3>

          <p
            className="
              mt-6
              max-w-[430px]
              font-manrope
              text-xs
              leading-6
              text-[var(--text-secondary)]
              sm:text-sm
            "
          >
            {program.description}
          </p>
        </div>

        {/* =================================================
            BOTTOM ROW
        ================================================== */}

        <div
          className="
            relative
            z-10
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-current/10
            pt-5
          "
        >
          <span
            className="
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              opacity-30
            "
          >
            {program.stat}
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
              border-current/10
              transition-all
              duration-500
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:border-[var(--accent)]
              group-hover:bg-[var(--accent)]
              group-hover:text-black
            "
          >
            <MoveUpRight size={15} />
          </span>
        </div>

        {/* =================================================
            SIDE NUMBER
        ================================================== */}

        <span
          className="
            pointer-events-none
            absolute
            bottom-[-25px]
            right-[-5px]
            font-bebas
            text-[12rem]
            leading-none
            opacity-[0.025]
            transition-all
            duration-700
            group-hover:translate-x-[-10px]
            group-hover:opacity-[0.05]
          "
        >
          {program.number}
        </span>

        {/* =================================================
            ACCENT LINE
        ================================================== */}

        <span
          className="
            absolute
            bottom-0
            left-0
            h-0.5
            w-0
            bg-[var(--accent)]
            transition-all
            duration-700
            group-hover:w-full
          "
        />
      </Link>
    </motion.div>
  );
}

export default ProgramsShowcase;