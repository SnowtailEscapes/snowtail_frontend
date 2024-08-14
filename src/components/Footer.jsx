import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/footer/fb.png";
import insta from "../assets/footer/insta.png";
import linkedin from "../assets/footer/linkedin.png";
import logo from "../../public/logo/30.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="absolute top-0 z-10 w-full flex justify-center mt-10 h-2/6">
        <div className="md:min-h-fit md:w-4/5 w-full md:rounded-lg flex flex-col md:flex-row bg-green-500 text-white1">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-[1.5rem] text-center font-light text-black1">About Snowtail Escapes</h1>
            <ul className="list-none font-ligh2 flex gap-2  justify-center items-center flex-col ">
              <Link to="/about">
                <li className="hover:text-light-shade text-[16px]">About us</li>
              </Link>
              <Link to="/privacy-policy">
                <li className="hover:text-light-shade text-[16px]">Privacy Policy</li>
              </Link>
              <Link to="/terms-conditions">
                <li className="hover:text-light-shade text-[16px]">Terms and Conditions</li>
              </Link>
              <Link>
                <li className="hover:text-light-shade text-[16px]">Support</li>
              </Link>
              <Link>
                <li className="hover:text-light-shade text-[16px]">We are Hiring</li>
              </Link>
              <Link>
                <li className="hover:text-light-shade text-[16px]">Cancellation Policy</li>
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4 items-center">
            <svg
              loading="lazy"
              className="rounded-lg object-cover w-full h-full"
              src="https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/wtjljprxslnhkbi4mvnt"
              width={200}
              alt="About Snowtail Escapes"
            />
          </div>
        </div>
      </div>
      <div className="mt-20"></div>

      <div className="relative flex justify-center p-5 md:pt-52 bg-black1 text-white mt-20 pt-80 w-full font-light">
        <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
          <div className="divider divider-accent" >
            <img src={logo} width={300} alt="Snowtail Escapes Logo" className="footer-logo" />
          </div>
          <div className="flex gap-4 md:gap-10 justify-center mt-4">
            <img
              src={fb}
              alt="Facebook"
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            <Link to="https://www.instagram.com/snowtailescapes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img
                src={insta}
                alt="Instagram"
                width={50}
                height={50}
                className="hover:cursor-pointer"
              />
            </Link>
            <Link to="https://www.linkedin.com/company/snowtailescapes/">
              <img
                src={linkedin}
                alt="LinkedIn"
                width={50}
                height={50}
                className="hover:cursor-pointer"
              />
            </Link>
          </div>

          <div>
            <p className="font-semibold text-xs md:text-md text-center">
              © 2024 Snowtailescapes.com All rights reserved.
            </p>
          </div>

          <div className="w-4/5 text-center">
            <p className="text-xs md:text-md">
              The content and images used on this site are copyright protected
              and copyrights vest with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
              Unauthorized use is prohibited and punishable by law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
