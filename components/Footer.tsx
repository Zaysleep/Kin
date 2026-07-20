import Image from "next/image";

const studioLinks = [
   {
      label: "Products",
      href: "#products",
   },
   {
      label: "Philosophy",
      href: "#philosophy",
   },
   {
      label: "Studio Notes",
      href: "#studio-notes",
   },
   {
      label: "About",
      href: "#about",
   },
];

const productLinks = [
   {
      label: "ALLEVIN",
      href: "https://allevin.vercel.app/",
   },
   {
      label: "FrontOffice",
      href: "https://front-office-lilac.vercel.app/",
   },
];

const contactLinks = [
   {
      label: "GitHub",
      href: "https://github.com/Zaysleep",
      external: true,
   },
   {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isaiah-brown-832b413bb/",
      external: true,
   },
   {
      label: "Email",
      href: "mailto:zaydidntwakeup@gmail.com",
      external: false,
   },
];

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="border-t border-[#4a463f] bg-[#1b1a17] text-[var(--color-paper)]">
         <div className="editorial-container py-14 sm:py-16">
            <div className="grid gap-16 lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.4fr)] lg:gap-20">
               <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <a href="#top" aria-label="Return to the top of the Kin website" className="flex min-h-11 w-fit items-center no-underline">
                     <Image src="/images/kin.png" alt="Kin — Independent Software Studio" width={1000} height={1000} sizes="(max-width: 767px) 176px, 208px" className="h-auto w-44 object-contain brightness-0 invert sm:w-52" />
                  </a>

                  <p className="mt-7 w-full max-w-md font-[family-name:var(--font-serif)] text-2xl leading-snug sm:text-3xl lg:max-w-sm lg:text-2xl">Thoughtful software for the moments that shape everyday life.</p>

                  <p className="mt-4 w-full max-w-md text-base leading-7 text-[#d0c8bc] lg:max-w-sm lg:text-sm lg:leading-6">An independent lifestyle software studio created, designed, developed, and maintained by Isaiah Brown.</p>
               </div>

               <div className="grid gap-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-10">
                  <nav aria-label="Footer studio navigation" className="border-t border-[#4a463f] pt-5 text-center md:text-left">
                     <p className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#aaa296] uppercase md:justify-between">
                        <span>Studio</span>
                        <span aria-hidden="true">01</span>
                     </p>

                     <ul className="mt-5 list-none">
                        {studioLinks.map((link) => (
                           <li key={link.href} className="border-t border-[#302e2a] first:border-t-0">
                              <a href={link.href} className="group flex min-h-14 items-center justify-center gap-3 py-3 text-base text-[var(--color-paper)] no-underline transition-colors duration-150 hover:text-[#e5ded2] md:justify-between">
                                 <span>{link.label}</span>

                                 <span aria-hidden="true" className="text-[#7c746a] transition-transform duration-150 group-hover:translate-x-1">
                                    →
                                 </span>
                              </a>
                           </li>
                        ))}
                     </ul>
                  </nav>

                  <nav aria-label="Kin products" className="border-t border-[#4a463f] pt-5 text-center md:text-left">
                     <p className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#aaa296] uppercase md:justify-between">
                        <span>Products</span>
                        <span aria-hidden="true">02</span>
                     </p>

                     <ul className="mt-5 list-none">
                        {productLinks.map((link) => (
                           <li key={link.href} className="border-t border-[#302e2a] first:border-t-0">
                              <a
                                 href={link.href}
                                 target="_blank"
                                 rel="noreferrer"
                                 className="group flex min-h-14 items-center justify-center gap-3 py-3 text-base text-[var(--color-paper)] no-underline transition-colors duration-150 hover:text-[#e5ded2] md:justify-between"
                              >
                                 <span>{link.label}</span>

                                 <span aria-hidden="true" className="text-[#7c746a] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    ↗
                                 </span>

                                 <span className="sr-only"> opens in a new tab</span>
                              </a>
                           </li>
                        ))}

                        <li className="border-t border-[#302e2a]">
                           <span className="flex min-h-14 items-center justify-center gap-3 py-3 text-base text-[#8e877c] md:justify-between">
                              <span>Sidewalk</span>

                              <span className="text-xs font-semibold tracking-[0.12em] uppercase">Soon</span>
                           </span>
                        </li>
                     </ul>
                  </nav>

                  <nav aria-label="Contact Isaiah Brown" className="border-t border-[#4a463f] pt-5 text-center md:col-span-2 md:text-left lg:col-span-1">
                     <p className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#aaa296] uppercase md:justify-between">
                        <span>Connect</span>
                        <span aria-hidden="true">03</span>
                     </p>

                     <ul className="mt-5 list-none md:grid md:grid-cols-3 md:gap-5 lg:block">
                        {contactLinks.map((link) => (
                           <li key={link.href} className="border-t border-[#302e2a] first:border-t-0 md:border-t md:first:border-t lg:first:border-t-0">
                              <a
                                 href={link.href}
                                 target={link.external ? "_blank" : undefined}
                                 rel={link.external ? "noreferrer" : undefined}
                                 className="group flex min-h-14 items-center justify-center gap-3 py-3 text-base text-[var(--color-paper)] no-underline transition-colors duration-150 hover:text-[#e5ded2] md:justify-between"
                              >
                                 <span>{link.label}</span>

                                 <span aria-hidden="true" className="text-[#7c746a] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    {link.external ? "↗" : "→"}
                                 </span>

                                 {link.external ? <span className="sr-only"> opens in a new tab</span> : null}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </nav>
               </div>
            </div>

            <div className="mt-14 grid gap-4 border-t border-[#3b3832] pt-7 text-center text-sm leading-6 text-[#aaa296] md:grid-cols-2 md:items-end md:text-left lg:text-xs lg:leading-5">
               <p>© {currentYear} Kin. Independent Software Studio.</p>

               <p className="md:text-right"></p>
            </div>
         </div>
      </footer>
   );
}
