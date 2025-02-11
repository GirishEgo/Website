import React from 'react'
import { motion } from "framer-motion";
import Carousel from "../../Components/Hero/Carousel";
// import Cards from '../../Components/Hero';
import Products from '../../Data/Products';
import Cards from '../../Components/ProductCards/Cards';
 import cardImg1 from "/hompage-cardimgs/2.png"
 import cardImg2 from "/hompage-cardimgs/1.png";
 import cardImg3 from "/hompage-cardimgs/3.png";
import Marquee from '../../Marquee/Marquee';
import Certifiat from '../../Components/certificats/Certifiat';
import SEO from '../../Components/SEO/SEO';
// import AboutStatus from '../../Components/AboutStatus/AboutStatus';

const Home = () => {
  const cardsimgs = [cardImg1, cardImg2, cardImg3];
  return (
    <div>
      <SEO
        title="Girish Ego Controls - Leading Manufacturer of Enclosure & Panel Heaters"
        description="Girish Ego Controls manufactures enclosure heaters, panel heaters, and industrial thermostats, delivering reliable heating solutions since 1982."
        keywords="
    Enclosure Heaters, Panel Heaters, Space Heaters for Electrical Panels, Cabinet Heaters, Industrial Heaters, 
    Thermostats for Enclosures, DIN Rail Thermostats, Stem Type Thermostats, Electrical Panel Accessories, 
    Industrial Enclosure Heater Manufacturer, Space Heater for Electrical Panels, Thermostats for Industrial Control Panels, 
    DIN Rail-Mounted Thermostat for Enclosures, Industrial Automation Heating Solutions, Electric Panel Heating Solutions, 
    Anti-Condensation Heaters, HVAC Solutions for Electrical Enclosures, Industrial Temperature Control Devices"
        siteName="Girish Ego Controls"
        image="https://yourwebsite.com/assets/homepage-banner.jpg"
        url="https://yourwebsite.com/"
        product={{
          name: "Girish Ego Controls - Enclosure & Panel Heating Solutions",
          description:
            "Leading manufacturer of high-quality enclosure heaters, panel heaters, and industrial thermostats, ensuring optimal thermal management for electrical control panels.",
          brand: "Girish Ego Controls",
          price: "Contact for pricing",
          currency: "INR",
          availability: "InStock",
        }}
        breadcrumb={[{ name: "Home", url: "https://yourwebsite.com/" }]}
        faqs={[
          {
            question: "What products does Girish Ego Controls manufacture?",
            answer:
              "We specialize in enclosure heaters, panel heaters, space heaters for electrical panels, industrial thermostats, and heating solutions for control panels.",
          },
          {
            question:
              "Why are enclosure heaters important for electrical panels?",
            answer:
              "Enclosure heaters prevent condensation, corrosion, and damage to sensitive electronic components in electrical panels, ensuring reliability and efficiency.",
          },
          {
            question:
              "What industries use Girish Ego Controls' heating solutions?",
            answer:
              "Our industrial heaters and thermostats are widely used in electrical enclosures, control panels, switchgear cabinets, and HVAC applications for temperature control.",
          },
          {
            question: "Are your heaters suitable for industrial automation?",
            answer:
              "Yes, our heating solutions are designed for industrial automation, providing precise temperature control for electrical and control panels.",
          },
        ]}
      />
      {/* <h1>homepage</h1> */}
      <Carousel />
      <Marquee />
      <div
        className="ProductCArdContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          position: "relative",
          zIndex: "3",
        }}
      >
        {Products.map((Product, index) => (
          <motion.div
            key={Product.id}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }} // 0.5s delay per card
            viewport={{ once: true }}
          >
            <Cards
              productImg={cardsimgs[index]}
              heading={Product.name}
              productId={Product.id}
              // subProductId={Product.subProducts.map(
              //   (subProduct) => subProduct.id
              // )}
              options={Product.subProducts}
            />
          </motion.div>
        ))}
      </div>
      <Certifiat />
      {/* <AboutStatus/> */}
    </div>
  );

}
export default Home
