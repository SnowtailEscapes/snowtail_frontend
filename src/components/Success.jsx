import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Success from "../../public/travel.webp";
import tick from "../../public/check.png";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center md:p-2 mt-24 md:mt-24 overflow-hidden">
      <h1 className="font-arimo font-extrabold md:text-3xl text-xl text-center mb-4 w-full">
            THANK YOU FOR SUBMITTING THE FORM
          </h1>
        <div className="flex items-center md:space-x-10 flex-col md:flex-row">
          <img
            src={Success}
            loading="lazy"
            alt="Error 404"
            width={100}
            height={100}
            className="md:w-1/2 md:h-1/2 w-full"
          />

          <div className="text-center">
            <div className="flex justify-center items-center gap-2 md:flex-row flex-col">
              <h1 className="md:text-xl text-md font-lora">
                You would shortly recieve a message from an expert
              </h1>
              <img src={tick} width={40} loading="lazy" />
            </div>
            <h3 className="md:text-xl text-md mt-4">
              Go back to{" "}
              <Link to="/" className="font-lora text-main-brand">
                Home
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
