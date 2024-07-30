import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Cards/Card";

const SearchResults = () => {
  const location = useLocation();
  const { itineraries, searchText } = location.state || {
    itineraries: [],
    searchText: "",
  };

  return (
    <>
      <Navbar />
      <div className="lg:m-10 lg:p-4 m-4 p-2">
        {itineraries.length > 0 ? (
          <h1 className="text-2xl font-bold mb-6 text-center">Packages</h1>
        ) : (
          <h1 className="text-2xl font-bold mb-6 text-center">
            No Packages found for {searchText}
          </h1>
        )}
        <div className="flex">
            {itineraries.length > 0 &&
              itineraries.map((item) => (
                <Card
                  title={item.title}
                  duration={item.duration}
                  rating={item.rating}
                  curr_price={item.prices.three_star}
                  cut_price={item.cut_price}
                  save={item.save}
                  direct={item.direct}
                  image={item.small_img}
                  key={item._id}
                />
              ))}

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
