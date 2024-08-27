import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Mview from "../components/DomesticCards/MobileCards";


const SearchResults = () => {
  const location = useLocation();
  const [showContactForm, setShowContactForm] = useState(false);
  const [hover, setHover] = useState(false);
  // const dispatch = useDispatch();

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const hoverHo = () => {
    setHover(!hover);
  };

  // useEffect(() => {
  //   dispatch(fetchCurrencyRates());
  // }, [dispatch]);

  // const numericRating = parseFloat(rating);

  // const ratingOutOfFive = Math.round((numericRating / 10) * 10) / 10;

  const { itineraries, searchText } = location.state || {
    itineraries: [],
    searchText: "",
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 mt-32 p-4">
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
              <Mview
                title={item.title}
                duration={item.duration}
                price2={item.prices.three_star}
                image={item.small_img}
                to={item.direct}
                location={item.location}
                key={item._id}
              />
            ))}
        </div>
        {showContactForm && (
          <Contact
            isVisible={showContactForm}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
