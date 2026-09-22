import TrainerCard from "../components/cards/TrainerCard";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import StaggerContainer, {
  StaggerItem,
} from "../components/animations/StaggerContainer";
import SEO from "../components/SEO";

const trainers = [
  {
    number: "01",
    id: "alex-carter",
    name: "Alex Carter",
    role: "HEAD COACH",
    specialty: "Strength & Performance",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    id: "maya-reed",
    name: "Maya Reed",
    role: "PERFORMANCE COACH",
    specialty: "Conditioning & Fat Loss",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    id: "daniel-stone",
    name: "Daniel Stone",
    role: "PERSONAL TRAINER",
    specialty: "Hypertrophy & Transformation",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
  },
];

const principles = [
  {
    number: "01",
    title: "Assess",
    description:
      "We understand your current level, movement quality and goals before building your training approach.",
  },
  {
    number: "02",
    title: "Coach",
    description:
      "Every session has intent. Technique, effort and progression are constantly monitored.",
  },
  {
    number: "03",
    title: "Adapt",
    description:
      "Your program evolves with your performance instead of forcing you into a fixed template.",
  },
];

function Trainers() {
  return (
    <>
      <SEO
        title="Expert Trainers"
        description="Meet the experienced coaches at MAX ARENA and discover their training specialties, approach and expertise."
        path="/trainers"
      />
      <main className="overflow-hidden bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[85vh] items-end border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="pointer-events-none absolute right-[-12%] top-[15%] h-[520px] w-[520px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px]">
            <SectionLabel number="01" label="The Coaching Team" />

            <SectionHeading
              className="mt-8"
              eyebrow="MAX ARENA / TRAINERS"
              title={
                <>
                  GUIDANCE
                  <br />
                  MATTERS
                </>
              }
              description="Experienced coaches who bring structure, precision and intent to every session."
            />

            <Reveal animation="fadeUp" delay={0.2} className="mt-8">
              <MagneticButton to="/free-trial">Train With Us</MagneticButton>
            </Reveal>
          </div>
        </section>

        {/* TRAINERS */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel number="02" label="Meet The Team" />

                <h2 className="mt-5 font-bebas text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl">
                  COACHES
                  <br />
                  WHO CARE.
                </h2>
              </div>

              <p className="max-w-md font-manrope text-sm leading-relaxed text-white/40">
                Different specialties. One coaching philosophy — make every
                session count.
              </p>
            </div>

            <StaggerContainer className="grid gap-5 md:grid-cols-3">
              {trainers.map((trainer) => (
                <StaggerItem key={trainer.id}>
                  <TrainerCard
                    number={trainer.number}
                    name={trainer.name}
                    role={trainer.role}
                    specialty={trainer.specialty}
                    image={trainer.image}
                    path={`/trainers/${trainer.id}`}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="03" label="Coaching Philosophy" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                  MORE
                  <br />
                  THAN
                  <br />
                  REPS.
                </h2>
              </div>

              <div className="border-t border-white/10">
                {principles.map((principle) => (
                  <Reveal key={principle.number} animation="fadeRight">
                    <div className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr] sm:gap-8">
                      <span className="font-space text-[10px] font-bold tracking-[0.2em] text-white/25">
                        {principle.number}
                      </span>

                      <div>
                        <h3 className="font-bebas text-4xl uppercase tracking-wide text-white">
                          {principle.title}
                        </h3>

                        <p className="mt-2 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-white/10 px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["15+", "COACHES"],
              ["12K+", "MEMBERS"],
              ["08+", "YEARS EXPERIENCE"],
            ].map(([value, label]) => (
              <Reveal key={label}>
                <div className="bg-[#080808] px-6 py-8 text-center sm:py-10">
                  <p className="font-bebas text-5xl text-white sm:text-6xl">
                    {value}
                  </p>

                  <p className="mt-2 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionLabel number="04" label="Start Training" align="center" />

            <h2 className="mt-8 font-bebas text-7xl uppercase leading-[0.82] tracking-wide text-white sm:text-8xl lg:text-[9rem]">
              FIND YOUR
              <br />
              COACH.
            </h2>

            <p className="mx-auto mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
              Meet the team, understand the approach and find the coaching style
              that fits your goals.
            </p>

            <div className="mt-8 flex justify-center">
              <MagneticButton to="/free-trial">Book Free Trial</MagneticButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Trainers;
