import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import tag from "../../assets/tag.webp";
import "../../styles/Card.css";
import star from "../../assets/star2.png";
import percent from "../../assets/percent.png";
import phone from "../../assets/phone.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({
  title,
  direct,
  image,
  Name,
}) => {
  const [screenSize, setScreenSize] = useState("large");
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1000) {
        setScreenSize("tablet");
      } else {
        setScreenSize("large");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);
  // const dispatch = useDispatch();
  // const selectedCurrency = useSelector(
  //   (state) => state.currency.selectedCurrency
  // );

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  // useEffect(() => {
  //   dispatch(fetchCurrencyRates());
  // }, [dispatch]);

  return (
    <>
      {screenSize === "large" && (
        <>
          <div
            className="relative text-center"
            style={{ width: "100%", paddingBottom: "25%" }} // 5:3 aspect ratio
          >
            <Link to={direct}>
              <img
                loading="lazy"
                src={image}
                className="home-img rounded-box hover:scale-105"
                onMouseEnter={hoverHo}
                alt={title}
                width="100%"
                decoding="async"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Link>
          </div>
          
          <div className="flex flex-col pt-2 gap-y-1">
            <Link to={direct}>
              <div className="flex flex-col">
                <h2 className="text-[1.5rem] bold text-dark-accent font-bold font-arimo">
                  {Name}
                </h2>
                <h3 className={`text-base boston ${isDarkMode ? '' : 'text-black1'} font-semibold`}>
                  {title}
                </h3>
              </div>
              
            </Link>
           
          </div>
        </>
      )}
      {screenSize === "tablet" && (
        <>
          <div
            className="relative text-center"
            style={{ width: "100%", paddingBottom: "60%" }} // 5:3 aspect ratio
          >
            <Link to={direct}>
              <img
                loading="lazy"
                src={image}
                className="home-img rounded-box hover:scale-105"
                onMouseEnter={hoverHo}
                alt={title}
                width="100%"
                decoding="async"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </Link>
          </div>
         
          <div className="flex flex-col pt-2 gap-y-1">
            <Link to={direct}>
              <div className="flex flex-col">
                <h2 className="text-[1.5rem] bold text-dark-accent font-bold font-arimo">
                  {Name}
                </h2>
                <h3 className="text-base boston text-black1 font-semibold">
                  {title}
                </h3>
              </div>
            </Link>
            
          </div>
        </>
      )}
      {screenSize === "mobile" && (
        <div className="w-full flex flex-col relative rounded-2xl">
          <div
            className="relative text-center"
            style={{ width: "100%", paddingBottom: "60%" }} // 5:3 aspect ratio
          >
            <Link to={direct}>
              <img
                loading="lazy"
                src={image}
                className="home-img rounded-box hover:scale-105"
                onMouseEnter={hoverHo}
                alt={title}
                width="100%"
                decoding="async"
                height="100%"
                
              />
            </Link>
          </div>
          
          <div className="flex flex-col pt-2 gap-y-1">
            <Link to={direct}>
              <div className="flex flex-col">
                <h2 className="text-[1.5rem] bold text-dark-accent font-bold font-arimo">
                  {Name}
                </h2>
                <h3 className="text-base boston text-black1 font-semibold">
                  {title}
                </h3>
              </div>
            </Link> 
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  Name: PropTypes.string.isRequired, // Corrected to match the prop used in the component
  title: PropTypes.string.isRequired,
  direct: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
