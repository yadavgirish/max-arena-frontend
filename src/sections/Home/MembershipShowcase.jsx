import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Crown,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "essential",
    number: "01",
    name: "ESSENTIAL",
    price: "1,499",
    period: "/ MONTH",
    description:
      "Everything you need to build a consistent training habit.",
    features: [
      "Full gym access",
      "Standard training equipment",
      "Locker access",
      "Free fitness assessment",
    ],
    featured: false,
  },
  {
    id: "performance",
    number: "02",
    name: "PERFORMANCE",
    price: "2,499",
    period: "/ MONTH",
    description:
      "Structured training and extra support for serious progress.",
    features: [
      "Everything in Essential",
      "Personalized training plan",
      "Monthly progress tracking",
      "Coach consultation",
      "Priority class access",
    ],
    featured: true,
  },
  {
    id: "elite",
    number: "03",
    name: "ELITE",
    price: "3,999",
    period: "/ MONTH",
    description:
      "A premium training experience built around your goals.",
    features: [
      "Everything in Performance",
      "Personal training sessions",
      "Nutrition guidance",
      "Weekly progress review",
      "Priority coach support",
    ],
    featured: false,
  },
];

function MembershipShowcase() {
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
          top-[25%]
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.025]
          blur-[150px]
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
            gap-10
            lg:grid-cols-[1fr_1.4fr]
            lg:items-end
          "
        >
          {/* LEFT */}

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
                MEMBERSHIPS
              </span>
            </div>

            <span
              className="
                mt-5
                block
                font-space
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[var(--accent)]
              "
            >
              CHOOSE YOUR LEVEL
            </span>
          </div>

          {/* RIGHT */}

          <div>
            <h2
              className="
                font-bebas
                text-[clamp(4.5rem,9vw,9rem)]
                leading-[0.78]
                tracking-[-0.025em]
              "
            >
              INVEST
              <br />

              <span className="opacity-30">
                IN
              </span>{" "}
              YOUR
              <br />

              <span className="text-[var(--accent)]">
                POTENTIAL.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-[500px]
                font-manrope
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
              "
            >
              No complicated packages. No unnecessary
              extras. Choose the level of support that
              matches where you are and where you want
              to go.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PLAN CARDS
        ================================================== */}

        <div
          className="
            mt-16
            grid
            gap-5
            lg:mt-20
            lg:grid-cols-3
            lg:items-stretch
          "
        >
          {plans.map((plan, index) => (
            <MembershipCard
              key={plan.id}
              plan={plan}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            TRUST / NOTE
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
            mt-10
            grid
            gap-6
            border-t
            border-current/10
            pt-8
            sm:grid-cols-3
          "
        >
          <TrustItem
            title="NO LOCK-IN"
            text="Flexible membership options."
          />

          <TrustItem
            title="FREE ASSESSMENT"
            text="Understand your starting point."
          />

          <TrustItem
            title="REAL SUPPORT"
            text="Coaches who actually know your goals."
          />
        </motion.div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[2rem]
            bg-[var(--accent)]
            px-7
            py-12
            text-black
            sm:px-12
            sm:py-16
            lg:px-16
          "
        >
          {/* Decorative circle */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-1/2
              h-[300px]
              w-[300px]
              -translate-y-1/2
              rounded-full
              border
              border-black/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[-20px]
              top-1/2
              h-[180px]
              w-[180px]
              -translate-y-1/2
              rounded-full
              border
              border-black/10
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  font-space
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  opacity-50
                "
              >
                STILL DECIDING?
              </span>

              <h3
                className="
                  mt-4
                  max-w-[700px]
                  font-bebas
                  text-[clamp(3.5rem,7vw,7rem)]
                  leading-[0.82]
                  tracking-[-0.02em]
                "
              >
                START WITH
                <br />
                A FREE TRIAL.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[480px]
                  font-manrope
                  text-sm
                  leading-6
                  opacity-70
                "
              >
                Experience the space, meet the coaches
                and see why MAX ARENA is built differently.
              </p>
            </div>

            <Link
              to="/free-trial"
              className="
                group
                flex
                w-fit
                shrink-0
                items-center
                gap-4
                rounded-full
                bg-black
                px-6
                py-4
                font-manrope
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.17em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <span>
                Claim Free Trial
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
          </div>
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
          right-[-1rem]
          select-none
          font-bebas
          text-[22rem]
          leading-none
          opacity-[0.018]
          sm:text-[32rem]
        "
      >
        05
      </div>
    </section>
  );
}

/* =========================================================
   MEMBERSHIP CARD
========================================================= */

function MembershipCard({
  plan,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
      whileHover={{
        y: plan.featured ? -6 : -4,
      }}
      className={`
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        p-7
        transition-colors
        duration-500
        sm:p-8
        ${
          plan.featured
            ? `
              border-[var(--accent)]
              bg-[var(--accent)]
              text-black
            `
            : `
              border-current/10
              bg-[var(--bg-secondary)]
            `
        }
      `}
    >
      {/* Featured badge */}

      {plan.featured && (
        <div
          className="
            absolute
            right-6
            top-6
            flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-3
            py-2
            text-white
          "
        >
          <Crown
            size={11}
            className="text-[var(--accent)]"
          />

          <span
            className="
              font-space
              text-[7px]
              font-bold
              uppercase
              tracking-[0.18em]
            "
          >
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Number */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className={`
            font-space
            text-[8px]
            font-bold
            tracking-[0.2em]
            ${
              plan.featured
                ? "opacity-50"
                : "opacity-25"
            }
          `}
        >
          {plan.number}
        </span>

        <span
          className={`
            h-px
            w-12
            ${
              plan.featured
                ? "bg-black/20"
                : "bg-current/10"
            }
          `}
        />
      </div>

      {/* Plan name */}

      <h3
        className="
          mt-10
          font-bebas
          text-5xl
          leading-none
          tracking-wide
          sm:text-6xl
        "
      >
        {plan.name}
      </h3>

      {/* Description */}

      <p
        className={`
          mt-5
          min-h-[72px]
          font-manrope
          text-xs
          leading-6
          ${
            plan.featured
              ? "opacity-65"
              : "text-[var(--text-secondary)]"
          }
        `}
      >
        {plan.description}
      </p>

      {/* Price */}

      <div
        className={`
          mt-8
          border-y
          py-6
          ${
            plan.featured
              ? "border-black/15"
              : "border-current/10"
          }
        `}
      >
        <div className="flex items-end gap-2">
          <span
            className="
              font-space
              text-[10px]
              font-bold
              opacity-40
            "
          >
            ₹
          </span>

          <span
            className="
              font-bebas
              text-6xl
              leading-none
              tracking-tight
              sm:text-7xl
            "
          >
            {plan.price}
          </span>

          <span
            className="
              mb-1
              font-space
              text-[8px]
              font-bold
              tracking-[0.15em]
              opacity-40
            "
          >
            {plan.period}
          </span>
        </div>
      </div>

      {/* Features */}

      <div className="mt-7 flex-1">
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
          INCLUDES
        </span>

        <div className="mt-5 space-y-4">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <span
                className={`
                  mt-0.5
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  ${
                    plan.featured
                      ? "bg-black text-[var(--accent)]"
                      : "border border-current/10"
                  }
                `}
              >
                <Check
                  size={11}
                  strokeWidth={2.5}
                />
              </span>

              <span
                className="
                  font-manrope
                  text-xs
                  font-semibold
                  leading-5
                "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}

      <Link
        to={`/join?plan=${plan.id}`}
        className={`
          group/btn
          mt-9
          flex
          w-full
          items-center
          justify-between
          rounded-full
          px-5
          py-4
          font-manrope
          text-[9px]
          font-extrabold
          uppercase
          tracking-[0.16em]
          transition-all
          duration-300
          ${
            plan.featured
              ? `
                bg-black
                text-white
                hover:-translate-y-1
              `
              : `
                border
                border-current/10
                hover:border-[var(--accent)]
                hover:bg-[var(--accent)]
                hover:text-black
              `
          }
        `}
      >
        <span>
          Choose {plan.name}
        </span>

        <span
          className={`
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            transition-transform
            duration-300
            group-hover/btn:translate-x-1
            ${
              plan.featured
                ? "bg-[var(--accent)] text-black"
                : "bg-current/5"
            }
          `}
        >
          <ArrowUpRight size={13} />
        </span>
      </Link>

      {/* Hover glow */}

      <div
        className={`
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-1
          w-0
          transition-all
          duration-700
          group-hover:w-full
          ${
            plan.featured
              ? "bg-black"
              : "bg-[var(--accent)]"
          }
        `}
      />
    </motion.div>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  title,
  text,
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="
          mt-1
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-current/10
        "
      >
        <Check size={12} />
      </span>

      <div>
        <span
          className="
            font-space
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
          "
        >
          {title}
        </span>

        <p
          className="
            mt-1
            font-manrope
            text-[11px]
            leading-5
            text-[var(--text-secondary)]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default MembershipShowcase;