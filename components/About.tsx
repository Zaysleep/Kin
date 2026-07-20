const studioDetails = [
   {
      label: "Created by",
      value: "Isaiah Brown",
   },
   {
      label: "Studio model",
      value: "Independent / Solo",
   },
   {
      label: "Focus",
      value: "Software engineering, product design, UX, and accessibility",
   },
   {
      label: "Build approach",
      value: "One person, from the first idea through release and maintenance",
   },
];

export default function About() {
   return (
      <section id="about" aria-labelledby="about-title" className="section-shell section-rule">
         <div className="editorial-container">
            {/* About introduction */}
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(22rem,1.2fr)] lg:gap-20">
               <div className="min-w-0 lg:pr-6">
                  <p className="eyebrow">About the Studio</p>

                  <h2 id="about-title" className="editorial-heading mt-6 max-w-[13ch] text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] sm:mt-7 sm:max-w-[14ch] lg:max-w-[11ch] lg:text-[clamp(3.5rem,5vw,5.25rem)]">
                     <span className="block">Built independently.</span>

                     <span className="mt-2 block">Made with care.</span>
                  </h2>
               </div>

               <div className="min-w-0 lg:border-l lg:border-[var(--color-border)] lg:pl-10">
                  <p className="font-[family-name:var(--font-serif)] text-2xl leading-snug sm:text-3xl">Kin is an independent lifestyle software studio created by Isaiah Brown.</p>

                  <p className="body-copy mt-8">Every Kin product begins with a specific part of everyday life that could feel clearer, more useful, or more enjoyable. Each one is designed, developed, tested, and maintained independently.</p>

                  <p className="body-copy mt-6">
                     A background in software engineering, information technology, and operational systems shapes the approach: understand the real problem, build a dependable foundation, and keep the experience easy to navigate.
                  </p>
               </div>
            </div>

            {/* Studio details */}
            <div className="mt-16 grid gap-10 border-y border-[var(--color-rule)] py-10 sm:mt-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(20rem,1.3fr)] lg:gap-20">
               <div>
                  <p className="eyebrow">Small by Design</p>

                  <p className="mt-5 max-w-md font-[family-name:var(--font-serif)] text-2xl leading-snug">Kin stays small on purpose, giving every product room to develop its own identity while every decision receives direct attention.</p>
               </div>

               <dl>
                  {studioDetails.map((detail) => (
                     <div key={detail.label} className="grid gap-2 border-b border-[var(--color-border)] py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
                        <dt className="text-xs font-semibold tracking-[0.12em] text-[var(--color-text-secondary)] uppercase">{detail.label}</dt>

                        <dd className="text-base leading-7 text-[var(--color-ink)]">{detail.value}</dd>
                     </div>
                  ))}
               </dl>
            </div>

            {/* Product summary */}
            <div className="mt-16 sm:mt-20">
               <p className="eyebrow">The Work</p>

               <p className="mt-5 max-w-4xl font-[family-name:var(--font-serif)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  ALLEVIN helps people move their work forward. Sidewalk helps people make more of the city around them. FrontOffice gives sports fans a place to make the call and stand behind it.
               </p>

               <p className="body-copy mt-7 max-w-3xl">Three different products, built with the same standard: a clear purpose, accessible design, dependable software, and nothing that does not earn its place.</p>
            </div>
         </div>
      </section>
   );
}
