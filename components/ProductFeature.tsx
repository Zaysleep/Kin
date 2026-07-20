import Image from "next/image";

import type { Product } from "@/data/products";

type ProductFeatureProps = {
   product: Product;
   imagePosition?: "left" | "right";
};

export default function ProductFeature({ product, imagePosition = "left" }: ProductFeatureProps) {
   const headingId = `${product.id}-feature-title`;

   const imageOrder = imagePosition === "right" ? "lg:order-2" : "lg:order-1";

   const contentOrder = imagePosition === "right" ? "lg:order-1" : "lg:order-2";

   return (
      <article
         aria-labelledby={headingId}
         className="border-t pt-6 sm:pt-8 lg:pt-10"
         style={{
            borderTopColor: product.accentColor,
         }}
      >
         <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16">
            <figure className={imageOrder}>
               <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-paper-alt)] sm:aspect-[4/3]">
                  <Image src={product.imageSrc} alt={product.imageAlt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
               </div>

               <figcaption className="mt-3 grid gap-1 text-[0.7rem] leading-5 text-[var(--color-text-secondary)] sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-2 sm:text-xs">
                  <span>{product.environment}</span>
                  <span>Kin Feature {product.number}</span>
               </figcaption>
            </figure>

            <div className={`flex flex-col justify-between ${contentOrder}`}>
               <div>
                  <div className="grid gap-2 border-b border-[var(--color-border)] pb-5 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:border-b-0 sm:pb-0">
                     <p
                        className="text-[0.7rem] font-semibold tracking-[0.14em] uppercase sm:text-xs"
                        style={{
                           color: product.accentColor,
                        }}
                     >
                        {product.number} / Feature Story
                     </p>

                     <p className="text-[0.7rem] font-semibold tracking-[0.1em] text-[var(--color-text-secondary)] uppercase sm:text-xs">{product.status}</p>
                  </div>

                  {product.studioLabel ? <p className="eyebrow mt-6 sm:mt-7">{product.studioLabel}</p> : null}

                  <h3 id={headingId} className="editorial-heading mt-6 text-[clamp(2.75rem,14vw,4.5rem)] sm:text-[clamp(3rem,8vw,4.5rem)]">
                     {product.name}
                  </h3>

                  <p className="mt-3 text-lg font-medium leading-7 text-[var(--color-ink)] sm:mt-4 sm:text-xl">{product.subtitle}</p>

                  {product.tagline ? <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl leading-tight">{product.tagline}</p> : null}

                  <p className="body-copy mt-6 sm:mt-7">{product.summary}</p>

                  <dl className="mt-7 border-t border-[var(--color-border)] sm:mt-9">
                     <div className="border-b border-[var(--color-border)] py-5">
                        <dt className="eyebrow">Core question</dt>

                        <dd className="mt-2 font-[family-name:var(--font-serif)] text-xl leading-7 sm:text-2xl">{product.coreQuestion}</dd>
                     </div>

                     <div className="grid gap-0 sm:grid-cols-2">
                        <div className="border-b border-[var(--color-border)] py-5 sm:border-r sm:pr-6">
                           <dt className="eyebrow">Environment</dt>

                           <dd className="mt-2 text-sm leading-6">{product.environment}</dd>
                        </div>

                        <div className="border-b border-[var(--color-border)] py-5 sm:pl-6">
                           <dt className="eyebrow">Outcome</dt>

                           <dd className="mt-2 text-sm leading-6">{product.emotionalOutcome}</dd>
                        </div>
                     </div>
                  </dl>
               </div>

               <div className="mt-7 sm:mt-9">
                  {product.href ? (
                     <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-14 w-full items-center justify-between border-y border-[var(--color-border)] py-3 text-sm font-semibold no-underline sm:inline-flex sm:min-h-11 sm:w-auto sm:border-0 sm:py-0"
                        style={{
                           color: product.accentColor,
                        }}
                     >
                        <span>{product.actionLabel}</span>
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only"> opens in a new tab</span>
                     </a>
                  ) : (
                     <div
                        className="flex min-h-14 w-full items-center justify-between gap-6 border-y border-[var(--color-border)] py-3"
                        style={{
                           color: product.accentColor,
                        }}
                     >
                        <span className="text-sm font-semibold">{product.actionLabel}</span>

                        <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase">In Development</span>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </article>
   );
}
