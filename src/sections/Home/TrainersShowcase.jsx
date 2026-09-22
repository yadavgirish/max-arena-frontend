import { motion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const trainers = [
  {
    id: "alex-carter",
    number: "01",
    name: "Alex Carter",
    role: "STRENGTH COACH",
    specialty: "Strength & Performance",
    experience: "08 YEARS",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "maya-reed",
    number: "02",
    name: "Maya Reed",
    role: "FITNESS COACH",
    specialty: "Body Transformation",
    experience: "06 YEARS",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "daniel-stone",
    number: "03",
    name: "Daniel Stone",
    role: "PERFORMANCE COACH",
    specialty: "Athletic Performance",
    experience: "10 YEARS",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1200&q=85",
  },
];

function TrainersShowcase() {
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
          left-[-120px]
          top-[15%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[var(--accent)]
          opacity-[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-100px]
          h-[450px]
          w-[450px]
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
            lg:grid-cols-[0.7fr_1.3fr]
            lg:items-end
          "
        >
          {/* LEFT */}

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
                  bg-[var(--accent)]
                  text-black
                "
              >
                <MoveUpRight size={14} strokeWidth={1.7} />
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
                THE COACHES
              </span>
            </div>

            <div
              className="
                mt-8
                h-px
                w-20
                bg-current/15
              "
            />
          </div>

          {/* RIGHT */}

          <div>
            <h2
              className="
                font-bebas
                text-[clamp(4.5rem,9vw,9rem)]
                leading-[0.8]
                tracking-[-0.025em]
              "
            >
              GUIDANCE
              <br />
              <span className="text-[var(--accent)]">MATTERS.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-[500px]
                font-manrope
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
              "
            >
              The right coach doesn't just count your reps. They understand your
              goals, identify what is holding you back and help you build a
              process that lasts.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            TRAINER GRID
        ================================================== */}

        <div
          className="
            mt-16
            grid
            gap-6
            sm:mt-20
            md:grid-cols-3
            md:gap-5
          "
        >
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.id} trainer={trainer} index={index} />
          ))}
        </div>

        {/* =================================================
            BOTTOM AREA
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
            mt-14
            flex
            flex-col
            gap-7
            border-t
            border-current/10
            pt-8
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
                opacity-30
              "
            >
              WANT PERSONAL GUIDANCE?
            </span>

            <p
              className="
                mt-2
                font-manrope
                text-sm
                font-semibold
              "
            >
              Find a coach who matches your goals.
            </p>
          </div>

          <Link
            to="/trainers"
            className="
              group
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
            <span>Meet All Coaches</span>

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
      </div>

      {/* ===================================================
          GIANT NUMBER
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-5rem]
          left-[-1rem]
          select-none
          font-bebas
          text-[22rem]
          leading-none
          opacity-[0.018]
          sm:text-[32rem]
        "
      >
        04
      </div>
    </section>
  );
}

/* =========================================================
   TRAINER CARD
========================================================= */

function TrainerCard({ trainer, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 55,
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
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/trainers/${trainer.id}`}
        className="
          group
          block
        "
      >
        {/* IMAGE */}

        <div
          className="
            relative
            aspect-[0.78]
            overflow-hidden
            rounded-2xl
            bg-[#151515]
          "
        >
          <motion.img
            src={trainer.image}
            alt={trainer.name}
            loading="lazy"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              h-full
              w-full
              object-cover
              grayscale
              transition-all
              duration-700
              group-hover:grayscale-0
            "
          />

          {/* DARK GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/10
              to-transparent
              opacity-90
            "
          />

          {/* HOVER ACCENT */}

          <div
            className="
              absolute
              inset-0
              bg-[var(--accent)]
              opacity-0
              mix-blend-soft-light
              transition-opacity
              duration-500
              group-hover:opacity-20
            "
          />

          {/* TOP NUMBER */}

          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                font-space
                text-[8px]
                font-bold
                tracking-[0.2em]
                text-white/50
              "
            >
              {trainer.number}
            </span>

            <span
              className="
                h-px
                w-8
                bg-white/20
              "
            />
          </div>

          {/* TOP RIGHT */}

          <div
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/20
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:border-[var(--accent)]
              group-hover:bg-[var(--accent)]
              group-hover:text-black
            "
          >
            <ArrowUpRight size={14} />
          </div>

          {/* CONTENT */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-6
              sm:p-7
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
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
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                "
              >
                {trainer.role}
              </span>
            </div>

            <h3
              className="
                mt-3
                font-bebas
                text-4xl
                leading-none
                tracking-wide
                text-white
                sm:text-5xl
              "
            >
              {trainer.name}
            </h3>

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
                border-t
                border-white/15
                pt-4
              "
            >
              <span
                className="
                  font-manrope
                  text-[9px]
                  font-semibold
                  text-white/55
                "
              >
                {trainer.specialty}
              </span>

              <span
                className="
                  font-space
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                {trainer.experience}
              </span>
            </div>
          </div>

          {/* BOTTOM ACCENT */}

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
        </div>

        {/* BELOW IMAGE */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
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
            VIEW PROFILE
          </span>

          <span
            className="
    flex
    h-6
    w-6
    items-center
    justify-center
    rounded-full
    border
    border-current/10
    font-space
    text-[8px]
    font-bold
    opacity-30
    transition-all
    duration-300
    group-hover:border-[var(--accent)]
    group-hover:text-[var(--accent)]
    group-hover:opacity-100
  "
          >
            IG
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default TrainersShowcase;
