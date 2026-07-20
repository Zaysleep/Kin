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
         className="border-t pt-8 sm:pt-10 lg:pt-12"
         style={{
            borderTopColor: product.accentColor,
         }}
      >
         <div className="grid gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)] lg:gap-20 xl:gap-24">
            {/* Product image */}
            <figure className={imageOrder}>
               <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-paper-alt)] sm:aspect-[4/3]">
                  <Image src={product.imageSrc} alt={product.imageAlt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
               </div>

               <figcaption className="mt-4 grid gap-1 text-[0.7rem] leading-5 text-[var(--color-text-secondary)] sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:text-xs">
                  <span>{product.environment}</span>
                  <span>Kin Feature {product.number}</span>
               </figcaption>
            </figure>

            {/* Product information */}
            <div className={`flex min-w-0 flex-col justify-between ${contentOrder}`}>
               <div>
                  {/* Feature number and status */}
                  <div className="grid gap-4 border-b border-[var(--color-border)] pb-7 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:border-b-0 sm:pb-0">
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

                  {/* Product identity block */}
                  <div className="mt-9 flex flex-col gap-6 sm:mt-11 sm:gap-7">
                     {product.studioLabel ? <p className="eyebrow">{product.studioLabel}</p> : null}

                     <h3 id={headingId} className="editorial-heading min-w-0 text-[clamp(2.75rem,14vw,4.5rem)] leading-[1] sm:text-[clamp(3rem,8vw,4.5rem)]">
                        {product.name}
                     </h3>

                     <p className="text-lg font-medium leading-8 text-[var(--color-ink)] sm:text-xl">{product.subtitle}</p>

                     {product.tagline ? <p className="font-[family-name:var(--font-serif)] text-2xl leading-[1.35]">{product.tagline}</p> : null}
                  </div>

                  {/* Product description */}
                  <p className="body-copy mt-10 leading-8 sm:mt-12">{product.summary}</p>

                  {/* Product details */}
                  <dl className="mt-12 border-t border-[var(--color-border)] sm:mt-14">
                     <div className="border-b border-[var(--color-border)] py-8">
                        <dt className="eyebrow">Core question</dt>

                        <dd className="mt-4 font-[family-name:var(--font-serif)] text-xl leading-8 sm:text-2xl">{product.coreQuestion}</dd>
                     </div>

                     <div className="grid gap-0 sm:grid-cols-2">
                        <div className="border-b border-[var(--color-border)] py-8 sm:border-r sm:pr-7">
                           <dt className="eyebrow">Environment</dt>

                           <dd className="mt-4 text-sm leading-7">{product.environment}</dd>
                        </div>

                        <div className="border-b border-[var(--color-border)] py-8 sm:pl-7">
                           <dt className="eyebrow">Outcome</dt>

                           <dd className="mt-4 text-sm leading-7">{product.emotionalOutcome}</dd>
                        </div>
                     </div>
                  </dl>
               </div>

               {/* Product action */}
               <div className="mt-12 sm:mt-14">
                  {product.href ? (
                     <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-14 w-full items-center justify-between border-y border-[var(--color-border)] py-4 text-sm font-semibold no-underline sm:inline-flex sm:min-h-11 sm:w-auto sm:gap-2 sm:border-0 sm:py-0"
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
                        className="flex min-h-14 w-full items-center justify-between gap-6 border-y border-[var(--color-border)] py-4"
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
