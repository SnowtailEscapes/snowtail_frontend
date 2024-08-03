import logo from "../../public/logo/23.svg";
import stick from "../assets/stick.webp";
import { useLocation, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Countdown from "./Countdown";
import { useEffect, useState } from "react";
import CurrencyDropdown from "../getApi/CurrencyDropdown";

const styles = {
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(2.5px)",
  WebkitBackdropFilter: "blur(2.5px)",
};

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isOtherPage = location.pathname === "/*";
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    toast.info("Coming Soon!", {
      position: "top-center",
      autoClose: 13,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    e.preventDefault();
  };
  return (
    <>
      {/* <div className="w-full grid grid-cols-12 z-10  bg-main-brand items-center text-white md:h-8 justify-center">
        <p className="text-center md:text-md text-sm md:col-span-6 col-span-12">
          <span className="font-bold">Monsoon Sale</span> up to{" "}
          <span className="font-bold">40% OFF</span> on your trip
        </p>

        {width >= 737 && (
          <>
          <div className="divider divider-horizontal divider-warning"></div>
            <div className="col-span-5">
              <Countdown duration={3 * 24 * 60 * 60 * 1000} />
            </div>
          </>
        )}

        <img src={stick} width={90} height={90} className="moving-div" alt="moving-div"/>
      </div> */}

      <div
        className={
          isHomePage
            ? "text-white navbar bg-main-brand"
            : "text-white navbar bg-main-brand"
        }
        style={styles}
      >
        <div className="navbar-start lg:navbar-start flex gap-5">
          <Link to="/">
            <img src={logo} width={140} height={140} alt="logo" />
          </Link>
          {!isHomePage && (
            <>
              <CurrencyDropdown />
            </>
          )}
        </div>
        <div className="navbar-end lg:hidden z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black dropdown-left"
            >
              <li>
                <Link to="/" className="text-[22px] font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/International" className="text-[22px] font-bold">
                  International
                </Link>
              </li>
              <li>
                <Link to="/Domestic" className="text-[22px] font-bold">
                  Domestic
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} className="text-[22px] font-bold">
                  Exclusive
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} className="text-[22px] font-bold">
                  Group Tours
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} className="text-[22px] font-bold">
                  Destination Weddings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-[22px] font-bold hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/International"
                className="text-[22px] font-bold hover:underline"
              >
                International
              </Link>
            </li>
            <li>
              <Link
                to="/Domestic"
                className="text-[22px] font-bold hover:underline"
              >
                Domestic
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link className="text-[22px] font-bold hover:underline">
                Exclusive
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link className="text-[22px] font-bold hover:underline">
                Group Tours
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link className="text-[22px] font-bold hover:underline">
                Destination Weddings
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={13}
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
