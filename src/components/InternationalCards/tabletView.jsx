import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "../../styles/International.css";
import Contact from "../Contact";
import percent from "../../assets/percent.png";
import { whatsappNumber } from "../../constants/data";

const International = ({ to, title, location, price, duration, image }) => {
  const loc = useLocation();
  const isInternational = loc.pathname === "/International";
  const isDomestic = loc.pathname === "/Domestic";
  const [showContactForm, setShowContactForm] = useState(false);
  const [cut, setCut] = useState();

  useEffect(() => {
    let a = price;
    a = Math.round((a * 0.4 + a) / 1000) * 1000 - 1;
    setCut(a);
  }, [price]);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="cardContainer rounded-xl overflow-hidden">
        <figure className="imageContainer">
          <Link to={to}>
            <img src={image} alt={title} />
          </Link>
        </figure>
        <div className="flex flex-col textContainer">
          <ul className="flex text-xs text-green-500 justify-between mb-2">
            <li className="disc font-[14px] text-main-brand">{duration}</li>
            <li className="disc font-[14px] text-main-brand">
              {isDomestic && <>Domestic Tours</>}
              {isInternational && <>International Tours</>}
            </li>
          </ul>
          <div>
            <h2 className="text-[28px] font-semibold text-dark-accent mb-2 font-arimo text-wrap">
              {location}
            </h2>
            <p className="text-black1 mb-2 ml-0 font-ligh2 text-[20px]">
              {title}
            </p>
            <div className="flex space-x-2 mb-4">
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1 text-green-900">
                All meals
              </span>
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1 text-green-900">
                3 star resort
              </span>
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1 text-green-900">
                Major sightseeing
              </span>
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
            <p className="text-center w-1/3 text-xs rounded-xl discount text-nowrap text-green-800 text-[13px] md:text-[20px] font-light">
              Special Monsoon Deal
            </p>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-base text-main-brand font-bold font-light2 flex">
                <span className="text-base font-arimo text-main-brand text-bold line-through">
                  INR.{cut}/person
                </span>
              </h4>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-base text-main-brand font-bold font-arimo font-light2 flex">
                INR.{price}/person
              </h4>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <button
              className="btn bg-main-brand rounded-md text-white text-[15px] font-bold request w-full"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
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
    </div>
  );
};

International.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default International;
