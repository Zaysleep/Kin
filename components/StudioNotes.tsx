const futureNotes = [
   {
      number: "02",
      title: "Why FrontOffice Reads Like a Newspaper",
      subject: "Product Identity",
   },
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

export default function StudioNotes() {
   return (
      <section id="studio-notes" aria-labelledby="studio-notes-title" className="section-shell section-rule bg-[var(--color-paper-alt)]">
         <div className="editorial-container">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(20rem,1.2fr)] lg:gap-20">
               <div>
                  <p className="eyebrow">Studio Notes</p>

                  <h2 id="studio-notes-title" className="editorial-heading section-heading mt-5 max-w-[9ch]">
                     How the work gets made.
                  </h2>
               </div>

               <div className="lg:border-l lg:border-[var(--color-border)] lg:pl-10">
                  <p className="body-copy max-w-2xl">Studio Notes is where Kin documents product decisions, design principles, and lessons from building each product independently.</p>

                  <p className="mt-6 text-sm font-semibold tracking-[0.12em] text-[var(--color-brass)] uppercase">First notes in progress</p>
               </div>
            </div>

            <div className="mt-16 border-t border-[var(--color-rule)] sm:mt-20">
               <article aria-labelledby="featured-note-title" className="grid gap-8 py-10 lg:grid-cols-[8rem_minmax(0,1.15fr)_minmax(16rem,0.55fr)] lg:gap-12">
                  <div>
                     <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-text-secondary)] uppercase">01 / Featured</p>
                  </div>

                  <div>
                     <p className="eyebrow">Studio Practice</p>

                     <h3 id="featured-note-title" className="mt-4 max-w-[18ch] font-[family-name:var(--font-serif)] text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                        Designing Products as Places
                     </h3>
                  </div>

                  <div className="lg:border-l lg:border-[var(--color-border)] lg:pl-8">
                     <p className="text-base leading-7 text-[var(--color-text-secondary)]">A note on why ALLEVIN, Sidewalk, and FrontOffice should each feel distinct—and why sharing the same standards does not mean sharing the same personality.</p>

                     <p className="mt-5 text-sm font-semibold text-[var(--color-text-secondary)]">In preparation</p>
                  </div>
               </article>

               <div className="border-t border-[var(--color-rule)]">
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
         </div>
      </section>
   );
}
