import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/Card.css";
import star from "../../assets/star2.png";
import percent from "../../assets/percent.png";
import phone from "../../assets/phone.webp";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import { useSelector } from "react-redux";

const Card = ({ title, duration, rating, cut_price, curr_price, save, direct, image, Name }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <>
      <div className="w-full m-3 flex flex-col relative rounded-2xl">
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
        <div className={`${hover && "scale-105"} top-5 bg-main-brand absolute flex flex-row md:gap-1 p-1`}>
          <p className="save flex">Save INR.{save}</p>
        </div>
        <div className="flex flex-col pt-2 gap-y-1">
          <Link to={direct}>
            <div className="flex flex-row justify-between">
              <p className="text-[13px] text-main-brand font-bold">{duration}</p>
              <p className="text-main-brand text-[13px] flex flex-row font-bold">
                <img src={star} width={20} alt="Star" loading="lazy" color="text-main-brand" />
                <span>{rating}</span>
              </p>
            </div>
            <div className="flex flex-col text-left">
              <h2 className="text-[1.5rem] bold text-dark-accent font-bold font-arimo">{Name}</h2>
              <h3 className="text-base boston  font-semibold">{title}</h3>
            </div>
            <div className="flex flex-row justify-between items-center">
              {cut_price && (
                <h4 className="text-[13px] cut font-bold font-ligh2 flex">
                  {/* <CurrencyConverter price={Number(cut_price)} /> */}
                  INR.{cut_price}
                  /person
                </h4>
              )}
              <h4 className="text-base text-main-brand font-bold font-light2 flex">
                {/* <CurrencyConverter price={Number(curr_price)} /> */}
                <span className="text-base text-main-brand text-bold">
                  INR.{curr_price}
                  /person
                </span>
              </h4>
            </div>
            <div className="text-[13px] flex flex-row font-bold">
              <img src={percent} width={20} alt="Star" loading="lazy" color="text-main-brand" />
              <p
                className={`text-center w-1/3 text-xs rounded-xl discount text-nowrap text-[13px] font-light ${
                  isDarkMode ? "" : "text-green-800"
                }`}
              >
                Special Monsoon Deal
              </p>
            </div>
          </Link>
          <div className="flex flex-row gap-3">
            <button className="btn btn-outline border-main-brand border-2" style={{ width: "18%" }} onClick={toggleContactForm}>
              <img src={phone} width={40} alt="Phone" loading="lazy" />
            </button>
            <button
              className="btn bg-main-brand rounded-md text-white text-[15px] font-bold"
              onClick={toggleContactForm}
              style={{ width: "77%" }}
            >
              Request Callback
            </button>
          </div>
        </div>
        {showContactForm && <Contact isVisible={showContactForm} onClose={() => setShowContactForm(false)} />}
      </div>
    </>
  );
};

Card.propTypes = {
  Name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  cut_price: PropTypes.number.isRequired,
  curr_price: PropTypes.number.isRequired,
  save: PropTypes.number.isRequired,
  direct: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
