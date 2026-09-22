import { useState } from "react";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import SEO from "../components/SEO";

const contactDetails = [
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Mumbai, Maharashtra",
    detail: "MAX ARENA Training Facility",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 98765 43210",
    detail: "Mon — Sat / 06:00 — 21:00",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@maxarena.in",
    detail: "Usually responds within 24 hours",
    href: "mailto:hello@maxarena.in",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "Membership",
  "Personal Training",
  "Free Trial",
  "Classes",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  enquiry: "General Enquiry",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.enquiry,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const validationMessage =
          data?.errors?.[0]?.message || data?.message;

        throw new Error(
          validationMessage || "Unable to send your enquiry."
        );
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (submitError) {
      console.error("Contact form submission error:", submitError);

      setError(
        submitError.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with MAX ARENA for memberships, training enquiries, free trials and general questions."
        path="/contact"
      />

      <main className="overflow-hidden bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[75vh] items-end border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px]">
            <SectionLabel number="01" label="Get In Touch" />

            <SectionHeading
              className="mt-8"
              eyebrow="MAX ARENA / CONTACT"
              title={
                <>
                  LET&apos;S TALK
                  <br />
                  TRAINING
                </>
              }
              description="Have a question about memberships, coaching, classes or the gym? Talk to the MAX ARENA team."
            />
          </div>
        </section>

        {/* CONTACT INFO + FORM */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* DETAILS */}
            <div>
              <SectionLabel number="02" label="Contact Details" />

              <div className="mt-10 space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="group border border-white/10 bg-[#080808] p-5 transition-colors duration-300 hover:border-white/20 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03]">
                          <Icon
                            size={17}
                            strokeWidth={1.5}
                            className="text-white/50 transition-colors duration-300 group-hover:text-white"
                          />
                        </div>

                        {item.href && (
                          <ArrowUpRight
                            size={16}
                            className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                          />
                        )}
                      </div>

                      <p className="mt-6 font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                        {item.label}
                      </p>

                      <p className="mt-2 font-manrope text-sm font-semibold text-white">
                        {item.value}
                      </p>

                      <p className="mt-1 font-manrope text-xs text-white/30">
                        {item.detail}
                      </p>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <Reveal
                animation="fadeUp"
                delay={0.15}
                className="mt-8"
              >
                <div className="border-t border-white/10 pt-7">
                  <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    OPENING HOURS
                  </p>

                  <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-manrope text-xs text-white/45">
                      Monday — Saturday
                    </span>

                    <span className="font-space text-[9px] text-white/60">
                      06:00 — 21:00
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-manrope text-xs text-white/45">
                      Sunday
                    </span>

                    <span className="font-space text-[9px] text-white/60">
                      07:00 — 14:00
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* FORM */}
            <div>
              <SectionLabel number="03" label="Send An Enquiry" />

              <div className="mt-10">
                {submitted ? (
                  <Reveal
                    animation="scale"
                    className="border border-white/15 bg-white/[0.03] p-8 sm:p-12"
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white text-black">
                      ✓
                    </div>

                    <h3 className="mt-8 font-bebas text-5xl uppercase tracking-wide text-white sm:text-6xl">
                      MESSAGE
                      <br />
                      RECEIVED.
                    </h3>

                    <p className="mt-5 max-w-lg font-manrope text-sm leading-relaxed text-white/40">
                      Thanks for reaching out to MAX ARENA. Our team will get
                      back to you as soon as possible.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 font-space text-[9px] font-bold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
                    >
                      Send Another Message →
                    </button>
                  </Reveal>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="border border-white/10 bg-[#080808] p-5 sm:p-8"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/30"
                        >
                          Your Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          disabled={isSubmitting}
                          className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/30"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          disabled={isSubmitting}
                          className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/30"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91"
                          required
                          disabled={isSubmitting}
                          className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 font-manrope text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry"
                          className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/30"
                        >
                          Enquiry Type
                        </label>

                        <select
                          id="enquiry"
                          name="enquiry"
                          value={formData.enquiry}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-3 font-manrope text-sm text-white outline-none transition-colors focus:border-white/40 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {enquiryTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-[#080808] text-white"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-7">
                      <label
                        htmlFor="message"
                        className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/30"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you want to know..."
                        required
                        disabled={isSubmitting}
                        className="mt-3 w-full resize-none border-b border-white/10 bg-transparent px-0 py-3 font-manrope text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/40 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    {error && (
                      <div
                        role="alert"
                        className="mt-6 border border-red-500/20 bg-red-500/5 px-4 py-3 font-manrope text-xs leading-5 text-red-300"
                      >
                        {error}
                      </div>
                    )}

                    <div className="mt-8">
                      <MagneticButton
                        type="submit"
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
                      </MagneticButton>
                    </div>

                    <p className="mt-5 font-space text-[8px] uppercase tracking-[0.12em] text-white/20">
                      Your details are only used to respond to your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <SectionLabel number="04" label="Find The Arena" />

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <Reveal animation="fadeRight">
                <div className="flex h-full min-h-[320px] flex-col justify-between border border-white/10 bg-[#080808] p-7 sm:p-9">
                  <div>
                    <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      MAX ARENA / LOCATION
                    </p>

                    <h2 className="mt-8 font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white">
                      MUMBAI
                      <br />
                      MAHARASHTRA
                    </h2>
                  </div>

                  <div className="mt-10">
                    <p className="font-manrope text-sm text-white/40">
                      MAX ARENA Training Facility
                    </p>

                    <p className="mt-2 font-space text-[9px] uppercase tracking-[0.12em] text-white/25">
                      Exact address will be added before launch.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal animation="fadeLeft" delay={0.1}>
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border border-white/10 bg-[#080808]">
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                    <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                    <div className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
                  </div>

                  <div className="relative text-center">
                    <MapPin
                      size={28}
                      strokeWidth={1.2}
                      className="mx-auto text-white/60"
                    />

                    <p className="mt-5 font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                      MAX ARENA
                    </p>

                    <p className="mt-2 font-bebas text-3xl tracking-wide text-white">
                      MUMBAI
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionLabel number="05" label="Start Here" align="center" />

            <h2 className="mt-8 font-bebas text-7xl uppercase leading-[0.82] tracking-wide text-white sm:text-8xl lg:text-[9rem]">
              LET&apos;S
              <br />
              TALK.
            </h2>

            <p className="mx-auto mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
              Still have questions? Start with a free trial or send us an
              enquiry and the MAX ARENA team will help you choose your next
              step.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <MagneticButton to="/free-trial">
                Book Free Trial
              </MagneticButton>

              <MagneticButton to="/memberships" variant="outline">
                View Memberships
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;