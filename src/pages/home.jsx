import HeroSection from "../components/sectionHero";
import InfoSection from "../components/sectionInfo";
import AdSection from "../components/sectionAd";
import Categories from "../components/sectionCategory";
import FeatureProducts from "../components/sectionFeatureProducts";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <InfoSection />
      <AdSection/>
      <Categories/>
      <FeatureProducts/>
    </div>
  );
}
