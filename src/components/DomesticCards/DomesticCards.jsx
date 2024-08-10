import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigation } from "react-router-dom";
import a from "../../styles/International.module.css";
import { useDispatch } from "react-redux";
import { fetchCurrencyRates } from "../../redux/slice/currencySlice";
import phone from "../../assets/phone.webp";
import Contact from "../Contact";


const International = ({ to, title, location, price, duration, image }) => {
  const dispatch = useDispatch();
  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);


  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`${a.cardContainer} rounded-xl overflow-hidden`}
      >
        <figure className={`${a.imageContainer}`}>
          <Link to={to}>
            <img
              src={image}
              loading="lazy"
              alt="image"
              className={`${a.img} h-full cover rounded-xl`}
            />
          </Link>
        </figure>
        <div className={`flex flex-col justify-between ${a.textContainer}`}>
          <ul className="flex text-xs text-green-500 justify-between mb-2">
            <li className={`${a.disc} font-[14px] text-main-brand`}>{duration}</li>
            <li className={`${a.disc} font-[14px] text-main-brand`}>Domestic Tour</li>
          </ul>
          <div>
            <h2 className="text-[28px] font-semibold text-dark-accent mb-2 font-arimo">
              {location}
            </h2>
            <p className="text-black1 mb-2 font-ligh2 text-[20px] ">
              {title}
            </p>
            <div className="flex space-x-2 mb-4">
              <span className="text-[16px] px-3 rounded-md font-light  bg-ligh-accent shadow-sm shadow-black1">
                All meals
              </span>
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1">
                3 star resort
              </span>
              <span className="text-[16px] px-3 rounded-md font-light bg-ligh-accent shadow-sm shadow-black1">
                Major sightseeing
              </span>
            </div>
            <h3 className="text-[16px] text-main-brand flex-nowrap flex justify-self-end">
              <CurrencyConverter price={price} />
              <p>/person</p>
            </h3>
          </div>
          <div className="flex flex-row gap-3">
            <button
              className="btn btn-outline border-main-brand border-2"
              style={{ width: "18%" }}
              onClick={toggleContactForm}
            >
              <img src={phone} width={40} alt="Phone" loading="lazy" height={40} />
            </button>
            <button
              className="btn bg-main-brand rounded-md text-white text-[15px] font-bold"
              style={{ width: "78%" }}
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

International.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default International;
