"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

const services = [
   {
      number: "01",
      name: "Discovery",
      price: "Free",
      description: "A 30-minute consultation to discuss your goals, scope, timeline, and determine whether Kin is the right fit for your project.",
   },
   {
      number: "02",
      name: "Starter Website",
      price: "$1,500–$3,000",
      description: "Professional websites, portfolios, informational sites, and simple booking or inquiry experiences.",
   },
   {
      number: "03",
      name: "Business Web Applications",
      price: "$3,500–$8,000",
      description: "Client portals, dashboards, scheduling systems, internal tools, and custom business workflows.",
   },
   {
      number: "04",
      name: "Custom Software",
      price: "Starting at $8,000",
      description: "Tailored software solutions, integrations, and larger web applications designed around your business.",
   },
];

const supportPlans = [
   {
      name: "Kin Care — Essential",
      price: "$150/month",
      features: ["Security and health monitoring", "Monthly dependency updates", "Backup verification", "Up to 1 hour of content or feature updates"],
   },
   {
      name: "Kin Care — Growth",
      price: "$350/month",
      features: ["Everything in Essential", "Up to 4 hours of updates", "Priority support", "Quarterly planning session"],
   },
   {
      name: "Kin Care — Partnership",
      price: "Starting at $750/month",
      features: ["Ongoing feature development", "Monthly planning sessions", "Priority response times", "Custom support agreement"],
   },
   {
      name: "Pay As You Go",
      price: "$85/hour",
      features: ["Occasional updates or enhancements", "One-hour minimum"],
   },
];

const processSteps = [
   {
      number: "01",
      title: "Discover",
      description: "We learn about your goals, challenges, and vision.",
   },
   {
      number: "02",
      title: "Plan",
      description: "A clear proposal, timeline, and project roadmap.",
   },
   {
      number: "03",
      title: "Build",
      description: "Thoughtful development with regular progress updates.",
   },
   {
      number: "04",
      title: "Support",
      description: "Long-term improvements as your business grows.",
   },
];

const paymentSteps = [
   {
      amount: "25%",
      label: "Project Deposit",
      description: "Reserves your development time and is credited toward the total project cost.",
   },
   {
      amount: "50%",
      label: "Development Milestone",
      description: "Paid during active development.",
   },
   {
      amount: "25%",
      label: "Final Payment",
      description: "Due prior to final delivery and project launch.",
   },
];

const serviceOptions = ["Discovery Consultation", "Starter Website", "Business Web Application", "Custom Software", "Kin Care — Essential", "Kin Care — Growth", "Kin Care — Partnership", "Pay As You Go Support"];

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactForm = {
   name: string;
   email: string;
   company: string;
   services: string[];
   details: string;
};

const initialForm: ContactForm = {
   name: "",
   email: "",
   company: "",
   services: [],
   details: "",
};

