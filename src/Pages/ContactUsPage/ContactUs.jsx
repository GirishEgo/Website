import React, { useState } from "react";
import "./contact.css";
import CRS from "../../assets/Images/contact-Us-page/contact-us page-CS-image.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../../Components/Form/Form";
import PopupModal from "../../Components/Form/popup/PopupModal";
import { useCall } from "../../global/CallContext";
import SEO from "../../Components/SEO/SEO";
const ContactUs = () => {
  // const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(null); // Track loading state per number
  const { handleCall } = useCall();
  const formFields = [
    { type: "text", name: "name", placeholder: "Your Name" },
    { type: "email", name: "email", placeholder: "Your Email" },
    {
      type: "textarea",
      name: "message",
      placeholder: "Your Message",
      rows: 5,
    },
  ];

  const contactDetails = [
    {
      title: "Address",
      content: [
        "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi, Mumbai, Maharashtra 400002",
      ],
      email: [],
    },
    {
      title: "Contact Info",
      content: ["+91 22 22068032", "+91 22 22083857"],
      // content: ["📞+91 22 22068032", "📞+91 22 22083857"],
      email: ["📧 sales@girishego.com", "📧 info@girishego.com"],
    },
  ];

  return (
    <div className="contact-page">
      <SEO
        title="Contact Girish Ego Controls - Get in Touch for Enclosure Heaters & Thermostats"
        description="Reach out to Girish Ego Controls for high-quality enclosure heaters, panel heaters, industrial heating solutions, and thermostats. Contact us in Mumbai, India."
        keywords="Contact Girish Ego Controls, Enclosure Heaters Manufacturer, Panel Heater Supplier, Industrial Heating Solutions, Thermostats for Electrical Panels, Mumbai Heating Solutions, Buy Industrial Heaters, India, Dubai, Russia"
        siteName="Girish Ego Controls"
        url="https://yourwebsite.com/contact-us"
        locale="en_IN"
        organization="Girish Ego Controls"
        breadcrumb={[
          { name: "Home", url: "https://yourwebsite.com/" },
          { name: "Contact Us", url: "https://yourwebsite.com/contact-us" },
        ]}
      />

      {/* Banner */}
      <div className="contact-banner"></div>

      {/* Office Section */}
      <div className="office-section">
        <h2>Directions / Contact</h2>
        <div className="office-details">
          {contactDetails.map((detail, index) => (
            <div className="office-box" key={index}>
              <h3>{detail.title}</h3>
              {detail.content.map((line, i) => (
                <a
                  onClick={() => handleCall(detail.content[i])}
                  key={i}
                  className="hover-effect"
                >
                  {line}
                </a>
              ))}
              {detail.email.map((email, ei) => (
                <a href={`mailto:${email}`} key={ei} className="hover-effect">
                  {email}
                </a>
              ))}
              {/* Call Button */}
              {detail.phone && (
                <button
                  className="call-button"
                  onClick={() => handleCall(detail.phone)}
                  disabled={loading === detail.phone}
                >
                  {loading === detail.phone
                    ? "Calling..."
                    : `Call ${detail.phone}`}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.381499845386!2d72.8304167!3d18.9464203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce21a5c99ac7%3A0xe11eab703d625032!2sGIRISH%20EGO%20CONTROLS!5e1!3m2!1sen!2sin!4v1738935194692!5m2!1sen!2sin"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <div className="form-image">
          <img src={CRS} alt="Customer Service" />
        </div>
        <Form
          formheading="Send us your Query "
          formbutton="Send"
          formFields={formFields}
          popupMessage="Sorry for the inconvenience. Kindly call us for a better experience."
          onSubmit={(data) => data}
        />
      </div>
    </div>
  );
};

export default ContactUs;
