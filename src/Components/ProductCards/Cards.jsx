import React, { useState } from "react";
import "./Card.css"; // Import CSS for styling
import { useNavigate } from "react-router";
import logo from "../../assets/Images/GEC Logo png.png";
import { TbArrowBigRight, TbArrowBigRightFilled } from "react-icons/tb";

const Cards = ({ productImg, heading, subProductsID, productId, pdric, }) => {
  const navigate = useNavigate();
  const handleSelect = () => {
    if ( subProductsID) {// if there is a sub-product then only it should  work 
      navigate(`/Products/${productId}/${subProductsID}`); // Navigate to sub-product page
    } else if (productId) {// if there is only product page only then it should work
      navigate(`/Products/${productId}`); // Navigate to product page
    }
  };
  // make the discription in the card short function
  const truncateText = (pdric, maxLength = 100) => {
    if(pdric){// if a discription is there then only it this have to work other wise nothing
 return pdric.length > maxLength
   ? pdric.substring(0, maxLength) + "..."
   : pdric;
    }
   
  };

  return (
    <div className="card" onClick={handleSelect}>
      {/* Logo */}
      <div className="card-logo-container">
        <img src={logo} alt="Logo" title="GirishEgo logo" loading="lazy" className="card-logo" />
      </div>

      {/* Product Heading */}
      <div className="card-heading-container">
        <h3 className="card-heading">{
          heading
        }</h3>
      </div>
      {/* card discriptions */}
      <div className="cardDiscContainer">
        <p className="card-discription">{truncateText(pdric)}</p>
      </div>
      {/* Product Image */}
      <div className="card-product-img-container">
        <img src={productImg} alt={heading} title={`${heading} products`} width={'auto'} loading="lazy" className="card-product-img" />
        <div className="readmorarrow">
          {/* Normal arrow */}
          <TbArrowBigRight className={`cursor-icon `} />
        </div>
      </div>
    </div>
  );
};

export default Cards;