import React, { useState } from "react";
import "./form.css";
import PopupModal from "./popup/PopupModal"; // Import the pop-up component
import { useCall } from "../../global/CallContext";

const Form = ({
  formFields,
  popupMessage,
  onSubmit,
  formheading,
  formbutton,
}) => {
  const [formData, setFormData] = useState({});
  //   const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { handleCall, setShowPopup, showPopup } = useCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowPopup(true); // Show pop-up after form submission
  };

  return (
    <div className="form-holder">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>{formheading}</h2>

        {formFields.map((field, index) => (
          <div key={index} className="form-group">
            {/* Render label only if 'label' exists */}
            {field.label && (
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
            )}

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows || 5} // Default to 5 rows if not provided
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

        <button type="submit">{formbutton}</button>
      </form>

      {/* Pop-up Modal */}
      <PopupModal
        showPopup={showPopup}
        onClose={() => setShowPopup(false)}
        onCall={() => handleCall("+912222068032")}
        message={popupMessage}
      />
    </div>
  );
};

export default Form;
