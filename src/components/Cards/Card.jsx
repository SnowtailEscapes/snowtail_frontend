import React, { useState } from "react";
import PropTypes from "prop-types";
import tag from "../../assets/tag.webp";
import "../../styles/Card.css";
import star from "../../assets/star.webp";
import phone from "../../assets/phone.webp";
import { Link } from "react-router-dom";
import Contact from "../Contact";

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

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

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
        } top-5 bg-color1 absolute flex flex-row md:gap-2 p-1`}
      >
        <img
          className="tag"
          src={tag}
          width={5}
          height={5}
          alt="Tag"
          loading="lazy"
        />
        <p className="save">{save}</p>
      </div>
      <div className="flex flex-col pt-2 gap-y-1">
        <div className="flex flex-row justify-between">
          <p className="text-sm text-color1">{duration}</p>
          <p className="text-sm text-color1 flex flex-row">
            <img src={star} width={20} alt="Star" loading="lazy" />
            <span>{rating}</span>
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl bold text-color1">{name}</h1>
          <p className="light">{title}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-xs cut">{cut_price}/per</p>
          <p className="text-xs text-color1">
            {curr_price}
            <span className="text-xs">/per</span>
          </p>
          {/* <p className="discount text-xs bg-green-100 p-1">{save}</p> */}
        </div>
        <div className="text-center w-1/3 text-xs rounded-xl discount text-nowrap">
          Special Monsoon Deal
        </div>
        <div className="flex flex-row">
          <button
            className="btn btn-outline border-color1 border-2 w-1/5"
            onClick={toggleContactForm}
          >
            <img src={phone} width={20} alt="Phone" loading="lazy" />
          </button>
          <button
            className="btn bg-color1 rounded-md text-white w-4/5 text-xl"
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
  cut_price: PropTypes.string.isRequired,
  curr_price: PropTypes.string.isRequired,
  save: PropTypes.string.isRequired,
  direct: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
