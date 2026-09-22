import { useMemo, useState } from "react";

import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import StaggerContainer, {
  StaggerItem,
} from "../components/animations/StaggerContainer";
import SEO from "../components/SEO"

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

const schedule = {
  MON: [
    {
      time: "06:30",
      period: "AM",
      name: "Strength Fundamentals",
      coach: "Alex Carter",
      type: "STRENGTH",
      duration: "60 MIN",
    },
    {
      time: "07:30",
      period: "PM",
      name: "Performance Conditioning",
      coach: "Maya Reed",
      type: "CONDITIONING",
      duration: "45 MIN",
    },
    {
      time: "06:30",
      period: "PM",
      name: "Muscle Building",
      coach: "Daniel Stone",
      type: "HYPERTROPHY",
      duration: "60 MIN",
    },
  ],
  TUE: [
    {
      time: "06:30",
      period: "AM",
      name: "Personal Training",
      coach: "Daniel Stone",
      type: "PERSONAL",
      duration: "60 MIN",
    },
    {
      time: "07:30",
      period: "PM",
      name: "Fat Loss Circuit",
      coach: "Maya Reed",
      type: "CONDITIONING",
      duration: "45 MIN",
    },
    {
      time: "06:30",
      period: "PM",
      name: "Strength Fundamentals",
      coach: "Alex Carter",
      type: "STRENGTH",
      duration: "60 MIN",
    },
  ],
  WED: [
    {
      time: "06:30",
      period: "AM",
      name: "Muscle Building",
      coach: "Daniel Stone",
      type: "HYPERTROPHY",
      duration: "60 MIN",
    },
    {
      time: "07:30",
      period: "PM",
      name: "Performance Conditioning",
      coach: "Maya Reed",
      type: "CONDITIONING",
      duration: "45 MIN",
    },
    {
      time: "06:30",
      period: "PM",
      name: "Strength Fundamentals",
      coach: "Alex Carter",
      type: "STRENGTH",
      duration: "60 MIN",
    },
  ],
  THU: [
    {
      time: "06:30",
      period: "AM",
      name: "Strength Fundamentals",
      coach: "Alex Carter",
      type: "STRENGTH",
      duration: "60 MIN",
    },
    {
      time: "07:30",
      period: "PM",
      name: "Fat Loss Circuit",
      coach: "Maya Reed",
      type: "CONDITIONING",
      duration: "45 MIN",
    },
    {
      time: "06:30",
      period: "PM",
      name: "Personal Training",
      coach: "Daniel Stone",
      type: "PERSONAL",
      duration: "60 MIN",
    },
  ],
  FRI: [
    {
      time: "06:30",
      period: "AM",
      name: "Muscle Building",
      coach: "Daniel Stone",
      type: "HYPERTROPHY",
      duration: "60 MIN",
    },
    {
      time: "07:30",
      period: "PM",
      name: "Performance Conditioning",
      coach: "Maya Reed",
      type: "CONDITIONING",
      duration: "45 MIN",
    },
    {
      time: "06:30",
      period: "PM",
      name: "Strength Fundamentals",
      coach: "Alex Carter",
      type: "STRENGTH",
      duration: "60 MIN",
    },
  ],
  SAT: [
    {
      time: "08:00",
      period: "AM",
      name: "Weekend Performance",
      coach: "Alex Carter",
      type: "PERFORMANCE",
      duration: "60 MIN",
    },
    {
      time: "10:00",
      period: "AM",
      name: "Transformation Circuit",
      coach: "Maya Reed",
      type: "CONDITIONING",
      duration: "45 MIN",
    },
    {
      time: "11:30",
      period: "AM",
      name: "Open Training",
      coach: "MAX ARENA TEAM",
      type: "OPEN GYM",
      duration: "90 MIN",
    },
  ],
};

const trainingTypes = [
  {
    number: "01",
    title: "Strength",
    description:
      "Build raw strength through structured compound movements, progressive overload and technical coaching.",
  },
  {
    number: "02",
    title: "Conditioning",
    description:
      "Improve work capacity, cardiovascular fitness and overall athletic performance.",
  },
  {
    number: "03",
    title: "Hypertrophy",
    description:
      "Train with controlled volume and progressive overload to build quality muscle.",
  },
];

