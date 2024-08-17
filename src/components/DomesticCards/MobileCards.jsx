import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigation } from "react-router-dom";
import "../../styles/International.css";
import phone from "../../assets/phone.webp";
import Contact from "../Contact";

const Domestic = ({ to, title, location, price, duration, image }) => {
  const loc = useLocation();
  const isInternational = loc.pathname === "/International";
  const isDomestic = loc.pathname === "/Domestic";
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div
      className="flex justify-center dom-card"
    >
      <div className="cardContainer rounded-xl overflow-hidden">
        <figure className="imageContainer">
          <Link to={to}>
            <img src={image} alt={title} />
          </Link>
        </figure>
        <div className="flex flex-col justify-between textContainer">
          <ul className="flex text-xs text-green-500 justify-between mb-2">
            <li className="disc font-[14px] text-main-brand">{duration}</li>
            <li className="disc font-[14px] text-main-brand">
              {isDomestic && <>Domestic Tours</>}
              {isInternational && <>International Tours</>}
            </li>
          </ul>
          <div>
            <h2 className="text-[28px] font-semibold text-dark-accent mb-2 font-arimo">
              {location && <>{location}</>}
            </h2>
            <p className="text-black1 mb-2 font-ligh2 text-[20px] ">{title}</p>
            <div className="flex space-x-2 mb-4">
              <span className="text-[16px] px-3 rounded-md font-light  bg-ligh-accent shadow-sm shadow-black1 text-green-950">
                All meals
              </span>
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1 text-green-950">
                3 star resort
              </span>
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1 text-green-950">
                Major sightseeing
              </span>
            </div>
            <h3 className="text-[16px] text-main-brand flex-nowrap flex justify-self-end">
              {/* <CurrencyConverter price={price} /> */}
              {price}
              <p>/person</p>
            </h3>
          </div>
          <div className="flex flex-row gap-3">
            <button
              className="btn btn-outline border-main-brand border-2 phone"
              onClick={toggleContactForm}
            >
              <img src={phone} width={40} alt="Phone" loading="lazy" />
            </button>
            <button
              className="btn bg-main-brand rounded-md text-white text-[15px] font-bold request"
              onClick={toggleContactForm}
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

Domestic.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Domestic;