import ConnectedCountries from "@/PageComponent/Home/ConnectedCountries";
import CrmContent from "@/PageComponent/Home/CrmContent";
import GetInTouch from "@/PageComponent/Home/GetInTouch";
import HeroSection from "@/PageComponent/Home/HeroSection";
import OurCoreStrength from "@/PageComponent/Home/OurCoreStrength";
import ServicesAndOffering from "@/PageComponent/Home/ServicesAndOffering";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <OurCoreStrength/>
      <CrmContent/>
      <ServicesAndOffering/>
      <ConnectedCountries/>

      <GetInTouch/>
    </div>
  );
}
