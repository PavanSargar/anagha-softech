/* eslint-disable react/prop-types */
import React from "react";
import HeroAbout from "../../components/About/HeroAbout";
import MissionVision from "../../components/About/MissionVision";
import OurTeam from "../../components/About/OurTeam";
import MediaPresence from "../../components/About/MediaPresence";
import OurGallery from "../../components/About/OurGallery";
import Newsletter from "../../components/Newsletter/index";

const About = ({ animation }) => {
  return (
    <>
      <HeroAbout animation={animation} />
      <MissionVision animation={animation} />
      <OurTeam animation={animation} />
      <MediaPresence animation={animation} />
      <OurGallery animation={animation} />
      <Newsletter animation={animation} />
    </>
  );
};

export default About;
