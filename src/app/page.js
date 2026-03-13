import CrmContent from "@/PageComponent/Home/CrmContent";
import GetInTouch from "@/PageComponent/Home/GetInTouch";
import HeroSection from "@/PageComponent/Home/HeroSection";
import OurCoreStrength from "@/PageComponent/Home/OurCoreStrength";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <OurCoreStrength/>
      <CrmContent/>
      <GetInTouch/>
    </div>
  );
}
