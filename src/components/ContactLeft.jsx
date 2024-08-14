import React from 'react'
import trip from "../assets/trip.webp";
import visa from "../assets/visa.webp";
import time from "../assets/time.webp";
import guide from "../assets/guide.png";
import logo from "../../public/logo/23.svg";
import PropTypes from "prop-types";

export const ContactLeft = ({onClose}) => {
  
  return (
    <div className="flex flex-col p-5 bg-main-brand text-white md:w-1/3 w-full gap-4">
            <button onClick={onClose} className="btn bg-main-brand">
              <p className="font-bold text-sm">X</p>
            </button>
            <div className="flex justify-center">
              <img src={logo} width={200} height={20} alt="Snowtail Escapes" />
            </div>
            <div className="card bg-base-100 h-fit flex align-middle shadow-md shadow-white mb-4">
              <div className="card-body text-center">
                <div className="flex flex-col items-center gap-1">
                  <img src={trip} width={30} alt="Customized Trips" />
                  <p className="font-bold text-black text-nowrap">
                    100% Customised Trips
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src={guide} width={20} alt="Visa Success" />
                  <p className="font-bold text-black">Best Ground Assistance</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img src={time} width={30} alt="Coverage" />
                  <p className="font-bold text-black">Great Customer Experience</p>
                </div>
              </div>
            </div>
    </div>
  )
}



ContactLeft.propTypes = {
    onClose: PropTypes.func.isRequired,
  };