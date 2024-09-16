import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import tag from "../../assets/tag.webp";
import "../../styles/Card.css";
import star from "../../assets/star2.png";
import percent from "../../assets/percent.png";
import phone from "../../assets/phone.webp";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import { useSelector } from "react-redux";
// import CurrencyConverter from "../../getApi/CurrencyConverter";
// import { useDispatch } from "react-redux";
// import { fetchCurrencyRates } from "../../redux/slice/currencySlice";
// import { useSelector } from "react-redux";

const Card = ({
  title,
  duration,
  price,
  image,
  to,
  location,
  price2
}) => {
  const [screenSize, setScreenSize] = useState("large");
  const [cut, setCut] = useState();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1100) {
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

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  useEffect(() => {
    let a;
    if(price){
      a = price;
    }
    else{
      a = price2;
    }
    a = Math.round(((a * 0.4) + a) / 1000) * 1000 - 1;
    setCut(a);
  }, []);

  return (
    <Suspense fallback={<p>loading...</p>}>
        <div className="lg:w-1/3 md:1/2 w-full carousel-item flex flex-col relative rounded-2xl mb-12">
          <div
            className="relative text-center"
            style={{ width: "100%", paddingBottom: "60%" }} // 5:3 aspect ratio
          >
            <Link to={to}>
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
            <Link to={to}>
              <div className="flex flex-row justify-between">
                <p className="text-[13px] text-main-brand font-arimo font-bold">
                  {duration}
                </p>
                <p className="text-main-brand text-[13px] flex flex-row font-bold">
                  <img
                    src={star}
                    width={20}
                    alt="Star"
                    loading="lazy"
                    color="text-main-brand"
                  />
                  <span className="font-arimo">4.5/5</span>
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[1.5rem] bold text-dark-accent font-bold font-arimo">
                  {location.substring(0, 20)}
                </h2>
                <h3 className="text-base text-wrap boston ${isDarkMode ? '' : 'text-black1'}font-semibold">
                  {title}
                </h3>
              </div>

              <div className="flex flex-row justify-between mt-2">
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-base text-main-brand font-bold font-light2 flex">
                    {/* <CurrencyConverter price={Number(curr_price)} /> */}
                    <span className="text-base font-arimo text-main-brand text-bold line-through">
                      ₹{cut}/person
                    </span>
                  </h4>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <h4 className="text-base text-main-brand font-bold font-arimo font-light2 flex">
                    {/* <CurrencyConverter price={Number(curr_price)} /> */}
                    {
                      price && (<>
                        ₹{price}/person
                      </>)
                    }
                    {
                      price2 && (
                        <>
                        ₹{price2}/person
                        </>
                      )
                    }
                  </h4>
                </div>
              </div>
              <div className="text-[13px] flex flex-row text-center font-bold items-center">
                <img
                  src={percent}
                  width={20}
                  height={10}
                  alt="Star"
                  loading="lazy"
                  color="text-main-brand"
                />
                <p className={`text-center w-1/3 text-xs rounded-xl discount text-nowrap ${isDarkMode ? '' : 'text-green-800'}  text-[13px] font-light`}>
                  Special Monsoon Deal
                </p>
              </div>

            </Link>
            <div className="flex flex-row gap-3">
              <button
                className="btn btn-outline border-main-brand border-2"
                style={{ width: "18%" }}
                onClick={toggleContactForm}
              >
                <img src={phone} width={40} alt="Phone" loading="lazy" />
              </button>
              <button
                className="btn font-light bg-main-brand rounded-md text-white text-[15px] font-bold"
                onClick={toggleContactForm}
                style={{ width: "77%" }}
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      {showContactForm && (
        <Contact
          isVisible={showContactForm}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </Suspense>
  );
};

Card.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number,
  price2: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Card;
