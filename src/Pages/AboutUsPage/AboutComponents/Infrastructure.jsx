import React from "react";
    import { motion } from "framer-motion";
// import "./Infrastructure.css";

const Infrastructure = ({ data }) => {
  return (
    <>
  
      <section className="about_us">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          {data.title}
        </motion.h2>

        {data.subsections.map((subsection, index) => (
          <motion.div
            key={index}
            className="subsection"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.3 }} // Staggered effect
            viewport={{ once: false }}
          >
            <h3>{subsection.subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: subsection.content }}></p>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Infrastructure;
