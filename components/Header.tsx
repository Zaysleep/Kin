import Image from "next/image";

import MobileNavigation from "@/components/MobileNavigation";

const navigationLinks = [
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

export default function Header() {
   return (
      <header className="relative z-50 border-b border-[var(--color-border)] bg-[var(--color-stone)]">
         <div className="editorial-container flex min-h-20 items-center justify-between gap-4 py-3 sm:min-h-24 sm:gap-6 sm:py-4">
            <a href="#top" aria-label="Kin home" className="inline-flex min-h-11 min-w-11 items-center no-underline">
               <span className="relative block h-12 w-44 max-w-[58vw] sm:h-14 sm:w-52">
                  <Image src="/images/kin-logo.png" alt="Kin — Independent Software Studio" fill priority sizes="(max-width: 640px) 176px, 208px" className="object-contain object-left" />
               </span>
            </a>

            <nav aria-label="Primary navigation" className="hidden md:block">
               <ul className="flex list-none items-center gap-6 lg:gap-9">
                  {navigationLinks.map((link) => (
                     <li key={link.href}>
                        <a href={link.href} className="inline-flex min-h-11 items-center text-xs font-semibold tracking-[0.12em] text-[var(--color-text-secondary)] uppercase no-underline transition-colors duration-150 hover:text-[var(--color-ink)]">
                           {link.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>

            <MobileNavigation />
         </div>
      </header>
   );
}
