import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import tag from "../../assets/tag.webp";
import "../../styles/Card.css";
import star from "../../assets/star2.png";
import percent from "../../assets/percent.png";
import phone from "../../assets/phone.webp";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import CurrencyConverter from "../../getApi/CurrencyConverter";
import { useDispatch } from "react-redux";
import { fetchCurrencyRates } from "../../redux/slice/currencySlice";

const Card = ({
  title,
  duration,
  rating,
  cut_price,
  curr_price,
  save,
  direct,
  image,
  name,
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  // const numericRating = parseFloat(rating);

  // const ratingOutOfFive = Math.round((numericRating / 10) * 10) / 10;

  return (
    <div className="lg:w-1/3 md:1/2 w-11/12 carousel-item flex flex-col relative rounded-2xl">
      <div
        className="relative text-center"
        style={{ width: "100%", paddingBottom: "60%" }} // 5:3 aspect ratio
      >
        <Link to={direct}>
          <img
            loading="lazy"
            src={image}
            className="img rounded-box hover:scale-105"
            onMouseEnter={hoverHo}
            alt={title}
            width="100%"
            decoding="async"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </Link>
      </div>
      <div
        className={`${
          hover && "scale-105"
        } top-5 bg-main-brand absolute flex flex-row md:gap-2 p-1`}
      >
        <p className="save">{save}</p>
      </div>
      <div className="flex flex-col pt-2 gap-y-1">
        <div className="flex flex-row justify-between">
          <p className="text-[13px] text-main-brand font-bold">{duration}</p>
          <p className="text-main-brand text-[13px] flex flex-row font-bold">
            <img
              src={star}
              width={20}
              alt="Star"
              loading="lazy"
              color="text-main-brand"
            />
            <span>{rating}</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="boston text-[1.5rem] bold text-dark-accent font-bold font-arimo ">
            {name}
          </h2>
          <h3 className="text-base text-black1 font-semibold">{title}</h3>
        </div>

        <div className="flex flex-row justify-between items-center">
          <h4 className="text-[13px] cut font-bold font-ligh2"><CurrencyConverter price={Number(cut_price)} />/per</h4>
          <h4 className="text-base text-main-brand font-bold font-light2">
            <CurrencyConverter price={Number(curr_price)}/>
            <span className="text-base text-main-brand text-bold">/per</span>
          </h4>
        </div>
        <div className="text-[13px] flex flex-row font-bold">
          <img
            src={percent}
            width={20}
            alt="Star"
            loading="lazy"
            color="text-main-brand"
          />
          <p className="text-center w-1/3 text-xs rounded-xl discount text-nowrap text-ligh-accent text-[13px] font-light">
            Special Monsoon Deal
          </p>
        </div>

        <div className="flex flex-row gap-3">
          <button
            className="btn btn-outline border-main-brand border-2 w-1/5"
            onClick={toggleContactForm}
          >
            <img src={phone} width={40} alt="Phone" loading="lazy" />
          </button>
          <button
            className="btn bg-main-brand rounded-md text-white w-4/5 text-[15px] font-bold"
            onClick={toggleContactForm}
          >
            Request Callback
          </button>
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  cut_price: PropTypes.number.isRequired, // Changed to number
  curr_price: PropTypes.number.isRequired, // Changed to number
  save: PropTypes.string.isRequired,
  direct: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
