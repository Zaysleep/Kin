import About from "@/components/About";
import FeatureStories from "@/components/FeatureStories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import StudioNotes from "@/components/StudioNotes";

export default function Home() {
   return (
      <div id="top">
         <a className="skip-link" href="#main-content">
            Skip to main content
         </a>

         <Header />

         <main id="main-content" tabIndex={-1}>
            <Hero />

            <FeatureStories />

            <Philosophy />

            <StudioNotes />

            <About />
         </main>

         <Footer />
      </div>
   );
}
