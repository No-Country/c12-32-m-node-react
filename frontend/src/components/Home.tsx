import { useState } from "react"
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";
import SectionHomeFour from "./SectionHomeFour";

function Home() {
    const [shouldShowSections, setShouldShowSections] = useState(false);
    const handleCreateAdClick = () => {
      setShouldShowSections(false);
    };

  return [
    <SectionHomeOne
      handleCreateAdClick={handleCreateAdClick}
      key="sectionHomeOne"
    />,
    <SectionHomeTwo key="sectionHomeTwo" />,
    <SectionHomeThree key="sectionHomeThree" />,
    <SectionHomeFour key="sectionHomeFour" />,
  ];
}

export default Home;