export default function Services() {
   const [form, setForm] = useState<ContactForm>(initialForm);
   const [status, setStatus] = useState<FormStatus>("idle");
   const [statusMessage, setStatusMessage] = useState("");

   function updateField(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;

      setForm((current) => ({
         ...current,
         [name]: value,
      }));
   }

   function toggleService(event: ChangeEvent<HTMLInputElement>) {
      const { value, checked } = event.target;

      setForm((current) => ({
         ...current,
         services: checked ? [...current.services, value] : current.services.filter((service) => service !== value),
      }));
   }

   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      if (form.services.length === 0) {
         setStatus("error");
         setStatusMessage("Please select at least one service.");
         return;
      }

      setStatus("submitting");
      setStatusMessage("");

      try {
         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
         });

         const result = (await response.json()) as {
            message?: string;
         };

         if (!response.ok) {
            throw new Error(result.message ?? "Your message could not be sent.");
         }

         setForm(initialForm);
         setStatus("success");
         setStatusMessage("Your message has been sent to Kin.");
      } catch (error) {
         setStatus("error");
         setStatusMessage(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
      }
   }

   return (
      <section id="services" aria-labelledby="services-title" className="section-shell section-rule">
         <div className="editorial-container">
            {/* Main editorial spread */}
            <div className="grid border-y border-[var(--color-rule)] lg:grid-cols-[minmax(17rem,0.62fr)_minmax(0,1.38fr)]">
               <div className="flex flex-col justify-between border-b border-[var(--color-rule)] py-12 lg:min-h-[52rem] lg:border-r lg:border-b-0 lg:py-16 lg:pr-14">
                  <div>
                     <p className="eyebrow">Kin Services</p>

                     <h2 id="services-title" className="editorial-heading mt-6 max-w-[9ch] text-[clamp(3.25rem,7vw,6rem)] leading-[1]">
                        Work With Kin
                     </h2>

                     <div className="mt-9 h-px w-12 bg-[var(--color-brass)]" />

                     <p className="mt-8 max-w-sm text-sm font-semibold leading-7 tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">Thoughtfully designed software for businesses, organizations, and teams.</p>
                  </div>

                  <aside className="mt-16 border-t border-[var(--color-border)] pt-8 lg:mt-20">
                     <p className="eyebrow">Who Kin Works With</p>

                     <p className="mt-5 max-w-sm text-base leading-8 text-[var(--color-text-secondary)]">
                        Kin works best with small businesses, local organizations, startups, and teams looking for thoughtful software rather than a one-size-fits-all solution.
                     </p>
                  </aside>
               </div>

               <div className="py-12 lg:py-16 lg:pl-16">
                  <p className="eyebrow">Custom Software Services</p>

                  <h3 className="mt-6 max-w-[19ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">Software shaped around how your business actually works.</h3>

                  <p className="body-copy mt-8 max-w-2xl">In addition to building Kin products, I work with businesses to design and develop modern websites, internal tools, and custom web applications.</p>

                  <p className="body-copy mt-5 max-w-2xl">Every project is approached with the same focus on clarity, accessibility, and long-term maintainability.</p>

                  <div className="mt-12 border-t border-[var(--color-rule)]">
                     {services.map((service) => (
                        <article key={service.number} className="grid gap-5 border-b border-[var(--color-border)] py-8 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(8rem,0.35fr)] sm:gap-7">
                           <p aria-hidden="true" className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)]">
                              {service.number}
                           </p>

                           <div>
                              <h4 className="font-[family-name:var(--font-serif)] text-2xl leading-tight">{service.name}</h4>

                              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">{service.description}</p>
                           </div>

                           <p className="text-sm font-semibold leading-6 text-[var(--color-ink)] sm:text-right">{service.price}</p>
                        </article>
                     ))}
                  </div>

                  <aside className="mt-9 border-l-2 border-[var(--color-brass)] pl-6">
                     <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                        <strong className="font-semibold text-[var(--color-ink)]">Not sure which option fits your project?</strong> Every engagement begins with a complimentary discovery consultation where we&apos;ll discuss your goals and recommend the
                        best approach—no obligation.
                     </p>
                  </aside>
               </div>
            </div>

            {/* Ongoing support */}
            <div className="border-b border-[var(--color-rule)] py-14 sm:py-16">
               <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(22rem,1.4fr)] lg:gap-20">
                  <div>
                     <p className="eyebrow">After Launch</p>

                     <h3 className="mt-5 max-w-[12ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">Ongoing Support</h3>
                  </div>

                  <p className="body-copy max-w-2xl">Software evolves over time. Whether you need updates, improvements, or new features, Kin offers flexible support after launch.</p>
               </div>

               <div className="mt-12 grid border-t border-[var(--color-rule)] md:grid-cols-2">
                  {supportPlans.map((plan, index) => (
                     <article key={plan.name} className={["border-b border-[var(--color-border)] py-9", index % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"].join(" ")}>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                           <h4 className="font-[family-name:var(--font-serif)] text-2xl leading-tight">{plan.name}</h4>

                           <p className="shrink-0 text-sm font-semibold text-[var(--color-ink)]">{plan.price}</p>
                        </div>

                        <ul className="mt-7 space-y-3">
                           {plan.features.map((feature) => (
                              <li key={feature} className="flex gap-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                                 <span aria-hidden="true" className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-[var(--color-brass)]" />

                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>
                     </article>
                  ))}
               </div>
            </div>

            {/* Process and payment */}
            <div className="grid border-b border-[var(--color-rule)] lg:grid-cols-2">
               <div className="border-b border-[var(--color-rule)] py-14 lg:border-r lg:border-b-0 lg:pr-14">
                  <p className="eyebrow">The Process</p>

                  <h3 className="mt-5 max-w-[14ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl">Clear from the beginning.</h3>

                  <ol className="mt-10 list-none border-t border-[var(--color-rule)]">
                     {processSteps.map((step) => (
                        <li key={step.number} className="grid gap-4 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_minmax(8rem,0.45fr)_minmax(0,1fr)] sm:gap-6">
                           <span className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)]">{step.number}</span>

                           <h4 className="font-[family-name:var(--font-serif)] text-xl leading-tight">{step.title}</h4>

                           <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{step.description}</p>
                        </li>
                     ))}
                  </ol>
               </div>

               <div className="py-14 lg:pl-14">
                  <p className="eyebrow">Investment &amp; Payment</p>

                  <h3 className="mt-5 max-w-[14ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl">Transparent pricing. Clear expectations.</h3>

                  <div className="mt-10 grid border border-[var(--color-border)] sm:grid-cols-3">
                     {paymentSteps.map((step, index) => (
                        <div key={step.label} className={["p-7 text-center", index < paymentSteps.length - 1 ? "border-b border-[var(--color-border)] sm:border-r sm:border-b-0" : ""].join(" ")}>
                           <p className="font-[family-name:var(--font-serif)] text-4xl leading-none">{step.amount}</p>

                           <p className="mt-5 text-xs font-semibold tracking-[0.12em] uppercase">{step.label}</p>

                           <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{step.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Closing statement */}
            <div className="border-b border-[var(--color-rule)] py-14 sm:py-16">
               <blockquote className="max-w-5xl font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  Every project receives the same attention to detail that goes into Kin&apos;s own products. My goal is to build software that is dependable, accessible, and designed to serve your business for years to come.
               </blockquote>
            </div>

            {/* Contact form */}
            <div id="work-with-kin" className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.65fr)_minmax(22rem,1.35fr)] lg:gap-20">
               <div>
                  <p className="eyebrow">Start a Conversation</p>

                  <h3 className="mt-5 max-w-[11ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">Tell Kin what you&apos;re working on.</h3>

                  <p className="body-copy mt-7 max-w-md">Select the services that interest you and share any useful context. Your message will be sent directly to Kin.</p>
               </div>

               <form onSubmit={handleSubmit} className="border-t border-[var(--color-rule)] pt-8">
                  <div className="grid gap-7 sm:grid-cols-2">
                     <label className="block">
                        <span className="eyebrow">Name</span>

                        <input
                           type="text"
                           name="name"
                           value={form.name}
                           onChange={updateField}
                           required
                           autoComplete="name"
                           className="mt-3 min-h-12 w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-ink)]"
                        />
                     </label>

                     <label className="block">
                        <span className="eyebrow">Email</span>

                        <input
                           type="email"
                           name="email"
                           value={form.email}
                           onChange={updateField}
                           required
                           autoComplete="email"
                           className="mt-3 min-h-12 w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-ink)]"
                        />
                     </label>
                  </div>

                  <label className="mt-7 block">
                     <span className="eyebrow">Business or Organization</span>

                     <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={updateField}
                        autoComplete="organization"
                        className="mt-3 min-h-12 w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-[var(--color-ink)]"
                     />
                  </label>

                  <fieldset className="mt-9">
                     <legend className="eyebrow">Services You&apos;re Interested In</legend>

                     <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {serviceOptions.map((service) => (
                           <label key={service} className="flex min-h-12 cursor-pointer items-center gap-3 border border-[var(--color-border)] px-4 py-3">
                              <input type="checkbox" value={service} checked={form.services.includes(service)} onChange={toggleService} className="h-4 w-4 accent-[var(--color-ink)]" />

                              <span className="text-sm leading-6">{service}</span>
                           </label>
                        ))}
                     </div>
                  </fieldset>

                  <label className="mt-9 block">
                     <span className="eyebrow">Project Details</span>

                     <textarea
                        name="details"
                        value={form.details}
                        onChange={updateField}
                        required
                        rows={7}
                        placeholder="Tell me about your goals, current challenges, preferred timeline, or anything else that would help me understand the project."
                        className="mt-3 w-full resize-y border border-[var(--color-border)] bg-transparent px-4 py-3 text-base leading-7 outline-none transition-colors placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-ink)]"
                     />
                  </label>

                  <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                     <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex min-h-12 items-center justify-center border border-[var(--color-ink)] bg-transparent px-7 py-3 text-sm font-semibold transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] disabled:cursor-not-allowed disabled:opacity-60"
                     >
                        {status === "submitting" ? "Sending…" : "Send to Kin"}
                     </button>

                     <p aria-live="polite" className={["max-w-md text-sm leading-6", status === "success" ? "text-[var(--color-sidewalk-olive)]" : "", status === "error" ? "text-[var(--color-frontoffice)]" : ""].join(" ")}>
                        {statusMessage}
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
