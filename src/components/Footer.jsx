import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/footer/fb.png";
import insta from "../assets/footer/insta.png";
import linkedin from "../assets/footer/linkedin.png";
import logo from "../assets/logo.webp";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="absolute top-0 z-10 w-full flex justify-center mt-5">
        <div className="md:min-h-fit md:w-4/5 w-full border border-neutral bg-green-100 md:rounded-lg flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 border-b-2 md:border-b-0 md:border-r-2">
            <h1 className="text-2xl md:text-3xl">About Snowtail Escapes</h1>
            <ul className="list-none text-xs flex flex-col justify-evenly mt-4">
              <Link to="/about">
                <li className="hover:text-main-brand">About us</li>
              </Link>
              <Link to="/privacy-policy">
                <li className="hover:text-main-brand">Privacy Policy</li>
              </Link>
              <Link to="/terms-conditions">
                <li className="hover:text-main-brand">Terms and Conditions</li>
              </Link>
              <Link to="/">
                <li className="hover:text-main-brand">Support</li>
              </Link>
              <Link to="/">
                <li className="hover:text-main-brand">We are Hiring</li>
              </Link>
              <Link to="/cancellation-policy">
                <li className="hover:text-main-brand">Cancellation Policy</li>
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-4 items-center">
            <img
              loading="lazy"
              className="rounded-lg object-cover h-full w-full"
              src="https://th.bing.com/th/id/R.f90d7459a0f301600c4a2b739e749a6e?rik=Y0GHs6GdfeUiYQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fxl8hSG3.jpg&ehk=sMyZ8P%2bMQCPk4VCtZzqZ5TcUxpGpWYlTkYMqnpZpp%2f4%3d&risl=&pid=ImgRaw&r=0"
              width={400}
              alt="About Snowtail Escapes"
            />
          </div>
        </div>
      </div>
      <div className="mt-40"></div>

      <div className="relative flex justify-center p-5 md:pt-52 bg-neutral text-white mt-20 pt-80 w-full">
        <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
          <div className="divider divider-accent">
            <img src={logo} width={150} alt="Snowtail Escapes Logo" />
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
