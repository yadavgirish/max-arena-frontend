import { Link, useParams } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, Check } from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "../components/animations/StaggerContainer";
import SEO from "../components/SEO";

import trainers from "../data/trainers";

function TrainerDetails() {
  const { id } = useParams();

  const trainer = trainers.find((item) => item.id === id);

  if (!trainer) {
    return (
      <>
        <SEO
          title={`${trainer.name} — ${trainer.role}`}
          description={trainer.bio}
          path={`/trainers/${id}`}
        />
        <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white">
          <div className="text-center">
            <p className="font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
              TRAINER 404
            </p>

            <h1 className="mt-5 font-bebas text-[18vw] leading-[0.8] tracking-[-0.02em] sm:text-[12rem]">
              PROFILE UNAVAILABLE.
            </h1>

            <p className="mx-auto mt-8 max-w-md font-manrope text-sm leading-relaxed text-white/40">
              The trainer profile you're looking for doesn't exist or may have
              been moved.
            </p>

            <div className="mt-8">
              <MagneticButton to="/trainers" variant="outline">
                Back To Trainers
              </MagneticButton>
            </div>
          </div>
        </main>
      </>
    );
  }

  const currentIndex = trainers.findIndex((item) => item.id === trainer.id);

  const previousTrainer = currentIndex > 0 ? trainers[currentIndex - 1] : null;

  const nextTrainer =
    currentIndex < trainers.length - 1 ? trainers[currentIndex + 1] : null;

  return (
    <main className="bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[88vh] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-[1400px]">
            <Reveal>
              <Link
                to="/trainers"
                className="group inline-flex items-center gap-2 font-space text-[9px] font-bold uppercase tracking-[0.15em] text-white/45 transition-colors hover:text-white"
              >
                <ArrowLeft
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                All Trainers
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <p className="font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {trainer.role}
                </p>

                <h1 className="mt-4 max-w-6xl font-bebas text-[18vw] leading-[0.78] tracking-[-0.02em] sm:text-[12rem] lg:text-[14rem]">
                  {trainer.name}
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl font-manrope text-sm leading-relaxed text-white/55 sm:text-base">
                  {trainer.bio}
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

      {/* TRAINER META */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-3">
          <div className="border-b border-white/10 px-5 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12">
            <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
              Experience
            </p>

            <p className="mt-3 font-bebas text-4xl tracking-wide">
              {trainer.experience}
            </p>
          </div>

          <div className="border-b border-white/10 px-5 py-7 sm:border-b-0 sm:border-r sm:px-8 lg:px-12">
            <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
              Sessions
            </p>

            <p className="mt-3 font-bebas text-4xl tracking-wide">
              {trainer.sessions}
            </p>
          </div>

          <div className="px-5 py-7 sm:px-8 lg:px-12">
            <p className="font-space text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
              Specialty
            </p>

            <p className="mt-3 font-bebas text-4xl tracking-wide">
              {trainer.specialty}
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <div>
                <SectionLabel number="01" label="COACHING PHILOSOPHY" />

                <SectionHeading
                  title="TRAIN WITH PURPOSE."
                  description="Great coaching isn't about making training complicated. It's about knowing what matters and executing it consistently."
                  size="lg"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border-y border-white/10 py-10 sm:py-14">
                <p className="font-bebas text-4xl leading-[0.95] tracking-wide text-white/80 sm:text-6xl lg:text-7xl">
                  "{trainer.philosophy}"
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionLabel number="02" label="SPECIALTIES" />

            <SectionHeading
              title="WHAT THEY DO."
              description="Focused expertise designed to help members train with greater structure and clarity."
              size="lg"
            />
          </Reveal>

          <StaggerContainer className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {trainer.specialties.map((specialty, index) => (
              <StaggerItem
                key={specialty}
                className="group flex min-h-40 flex-col justify-between bg-[#080808] p-7 transition-colors duration-300 hover:bg-white/[0.05] sm:p-9"
              >
                <span className="font-space text-[8px] font-bold text-white/20">
                  0{index + 1}
                </span>

                <div className="flex items-end justify-between gap-6">
                  <p className="font-bebas text-3xl tracking-wide text-white/70 transition-colors group-hover:text-white sm:text-4xl">
                    {specialty}
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

      {/* APPROACH */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionLabel number="03" label="THE APPROACH" />

            <SectionHeading
              title="HOW THEY COACH."
              description="A simple progression designed around assessment, execution and measurable improvement."
              size="lg"
            />
          </Reveal>

          <StaggerContainer className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {trainer.approach.map((step) => (
              <StaggerItem
                key={step.number}
                className="grid gap-5 py-8 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-start"
              >
                <span className="font-space text-[9px] font-bold text-white/25">
                  {step.number}
                </span>

                <h3 className="font-bebas text-4xl tracking-wide">
                  {step.title}
                </h3>

                <p className="font-manrope text-sm leading-relaxed text-white/40">
                  {step.description}
                </p>
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
              <SectionLabel number="04" label="READY TO TRAIN?" />

              <h2 className="mt-8 max-w-5xl font-bebas text-[15vw] leading-[0.82] tracking-[-0.02em] sm:text-[9rem]">
                FIND YOUR
                <br />
                EDGE.
              </h2>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                <MagneticButton to="/free-trial">
                  Book Free Trial
                </MagneticButton>

                <MagneticButton to="/trainers" variant="outline">
                  Meet All Trainers
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OTHER TRAINERS */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionLabel number="05" label="MEET THE TEAM" />
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {previousTrainer && (
              <Link
                to={`/trainers/${previousTrainer.id}`}
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
                  {previousTrainer.name}
                </h3>
              </Link>
            )}

            {nextTrainer && (
              <Link
                to={`/trainers/${nextTrainer.id}`}
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
                  {nextTrainer.name}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrainerDetails;
