import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";
import SectionHomeFour from "./SectionHomeFour";

function Home() {

  return [
    <SectionHomeOne key="sectionHomeOne" />,
    <SectionHomeTwo key="sectionHomeTwo" />,
    <SectionHomeThree key="sectionHomeThree" />,
    <SectionHomeFour key="sectionHomeFour" />
  ];
}

export default Home;
