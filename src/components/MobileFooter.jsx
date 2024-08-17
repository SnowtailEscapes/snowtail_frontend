import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/footer/fb.png";
import insta from "../assets/footer/insta.png";
import linkedin from "../assets/footer/linkedin.png";
import logo from "../../public/logo/30.svg";
import "../styles/footer.css";

export default function FooterMobile() {
  return (
    <div className="relative flex flex-col items-center bg-light-shade p-4">
      {/* Section 1: About Snowtail Escapes */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-green-500 rounded-lg p-4">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl md:text-3xl font-light text-center text-black">About Snowtail Escapes</h1>
          <ul className="list-none font-light flex flex-col items-center gap-2 mt-4">
            <Link to="/about" className="text-base md:text-lg">About us</Link>
            <Link to="/contact" className="text-base md:text-lg">Contact us</Link>
            <Link to="/privacy-policy" className="text-base md:text-lg">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-base md:text-lg">Terms and Conditions</Link>
            <Link className="text-base md:text-lg">Support</Link>
            <Link className="text-base md:text-lg">We are Hiring</Link>
            <Link className="text-base md:text-lg">Cancellation Policy</Link>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            loading="lazy"
            className="rounded-lg object-cover w-full max-w-xs"
            src="https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/wtjljprxslnhkbi4mvnt"
            alt="About Snowtail Escapes"
          />
        </div>
      </div>

      {/* Spacer */}
      <div className="my-6 w-full"></div>

      {/* Section 2: Footer Content */}
      <div className="relative flex flex-col items-center gap-6 bg-light-shade p-5 w-full">
        <div className="w-full flex justify-center">
          <img src={logo} width={200} alt="Snowtail Escapes Logo" className="mix-blend-multiply" />
        </div>

        <div className="flex gap-4 justify-center mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" width={40} height={40} className="hover:cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/snowtailescapes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" width={40} height={40} className="hover:cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/company/snowtailescapes/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" width={40} height={40} className="hover:cursor-pointer" />
          </a>
        </div>

        <div className="text-center mt-4">
          <p className="font-semibold text-xs md:text-sm">
            © 2024 Snowtailescapes.com All rights reserved.
          </p>
        </div>

        <div className="w-4/5 text-center mt-4">
          <p className="text-xs md:text-sm">
            The content and images used on this site are copyright protected
            and copyrights vest with the respective owners. The usage of the
            content and images on this website is intended to promote the
            works and no endorsement of the artist shall be implied.
            Unauthorized use is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </div>
  );
}
