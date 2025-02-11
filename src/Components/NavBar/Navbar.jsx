import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router";
import Products from "../../Data/Products";
// import Res_Support from "./Pages/ResourcesPage/Res_Support"
import Res_Support from "../../Data/Res_Support";

import Logo from "../../assets/Images/Logo-main.jpg";
import Logo2 from "../../assets/Images/GEC Logo png.png";
const Navbar = () => {
  // const [scrollData, setscrollData] = useState({ y: 0, lastY: 1 });
  // get the postion of the Scroll bar y axis
  const [navBarVisable, setNavbarvisible] = useState(true);
  // if it ture then show navbr else hide helps tom change the css property
  const [dropdown, setDropdown] = useState(false);
  const [resdropdown, setResDropdown] = useState(false);
  // if the screen is in resopnive for the hammenu
  const [hamenuon, setHammenuon] = useState(false);

  // const [resOn,setResOn]= useState(false)

  const [visibleSubProducts, setVisibleSubProducts] = useState({}); // Track visibility for each product
  const location = useLocation();

  // Check if the current route includes "/Products"
  const isActive = location.pathname.includes("/Products");
  const resisActive = location.pathname.includes("/Resources");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setHammenuon(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check in case the component is mounted after a resize
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubProductVisibility = (productId) => {
    setVisibleSubProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle visibility for the specific product
    }));
  };

  const handleLinkClick = () => {
    setDropdown(false);
    setResDropdown(false);
    setHammenuon(false);
    setVisibleSubProducts({}); // Close all sub-products on link click
  };

  return (
    <nav
      className={`navbar ${navBarVisable ? "show" : ""}`}
      dir="ltr"
      // style={{ margin: "0px" }}
    >
      {/* here if the navBarViaibe is true then it will activate the show class from the css file else " " */}
      <div className="logo">
        <NavLink to={"/"}>
          <img
            src={Logo}
            alt="Girish Ego Controls Logo"
            title="Girish Ego Controls"
            loading="lazy"
          />
        </NavLink>
      </div>
      <div
        className="ham-menu"
        onClick={() => {
          setHammenuon(!hamenuon);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="icons">
        <ul className={hamenuon ? "open-hamListcontainer" : "navlistcontainer"}>
          <div className="sidebarLogo">
            <img
              src={Logo2}
              alt="Girish Ego Controls Alternate Logo"
              title="Girish Ego Controls"
              loading="lazy"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          {hamenuon ? (
            <div>
              <div
                className="closeButton"
                onClick={() => {
                  setHammenuon(!hamenuon);
                }}
              >
                <span>&times;</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <NavLink to="/" onClick={handleLinkClick}>
            <li>Home</li>
          </NavLink>
          <NavLink to="About-us" onClick={handleLinkClick}>
            <li>About Us</li>
          </NavLink>

          {/* the dropdown of the products starts*/}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span
              //
              className={`product-dropdown-container ${
                isActive ? "active" : ""
              }`}
              onClick={() => setDropdown(!dropdown)}
            >
              Products
              <span
                className={`productDropDownArrow ${
                  dropdown ? "arrowrotate" : ""
                }`}
              ></span>
            </span>
            {dropdown && (
              <ul className={`dropdown-menu ${dropdown ? "active" : ""}`}>
                {Products.map((product) => (
                  <li key={product.id} className="dropdown-item">
                    {!hamenuon ? (
                      <NavLink
                        to={`/Products/${product.id}`}
                        onClick={handleLinkClick}
                        style={{ cursor: "pointer" }}
                      >
                        <h3>{product.name.toLowerCase()}</h3>
                      </NavLink>
                    ) : (
                      <h3
                        onClick={() => toggleSubProductVisibility(product.id)}
                        style={{
                          cursor: "pointer",
                          padding: "10px",
                        }}
                      >
                        {product.name.toLowerCase()}
                      </h3>
                    )}

                    <ul
                      className={`sub-dropdown-menu ${
                        visibleSubProducts[product.id] ? "visible" : ""
                      }`}
                    >
                      {product.subProducts.map((subProduct) => (
                        <li key={subProduct.id}>
                          <NavLink
                            onClick={handleLinkClick}
                            to={`/Products/${product.id}/${subProduct.id}`}
                          >
                            {
                              subProduct.title
                                .toLowerCase() // Convert the whole title to lowercase
                                .replace(/=(\w)/g, (_, char) =>
                                  char.toUpperCase()
                                ) // Remove hyphens & capitalize next letter
                                .split(" ") // Split title into words
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                ) // Capitalize first letter of each word
                                .join(" ") // Join words back into a string
                            }
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* dropdowm Ends */}
          {/* the resdropdown of the products starts*/}
          <li
            className="dropdown"
            onMouseEnter={() => setResDropdown(true)}
            onMouseLeave={() => setResDropdown(false)}
          >
            <span
              className={`product-dropdown-container ${
                resisActive ? "active" : ""
              }`}
              onClick={() => setResDropdown(!resdropdown)}
            >
              Resources/Downloads
              <span
                className={`resorceDropDownArrow ${
                  resdropdown ? "resarrowrotate" : ""
                }`}
              ></span>
            </span>
            {resdropdown && (
              <ul
                className={`resdropdown-menu ${
                  resdropdown ? "res-active" : ""
                }`}
              >
                {Res_Support.map((reso) => (
                  <li
                    style={{
                      borderBottom: "1px solid gray",
                      borderTop: "1px soild gray",
                      padding: "10px",
                    }}
                    key={reso.id}
                    className="resdropdown-item"
                  >
                    <Link
                      to={`/Resources/${reso.id}`}
                      onClick={handleLinkClick}
                      style={{ cursor: "pointer" }}
                    >
                      <h3>{reso.name}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* dropdowm Ends */}

          {/* <NavLink to="/Resources" onClick={handleLinkClick}>
            <li>Resources/Support</li>
          </NavLink> */}
          <NavLink to="/Contact-us" onClick={handleLinkClick}>
            <li>Contact us</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
