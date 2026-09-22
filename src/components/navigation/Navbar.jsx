import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Link,
  useLocation,
} from "react-router-dom";

const programLinks = [
  {
    name: "Strength",
    slug: "strength",
  },
  {
    name: "Muscle Building",
    slug: "muscle-building",
  },
  {
    name: "Fat Loss",
    slug: "fat-loss",
  },
  {
    name: "Personal Training",
    slug: "personal-training",
  },
];

const mainLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Memberships",
    path: "/memberships",
  },
  {
    name: "Classes",
    path: "/classes",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isProgramsActive =
    location.pathname === "/programs" ||
    location.pathname.startsWith("/programs/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[90]">
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            className="group relative z-[95] flex items-center"
          >
            <div>
              <p className="font-bebas text-3xl leading-none tracking-[0.08em] text-white">
                MAX
              </p>

              <p className="font-space text-[7px] font-bold tracking-[0.38em] text-white/35">
                ARENA
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* PROGRAMS */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setProgramsOpen((previous) => !previous)
                }
                className={`group flex items-center gap-1.5 py-5 font-space text-[9px] font-bold uppercase tracking-[0.15em] transition-colors ${
                  isProgramsActive
                    ? "text-white"
                    : "text-white/45 hover:text-white"
                }`}
              >
                Programs

                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {programsOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute left-1/2 top-full w-64 -translate-x-1/2 border border-white/10 bg-[#080808] p-2 shadow-2xl"
                  >
                    <Link
                      to="/programs"
                      className="group flex items-center justify-between border-b border-white/10 px-4 py-4"
                    >
                      <span className="font-manrope text-xs font-semibold text-white">
                        All Programs
                      </span>

                      <ArrowRight
                        size={14}
                        className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </Link>

                    {programLinks.map((program) => (
                      <Link
                        key={program.slug}
                        to={`/programs/${program.slug}`}
                        className="group flex items-center justify-between px-4 py-3 transition-colors hover:bg-white/[0.04]"
                      >
                        <span className="font-manrope text-xs text-white/45 transition-colors group-hover:text-white">
                          {program.name}
                        </span>

                        <ArrowRight
                          size={13}
                          className="text-white/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/40"
                        />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainLinks.map((link) => {
              const active =
                location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-5 font-space text-[9px] font-bold uppercase tracking-[0.15em] transition-colors ${
                    active
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute bottom-1 left-0 right-0 h-px bg-white"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              to="/free-trial"
              className="group flex items-center gap-3 bg-white px-5 py-3 font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Free Trial

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            className="relative z-[95] flex h-11 w-11 items-center justify-center border border-white/10 text-white lg:hidden"
          >
            {menuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "-100%",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-[80] overflow-y-auto bg-[#050505] lg:hidden"
          >
            <div className="flex min-h-full flex-col px-5 pb-10 pt-28 sm:px-8">
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                Navigation
              </p>

              <div className="mt-8">
                <Link
                  to="/"
                  className={`block border-b border-white/10 py-4 font-bebas text-5xl uppercase tracking-wide ${
                    location.pathname === "/"
                      ? "text-white"
                      : "text-white/35"
                  }`}
                >
                  Home
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setProgramsOpen((previous) => !previous)
                  }
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left"
                >
                  <span
                    className={`font-bebas text-5xl uppercase tracking-wide ${
                      isProgramsActive
                        ? "text-white"
                        : "text-white/35"
                    }`}
                  >
                    Programs
                  </span>

                  <ChevronDown
                    size={20}
                    className={`text-white/40 transition-transform duration-300 ${
                      programsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <Link
                        to="/programs"
                        className="block border-b border-white/5 py-3 pl-3 font-space text-[9px] font-bold uppercase tracking-[0.15em] text-white/45"
                      >
                        All Programs
                      </Link>

                      {programLinks.map((program) => (
                        <Link
                          key={program.slug}
                          to={`/programs/${program.slug}`}
                          className="block border-b border-white/5 py-3 pl-3 font-space text-[9px] font-bold uppercase tracking-[0.15em] text-white/35"
                        >
                          {program.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {mainLinks.map((link) => {
                  const active =
                    location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block border-b border-white/10 py-4 font-bebas text-5xl uppercase tracking-wide ${
                        active
                          ? "text-white"
                          : "text-white/35"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  to="/free-trial"
                  className="group flex w-full items-center justify-between bg-white px-5 py-5 font-manrope text-[10px] font-bold uppercase tracking-[0.12em] text-black"
                >
                  Book Free Trial

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <p className="mt-5 font-space text-[7px] uppercase tracking-[0.15em] text-white/20">
                  MAX ARENA — TRAIN WITH PURPOSE
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;