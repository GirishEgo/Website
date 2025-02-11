import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CallContext = createContext();

export const CallProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCall = (phoneNumber) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
     console.log(phoneNumber);
    if (!isMobile) {
      toast.warning(
        "You are using a desktop/laptop. Please use a mobile phone to make a call.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        }
      );
      setShowPopup(false);
      return;
    }

    if (!phoneNumber) return;
   
    
    window.location.href = `tel:${phoneNumber}`;

    setTimeout(() => {
      setShowPopup(false);
    }, 7000);
  };

  return (
    <CallContext.Provider value={{ handleCall, setShowPopup, showPopup }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCall = () => useContext(CallContext);
