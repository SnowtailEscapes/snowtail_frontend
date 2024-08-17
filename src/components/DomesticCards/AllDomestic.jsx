import React, { useEffect, useState } from "react";
import "../../styles/International.css";
import Domestic from "../InternationalCards/International";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";

// Import images as you already did
import rj1 from "../../../public/images/card/rj1.webp";
import rj2 from "../../../public/images/card/rj2.webp";
import rj3 from "../../../public/images/card/rj3.webp";
import gujarat from "../../../public/images/card/gujarat1.webp";
import gujarat2 from "../../../public/images/card/gujarat2.webp";
import kashmir1 from "../../../public/images/card/kashmir1.webp";
import kashmir2 from "../../../public/images/card/kashmir2.webp";
import kasol from "../../../public/images/card/kasol.webp";
import ladakh from "../../../public/images/card/ladakh.webp";
import manali from "../../../public/images/card/manali.webp";
import masoorie from "../../../public/images/card/masoorie.webp";
import meghalaya from "../../../public/images/card/meghalaya.webp";
import shimla1 from "../../../public/images/card/shimla5n6d.webp";
import shimla2 from "../../../public/images/card/shimla9n10d.webp";
import sikkim from "../../../public/images/card/sikkim.webp";
import kerala from "../../../public/images/card/kerala.webp";
import andaman from "../../../public/images/card/andaman.webp";

export default function AllDomestic() {
  const [screenSize, setScreenSize] = useState("large");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1000) {
        setScreenSize("tablet");
      } else {
        setScreenSize("large");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredTours(
      tours.filter(
        (tour) =>
          tour.title.toLowerCase().includes(term) ||
          tour.location.toLowerCase().includes(term)
      )
    );
  };

  const tours = [
    {
      to: "/Rajasthan",
      title: "The Incredible Gateway Rajasthan",
      location: "RAJASTHAN",
      price: 34399,
      image: rj1,
      duration: "7 Nights and 8 Days tour",
    },
    {
      to: "/Rajasthan4n5d",
      title: "Journey Of majesty",
      location: "RAJASTHAN",
      duration: "4 Nights and 5 Days tour",
      price: 19999,
      image: rj2,
    },
    {
      to: "/Rajasthan5n6d",
      title: "Explore Sand Tails",
      location: "RAJASTHAN",
      price: 25899,
      duration: "5 Nights and 6 Days tour",
      image: rj3,
    },
    {
      to: "/Gujarat3n4d",
      title: "Monument of pride",
      location: "GUJARAT",
      price: 16499,
      duration: "3 Nights and 4 Days tour",
      image: gujarat,
    },
    {
      to: "/Gujarat4n5d",
      title: "Gujarat’s Coastal Charms and Wildlife Wonders",
      location: "GUJARAT",
      price: 20999,
      duration: "4 Nights and 5 Days tour",
      image: gujarat2,
    },
    {
      to: "/Kashmir5n6d",
      title: "Adventure meet Serenity",
      duration: "5 nights and 6 days tour",
      price: 26700,
      location: "KASHMIR",
      image: kashmir1,
    },
    {
      to: "/Kashmir3n4d",
      title: "Experience Paradise On Earth",
      location: "KASHMIR",
      price: 18499,
      image: kashmir2,
      duration: "3 nights and 4 days tour",
    },
    {
      to: "/Ladakh5n6d",
      title: "Thrilling Leh Ladakh",
      location: "LADAKH",
      price: 29999,
      duration: "5 nights and 6 days tour",
      image: ladakh,
    },
    {
      to: "/Sikkim5n6d",
      title: "Gangtok & Darjeeling The Abode of Clouds",
      price: 35799,
      location: "SIKKIM",
      duration: "5 nights and 6 days tour",
      image: sikkim,
    },
    {
      to: "/Meghalaya5n6d",
      title: "Meghalaya - Discover The Magic",
      duration: "5 nights and 6 days tour",
      location: "MEGHALAYA",
      price: 32799,
      image: meghalaya,
    },
    {
      to: "/Kerala5n6d",
      title: "Experience God’s Own Country",
      location: "KERALA",
      price: 25499,
      duration: "5 nights and 6 days tour",
      image: kerala,
    },
    {
      to: "/Manali3n4d",
      title: "A Himalayan Heaven",
      location: "MANALI",
      price: 15999,
      duration: "3 nights and 4 days tour",
      image: manali,
    },
    {
      to: "/Shimla5n6d",
      title: "Sleep in Nature's Lap",
      location: "SHIMLA & MANALI",
      duration: "5 nights and 6 days tour",
      price: 24500,
      image: shimla1,
    },
    {
      to: "/Shimla9n10d",
      title: "Instagrammable Himachal",
      location: "SHIMLA , MANALI , DHARAMSHALA AND DALHOUSIE",
      image: shimla2,
      price: 45999,
      duration: "9 nights and 10 days tour",
    },
    {
      to: "/Kasol2n3d",
      title: "Land of Creamy Flavours",
      location: "KASOL",
      price: 10999,
      duration: "2 nights and 3 days tour",
      image: kasol,
    },
    {
      to: "/Uttrakhand",
      title: "Mussoorie & Rishikesh: A Journey to the Queen of Hills",
      price: 16999,
      location: "UTTRAKHAND",
      duration: "3 nights and 4 days tour",
      image: masoorie,
    },
    {
      to: "/Andaman",
      title: "Discover Andaman: A Journey to Serenity",
      price: 31988,
      duration: "4 nights and 5 days tour",
      location: "ANDAMAN & NICOBAR",
      image: andaman,
    },
  ];

  useEffect(() => {
    setFilteredTours(
      tours.filter(
        (tour) =>
          tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tour.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <>
      {/* <Helmet>
        <title>Domestic Tours</title>
        <meta
          name="description"
          content="Names , places for you Inside India to travel along with anyone"
        />
      </Helmet> */}
      <Navbar />
      <div className="flex justify-center">
        <div className="mt-20 md:mt-28 md:p-5 items-center">
          <h1 className="text-center text-[26px] md:text-3xl march font-semibold mb-4">
            Domestic Tour Adventures
          </h1>
          <div className="flex justify-center mb-4">
            <label className="input input-bordered flex items-center gap-2 md:w-4/5">
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className="w-full"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {filteredTours.map((tour, index) => (
            <Domestic
              key={index}
              to={tour.to}
              title={tour.title}
              location={tour.location}
              price={tour.price}
              image={tour.image}
              duration={tour.duration}
            />
          ))}
        </div>
      </div>
      {screenSize === "large" && <Footer />}
      {screenSize === "tablet" && <Footer />}
      {screenSize === "mobile" && <MobileFooter />}
    </>
  );
}
