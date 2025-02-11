import React, { useEffect, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Homepage/Home";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import Resources from "./Pages/ResourcesPage/Resources";
// import Products from "./Pagess/";
import ProductDetails from "./Pages/ProductPage/ProductDetails";
import AnimatedElements from "./Components/Animations/AnimatedElements";
import PoductsId from "./Pages/ProductPage/PoductsId";
import Footer from "./Components/footer/Footer";
import { ToastContainer } from "react-toastify";
import { CallProvider } from "./global/CallContext";
import PanelSpaceHeatersCalculator from "./Pages/ResourcesPage/ResourcespagesComponents/calculator/PanelSpaceHeatersCalculato";
// import CatDownload from "./Pages/ResourcesPage/ResourcespagesComponents/download-catalog/downloadCatalog";
import PDFPreview from "./Pages/ResourcesPage/ResourcespagesComponents/download-catalog/downloadCatalog";
import WhatsAppButton from "./Components/whatsappButton/WhatsAppButton";
import Erroe404 from "./Pages/404/Erroe404";
// import contactDetails from "./Components/Pages/ContactUsPage/contactDetails";

function App() {
 return (
   <>
     <Navbar />
     <AnimatedElements />
     <ToastContainer />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/About-us" element={<AboutUs />} />
       <Route path="/Contact-us" element={<ContactUs />} />
       <Route path="/Resources" element={<Resources />}>
         <Route index element={<Navigate to="/" />} />
         <Route
           path="heat-calculator"
           element={<PanelSpaceHeatersCalculator />}
         />
         <Route
           path="catalogue-download"
           element={<PDFPreview pdfFile="/GEC-CAT-21-01-23.pdf" />}
         />
       </Route>
       <Route path="/Products">
         {/* Redirect if "/Products" is visited directly */}
         <Route index element={<Navigate to="/Products/heating" />} />

         {/* Keep dynamic routes working */}
         <Route path=":productId" element={<PoductsId />} />
         <Route path=":productId/:subProductId" element={<ProductDetails />} />
       </Route>
       <Route path="*" element={<Erroe404 />} />
     </Routes>
     <WhatsAppButton />
     <Footer />
   </>
 );
}

export default App;
