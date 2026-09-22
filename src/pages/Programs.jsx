import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import ProgramCard from "../components/cards/ProgramCard";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import StaggerContainer, {
  StaggerItem,
} from "../components/animations/StaggerContainer";
import SEO from "../components/SEO";

const programs = [
  {
    number: "01",
    title: "Strength",
    slug: "strength",
    meta: "PERFORMANCE",
    description:
      "Build raw strength, improve movement quality and develop a body that performs under pressure.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Muscle Building",
    slug: "muscle-building",
    meta: "HYPERTROPHY",
    description:
      "Structured training designed to build quality muscle with progressive overload and intelligent volume.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Fat Loss",
    slug: "fat-loss",
    meta: "CONDITIONING",
    description:
      "Train harder, move better and build sustainable habits that help you become leaner without losing performance.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Personal Training",
    slug: "personal-training",
    meta: "1 — ON — 1",
    description:
      "Individual coaching, personalized programming and direct guidance built around your specific goals.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",
  },
];

const methods = [
  {
    number: "01",
    title: "Assess",
    description: "Understand where you are before deciding where you're going.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Follow a structured training system designed around your goal.",
  },
  {
    number: "03",
    title: "Progress",
    description:
      "Track performance, adjust intelligently and keep moving forward.",
  },
];

function Programs() {
  return (
    <>
      <SEO
        title="Training Programs"
        description="Explore MAX ARENA training programs for strength, muscle building, fat loss and personal training."
        path="/programs"
      />
      <main className="overflow-hidden bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[85vh] items-end border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="pointer-events-none absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px]">
            <SectionLabel number="01" label="Training System" />

            <SectionHeading
              className="mt-8"
              eyebrow="MAX ARENA / PROGRAMS"
              title={
                <>
                  FIND
                  <br />
                  YOUR
                  <br />
                  WEAPON
                </>
              }
              description="Four training systems. One objective — build a stronger version of yourself."
            />

            <Reveal animation="fadeUp" delay={0.25} className="mt-8">
              <div className="flex flex-wrap gap-3">
                <MagneticButton to="/free-trial">Start Training</MagneticButton>

                <MagneticButton to="/memberships" variant="outline">
                  View Memberships
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel number="02" label="Choose Your Path" />

                <h2 className="mt-5 font-bebas text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl">
                  TRAIN WITH
                  <br />
                  PURPOSE.
                </h2>
              </div>

              <p className="max-w-md font-manrope text-sm leading-relaxed text-white/40">
                Every program is built around a clear objective, measurable
                progression and training that actually translates outside the
                gym.
              </p>
            </div>

            <StaggerContainer className="grid gap-5 md:grid-cols-2">
              {programs.map((program) => (
                <StaggerItem key={program.slug}>
                  <ProgramCard
                    number={program.number}
                    title={program.title}
                    description={program.description}
                    image={program.image}
                    meta={program.meta}
                    path={`/programs/${program.slug}`}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* METHOD */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="03" label="The Method" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                  SIMPLE
                  <br />
                  SYSTEM.
                  <br />
                  SERIOUS
                  <br />
                  RESULTS.
                </h2>
              </div>

              <div className="border-t border-white/10">
                {methods.map((method) => (
                  <Reveal key={method.number} animation="fadeRight">
                    <div className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr] sm:gap-8">
                      <span className="font-space text-[10px] font-bold tracking-[0.2em] text-white/25">
                        {method.number}
                      </span>

                      <div>
                        <h3 className="font-bebas text-4xl uppercase tracking-wide text-white">
                          {method.title}
                        </h3>

                        <p className="mt-2 max-w-lg font-manrope text-sm leading-relaxed text-white/40">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="04" label="Why MAX ARENA" align="center" />

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <h2 className="font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                NO RANDOM
                <br />
                WORKOUTS.
              </h2>

              <p className="mx-auto mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/40 sm:text-base">
                Your training should have direction. Our systems combine
                structured programming, coaching and measurable progression so
                every session has a reason.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Structured",
                  text: "Every session follows a clear training objective.",
                },
                {
                  number: "02",
                  title: "Measured",
                  text: "Progress is tracked instead of guessed.",
                },
                {
                  number: "03",
                  title: "Adaptable",
                  text: "Your program evolves as your body does.",
                },
              ].map((item) => (
                <Reveal key={item.number}>
                  <div className="h-full bg-[#080808] p-7 sm:p-8">
                    <span className="font-space text-[9px] font-bold tracking-[0.2em] text-white/25">
                      {item.number}
                    </span>

                    <h3 className="mt-8 font-bebas text-3xl uppercase tracking-wide text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-manrope text-xs leading-relaxed text-white/40">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <MagneticButton to="/free-trial">
                Book Your Free Trial
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Programs;
