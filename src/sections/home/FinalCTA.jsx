import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-20
        text-white
        sm:px-8
        sm:py-28
        lg:px-10
        lg:py-32
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
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.08]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]
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
          bg-white/10
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
          bg-white/10
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
            MAIN CTA
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-center
          "
        >
          <div
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              px-4
              py-2
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
                text-white/50
              "
            >
              YOUR NEXT LEVEL STARTS HERE
            </span>
          </div>

          <h2
            className="
              mx-auto
              mt-8
              max-w-[1000px]
              font-bebas
              text-[clamp(5rem,13vw,13rem)]
              leading-[0.72]
              tracking-[-0.03em]
            "
          >
            STOP
            <br />

            <span className="text-[var(--accent)]">
              WAITING.
            </span>

            <br />

            START.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[480px]
              font-manrope
              text-sm
              leading-7
              text-white/45
              sm:text-base
            "
          >
            You don't need to be ready.
            <br />
            You just need to start.
          </p>

          {/* CTA BUTTONS */}

          <div
            className="
              mt-9
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              to="/free-trial"
              className="
                group
                flex
                items-center
                gap-4
                rounded-full
                bg-[var(--accent)]
                px-7
                py-4
                font-manrope
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <span>
                Book Free Trial
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-[var(--accent)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </Link>

            <Link
              to="/contact"
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                px-7
                py-4
                font-manrope
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-white
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/5
              "
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* =================================================
            CONTACT INFO
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            delay: 0.15,
          }}
          className="
            mt-20
            grid
            gap-px
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/10
            bg-white/10
            sm:grid-cols-3
          "
        >
          <ContactItem
            icon={MapPin}
            label="VISIT US"
            value="Mumbai, Maharashtra"
          />

          <ContactItem
            icon={Phone}
            label="CALL US"
            value="+91 98765 43210"
          />

          <ContactItem
            icon={Mail}
            label="EMAIL US"
            value="hello@maxarena.in"
          />
        </motion.div>

        {/* =================================================
            MINI FOOTER
        ================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            MAX ARENA / EST. 2026
          </span>

          <div
            className="
              flex
              items-center
              gap-6
            "
          >
            <Link
              to="/about"
              className="
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/30
                transition-colors
                hover:text-white
              "
            >
              About
            </Link>

            <Link
              to="/programs"
              className="
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/30
                transition-colors
                hover:text-white
              "
            >
              Programs
            </Link>

            <Link
              to="/contact"
              className="
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/30
                transition-colors
                hover:text-white
              "
            >
              Contact
            </Link>
          </div>

          <span
            className="
              font-space
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/20
            "
          >
            BUILT TO BE BETTER
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-5
        bg-black
        p-6
        transition-colors
        duration-300
        hover:bg-white/[0.03]
        sm:p-7
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          transition-all
          duration-300
          group-hover:border-[var(--accent)]
          group-hover:bg-[var(--accent)]
          group-hover:text-black
        "
      >
        <Icon
          size={15}
          strokeWidth={1.5}
        />
      </div>

      <div>
        <span
          className="
            block
            font-space
            text-[7px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-white/25
          "
        >
          {label}
        </span>

        <span
          className="
            mt-1
            block
            font-manrope
            text-xs
            font-semibold
            text-white/75
          "
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export default FinalCTA;