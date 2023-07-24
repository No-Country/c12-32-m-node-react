import { useState } from "react"
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";
import SectionHomeFour from "./SectionHomeFour";

function Home() {
  const [shouldShowSections, setShouldShowSections] = useState(false);
  console.log(shouldShowSections);

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
    <SectionHomeFour
      handleCreateAdClick={handleCreateAdClick}
      key="sectionHomeFour"
    />,
  ];
}

export default Home;
