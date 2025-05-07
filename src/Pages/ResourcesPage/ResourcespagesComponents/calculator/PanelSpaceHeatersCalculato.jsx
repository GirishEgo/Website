import React from "react";
import { motion } from "framer-motion";
import "./calculator.css";
import Form from "../../../../Components/Form/Form";
import SEO from "../../../../Components/SEO/SEO";

const PanelSpaceHeatersCalculator = () => {
  const formFields = [
    {
      type: "text",
      name: "name",
      label: "Your Name:",
      placeholder: "Enter your name",
    },
    {
      type: "email",
      name: "email",
      label: "Your Email:",
      placeholder: "Enter your email",
    },
    {
      type: "number",
      name: "panelLength",
      label: "Panel Length (m):",
      placeholder: "Length in meters",
    },
    {
      type: "number",
      name: "panelWidth",
      label: "Panel Width (m):",
      placeholder: "Width in meters",
    },
    {
      type: "number",
      name: "panelHeight",
      label: "Panel Height (m):",
      placeholder: "Height in meters",
    },
    {
      type: "number",
      name: "desiredTemp",
      label: "Desired Temperature (°C):",
      placeholder: "Desired temp in °C",
    },
    {
      type: "number",
      name: "ambientTemp",
      label: "Ambient Temperature (°C):",
      placeholder: "Ambient temp in °C",
    },
  ];

  return (
    <div>
      <SEO
        title="Panel Space Heater Calculator - Find the Right Heating Solution"
        description="Use our Panel Space Heater Calculator to determine the ideal heater size for your enclosures. Ensure optimal temperature control and prevent condensation in industrial panels."
        keywords="Panel Space Heater Calculator, Enclosure Heater Sizing, Industrial Heater Calculator, Switchgear Heating, Condensation Prevention, Panel Heating Solutions, Industrial Heating Solutions, Electrical Panel Heaters"
        siteName="Girish Ego Controls"
        url="https://girishego.com/panel-space-heater-calculator"
        breadcrumb={[
          { name: "Home", url: "https://girishego.com/" },
          {
            name: "Resources",
            url: "https://girishego.com/Resources",
          },
          {
            name: "heat-calculator",
            url: "https://girishego.com/Resources/heat-calculator",
          },
        ]}
      />
      <motion.div
        className="calculator-container"
        initial={{ opacity: 0 }} // Start invisible and lower
        whileInView={{ opacity: 1 }} // Fade in and move up
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="heading"
          initial={{ opacity: 0, y: -20 }} // Heading starts slightly above
          whileInView={{ opacity: 1, y: 0 }} // Moves into place
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Panel Space Heater Calculator
        </motion.h1>

        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: -50 }} // Form starts from the left
          whileInView={{ opacity: 1, x: 0 }} // Slides into view
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // Slight delay for a staggered effect
          viewport={{ once: true }}
        >
          <Form
            formheading="Fill the Form"
            formbutton="Calculate"
            formFields={formFields}
            popupMessage="Sorry for the inconvenience. Kindly call us for a better experience."
            onSubmit={(data) => data}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PanelSpaceHeatersCalculator;
