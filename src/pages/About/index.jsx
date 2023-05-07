import React from "react";
import HeroAbout from "../../components/About/HeroAbout";
import MissionVision from "../../components/About/MissionVision";
import OurTeam from "../../components/About/OurTeam";
import MediaPresence from "../../components/About/MediaPresence";
import OurGallery from "../../components/About/OurGallery";
import Newsletter from "../../components/Newsletter/index";

const About = () => {
  return (
    <>
      <HeroAbout />
      <MissionVision />
      <OurTeam />
      <MediaPresence />
      <OurGallery />
      <Newsletter />
    </>
  );
};

export default About;
