import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../public/NewLogos/2.svg";
import "../styles/navbar.css";
import home from '../assets/home.png';
import home2 from '../assets/home2.png';
import international from '../assets/international.png';
import international2 from '../assets/international2.png';
import domestic2 from "../assets/domestic2.png";


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isInternational = location.pathname === "/International";
  const isDomestic = location.pathname === "/Domestic";

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    toast.info("Coming Soon!", {
      position: "top-center",
      autoClose: 1300, // 1.3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const logoSize = width > 780 ? 150 : 100;

  return (
    <>
      <div
        className={`navbar-fixed navbar text-white ${width > 780 ? "bg-main-brand" : "bg-none"
          } bg-main-brand`}
      >
        <div className="navbar-start flex gap-5">
          <Link to="/">
            <img src={logo} width={logoSize} height={logoSize} alt="logo" />
          </Link>
          {/* Uncomment the CurrencyDropdown if needed */}
          {/* {!isHomePage && <CurrencyDropdown />} */}
        </div>

        <div className="navbar-end lg:hidden z-10">
          <div className="dropdown">
            <button className="btn btn-ghost" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black dropdown-left">
              <li>
                <Link to="/" className="text-[19px]">
                <img src={home2} width={20}/>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/International" className="text-[19px]">
                <img src={international2} width={20}/>
                  International
                </Link>
              </li>
              <li>
                <Link to="/Domestic" className="text-[19px]">
                <img src={domestic2} width={20}/>
                  Domestic
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} className="text-[19px]">
                  Exclusive
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} className="text-[19px]">
                  Group Tours
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} className="text-[19px]">
                  Destination Weddings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className={`text-[19px] ${isHomePage ? "underline" : "hover:underline"
                  }`}
              >
               {/* <img src={home} width={20}/> */}
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/International"
                className={`text-[19px] ${isInternational ? "underline" : "hover:underline"
                  }`}
              >
                {/* <img src={international} width={20}/> */}
                International
              </Link>
            </li>
            <li>
              <Link
                to="/Domestic"
                className={`text-[19px] ${isDomestic ? "underline" : "hover:underline"
                  }`}
              >
                Domestic
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link className="text-[19px] hover:underline">Exclusive</Link>
            </li>
            <li onClick={handleClick}>
              <Link className="text-[19px] hover:underline">Group Tours</Link>
            </li>
            <li onClick={handleClick}>
              <Link className="text-[19px] hover:underline">
                Destination Weddings
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1300} // 1.3 seconds
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Navbar;
