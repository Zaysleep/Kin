const futureNotes = [
   {
      number: "03",
      title: "Why Sidewalk Starts With a Mood",
      subject: "Local Discovery",
   },
   {
      number: "04",
      title: "Accessibility Is Part of the Build",
      subject: "Inclusive Design",
   },
];

const productSections = [
   {
      name: "ALLEVIN",
      description: "ALLEVIN is designed to feel like a calm workspace—a place where unfinished thoughts, project materials, schedules, and next steps can live together without becoming another source of noise.",
   },
   {
      name: "Sidewalk",
      description: "Sidewalk is designed to feel like stepping into a thoughtful city guide. It gives people room to explore, notice what interests them, and shape a day that feels worth remembering.",
   },
   {
      name: "FrontOffice",
      description: "FrontOffice is designed like a shared sports room: a place to make the call, defend an opinion, follow what changes, and return to the decisions that shaped the conversation.",
   },
];

export default function StudioNotes() {
   return (
      <section id="studio-notes" aria-labelledby="studio-notes-title" className="section-shell section-rule bg-[var(--color-paper-alt)]">
         <div className="editorial-container">
            {/* Section introduction */}
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(20rem,1.2fr)] lg:gap-20">
               <div>
                  <p className="eyebrow">Studio Notes</p>

                  <h2 id="studio-notes-title" className="editorial-heading section-heading mt-5 max-w-[9ch]">
                     How the work gets made.
                  </h2>
               </div>

               <div className="lg:border-l lg:border-[var(--color-border)] lg:pl-10">
                  <p className="body-copy max-w-2xl">Studio Notes is where Kin documents product decisions, design principles, and lessons from building each product independently.</p>

                  <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-[var(--color-brass)] uppercase">Note 01 published</p>
               </div>
            </div>

            {/* Featured note */}
            <article aria-labelledby="featured-note-title" className="mt-16 border-t border-[var(--color-rule)] pt-10 sm:mt-20 sm:pt-12">
               <div className="grid gap-10 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-12">
                  <div>
                     <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)] uppercase">01 / Featured</p>

                     <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">July 2026</p>
                  </div>

                  <div className="min-w-0">
                     <p className="eyebrow">Studio Practice</p>

                     <h3 id="featured-note-title" className="mt-5 max-w-[18ch] font-[family-name:var(--font-serif)] text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                        Software Should Feel Like a Place
                     </h3>

                     <p className="mt-8 max-w-3xl font-[family-name:var(--font-serif)] text-2xl leading-snug sm:text-3xl">
                        The best software does more than give someone something to look at. It creates a place they understand, trust, and want to return to.
                     </p>

                     {/* Expandable note */}
                     <details className="group mt-10 border-y border-[var(--color-rule)]">
                        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left marker:hidden">
                           <span className="text-sm font-semibold tracking-[0.08em] text-[var(--color-ink)] uppercase">Read Studio Note 01</span>

                           <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-lg leading-none transition-transform duration-200 group-open:rotate-45">
                              +
                           </span>
                        </summary>

                        <div className="border-t border-[var(--color-border)] py-10 sm:py-12">
                           <div className="max-w-3xl">
                              <p className="text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">That idea shapes every product built by Kin.</p>

                              {/* Product-specific sections */}
                              <div className="mt-10 space-y-10">
                                 {productSections.map((product) => (
                                    <section key={product.name} aria-labelledby={`${product.name.toLowerCase()}-note-heading`} className="border-l-2 border-[var(--color-border)] pl-6 sm:pl-8">
                                       <h4 id={`${product.name.toLowerCase()}-note-heading`} className="eyebrow">
                                          {product.name}
                                       </h4>

                                       <p className="mt-4 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">{product.description}</p>
                                    </section>
                                 ))}
                              </div>

                              {/* Shared principle */}
                              <div className="mt-12 space-y-7 text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                                 <p>
                                    These products serve different parts of everyday life, but they follow the same principle. The interface should not compete for attention. It should create enough clarity and character for someone to settle in and do
                                    something meaningful.
                                 </p>

                                 <p>That might mean pushing a project forward, exploring the city around them, or expressing what they believe their team should do next.</p>

                                 <p>Software becomes more useful when it feels less like a collection of screens and more like a place with purpose.</p>

                                 <p>That is what Kin is working toward: digital spaces people can return to—not because they demand attention, but because they make work, discovery, and expression feel a little clearer.</p>
                              </div>

                              <blockquote className="mt-12 border-y border-[var(--color-rule)] py-9 font-[family-name:var(--font-serif)] text-2xl leading-snug text-[var(--color-ink)] sm:text-3xl">
                                 “Software should feel less like a collection of screens and more like a place with purpose.”
                              </blockquote>
                           </div>
                        </div>
                     </details>
                  </div>
               </div>
            </article>

            {/* Upcoming notes */}
            <div className="mt-16 border-t border-[var(--color-rule)] sm:mt-20">
               <article className="grid gap-5 border-b border-[var(--color-border)] py-8 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(10rem,0.35fr)] sm:items-center sm:gap-8">
                  <p aria-hidden="true" className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)]">
                     02
                  </p>

                  <div>
                     <p className="eyebrow mb-3">Next Note</p>

                     <h3 className="font-[family-name:var(--font-serif)] text-2xl leading-tight">Why FrontOffice Reads Like a Newspaper</h3>
                  </div>

                  <div className="sm:text-right">
                     <p className="text-sm leading-6 text-[var(--color-text-secondary)]">Product Identity</p>

                     <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-brass)] uppercase">In preparation</p>
                  </div>
               </article>

               {futureNotes.map((note) => (
                  <article key={note.number} className="grid gap-4 border-b border-[var(--color-border)] py-7 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(10rem,0.35fr)] sm:items-center sm:gap-8">
                     <p aria-hidden="true" className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)]">
                        {note.number}
                     </p>

                     <h3 className="font-[family-name:var(--font-serif)] text-2xl leading-tight">{note.title}</h3>

                     <p className="text-sm leading-6 text-[var(--color-text-secondary)] sm:text-right">{note.subject}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