function Classes() {
  const [activeDay, setActiveDay] = useState("MON");

  const activeClasses = useMemo(() => {
    return schedule[activeDay] || [];
  }, [activeDay]);

  return (
    <>

<SEO
  title="Classes"
  description="Explore MAX ARENA training classes designed for strength, fitness, performance and consistent progress."
  path="/classes"
/>

    <main className="overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-end border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px]">
          <SectionLabel
            number="01"
            label="Training Schedule"
          />

          <SectionHeading
            className="mt-8"
            eyebrow="MAX ARENA / CLASSES"
            title={
              <>
                TRAIN
                <br />
                WITH
                <br />
                PURPOSE
              </>
            }
            description="Structured sessions led by experienced coaches. Find a class, show up and put in the work."
          />

          <Reveal
            animation="fadeUp"
            delay={0.2}
            className="mt-8"
          >
            <MagneticButton to="/free-trial">
              Book A Trial
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel
                number="02"
                label="Weekly Schedule"
              />

              <h2 className="mt-5 font-bebas text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl">
                FIND YOUR
                <br />
                SESSION.
              </h2>
            </div>

            <p className="max-w-md font-manrope text-sm leading-relaxed text-white/40">
              Class timings shown below are demo data for the MAX ARENA
              experience. Live availability will later come from the backend.
            </p>
          </div>

          {/* DAY SELECTOR */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {days.map((day) => {
              const active = activeDay === day;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setActiveDay(day)}
                  className={`min-w-[76px] border px-5 py-4 font-space text-[9px] font-bold tracking-[0.18em] transition-all duration-300 ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/[0.02] text-white/35 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* CLASS LIST */}
          <StaggerContainer
            key={activeDay}
            className="border-t border-white/10"
          >
            {activeClasses.map((item, index) => (
              <StaggerItem key={`${activeDay}-${item.name}-${index}`}>
                <div className="group grid gap-6 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[120px_1fr_auto] sm:items-center">
                  {/* TIME */}
                  <div>
                    <div className="flex items-end gap-1">
                      <span className="font-bebas text-4xl leading-none text-white">
                        {item.time}
                      </span>

                      <span className="mb-1 font-space text-[8px] font-bold tracking-[0.12em] text-white/30">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-2 font-space text-[8px] font-semibold uppercase tracking-[0.15em] text-white/20">
                      {item.duration}
                    </p>
                  </div>

                  {/* CLASS INFO */}
                  <div>
                    <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      {item.type}
                    </p>

                    <h3 className="mt-2 font-bebas text-3xl uppercase tracking-wide text-white sm:text-4xl">
                      {item.name}
                    </h3>

                    <p className="mt-1 font-manrope text-xs text-white/35">
                      Coach: {item.coach}
                    </p>
                  </div>

                  {/* ACTION */}
                  <div className="sm:text-right">
                    <MagneticButton
                      to="/free-trial"
                      variant="outline"
                      showArrow={false}
                      className="px-4 py-3"
                    >
                      Book
                    </MagneticButton>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TRAINING TYPES */}
      <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel
            number="03"
            label="Training Types"
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {trainingTypes.map((type) => (
              <Reveal
                key={type.number}
                animation="fadeUp"
              >
                <div className="h-full bg-[#080808] p-7 sm:p-9">
                  <span className="font-space text-[9px] font-bold tracking-[0.2em] text-white/25">
                    {type.number}
                  </span>

                  <h3 className="mt-10 font-bebas text-4xl uppercase tracking-wide text-white sm:text-5xl">
                    {type.title}
                  </h3>

                  <p className="mt-4 font-manrope text-sm leading-relaxed text-white/40">
                    {type.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="border-b border-white/10 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          <Reveal>
            <div className="bg-[#080808] p-7 text-center sm:p-9">
              <p className="font-bebas text-5xl text-white">06:00</p>
              <p className="mt-2 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                EARLIEST SESSION
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[#080808] p-7 text-center sm:p-9">
              <p className="font-bebas text-5xl text-white">6 DAYS</p>
              <p className="mt-2 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                WEEKLY SCHEDULE
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#080808] p-7 text-center sm:p-9">
              <p className="font-bebas text-5xl text-white">45–90</p>
              <p className="mt-2 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                MINUTE SESSIONS
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1000px] text-center">
          <SectionLabel
            number="04"
            label="Start Training"
            align="center"
          />

          <h2 className="mt-8 font-bebas text-7xl uppercase leading-[0.82] tracking-wide text-white sm:text-8xl lg:text-[9rem]">
            SHOW
            <br />
            UP.
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
            Pick a session, meet the coaches and experience the MAX ARENA
            training environment with a free trial.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MagneticButton to="/free-trial">
              Book Free Trial
            </MagneticButton>

            <MagneticButton
              to="/contact"
              variant="outline"
            >
              Ask A Question
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Classes;