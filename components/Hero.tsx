const studioDetails = [
   {
      label: "Issue",
      value: "No. 01",
   },
   {
      label: "Studio",
      value: "Independent",
   },
   {
      label: "Designed by",
      value: "Isaiah Brown",
   },
   {
      label: "Based in",
      value: "California",
   },
];

export default function Hero() {
   return (
      <section aria-labelledby="hero-title" className="overflow-hidden">
         <div className="editorial-container border-b border-[var(--color-rule)] py-14 sm:py-20 md:py-24 lg:py-28">
            <div className="grid gap-12 sm:gap-14 md:gap-16 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.6fr)] lg:gap-20">
               <div>
                  <p className="eyebrow">Kin / Independent Lifestyle Software Studio</p>

                  <h1 id="hero-title" className="editorial-heading mt-6 max-w-[14ch] text-[clamp(3rem,12vw,6rem)] sm:mt-7 sm:text-[clamp(3.5rem,6.5vw,7rem)] md:max-w-[13ch]">
                     Software for meaningful work, memorable days, and the interests that bring people together.
                  </h1>

                  <div className="pt-12 sm:pt-14 lg:pt-16">
                     <p className="body-copy max-w-2xl">Kin is an independent studio creating distinct digital products for projects, local discovery, and sports conversation.</p>
                  </div>

                  <a href="#products" className="editorial-link mt-7 sm:mt-10">
                     Explore the Work
                  </a>
               </div>

               <aside aria-label="Kin studio information" className="border-t border-[var(--color-rule)] pt-7 sm:pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                  <div className="grid gap-9 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] md:gap-12 lg:block">
                     <div>
                        <p className="eyebrow">Studio Journal</p>

                        <dl className="mt-6 grid grid-cols-2 gap-x-5 sm:mt-8 sm:gap-x-8 md:grid-cols-2 lg:block">
                           {studioDetails.map((detail) => (
                              <div key={detail.label} className="border-t border-[var(--color-border)] py-4 first:border-t-0 first:pt-0 nth-[2]:border-t-0 nth-[2]:pt-0 lg:grid lg:grid-cols-[7rem_1fr] lg:gap-4 lg:first:border-t-0">
                                 <dt className="text-[0.65rem] font-semibold tracking-[0.1em] text-[var(--color-text-secondary)] uppercase sm:text-xs">{detail.label}</dt>

                                 <dd className="mt-1 text-sm font-medium text-[var(--color-ink)] lg:mt-0">{detail.value}</dd>
                              </div>
                           ))}
                        </dl>
                     </div>

                     <div className="border-t border-[var(--color-rule)] pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8 lg:mt-10 lg:border-t lg:border-l-0 lg:pt-6 lg:pl-0">
                        <p className="font-[family-name:var(--font-serif)] text-2xl leading-tight">
                           Different products.
                           <br />
                           One standard of care.
                        </p>

                        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text-secondary)]">Complexity belongs behind the scenes. Clarity belongs in the experience.</p>
                     </div>
                  </div>
               </aside>
            </div>
         </div>
      </section>
   );
}
