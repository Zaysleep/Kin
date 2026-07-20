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
            <div className="grid gap-7 border-t border-[var(--color-rule)] pt-7 sm:gap-8 sm:pt-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:gap-16">
               <div>
                  <p className="eyebrow">Feature Stories</p>

                  <h2 id="products-title" className="editorial-heading mt-5 max-w-[12ch] text-[clamp(2.9rem,13vw,6rem)] sm:text-[clamp(3.5rem,9vw,6rem)]">
                     Three products for different parts of everyday life.
                  </h2>
               </div>

               <div className="border-t border-[var(--color-border)] pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8 lg:pl-10">
                  <p className="body-copy">ALLEVIN helps people move projects forward. Sidewalk helps shape better days around the city. FrontOffice gives sports fans a place to make the call and defend it.</p>

                  <p className="mt-5 text-sm leading-6 text-[var(--color-text-secondary)] sm:mt-6">Each product keeps its own identity, audience, and rhythm. Kin is the shared standard behind how they are designed and built.</p>
               </div>
            </div>

            <div className="mt-14 sm:mt-18 md:mt-20 lg:mt-24">
               <ProductFeature product={allevin} />
            </div>

            <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
               <ProductFeature product={sidewalk} imagePosition="right" />
            </div>

            <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
               <ProductFeature product={frontoffice} />
            </div>
         </div>
      </section>
   );
}
