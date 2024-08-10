import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useDispatch } from "react-redux";
import { fetchCurrencyRates } from "../redux/slice/currencySlice";
import percent from "../assets/percent.png";


const SearchResults = () => {
  const location = useLocation();

  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  // const numericRating = parseFloat(rating);

  // const ratingOutOfFive = Math.round((numericRating / 10) * 10) / 10;

  const { itineraries, searchText } = location.state || {
    itineraries: [],
    searchText: "",
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 md:mt-32">
        {itineraries.length > 0 ? (
          <h1 className="text-2xl font-bold mb-6 text-center boston">
            Packages
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-center boston">
            No Packages found for {searchText}
          </h1>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {itineraries.length > 0 &&
            itineraries.map((item) => (
              <div className="lg:w-1/3 md:w-1/2 w-full p-2" key={item?._id}>
                <div className="carousel-item flex flex-col relative rounded-2xl">
                  <Link to={item?.direct}>
                    <div
                      className="relative text-center"
                      style={{ width: "100%", paddingBottom: "60%" }}
                    >
                      <img
                        loading="lazy"
                        src={item?.small_img}
                        className="img rounded-box hover:scale-105"
                        onMouseEnter={hoverHo}
                        alt={item?.title}
                        width="100%"
                        decoding="async"
                        height="100%"
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {item?.save && (
                      <div
                        className={`${hover && "scale-105"
                          } top-5 bg-main-brand absolute flex flex-row md:gap-2 p-1`}
                      >
                        <p className="save flex">Save {item?.save}</p>
                      </div>
                    )}
                    <div className="flex flex-col pt-2 gap-y-1">
                      <div className="flex flex-row justify-between">
                        <p className="text-[13px] text-main-brand font-bold">
                          {item?.duration}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-[1.5rem] bold text-dark-accent font-bold font-arimo">
                          {item?.name}
                        </h2>
                        <h3 className="text-base boston text-black1 font-semibold">
                          {item?.title}
                        </h3>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        {item?.cut_price && (
                          <h4 className="text-[13px] cut font-ligh2 flex">
                            <CurrencyConverter price={Number(item?.cut_price)} />
                            /per
                          </h4>
                        )}
                        {item.prices && (
                          <h4 className="text-base text-main-brand font-bold font-light2 flex">
                            <CurrencyConverter
                              price={Number(item?.prices.three_star)}
                            />
                            <span className="text-base text-main-brand font-normal">
                              /per
                            </span>
                          </h4>
                        )}
                      </div>
                      <div className="text-[13px] flex flex-row font-bold">
                        <img
                          src={percent}
                          width={20}
                          alt="Star"
                          loading="lazy"
                        />
                        <p className="text-center w-1/3 text-xs rounded-xl discount text-nowrap text-ligh-accent text-[13px] font-light">
                          Special Monsoon Deal
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 mt-2">
                      {/* <button
                        className="btn btn-outline border-main-brand border-2 w-1/5"
                        onClick={toggleContactForm}
                      >
                        <img
                          src={phone}
                          width={40}
                          alt="Phone"
                          loading="lazy"
                        />
                      </button> */}
                      <button
                        className="btn bg-main-brand rounded-md text-white text-[15px] font-bold"
                        onClick={toggleContactForm}
                        style={{width:"100%"}}
                      >
                        Explore More...
                      </button>
                    </div>
                  </Link>
                </div>
                {showContactForm && (
                  <Contact
                    isVisible={showContactForm}
                    onClose={() => setShowContactForm(false)}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
