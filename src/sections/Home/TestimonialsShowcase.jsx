import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "MAX ARENA completely changed the way I approach training. I finally have structure, accountability and a place that makes me want to show up.",
    name: "Rohan Mehta",
    role: "MEMBER / 2 YEARS",
    result: "−12 KG",
  },
  {
    quote:
      "The biggest difference is the environment. Everyone here is focused, the coaches actually care, and every session feels purposeful.",
    name: "Ananya Shah",
    role: "MEMBER / 1 YEAR",
    result: "+18% STRENGTH",
  },
  {
    quote:
      "I stopped chasing random workouts and started following a real plan. My progress has been completely different since joining.",
    name: "Arjun Kapoor",
    role: "MEMBER / 14 MONTHS",
    result: "+24% PERFORMANCE",
  },
];

function TestimonialsShowcase() {
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
        sm:py-28
        lg:px-10
        lg:py-32
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.018]
          blur-[140px]
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

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-0
          h-full
          w-px
          bg-current/5
        "
      />

      {/* CONTAINER */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
        "
      >
        {/* HEADER */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            gap-6
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
                MEMBER STORIES
              </span>
            </div>

            <h2
              className="
                mt-6
                font-bebas
                text-[clamp(4rem,8vw,8rem)]
                leading-[0.8]
                tracking-[-0.02em]
              "
            >
              REAL PEOPLE.
              <br />

              <span className="text-[var(--accent)]">
                REAL PROGRESS.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[330px]
              font-manrope
              text-sm
              leading-7
              text-[var(--text-secondary)]
            "
          >
            No shortcuts. No overnight transformations.
            Just people showing up consistently and
            getting better.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}

        <div
          className="
            mt-12
            grid
            gap-4
            lg:grid-cols-3
          "
        >
          {testimonials.map(
            (testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            )
          )}
        </div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-current/10
            pt-8
            sm:flex-row
          "
        >
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
            YOUR STORY COULD BE NEXT
          </span>

          <Link
            to="/join"
            className="
              group
              flex
              items-center
              gap-3
              font-manrope
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.18em]
            "
          >
            <span>
              Start Your Journey
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
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* NUMBER */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-4rem]
          right-[-1rem]
          select-none
          font-bebas
          text-[20rem]
          leading-none
          opacity-[0.018]
          sm:text-[28rem]
        "
      >
        07
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
  index,
}) {
  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        flex
        min-h-[340px]
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        border-current/10
        bg-[var(--bg-secondary)]
        p-7
        transition-colors
        duration-300
        hover:border-[var(--accent)]/30
        sm:p-8
      "
    >
      {/* QUOTE ICON */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[var(--accent)]
          text-black
        "
      >
        <Quote
          size={17}
          fill="currentColor"
        />
      </div>

      {/* QUOTE */}

      <p
        className="
          mt-8
          flex-1
          font-manrope
          text-sm
          font-medium
          leading-7
          text-[var(--text-primary)]
          sm:text-[15px]
        "
      >
        “{testimonial.quote}”
      </p>

      {/* RESULT */}

      <div
        className="
          mt-8
          flex
          items-center
          justify-between
          border-t
          border-current/10
          pt-5
        "
      >
        <div>
          <span
            className="
              block
              font-manrope
              text-xs
              font-extrabold
            "
          >
            {testimonial.name}
          </span>

          <span
            className="
              mt-1
              block
              font-space
              text-[7px]
              font-bold
              uppercase
              tracking-[0.18em]
              opacity-35
            "
          >
            {testimonial.role}
          </span>
        </div>

        <span
          className="
            font-bebas
            text-3xl
            leading-none
            text-[var(--accent)]
          "
        >
          {testimonial.result}
        </span>
      </div>

      {/* HOVER LINE */}

      <span
        className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-0
          bg-[var(--accent)]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}

export default TestimonialsShowcase;