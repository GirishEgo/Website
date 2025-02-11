import React from "react";
import "./whatsappbutton.css"
import IconWhatsappa from "/whatsapp.png";
// import { PiWhatsappLogoBold } from "react-icons/pi";

const WhatsAppButton = () => {
  const phoneNumber = "9769281724"; // Replace with your actual WhatsApp number

  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        {/* <PiWhatsappLogoBold className="whatsapp-logo" /> */}
        <img
          src={IconWhatsappa}
          className="whatsapp-img"
          alt="WhatsApp Icon"
          title="Contact us on WhatsApp"
          width="100px"
          height="auto"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
