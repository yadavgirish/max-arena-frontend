import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import StaggerContainer, {
  StaggerItem,
} from "../components/animations/StaggerContainer";
import SEO from "../components/SEO";

const values = [
  {
    number: "01",
    title: "Performance",
    description:
      "We train for more than appearance. Strength, movement, conditioning and performance all matter.",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "Real transformation comes from showing up repeatedly, following the system and trusting the process.",
  },
  {
    number: "03",
    title: "Progress",
    description:
      "Every session should move you forward. We measure progress so your training has direction.",
  },
];

const stats = [
  ["12K+", "MEMBERS"],
  ["15+", "COACHES"],
  ["24/7", "TRAINING ACCESS"],
  ["08+", "YEARS EXPERIENCE"],
];

function About() {
  return (
    <>
      <SEO
        title="About"
        description="Discover the philosophy behind MAX ARENA — a premium training environment built around strength, performance, community and measurable progress."
        path="/about"
      />

      <main className="overflow-hidden bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[85vh] items-end border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px]">
            <SectionLabel number="01" label="The Arena" />

            <SectionHeading
              className="mt-8"
              eyebrow="MAX ARENA / ABOUT"
              title={
                <>
                  MORE
                  <br />
                  THAN
                  <br />A GYM
                </>
              }
              description="A training environment built around performance, community and the belief that your potential is bigger than your current limits."
            />

            <Reveal animation="fadeUp" delay={0.2} className="mt-8">
              <MagneticButton to="/free-trial">
                Experience MAX ARENA
              </MagneticButton>
            </Reveal>
          </div>
        </section>

        {/* STORY */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <SectionLabel number="02" label="Our Story" />

              <h2 className="mt-7 font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                BUILT
                <br />
                FOR
                <br />
                MORE.
              </h2>
            </div>

            <div className="max-w-3xl">
              <Reveal animation="fadeRight">
                <p className="font-manrope text-lg font-medium leading-[1.7] text-white/70 sm:text-xl">
                  MAX ARENA was built around a simple idea — training should
                  have a purpose.
                </p>
              </Reveal>

              <Reveal animation="fadeRight" delay={0.1}>
                <p className="mt-7 font-manrope text-sm leading-[1.9] text-white/40 sm:text-base">
                  Too many people walk into a gym without knowing what they are
                  working toward. Random workouts, inconsistent routines and no
                  clear way to measure progress eventually turn motivation into
                  frustration.
                </p>
              </Reveal>

              <Reveal animation="fadeRight" delay={0.2}>
                <p className="mt-6 font-manrope text-sm leading-[1.9] text-white/40 sm:text-base">
                  MAX ARENA takes a different approach. We combine structured
                  training, experienced coaching and a focused environment to
                  help people train with intention and build results they can
                  actually sustain.
                </p>
              </Reveal>

              <Reveal animation="fadeRight" delay={0.3}>
                <p className="mt-6 font-manrope text-sm leading-[1.9] text-white/40 sm:text-base">
                  Whether your goal is getting stronger, building muscle,
                  improving conditioning or simply becoming more consistent,
                  everything starts with a system.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-white/10 px-5 py-16 sm:px-8 lg:px-12">
          <StaggerContainer className="mx-auto grid max-w-[1400px] gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <StaggerItem key={label}>
                <div className="bg-[#080808] px-6 py-9 sm:px-8 sm:py-11">
                  <p className="font-bebas text-6xl leading-none tracking-wide text-white sm:text-7xl">
                    {value}
                  </p>

                  <p className="mt-3 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    {label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* VALUES */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="03" label="What We Believe" />

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                  THE
                  <br />
                  STANDARD
                  <br />
                  MATTERS.
                </h2>
              </div>

              <div className="border-t border-white/10">
                {values.map((value) => (
                  <Reveal key={value.number} animation="fadeRight">
                    <div className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr] sm:gap-8">
                      <span className="font-space text-[10px] font-bold tracking-[0.2em] text-white/25">
                        {value.number}
                      </span>

                      <div>
                        <h3 className="font-bebas text-4xl uppercase tracking-wide text-white">
                          {value.title}
                        </h3>

                        <p className="mt-2 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <SectionLabel number="04" label="The Experience" />

              <h2 className="mt-7 max-w-4xl font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                EVERYTHING
                <br />
                HAS A
                <br />
                PURPOSE.
              </h2>
            </div>

            <div>
              <p className="font-manrope text-sm leading-relaxed text-white/40 sm:text-base">
                From the equipment you train with to the coaches around you, MAX
                ARENA is designed to remove distractions and create an
                environment where focused work becomes easier.
              </p>

              <div className="mt-7">
                <MagneticButton to="/programs" variant="outline">
                  Explore Programs
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionLabel
              number="05"
              label="Start Your Journey"
              align="center"
            />

            <h2 className="mt-8 font-bebas text-7xl uppercase leading-[0.82] tracking-wide text-white sm:text-8xl lg:text-[9rem]">
              BECOME
              <br />
              MORE.
            </h2>

            <p className="mx-auto mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
              You do not need to be ready. You just need to start. Experience
              MAX ARENA with a free trial.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <MagneticButton to="/free-trial">Book Free Trial</MagneticButton>

              <MagneticButton to="/contact" variant="outline">
                Contact Us
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
