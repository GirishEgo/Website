import React from 'react'
import { motion } from "framer-motion";
import './cetficat.css'

import img1 from "./certifat-images/certImg (1).png";
import img2 from "./certifat-images/certImg (2).png";
import img3 from "./certifat-images/certImgjpg (1).jpg";
import img4 from "./certifat-images/certImgjpg (2).jpg";
import img5 from "./certifat-images/certImgjpg (3).jpg";
 


const Certifiat = () => {
     const certificates = [
       { src: img1, name: "ISO Certification" },
       { src: img2, name: "BIS Certification" },
       { src: img3, name: "ISI Certification" },
       { src: img4, name: "RoHS Certification" },
       { src: img5, name: "CE Certification" },
     ];

  return (
    <motion.div
      className="cartificate-Container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="line"></div>
      <h1 style={{ fontSize: "50px", textTransform: "uppercase" }}>
        Certification
      </h1>
      <div className="line"></div>

      <div className="certoficat_holder">
        <div className="certfict_imgsvontainer">
          <div className="Certificat-img">
            {certificates.map(({ src, name }, index) => (
              <div
                key={name}
                className="certificate-item"
              >
                <img src={src} alt={name} title={name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifiat;


