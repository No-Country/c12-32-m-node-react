import SectionHomeFour from "./SectionHomeFour";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";

function Home() {
  return (
    <>
      <SectionHomeOne key="sectionHomeOne" />,
      <SectionHomeTwo key="sectionHomeTwo" />,
      <SectionHomeFour />
    </>
  );
}

export default Home;
