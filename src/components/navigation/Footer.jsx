import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const exploreLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Programs",
    path: "/programs",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Memberships",
    path: "/memberships",
  },
];

const experienceLinks = [
  {
    name: "Classes",
    path: "/classes",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Free Trial",
    path: "/free-trial",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      {/* MAIN FOOTER */}
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          {/* TOP */}
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr_1fr] lg:gap-10">
            {/* BRAND */}
            <div>
              <Link
                to="/"
                className="inline-block"
              >
                <p className="font-bebas text-6xl leading-[0.8] tracking-[0.06em] text-white sm:text-7xl">
                  MAX
                </p>

                <p className="mt-2 font-space text-[9px] font-bold tracking-[0.42em] text-white/30">
                  ARENA
                </p>
              </Link>

              <p className="mt-8 max-w-sm font-manrope text-sm leading-relaxed text-white/35">
                A training environment built around performance,
                consistency and measurable progress.
              </p>

              <Link
                to="/free-trial"
                className="group mt-8 inline-flex items-center gap-3 border border-white/15 px-5 py-4 font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white/35 hover:bg-white hover:text-black"
              >
                Start Your Journey

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                Explore
              </p>

              <nav className="mt-6 flex flex-col items-start gap-4">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group font-manrope text-xs text-white/40 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.name}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* EXPERIENCE */}
            <div>
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                Experience
              </p>

              <nav className="mt-6 flex flex-col items-start gap-4">
                {experienceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group font-manrope text-xs text-white/40 transition-colors hover:text-white"
                  >
                    <span className="relative">
                      {link.name}

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                Contact
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    strokeWidth={1.4}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <div>
                    <p className="font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
                      LOCATION
                    </p>

                    <p className="mt-1 font-manrope text-xs leading-relaxed text-white/40">
                      Mumbai, Maharashtra
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+919876543210"
                  className="group flex items-start gap-3"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.4}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <div>
                    <p className="font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
                      PHONE
                    </p>

                    <p className="mt-1 font-manrope text-xs text-white/40 transition-colors group-hover:text-white">
                      +91 98765 43210
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@maxarena.in"
                  className="group flex items-start gap-3"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.4}
                    className="mt-0.5 shrink-0 text-white/30"
                  />

                  <div>
                    <p className="font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
                      EMAIL
                    </p>

                    <p className="mt-1 break-all font-manrope text-xs text-white/40 transition-colors group-hover:text-white">
                      hello@maxarena.in
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* BIG BRAND */}
          <div className="mt-20 overflow-hidden border-t border-white/10 pt-8 sm:mt-24">
            <p className="select-none whitespace-nowrap font-bebas text-[24vw] leading-[0.7] tracking-[-0.03em] text-white/[0.035]">
              MAX ARENA
            </p>
          </div>

          {/* BOTTOM */}
          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-space text-[8px] uppercase tracking-[0.12em] text-white/20">
              © {currentYear} MAX ARENA. ALL RIGHTS RESERVED.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/contact"
                className="font-space text-[8px] font-bold uppercase tracking-[0.12em] text-white/20 transition-colors hover:text-white/60"
              >
                Privacy
              </Link>

              <Link
                to="/contact"
                className="font-space text-[8px] font-bold uppercase tracking-[0.12em] text-white/20 transition-colors hover:text-white/60"
              >
                Terms
              </Link>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <p className="font-space text-[8px] uppercase tracking-[0.12em] text-white/15">
                Train With Purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;