import ProductFeature from "@/components/ProductFeature";
import { products } from "@/data/products";

export default function FeatureStories() {
   const allevin = products.find((product) => product.id === "allevin");
   const sidewalk = products.find((product) => product.id === "sidewalk");
   const frontoffice = products.find((product) => product.id === "frontoffice");

   if (!allevin || !sidewalk || !frontoffice) {
      return null;
   }

   return (
      <section id="products" aria-labelledby="products-title" className="section-shell">
         <div className="editorial-container">
            {/* Feature Stories introduction */}
            <div className="grid gap-10 border-t border-[var(--color-rule)] pt-8 sm:gap-12 sm:pt-10 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:gap-20">
               {/* Section label and headline */}
               <div>
                  <p className="eyebrow">Feature Stories</p>

                  <h2 id="products-title" className="editorial-heading mt-7 max-w-[12ch] text-[clamp(2.9rem,13vw,6rem)] leading-[1.02] sm:mt-8 sm:text-[clamp(3.5rem,9vw,6rem)] md:leading-[0.98]">
                     Three products for different parts of everyday life.
                  </h2>
               </div>

               {/* Section description */}
               <div className="border-t border-[var(--color-border)] pt-8 md:border-t-0 md:border-l md:pt-2 md:pl-10 lg:pl-12">
                  <p className="body-copy leading-8">ALLEVIN helps people move projects forward. Sidewalk helps shape better days around the city. FrontOffice gives sports fans a place to make the call and defend it.</p>

                  <p className="mt-8 max-w-[38rem] text-sm leading-7 text-[var(--color-text-secondary)] md:mt-10">Each product keeps its own identity, audience, and rhythm. Kin is the shared standard behind how they are designed and built.</p>
               </div>
            </div>

            {/* ALLEVIN */}
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
               <ProductFeature product={allevin} />
            </div>

            {/* Sidewalk */}
            <div className="mt-24 sm:mt-28 md:mt-32 lg:mt-36">
               <ProductFeature product={sidewalk} imagePosition="right" />
            </div>

            {/* FrontOffice */}
            <div className="mt-24 sm:mt-28 md:mt-32 lg:mt-36">
               <ProductFeature product={frontoffice} />
            </div>
         </div>
      </section>
   );
}
