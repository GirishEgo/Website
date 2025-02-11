import React from 'react'
import WhoWeAre from "./AboutComponents/WhoWeAre";
import Infrastructure from "./AboutComponents/Infrastructure";
import Team from "./AboutComponents/Team";
import aboutData from "./AboutComponents/aboutData";
import Quality from './AboutComponents/Quality';
import Mission from './AboutComponents/Mission';
import Vision from "./AboutComponents/Vision";
import "./aboutus.css";
import SEO from '../../Components/SEO/SEO';

const AboutUs = () => {
  
  return (
    <div>
      <SEO
        title="About Girish Ego Controls - Leading Manufacturer of Enclosure Heaters & Thermostats"
        description="Girish Ego Controls, a trusted manufacturer of enclosure heaters, panel heaters, and industrial thermostats, delivers high-quality heating solutions since 1982."
        keywords="Enclosure Heaters, Panel Heaters, Industrial Heaters, Thermostats for Enclosures, DIN Rail Thermostats, Stem Type Thermostats, Electrical Panel Accessories, Industrial Heating Solutions"
        siteName="Girish Ego Controls"
        url="https://yourwebsite.com/about-us"
        breadcrumb={[
          { name: "Home", url: "http://localhost:5173/" },
          { name: "About-Us", url: "http://localhost:5173/About-us" },
        ]}
      />

      <div className="sectionWrapper">
        <WhoWeAre data={aboutData.whoWeAre[0]} />
      </div>
      <div className="sectionWrapper">
        <Infrastructure data={aboutData.infrastructure[0]} />
      </div>
      <div className="sectionWrapper">
        <Team data={aboutData.team[0]} />
      </div>
      <div className="sectionWrapper">
        <Quality data={aboutData.quality[0]} />
      </div>
      <div className="sectionWrapper">
        <Mission data={aboutData.mission[0]} />
      </div>
      <div className="sectionWrapper">
        <Vision data={aboutData.vision[0]} />
      </div>
    </div>
  );
};
  
export default AboutUs
