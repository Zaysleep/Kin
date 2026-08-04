const services = [
   {
      number: "01",
      name: "Discovery",
      price: "Free",
      description: "A 30-minute consultation to discuss your goals, scope, timeline, and whether Kin is the right fit for the project.",
   },
   {
      number: "02",
      name: "Starter Website",
      price: "$1,500–$3,000",
      description: "Professional business websites, portfolios, informational sites, and simple booking or inquiry experiences.",
   },
   {
      number: "03",
      name: "Business Web Applications",
      price: "$3,500–$8,000",
      description: "Client portals, dashboards, scheduling systems, internal business software, and workflow tools.",
   },
   {
      number: "04",
      name: "Custom Software",
      price: "Starting at $8,000",
      description: "Tailored web applications, integrations, and larger software systems designed around how your business operates.",
   },
   {
      number: "05",
      name: "Ongoing Support",
      price: "$85 / hour",
      description: "Improvements, bug fixes, maintenance, and future features after launch, with a one-hour minimum.",
   },
];

const processSteps = [
   {
      number: "01",
      title: "Discover",
      description: "We discuss your goals, challenges, audience, timeline, and what success should look like.",
   },
   {
      number: "02",
      title: "Plan",
      description: "You receive a clear proposal covering scope, responsibilities, pricing, and delivery milestones.",
   },
   {
      number: "03",
      title: "Build",
      description: "The product is designed, developed, tested, and reviewed through an iterative process.",
   },
   {
      number: "04",
      title: "Support",
      description: "After launch, Kin remains available for maintenance, improvements, and future additions.",
   },
];

const paymentSteps = [
   {
      amount: "25%",
      label: "Deposit",
      description: "Reserves development time and is credited toward the total project cost.",
   },
   {
      amount: "50%",
      label: "Development Milestone",
      description: "Paid when the project reaches the agreed development milestone.",
   },
   {
      amount: "25%",
      label: "Final Payment",
      description: "Paid after final review and before the completed project is delivered.",
   },
];

export default function Services() {
   return (
      <section id="services" aria-labelledby="services-title" className="section-shell section-rule">
         <div className="editorial-container">
            {/* Main editorial spread */}
            <div className="grid border-y border-[var(--color-rule)] lg:grid-cols-[minmax(17rem,0.62fr)_minmax(0,1.38fr)]">
               {/* Left editorial rail */}
               <div className="flex flex-col justify-between border-b border-[var(--color-rule)] py-12 lg:min-h-[54rem] lg:border-r lg:border-b-0 lg:py-16 lg:pr-14">
                  <div>
                     <p className="eyebrow">Kin Services</p>

                     <h2 id="services-title" className="editorial-heading mt-6 max-w-[9ch] text-[clamp(3.25rem,7vw,6rem)] leading-[1]">
                        Services &amp; Pricing
                     </h2>

                     <div className="mt-9 h-px w-12 bg-[var(--color-brass)]" />

                     <p className="mt-8 max-w-sm text-sm font-semibold leading-7 tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">Thoughtfully designed software for businesses and teams.</p>
                  </div>

                  <aside className="mt-16 border-t border-[var(--color-border)] pt-8 lg:mt-20">
                     <p className="eyebrow">Who Kin Works With</p>

                     <p className="mt-5 max-w-sm text-base leading-8 text-[var(--color-text-secondary)]">
                        Kin works best with small businesses, local organizations, startups, and teams looking for thoughtful software rather than a one-size-fits-all solution.
                     </p>
                  </aside>
               </div>

               {/* Right service listing */}
               <div className="py-12 lg:py-16 lg:pl-16">
                  <p className="eyebrow">Custom Software Services</p>

                  <h3 className="mt-6 max-w-[19ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">Modern software that helps your business move forward with clarity.</h3>

                  <p className="body-copy mt-8 max-w-2xl">In addition to building Kin products, I work with businesses to design and develop websites, internal tools, and custom web applications.</p>

                  <p className="body-copy mt-5 max-w-2xl">Every project receives the same focus on clarity, accessibility, dependable engineering, and long-term maintainability.</p>

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
               </div>
            </div>

            {/* Process and payment */}
            <div className="grid border-b border-[var(--color-rule)] lg:grid-cols-2">
               {/* Process */}
               <div className="border-b border-[var(--color-rule)] py-14 lg:border-r lg:border-b-0 lg:pr-14">
                  <p className="eyebrow">Our Process</p>

                  <h3 className="mt-5 max-w-[15ch] font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl">A clear process from the first conversation through support.</h3>

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

               {/* Payment */}
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

                  <p className="mt-8 text-sm leading-7 text-[var(--color-text-secondary)]">Larger projects may include additional payment milestones, which will be clearly defined in the project proposal before development begins.</p>
               </div>
            </div>

            {/* Closing statement */}
            <div className="py-14 sm:py-16">
               <p className="max-w-5xl font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">Every project receives the same attention to detail that goes into Kin&apos;s own products.</p>

               <p className="body-copy mt-7 max-w-3xl">The goal is not simply to deliver software, but to create something dependable, accessible, and genuinely useful—an experience people understand and are comfortable returning to.</p>

               <a
                  href="#contact"
                  className="mt-9 inline-flex min-h-12 items-center justify-center border border-[var(--color-ink)] px-7 py-3 text-sm font-semibold no-underline transition-colors duration-150 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
               >
                  Let&apos;s Talk
               </a>
            </div>
         </div>
      </section>
   );
}
