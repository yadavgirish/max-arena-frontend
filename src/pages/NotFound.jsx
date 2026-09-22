import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import SEO from "../components/SEO"

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested MAX ARENA page could not be found."
        path="/404"
        noIndex
      />
      <main className="min-h-[75vh] bg-[#050505] px-6 pb-24 pt-32 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[65vh] max-w-5xl items-center justify-center">
          <Reveal className="w-full">
            <div className="text-center">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center border border-white/10 bg-white/[0.03]">
                <SearchX size={25} className="text-white/60" />
              </div>

              <SectionLabel>404 — PAGE NOT FOUND</SectionLabel>

              <h1 className="mt-6 font-bebas text-[clamp(5rem,16vw,11rem)] leading-[0.8] tracking-wide">
                WRONG
                <br />
                <span className="text-white/25">DIRECTION.</span>
              </h1>

              <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/45 sm:text-base">
                Looks like this page doesn&apos;t exist or the link you followed
                is no longer available.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <MagneticButton to="/" variant="primary">
                  <Home size={16} />
                  BACK HOME
                </MagneticButton>

                <Link
                  to="/programs"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/10 px-6 font-space text-xs font-bold tracking-[0.16em] text-white transition-colors duration-300 hover:border-white/30"
                >
                  EXPLORE PROGRAMS
                  <ArrowLeft
                    size={16}
                    className="rotate-180 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}

export default NotFound;
