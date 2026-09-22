import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import MembershipCard from "../components/cards/MembershipCard";
import Reveal from "../components/animations/Reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "../components/animations/StaggerContainer";

import memberships from "../data/memberships";
import SEO from "../components/SEO";

function Memberships() {
  return (
    <>
      <SEO
        title="Memberships"
        description="Explore MAX ARENA memberships and choose a training experience built around your goals and progress."
        path="/memberships"
      />
      <main className="bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32 lg:pt-44">
          <div className="pointer-events-none absolute right-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto max-w-[1400px]">
            <Reveal>
              <SectionLabel number="01" label="MEMBERSHIPS" />

              <h1 className="mt-8 max-w-6xl font-bebas text-[19vw] leading-[0.78] tracking-[-0.02em] sm:text-[12rem] lg:text-[14rem]">
                CHOOSE YOUR
                <br />
                LEVEL.
              </h1>

              <p className="mt-10 max-w-xl font-manrope text-sm leading-relaxed text-white/45 sm:text-base">
                No unnecessary complexity. Choose the level of support that
                matches your goals, training commitment and desired experience.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MEMBERSHIP GRID */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
          <div className="mx-auto max-w-[1400px]">
            <StaggerContainer className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
              {memberships.map((membership) => (
                <StaggerItem key={membership.id}>
                  <MembershipCard
                    name={membership.name}
                    price={membership.price}
                    period={membership.period}
                    description={membership.description}
                    features={membership.features}
                    featured={membership.featured}
                    href={`/join?plan=${membership.name}`}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <Reveal>
                <div>
                  <SectionLabel number="02" label="EVERY MEMBERSHIP" />

                  <SectionHeading
                    title="BUILT AROUND YOU."
                    description="Every member gets access to the environment, equipment and community needed to train consistently."
                    size="lg"
                  />
                </div>
              </Reveal>

              <StaggerContainer className="divide-y divide-white/10 border-y border-white/10">
                {[
                  "Premium training environment",
                  "Modern strength and conditioning equipment",
                  "Access to experienced coaches",
                  "Dedicated training zones",
                  "Structured group classes",
                  "Progress-focused community",
                ].map((item, index) => (
                  <StaggerItem
                    key={item}
                    className="flex items-center justify-between gap-6 py-6"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-space text-[8px] font-bold text-white/20">
                        0{index + 1}
                      </span>

                      <p className="font-manrope text-sm font-semibold text-white/65">
                        {item}
                      </p>
                    </div>

                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-white/25"
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* FAQ / NOTE */}
        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[1000px] text-center">
            <Reveal>
              <SectionLabel number="03" label="NOT SURE?" />

              <h2 className="mt-8 font-bebas text-[15vw] leading-[0.82] tracking-[-0.02em] sm:text-[9rem]">
                START WITH A
                <br />
                FREE TRIAL.
              </h2>

              <p className="mx-auto mt-8 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
                Experience the space, meet the team and understand which
                membership fits your training goals before committing.
              </p>

              <Link
                to="/free-trial"
                className="group mt-10 inline-flex items-center gap-4 bg-white px-6 py-4 font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Book Free Trial
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

export default Memberships;
