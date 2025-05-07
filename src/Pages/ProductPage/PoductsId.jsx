import React from 'react'
import { motion } from "framer-motion";
import Cards from '../../Components/ProductCards/Cards'
import Products from "../../Data/Products";
import { Navigate, useParams } from 'react-router-dom';
import SEO from '../../Components/SEO/SEO';
import Erroe404 from '../404/Erroe404';
import seoData from '../../Components/SEO/SeoData';

const PoductsId = () => {
  const {productId}=useParams();
  // console.log('product id', productId);
  const productCat= Products.find((prod)=> prod.id === productId)
  // console.log('prodfuct cat',productCat.subProducts);
  if(!productCat){
     return <Erroe404 />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <SEO
        title={`${productCat.name} | Industrial Heaters, Panel Heating & Thermostats - Girish Ego Controls`}
        description="Discover industrial heaters, panel heaters, and thermostats by Girish Ego Controls for enclosure heating, climate control, and electrical panel safety."
        keywords="Industrial Heaters, Panel Heaters, Enclosure Heaters, Electrical Panel Heating, Industrial Heating Solutions, Thermostats for Electrical Panels, DIN Rail Thermostats, Stem Type Thermostats, Cabinet Heaters, Control Panel Heaters, Industrial Climate Control, HVAC Heaters, Electrical Enclosure Heating, Industrial Thermal Solutions"
        siteName="Girish Ego Controls"
        url="https://girishego.com/products"
        image={productCat.subProducts[0]?.productImg}
        product={{
          name: "Industrial Heaters & Thermostats",
          description:
            "High-quality industrial heating solutions including panel heaters, enclosure heaters, and thermostats for climate control applications.",
          brand: "Girish Ego Controls",
          price: "Contact for pricing",
          currency: "INR",
          availability: "InStock",
        }}
        breadcrumb={[
          { name: "Home", url: "https://girishego.com/" },
          { name: "Products", url: "https://girishego.com/products" },
        ]}
        faqs={[
          {
            question: "What types of industrial heaters do you offer?",
            answer:
              "We provide panel heaters, enclosure heaters, and specialized industrial heating solutions for electrical panels and climate control applications.",
          },
          {
            question: "What are the benefits of your panel heaters?",
            answer:
              "Our panel heaters prevent condensation, ensure even heat distribution, and are designed for high durability in industrial environments.",
          },
          {
            question: "Do you offer thermostats for industrial applications?",
            answer:
              "Yes, we manufacture DIN rail thermostats, stem-type thermostats, and other precision temperature control solutions for industrial use.",
          },
        ]}
      />

      {/* Product heading and sub headings */}
      <div className="productHeader">
        <div className="line"></div>
        <h1 style={{ fontSize: "50px", textTransform: "uppercase" }}>
          {productCat.name}
        </h1>
        <div className="line"></div>
      </div>
      {productCat.subProducts.map((sp) => (
        <motion.div
          key={sp.id}
          style={{
            // display: "flex",
            // justifyContent: "center",
            padding: "20px",
            zIndex: "3",
          }}
          initial={{ opacity: 0, y: 50 }} // Start lower & invisible
          whileInView={{ opacity: 1, y: 0 }} // Fade in & move up when in view
          exit={{ opacity: 0, y: 50 }} // Fade out & move down when out of view
          transition={{ duration: 1, ease: "easeOut" }} // Delay each item
          viewport={{ once: false }} // Allows animation when scrolling up/down
        >
          <Cards
            productImg={sp.productImg}
            heading={
              sp.title
                .toLowerCase() // Convert the whole title to lowercase
                .replace(/=(\w)/g, (_, char) => char.toUpperCase()) // Remove hyphens & capitalize next letter
                .split(" ") // Split title into words
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
                .join(" ") // Join words back into a string
            }
            subProductsID={sp.id}
            productId={productId}
            pdric={sp.description}
            // // subProductId={Product.subProducts.map(
            // //   (subProduct) => subProduct.id
            // // )}
            // options={Product.subProducts}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default PoductsId
