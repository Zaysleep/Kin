"use client";

import { useEffect, useState } from "react";

const navigationLinks = [
   {
      number: "01",
      label: "Products",
      href: "#products",
   },
   {
      number: "02",
      label: "Philosophy",
      href: "#philosophy",
   },
   {
      number: "03",
      label: "Studio Notes",
      href: "#studio-notes",
   },
   {
      number: "04",
      label: "About",
      href: "#about",
   },
];

export default function MobileNavigation() {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      function handleEscape(event: KeyboardEvent) {
         if (event.key === "Escape") {
            setIsOpen(false);
         }
      }

      document.addEventListener("keydown", handleEscape);

      return () => {
         document.removeEventListener("keydown", handleEscape);
      };
   }, []);

   function closeMenu() {
      setIsOpen(false);
   }

   return (
      <div className="md:hidden">
         <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((currentState) => !currentState)}
            className="inline-flex min-h-11 min-w-14 items-center justify-center border border-[var(--color-border)] bg-transparent px-3 text-[0.7rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-150 hover:border-[var(--color-rule)] hover:bg-[var(--color-paper-alt)]"
         >
            {isOpen ? "Close" : "Menu"}
         </button>

         {isOpen ? (
            <nav id="mobile-navigation-menu" aria-label="Mobile navigation" className="absolute inset-x-0 top-full z-50 border-b border-[var(--color-border)] bg-[var(--color-stone)]">
               <div className="editorial-container py-3">
                  <p className="eyebrow border-b border-[var(--color-rule)] py-4">Studio Index</p>

                  <ul className="list-none">
                     {navigationLinks.map((link) => (
                        <li key={link.href} className="border-b border-[var(--color-border)] last:border-b-0">
                           <a href={link.href} onClick={closeMenu} className="grid min-h-16 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 py-3 text-sm font-semibold text-[var(--color-ink)] no-underline">
                              <span className="text-[0.65rem] tracking-[0.12em] text-[var(--color-text-secondary)]">{link.number}</span>

                              <span>{link.label}</span>

                              <span aria-hidden="true" className="text-[var(--color-text-secondary)]">
                                 →
                              </span>
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </nav>
         ) : null}
      </div>
   );
}
