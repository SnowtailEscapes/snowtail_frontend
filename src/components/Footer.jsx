import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/footer/fb.png";
import insta from "../assets/footer/insta.png";
import linkedin from "../assets/footer/linkedin.png";
import logo from "../../public/logo/30.svg";
import "../styles/footer.css";
import logo2 from '../../public/NewLogos/Logo.png';
import { useSelector } from "react-redux";

export default function Footer() {

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="relative flex flex-col items-center footer">
      <div className="absolute top-0 z-10 w-full flex justify-center mt-10 md:h-3/6">
        <div className={`md:min-h-fit md:w-4/5 w-full md:rounded-lg flex flex-col md:flex-row ${isDarkMode ? '' : 'bg-dark-accent'} `}>
          <div className="w-full md:w-1/2 p-4">
            {/* <h1 className="text-[1.5rem] mb-1 text-center font-light text-white1">Snowtail Escapes</h1> */}
            <div className="flex justify-center">
              <img src={logo2} width={200} height={300} />

            </div>

            <ul className="list-none font-ligh2 flex gap-2  justify-start flex-col ">
              <Link to="/about">
                <li className=" text-[16px] text-white1 hover:underline">About us</li>
              </Link>
              <Link to="/contact">
                <li className=" text-[16px] text-white1 hover:underline">Contact us</li>
              </Link>
              <Link to="/privacy-policy">
                <li className=" text-[16px] text-white1 hover:underline">Privacy Policy</li>
              </Link>
              <Link to="/terms-conditions">
                <li className=" text-[16px] text-white1 ">Terms and Conditions</li>
              </Link>
              <Link>
                <li className=" text-[16px] text-white1 hover:underline">Support</li>
              </Link>
              <Link>
                <li className=" text-[16px] text-white1 hover:underline">We are Hiring</li>
              </Link>
              <Link>
                <li className=" text-[16px] text-white1 hover:underline">Cancellation Policy</li>
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4 items-center">
            <img
              loading="lazy"
              className="rounded-lg object-cover w-full h-full"
              height={300}
              src="https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/wtjljprxslnhkbi4mvnt"
              width={200}
              alt="About Snowtail Escapes"
            />
          </div>
        </div>
      </div>
      <div className="md:mt-52 w-full mt-64"></div>

      <div className={`relative flex justify-center p-5 md:pt-52 ${isDarkMode ? '' : 'bg-light-shade'} mt-20 pt-80 w-full font-light`}>
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="divider divider-accent "> {/* Set your desired background color here */}
            {
              isDarkMode ? <img src={logo2} width={300} alt="Snowtail Escapes Logo" className="footer-logo" /> :
                <>
                  <img src={logo} width={300} alt="Snowtail Escapes Logo" className="footer-logo mix-blend-multiply" />
                </>
            }
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
