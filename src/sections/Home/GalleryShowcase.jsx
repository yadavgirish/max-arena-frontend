import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Maximize2,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    category: "TRAINING FLOOR",
    title: "BUILT TO PERFORM",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 2,
    category: "STRENGTH",
    title: "NO SHORTCUTS",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
    size: "small",
  },
  {
    id: 3,
    category: "COMMUNITY",
    title: "TRAIN TOGETHER",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85",
    size: "small",
  },
  {
    id: 4,
    category: "PERFORMANCE",
    title: "PUSH FURTHER",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85",
    size: "wide",
  },
];

function GalleryShowcase() {
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
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]
          opacity-[0.018]
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
            flex
            flex-col
            gap-8
            border-b
            border-current/10
            pb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
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
                INSIDE THE ARENA
              </span>
            </div>

            <h2
              className="
                mt-7
                font-bebas
                text-[clamp(4.5rem,9vw,9rem)]
                leading-[0.78]
                tracking-[-0.025em]
              "
            >
              SEE THE
              <br />

              <span className="text-[var(--accent)]">
                DIFFERENCE.
              </span>
            </h2>
          </div>

          <div
            className="
              max-w-[420px]
            "
          >
            <p
              className="
                font-manrope
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
              "
            >
              A space designed around movement,
              performance and people who are serious
              about becoming better.
            </p>

            <Link
              to="/gallery"
              className="
                group
                mt-7
                flex
                w-fit
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
                Explore Full Gallery
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
          </div>
        </motion.div>

        {/* =================================================
            GALLERY GRID
        ================================================== */}

        <div
          className="
            mt-12
            grid
            gap-4
            sm:mt-16
            sm:grid-cols-2
            lg:grid-cols-12
            lg:grid-rows-[340px_340px]
          "
        >
          {/* ===============================================
              LARGE IMAGE
          ================================================ */}

          <GalleryCard
            item={galleryItems[0]}
            className="
              sm:col-span-2
              lg:col-span-7
              lg:row-span-2
            "
          />

          {/* ===============================================
              SMALL IMAGE 1
          ================================================ */}

          <GalleryCard
            item={galleryItems[1]}
            className="
              lg:col-span-5
              lg:row-span-1
            "
          />

          {/* ===============================================
              SMALL IMAGE 2
          ================================================ */}

          <GalleryCard
            item={galleryItems[2]}
            className="
              lg:col-span-5
              lg:row-span-1
            "
          />

          {/* ===============================================
              WIDE IMAGE
          ================================================ */}

          <GalleryCard
            item={galleryItems[3]}
            className="
              sm:col-span-2
              lg:col-span-12
              lg:row-span-1
            "
          />
        </div>

        {/* =================================================
            BOTTOM STATEMENT
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-8
            border-t
            border-current/10
            pt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            <span
              className="
                font-bebas
                text-5xl
                leading-none
                text-[var(--accent)]
              "
            >
              24/7
            </span>

            <span
              className="
                h-10
                w-px
                bg-current/10
              "
            />

            <div>
              <span
                className="
                  block
                  font-space
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  opacity-40
                "
              >
                ACCESS
              </span>

              <span
                className="
                  mt-1
                  block
                  font-manrope
                  text-xs
                  font-semibold
                "
              >
                Train on your schedule.
              </span>
            </div>
          </div>

          <Link
            to="/join"
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
            <span>
              Enter The Arena
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
        06
      </div>
    </section>
  );
}

/* =========================================================
   GALLERY CARD
========================================================= */

function GalleryCard({
  item,
  className = "",
}) {
  return (
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        min-h-[320px]
        overflow-hidden
        rounded-[1.5rem]
        bg-[#151515]
        ${className}
      `}
    >
      {/* IMAGE */}

      <motion.img
        src={item.image}
        alt={item.title}
        loading="lazy"
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          grayscale
          transition-all
          duration-700
          group-hover:grayscale-0
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
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

      {/* TOP CONTENT */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          flex
          items-center
          justify-between
        "
      >
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
              shadow-[0_0_12px_var(--accent)]
            "
          />

          <span
            className="
              font-space
              text-[7px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/60
            "
          >
            {item.category}
          </span>
        </div>

        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/15
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
          <Maximize2 size={13} />
        </span>
      </div>

      {/* BOTTOM CONTENT */}

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
            items-end
            justify-between
            gap-5
          "
        >
          <div>
            <h3
              className="
                font-bebas
                text-4xl
                leading-none
                tracking-wide
                text-white
                sm:text-5xl
              "
            >
              {item.title}
            </h3>

            <div
              className="
                mt-4
                h-px
                w-14
                bg-[var(--accent)]
                transition-all
                duration-500
                group-hover:w-24
              "
            />
          </div>

          <span
            className="
              hidden
              font-space
              text-[8px]
              font-bold
              tracking-[0.2em]
              text-white/30
              sm:block
            "
          >
            0{item.id}
          </span>
        </div>
      </div>

      {/* BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[1.5rem]
          border
          border-white/10
          transition-colors
          duration-500
          group-hover:border-[var(--accent)]/40
        "
      />
    </motion.div>
  );
}

export default GalleryShowcase;