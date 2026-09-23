import { useMemo, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  Phone,
  User,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import memberships from "../data/memberships";
import SEO from "../components/SEO";
import { apiRequest } from "../services/api";

function Join() {
  const [searchParams] = useSearchParams();

  const requestedPlan = searchParams.get("plan");

  const initialPlan =
    memberships.find(
      (membership) =>
        membership.name.toLowerCase() === requestedPlan?.toLowerCase()
    )?.id || "performance";

  const [selectedPlan, setSelectedPlan] = useState(initialPlan);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const activePlan = useMemo(() => {
    return (
      memberships.find((membership) => membership.id === selectedPlan) ||
      memberships.find((membership) => membership.id === "performance") ||
      memberships[0]
    );
  }, [selectedPlan]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    try {
      await apiRequest("/contact", {
        method: "POST",
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,

          subject: `Membership Application - ${activePlan.name}`,

          message: [
            `Membership: ${activePlan.name}`,
            `Goal: ${formData.goal}`,
            "",
            "Message:",
            formData.message || "No additional message provided.",
          ].join("\n"),
        },
      });

      setSubmitted(true);
    } catch (requestError) {
      setError(
        requestError?.message ||
          "Something went wrong while submitting your application."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <>
        <SEO
          title="Join MAX ARENA"
          description="Apply for a MAX ARENA membership and choose the training plan that fits your goals."
          path="/join"
        />

        <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white sm:px-8 lg:px-12">
          <div className="mx-auto flex min-h-[65vh] max-w-4xl items-center justify-center">
            <Reveal className="w-full">
              <div className="border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12 lg:p-16">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white text-black">
                  <Check size={28} strokeWidth={2.5} />
                </div>

                <SectionLabel>REQUEST RECEIVED</SectionLabel>

                <h1 className="mt-5 font-bebas text-6xl leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
                  YOU&apos;RE
                  <br />
                  <span className="text-white/40">ON YOUR WAY.</span>
                </h1>

                <p className="mx-auto mt-7 max-w-xl font-manrope text-sm leading-7 text-white/55 sm:text-base">
                  Thanks, {formData.name || "there"}. Your membership request
                  for <span className="text-white">{activePlan.name}</span> has
                  been received. Our team will contact you shortly.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <MagneticButton to="/free-trial" variant="primary">
                    BOOK A FREE TRIAL
                  </MagneticButton>

                  <MagneticButton to="/memberships" variant="outline">
                    VIEW MEMBERSHIPS
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </main>
      </>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>MEMBERSHIP APPLICATION</SectionLabel>

            <SectionHeading
              title="MAKE THE"
              highlight="COMMITMENT."
              description="Choose your membership, tell us what you want to achieve, and take the first step toward becoming stronger."
              className="mt-6"
            />
          </Reveal>
        </div>
      </section>

      {/* Main */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Plan selection */}
          <Reveal direction="fadeRight">
            <div className="lg:sticky lg:top-28">
              <div className="mb-6">
                <p className="font-space text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  01 — SELECT YOUR PLAN
                </p>

                <h2 className="mt-3 font-bebas text-4xl tracking-wide sm:text-5xl">
                  CHOOSE YOUR LEVEL
                </h2>
              </div>

              <div className="space-y-3">
                {memberships.map((membership) => {
                  const isSelected = membership.id === selectedPlan;

                  return (
                    <button
                      key={membership.id}
                      type="button"
                      onClick={() => setSelectedPlan(membership.id)}
                      className={`group w-full border p-5 text-left transition-all duration-300 ${
                        isSelected
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.025] text-white hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`font-space text-[10px] uppercase tracking-[0.25em] ${
                                isSelected
                                  ? "text-black/45"
                                  : "text-white/35"
                              }`}
                            >
                              {membership.featured
                                ? "RECOMMENDED"
                                : "MEMBERSHIP"}
                            </span>
                          </div>

                          <h3 className="mt-2 font-bebas text-3xl tracking-wide">
                            {membership.name}
                          </h3>
                        </div>

                        <div className="text-right">
                          <p className="font-space text-2xl font-semibold">
                            ₹{membership.price.toLocaleString("en-IN")}
                          </p>

                          <p
                            className={`font-space text-[9px] uppercase tracking-[0.2em] ${
                              isSelected
                                ? "text-black/45"
                                : "text-white/35"
                            }`}
                          >
                            / {membership.period}
                          </p>
                        </div>
                      </div>

                      <p
                        className={`mt-4 text-xs leading-6 ${
                          isSelected ? "text-black/60" : "text-white/45"
                        }`}
                      >
                        {membership.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2">
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isSelected
                              ? "border-black bg-black text-white"
                              : "border-white/20 text-transparent"
                          }`}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>

                        <span
                          className={`font-space text-[9px] uppercase tracking-[0.18em] ${
                            isSelected ? "text-black/60" : "text-white/35"
                          }`}
                        >
                          {isSelected ? "SELECTED" : "SELECT PLAN"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Included */}
              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="font-space text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  INCLUDED
                </p>

                <div className="mt-5 space-y-3">
                  {activePlan.features.slice(0, 5).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/55"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-white"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="fadeLeft">
            <div className="border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10">
              <div className="mb-10">
                <p className="font-space text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  02 — YOUR DETAILS
                </p>

                <h2 className="mt-3 font-bebas text-4xl tracking-wide sm:text-5xl">
                  LET&apos;S GET STARTED
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                  Tell us a little about yourself and your training goals.
                </p>
              </div>

              {/* API Error */}
              {error && (
                <div className="mb-6 border border-red-400/20 bg-red-400/[0.05] px-4 py-3 text-sm leading-6 text-red-300">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={50}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="h-14 w-full border border-white/10 bg-black/30 pl-12 pr-4 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-14 w-full border border-white/10 bg-black/30 pl-12 pr-4 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Phone
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={20}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-14 w-full border border-white/10 bg-black/30 pl-12 pr-4 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Goal */}
                <div>
                  <label
                    htmlFor="goal"
                    className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                  >
                    Primary Goal
                  </label>

                  <div className="relative">
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={handleChange}
                      className="h-14 w-full appearance-none border border-white/10 bg-black/30 px-4 pr-12 font-manrope text-sm text-white outline-none transition-colors focus:border-white/40"
                    >
                      <option value="" disabled>
                        Select your goal
                      </option>

                      <option value="muscle-building">
                        Build Muscle
                      </option>

                      <option value="fat-loss">Lose Fat</option>

                      <option value="strength">Build Strength</option>

                      <option value="fitness">General Fitness</option>

                      <option value="performance">
                        Sports Performance
                      </option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                  >
                    Anything We Should Know?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    maxLength={2000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your experience, goals or anything else..."
                    className="w-full resize-none border border-white/10 bg-black/30 px-4 py-4 font-manrope text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40"
                  />
                </div>

                {/* Selected plan summary */}
                <div className="border border-white/10 bg-white/[0.025] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-space text-[9px] uppercase tracking-[0.25em] text-white/30">
                        SELECTED MEMBERSHIP
                      </p>

                      <p className="mt-2 font-bebas text-3xl tracking-wide">
                        {activePlan.name}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-space text-xl font-semibold">
                        ₹{activePlan.price.toLocaleString("en-IN")}
                      </p>

                      <p className="font-space text-[9px] uppercase tracking-[0.2em] text-white/30">
                        / {activePlan.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex min-h-14 w-full items-center justify-center gap-3 bg-white px-6 font-space text-xs font-bold tracking-[0.18em] text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}

                  {!submitting && (
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-center text-[10px] leading-5 text-white/25">
                  By submitting this form, you agree to be contacted by MAX
                  ARENA regarding your membership enquiry.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-space text-[10px] uppercase tracking-[0.3em] text-white/30">
              NOT READY YET?
            </p>

            <h2 className="mt-3 font-bebas text-4xl tracking-wide sm:text-5xl">
              TRY MAX ARENA FIRST.
            </h2>
          </div>

          <Link
            to="/free-trial"
            className="group inline-flex items-center gap-3 font-space text-xs font-bold tracking-[0.18em] text-white"
          >
            BOOK FREE TRIAL

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Join;