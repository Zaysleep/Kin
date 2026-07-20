const principles = [
   {
      number: "01",
      title: "Calm by Design",
      description: "Make every interface easier to read, understand, and return to.",
   },
   {
      number: "02",
      title: "Human First",
      description: "Give people useful support without taking control away from them.",
   },
   {
      number: "03",
      title: "Context Before Action",
      description: "Explain what matters before asking someone to make a decision.",
   },
   {
      number: "04",
      title: "Explain Why",
      description: "Recommendations should be clear enough to understand, trust, and question.",
   },
   {
      number: "05",
      title: "Useful Before Impressive",
      description: "Every feature should solve a real problem and earn its place.",
   },
   {
      number: "06",
      title: "Accessible by Default",
      description: "Accessibility belongs in the first design decision, not the final review.",
   },
   {
      number: "07",
      title: "Built to Last",
      description: "Choose patterns that remain clear and useful after trends pass.",
   },
   {
      number: "08",
      title: "Keep It Simple",
      description: "Favor understandable code, focused products, and intentional experiences.",
   },
   {
      number: "09",
      title: "Respect Attention",
      description: "Avoid manipulative urgency, visual noise, and constant interruption.",
   },
   {
      number: "10",
      title: "Different Products, Shared Standard",
      description: "Each product can feel distinct while sharing the same care for clarity, accessibility, and quality.",
   },
];

export default function Philosophy() {
   return (
      <section id="philosophy" aria-labelledby="philosophy-title" className="section-shell section-rule">
         <div className="editorial-container">
            <div className="grid items-center gap-12 border-b border-[var(--color-rule)] py-12 sm:py-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(20rem,1.25fr)] lg:gap-20 lg:py-20">
               <div>
                  <p className="eyebrow">Studio Philosophy</p>

                  <h2 id="philosophy-title" className="editorial-heading mt-5 max-w-[11ch] text-[clamp(3rem,7vw,6rem)]">
                     Good software knows what to leave out.
                  </h2>
               </div>

               <div className="lg:border-l lg:border-[var(--color-border)] lg:py-4 lg:pl-10">
                  <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug sm:text-3xl">Kin is built around a simple idea: software should make things easier to understand, not harder to manage.</p>

                  <p className="body-copy mt-7">Clear choices. Useful context. Less noise.</p>
               </div>
            </div>

            <ol className="list-none">
               {principles.map((principle) => (
                  <li key={principle.number} className="grid gap-4 border-b border-[var(--color-border)] py-7 sm:grid-cols-[4rem_minmax(12rem,0.65fr)_minmax(0,1fr)] sm:gap-8">
                     <span aria-hidden="true" className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)]">
                        {principle.number}
                     </span>

                     <h3 className="font-[family-name:var(--font-serif)] text-2xl leading-tight">{principle.title}</h3>

                     <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">{principle.description}</p>
                  </li>
               ))}
            </ol>

            <div className="mt-16 grid gap-8 border-y border-[var(--color-rule)] py-10 sm:mt-20 lg:grid-cols-[0.4fr_1fr] lg:gap-16">
               <p className="eyebrow">The Kin Promise</p>

               <blockquote className="font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl">A Kin product should leave you clearer, more capable, or more excited about what comes next.</blockquote>
            </div>
         </div>
      </section>
   );
}
