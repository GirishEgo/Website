import React from 'react'
 import { motion } from "framer-motion";
const Vision = ({ data }) => {
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

  {/* Animated List Items */}
  <ul>
    {data.content.map((paragraph, index) => (
      <motion.li
        key={index}
        dangerouslySetInnerHTML={{ __html: paragraph }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: index * 0.3 }} // Staggered effect
        viewport={{ once: false }}
      />
    ))}
  </ul>
</section>

  );
}

export default Vision
