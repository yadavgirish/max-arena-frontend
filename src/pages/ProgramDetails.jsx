import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowDown, ArrowLeft, ArrowRight, Check } from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "../components/animations/StaggerContainer";

import programs from "../data/Programs";

function ProgramDetails() {
  const { slug } = useParams();

  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white">
        <div className="text-center">
          <p className="font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
            PROGRAM 404
          </p>

          <h1 className="mt-5 font-bebas text-[18vw] leading-[0.8] tracking-[-0.02em] sm:text-[12rem]">
            WRONG DIRECTION.
          </h1>

          <p className="mx-auto mt-8 max-w-md font-manrope text-sm leading-relaxed text-white/40">
            The program you are looking for does not exist or may have been
            moved.
          </p>

          <div className="mt-8">
            <MagneticButton to="/programs" variant="outline">
              Back To Programs
            </MagneticButton>
          </div>
        </div>
      </main>
    );
  }

  const currentIndex = programs.findIndex((item) => item.slug === program.slug);

  const previousProgram = currentIndex > 0 ? programs[currentIndex - 1] : null;

  const nextProgram =
    currentIndex < programs.length - 1 ? programs[currentIndex + 1] : null;

  return (
    <>
      <SEO
        title={`${program.name} Training Program`}
        description={program.description}
        path={`/programs/${slug || ""}`}
      />
      <main className="bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[88vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={program.image}
              alt={program.name}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <Link
                  to="/programs"
                  className="group inline-flex items-center gap-2 font-space text-[9px] font-bold uppercase tracking-[0.15em] text-white/45 transition-colors hover:text-white"
                >
                  <ArrowLeft
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  All Programs
                </Link>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10">
                  <p className="font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {program.focus}
                  </p>

                  <h1 className="mt-4 max-w-6xl font-bebas text-[18vw] leading-[0.78] tracking-[-0.02em] sm:text-[12rem] lg:text-[14rem]">
                    {program.name}
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-xl font-manrope text-sm leading-relaxed text-white/55 sm:text-base">
                    {program.description}
                  </p>

                  <ArrowDown
                    size={22}
                    strokeWidth={1}
                    className="hidden text-white/30 sm:block"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROGRAM META */}
        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-5 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12">
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                Duration
              </p>
              <p className="mt-3 font-bebas text-4xl tracking-wide">
                {program.duration}
              </p>
            </div>

            <div className="border-b border-white/10 px-5 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12">
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                Level
              </p>
              <p className="mt-3 font-bebas text-4xl tracking-wide">
                {program.level}
              </p>
            </div>

            <div className="px-5 py-7 sm:px-8 lg:px-12">
              <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                Focus
              </p>
              <p className="mt-3 font-bebas text-4xl tracking-wide">
                {program.focus}
              </p>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <Reveal>
                <div>
                  <SectionLabel number="01" label="THE APPROACH" />

                  <SectionHeading
                    title="TRAIN WITH INTENTION."
                    description="Every session has a purpose. Every phase is designed to move you closer to your goal."
                    size="lg"
                  />
                </div>
              </Reveal>

              <StaggerContainer className="divide-y divide-white/10 border-y border-white/10">
                {program.approach.map((step) => (
                  <StaggerItem
                    key={step.number}
                    className="grid gap-5 py-8 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start"
                  >
                    <span className="font-space text-[9px] font-bold text-white/25">
                      {step.number}
                    </span>

                    <h3 className="font-bebas text-4xl tracking-wide text-white">
                      {step.title}
                    </h3>

                    <p className="font-manrope text-sm leading-relaxed text-white/40">
                      {step.description}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <SectionLabel number="02" label="WHAT YOU BUILD" />

              <SectionHeading
                title="RESULTS THAT MATTER."
                description="The goal isn't simply to complete workouts. It's to build measurable improvements that carry into your performance."
                size="lg"
              />
            </Reveal>

            <StaggerContainer className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {program.outcomes.map((outcome, index) => (
                <StaggerItem
                  key={outcome}
                  className="group flex min-h-40 flex-col justify-between bg-[#080808] p-7 transition-colors duration-300 hover:bg-white/[0.05] sm:p-9"
                >
                  <span className="font-space text-[8px] font-bold text-white/20">
                    0{index + 1}
                  </span>

                  <div className="flex items-end justify-between gap-6">
                    <p className="max-w-sm font-manrope text-sm font-semibold leading-relaxed text-white/75">
                      {outcome}
                    </p>

                    <Check
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/20 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="border border-white/10 p-8 sm:p-12 lg:p-20">
              <Reveal>
                <SectionLabel number="03" label="READY TO START?" />

                <h2 className="mt-8 max-w-5xl font-bebas text-[15vw] leading-[0.82] tracking-[-0.02em] sm:text-[9rem]">
                  MAKE YOUR
                  <br />
                  NEXT MOVE.
                </h2>

                <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                  <MagneticButton to="/free-trial">
                    Book Free Trial
                  </MagneticButton>

                  <MagneticButton to="/join?plan=performance" variant="outline">
                    View Memberships
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* OTHER PROGRAMS */}
        <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <SectionLabel number="04" label="KEEP EXPLORING" />
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {previousProgram && (
                <Link
                  to={`/programs/${previousProgram.slug}`}
                  className="group bg-[#080808] p-7 transition-colors duration-300 hover:bg-white/[0.04] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/25">
                      Previous
                    </span>

                    <ArrowLeft
                      size={16}
                      className="text-white/25 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-12 font-bebas text-5xl text-white/70 transition-colors group-hover:text-white sm:text-6xl">
                    {previousProgram.name}
                  </h3>
                </Link>
              )}

              {nextProgram && (
                <Link
                  to={`/programs/${nextProgram.slug}`}
                  className="group bg-[#080808] p-7 text-right transition-colors duration-300 hover:bg-white/[0.04] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-space text-[8px] font-bold uppercase tracking-[0.15em] text-white/25">
                      Next
                    </span>

                    <ArrowRight
                      size={16}
                      className="ml-auto text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-12 font-bebas text-5xl text-white/70 transition-colors group-hover:text-white sm:text-6xl">
                    {nextProgram.name}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProgramDetails;
