import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "../../public/404.webp";
import tick from "../../public/check.png";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center md:p-2 mt-24 md:mt-24 overflow-hidden p-4">
        <div className="flex items-center md:space-x-10 flex-col md:flex-row">
          <img
            src={Error}
            loading="lazy"
            alt="Error 404"
            width={100}
            height={100}
            className="md:w-1/2 md:h-1/2 w-full rounded-xl mb-5"
          />
          <div className="text-center justify-center items-center flex flex-col">
            <div className="flex justify-center items-center gap-2 md:flex-row flex-col">
              <h1 className="md:text-xl text-md font-lora">
                Sorry ! This page is not found.
              </h1>
            </div>
            <h3 className="md:text-xl text-md mt-4 font-lora">
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
