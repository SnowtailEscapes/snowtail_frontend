import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../public/NewLogos/1.svg";
import logoScrolled from "../../public/NewLogos/2.svg";
import logo2 from '../../public/NewLogos/Logo.png';
import "../styles/navbar.css";
import home2 from "../assets/home2.png";
import international2 from "../assets/international2.png";
import domestic2 from "../assets/domestic2.png";
import hamburger from "../assets/hamburger5.png"
import hamburger2 from "../assets/hamburger6.png"
import close1 from "../assets/close1.png";
import close2 from "../assets/close2.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isInternational = location.pathname === "/International";
  const isDomestic = location.pathname === "/Domestic";
  const isSearch = location.pathname === "/search-results";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
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

  const logoSize = width > 780 ? 150 : 130;
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div
        className={`navbar-fixed navbar top-0 left-0 w-full z-50  text-white ${scrolled ? "scrolled" : ""
          } ${width > 780 ? `${!isHomePage ? 'bg-main-brand' : 'bg-none'}` : `${scrolled ? "" : `${isHomePage ? '' : `${!isInternational && !isDomestic ?  'bg-main-brand' : 'bg-main-brand'}`}`}`}`}
      >
        <div className="navbar-start flex gap-5">
          <Link to="/">
            {
              width > 780 && (
                <>
                  <img
                    src={!isHomePage ? logoScrolled : logo2}
                    width={logoSize}
                    className={`nav-logo ${scrolled ? "logo-scrolled" : ""}`}
                    height={logoSize}
                    alt="logo"
                  />
                </>
              )
            }
            {
              width < 780 && (
                <>
                  <img
                    src={scrolled ? logoScrolled : logo2}
                    width={logoSize}
                    height={logoSize}
                    alt="logo"
                  />
                </>
              )
            }

          </Link>
          {/* Uncomment the CurrencyDropdown if needed */}
          {/* {!isHomePage && <CurrencyDropdown />} */}
        </div>
        <div className={`navbar-end lg:hidden z-10 `}>
          <div className={`dropdown`}>
            <button className="btn btn-ghost flex items-center justify-center" aria-label="Menu" onClick={handleDropdownToggle}>
              <img
                src={
                  !isHomePage && !isInternational && !isDomestic
                    ? hamburger2
                    : scrolled
                      ? isDropdownOpen
                        ? hamburger2
                        : hamburger2
                      : isDropdownOpen
                        ? hamburger2
                        : hamburger2
                }
                width={
                  !isHomePage && !isInternational && !isDomestic
                    ? 30
                    : scrolled
                      ? isDropdownOpen
                        ? 30
                        : 30
                      : isDropdownOpen
                        ? 30
                        : 30
                }
                className="mix-blend-multiply"
                height={logoSize}
                alt="logo"
              />
            </button>
            {
              isDropdownOpen && (
                <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-black dropdown-left ${isInternational || isDomestic || !isHomePage ? 'bg-white1' : ''} ${scrolled ? 'bg-white1' : ''}`}>
                  <li>
                    <Link to="/" className="text-[19px]">
                      <img src={home2} width={20} />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/International" className="text-[19px]">
                      <img src={international2} width={20} />
                      International
                    </Link>
                  </li>
                  <li>
                    <Link to="/Domestic" className="text-[19px]">
                      <img src={domestic2} width={20} />
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
              )
            }

          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className={`text-[19px] ${isHomePage ? "underline" : "hover:underline"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/International"
                className={`text-[19px] ${isInternational ? "underline" : "hover:underline"
                  }`}
              >
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
              <Link className={` text-[19px] hover:underline`}>Exclusive</Link>
            </li>
            <li onClick={handleClick}>
              <Link className={` text-[19px] hover:underline`}>Group Tours</Link>
            </li>
            <li onClick={handleClick}>
              <Link className={` text-[19px] hover:underline`}>
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
