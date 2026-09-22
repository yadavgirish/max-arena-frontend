import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Mail,
  Phone,
  User,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import SEO from "../components/SEO";

function FreeTrial() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    goal: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const experienceLevels = [
    "Complete Beginner",
    "Less than 1 Year",
    "1–3 Years",
    "3+ Years",
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleExperience(value) {
    setFormData((previous) => ({
      ...previous,
      experience: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <SEO
          title="Free Trial"
          description="Book a free trial at MAX ARENA and experience our training environment, equipment and coaching."
          path="/free-trial"
        />
        <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white sm:px-8 lg:px-12">
          <div className="mx-auto flex min-h-[65vh] max-w-4xl items-center justify-center">
            <Reveal className="w-full">
              <div className="border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12 lg:p-16">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white text-black">
                  <Check size={28} strokeWidth={2.5} />
                </div>

                <SectionLabel>TRIAL REQUEST RECEIVED</SectionLabel>

                <h1 className="mt-5 font-bebas text-6xl leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
                  YOUR FIRST
                  <br />
                  <span className="text-white/40">SESSION STARTS HERE.</span>
                </h1>

                <p className="mx-auto mt-7 max-w-xl font-manrope text-sm leading-7 text-white/55 sm:text-base">
                  Thanks, {formData.name || "there"}. Your free trial request
                  has been received. Our team will contact you to confirm your
                  session.
                </p>

                <div className="mx-auto mt-8 max-w-md border border-white/10 bg-white/[0.025] p-5 text-left">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={17} className="text-white/50" />

                    <div>
                      <p className="font-space text-[9px] uppercase tracking-[0.2em] text-white/30">
                        REQUESTED DATE
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {formData.date || "To be confirmed"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <Clock3 size={17} className="text-white/50" />

                    <div>
                      <p className="font-space text-[9px] uppercase tracking-[0.2em] text-white/30">
                        PREFERRED TIME
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {formData.time || "To be confirmed"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <MagneticButton to="/memberships" variant="primary">
                    VIEW MEMBERSHIPS
                  </MagneticButton>

                  <MagneticButton to="/" variant="outline">
                    BACK HOME
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
            <SectionLabel>FREE TRIAL</SectionLabel>

            <SectionHeading
              title="EXPERIENCE"
              highlight="THE ARENA."
              description="No commitment. No pressure. Just one session to experience the training floor, equipment, coaches and energy of MAX ARENA."
              className="mt-6"
            />
          </Reveal>
        </div>
      </section>

      {/* Main */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Information */}
          <Reveal direction="fadeRight">
            <div className="lg:sticky lg:top-28">
              <p className="font-space text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                01 — BEFORE YOU START
              </p>

              <h2 className="mt-3 font-bebas text-4xl tracking-wide sm:text-5xl">
                ONE SESSION.
                <br />
                <span className="text-white/40">NO COMMITMENT.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                Your trial session gives you a chance to understand the
                environment, explore our training zones and speak with our team
                about your goals.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Access to the main training floor",
                  "Quick introduction to the facility",
                  "Goal discussion with our team",
                  "Training guidance for your first session",
                  "No membership payment required",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-4"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-white" />

                    <span className="text-sm text-white/55">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="font-space text-[9px] uppercase tracking-[0.25em] text-white/30">
                  WHAT HAPPENS NEXT
                </p>

                <div className="mt-5 space-y-5">
                  <div className="flex gap-4">
                    <span className="font-space text-xs text-white/30">01</span>

                    <p className="text-sm leading-6 text-white/50">
                      Submit your preferred date and time.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-space text-xs text-white/30">02</span>

                    <p className="text-sm leading-6 text-white/50">
                      Our team contacts you to confirm availability.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <span className="font-space text-xs text-white/30">03</span>

                    <p className="text-sm leading-6 text-white/50">
                      Walk in, train and experience MAX ARENA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="fadeLeft">
            <div className="border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10">
              <div className="mb-10">
                <p className="font-space text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
                  02 — BOOK YOUR SESSION
                </p>

                <h2 className="mt-3 font-bebas text-4xl tracking-wide sm:text-5xl">
                  TELL US ABOUT YOU
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                  Choose a preferred time and give us a little context about
                  your training goals.
                </p>
              </div>

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
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-14 w-full border border-white/10 bg-black/30 pl-12 pr-4 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Preferred Date
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />

                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="h-14 w-full border border-white/10 bg-black/30 px-4 pl-12 font-manrope text-sm text-white outline-none transition-colors focus:border-white/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                    >
                      Preferred Time
                    </label>

                    <div className="relative">
                      <Clock3
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />

                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="h-14 w-full appearance-none border border-white/10 bg-black/30 px-4 pl-12 pr-4 font-manrope text-sm text-white outline-none transition-colors focus:border-white/40"
                      >
                        <option value="" disabled>
                          Select a time
                        </option>

                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
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

                  <select
                    id="goal"
                    name="goal"
                    required
                    value={formData.goal}
                    onChange={handleChange}
                    className="h-14 w-full appearance-none border border-white/10 bg-black/30 px-4 font-manrope text-sm text-white outline-none transition-colors focus:border-white/40"
                  >
                    <option value="" disabled>
                      Select your goal
                    </option>

                    <option value="muscle-building">Build Muscle</option>
                    <option value="fat-loss">Lose Fat</option>
                    <option value="strength">Build Strength</option>
                    <option value="fitness">General Fitness</option>
                    <option value="performance">Sports Performance</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="mb-3 block font-space text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Training Experience
                  </label>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {experienceLevels.map((level) => {
                      const isSelected = formData.experience === level;

                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleExperience(level)}
                          className={`min-h-12 border px-3 py-3 text-left font-space text-[9px] uppercase leading-4 tracking-[0.08em] transition-all duration-300 ${
                            isSelected
                              ? "border-white bg-white text-black"
                              : "border-white/10 bg-black/20 text-white/45 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {level}
                        </button>
                      );
                    })}
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, previous training or anything else..."
                    className="w-full resize-none border border-white/10 bg-black/30 px-4 py-4 font-manrope text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex min-h-14 w-full items-center justify-center gap-3 bg-white px-6 font-space text-xs font-bold tracking-[0.18em] text-black transition-all duration-300 hover:bg-white/90"
                >
                  REQUEST FREE TRIAL
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-[10px] leading-5 text-white/25">
                  Your trial request is free. Our team will contact you to
                  confirm the final session time.
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
              ALREADY KNOW WHAT YOU WANT?
            </p>

            <h2 className="mt-3 font-bebas text-4xl tracking-wide sm:text-5xl">
              EXPLORE MEMBERSHIPS.
            </h2>
          </div>

          <Link
            to="/memberships"
            className="group inline-flex items-center gap-3 font-space text-xs font-bold tracking-[0.18em] text-white"
          >
            VIEW PLANS
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

export default FreeTrial;
