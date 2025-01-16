import HeroBanner from "../components/HomeHeroBanner.js"
import AboutUsHome from "../components/AboutUsHome.js"
import ProductsSection from "../components/ProductsSection.js"
import FeaturesSection from "../components/FeaturesSection.js"
import OurProcess from "../components/OurProcess.js"
import CTASection from "../components/CTASection.js"

export default function Home() {
  return (
    <>
    <HeroBanner />
    <AboutUsHome />
    <ProductsSection />
    <FeaturesSection />
    <OurProcess />
    <CTASection />
    </>
  );
}
