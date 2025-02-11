import React from "react";
   import { motion } from "framer-motion";
   import { Link } from "react-router-dom";

// import "./WhoWeAre.css";

const WhoWeAre = ({ data }) => {
  return (
<section className="about_us">
  {/* Animated Title */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
  >
    {data.title}
  </motion.h2>

  {/* Animated Paragraphs */}
  {data.content.map((paragraph, index) => (
    <motion.p
      key={index}
      dangerouslySetInnerHTML={{ __html: paragraph }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.3 }} // Staggered effect
      viewport={{ once: false }}
    />
  ))}

  {/* Animated Download Button */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    viewport={{ once: false }}
  >
    <Link to="/Resources/catalogue-download" download>
      <button>Download Catalogue</button>
    </Link>
  </motion.div>
</section>

  );
};

export default WhoWeAre;
