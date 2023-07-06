import React from "react";
import SectionHomeOne from "./SectionHomeOne";
import SectionHomeTwo from "./SectionHomeTwo";
import SectionHomeThree from "./SectionHomeThree";

function Home() {
  return [
    <SectionHomeOne key="sectionHomeOne" />,
    <SectionHomeTwo key="sectionHomeTwo" />,
    <SectionHomeThree key="sectionHomeThree" />,
  ];
}

export default Home;
