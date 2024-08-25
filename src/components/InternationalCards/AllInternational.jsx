import React, { useEffect, useState } from "react";
import International from "./International";
import Navbar from "../Navbar";
import "../../styles/International.css";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";
import Mview from "../DomesticCards/MobileCards";

// Import your images here
import philipenes from "../../../public/images/card/philipenes.webp";
import japan2 from "../../../public/images/card/japan2.webp";
import japan from "../../../public/images/card/japan1.webp";
import australia from "../../../public/images/card/australia.webp";
import almaty from "../../../public/images/card/almaty.webp";
import bali from "../../../public/images/card/bali2.webp";
import bali2 from "../../../public/images/card/Bali7n8ds.webp";
import dubai from "../../../public/images/card/Dubai3n4dS.webp";
import dubai2 from "../../../public/images/card/Dubai5n6dS.webp";
import france from "../../../public/images/card/France.webp";
import greece from "../../../public/images/card/greece.webp";
import lanka from "../../../public/images/card/lanka.webp";
import malaysia from "../../../public/images/card/Malaysia.webp";
import nepal from "../../../public/images/card/nepal.webp";
import singapore from "../../../public/images/card/singapore4n5ds.webp";
import singapore2 from "../../../public/images/card/SMs.webp";
import singapore3 from "../../../public/images/card/singapore6n7ds.webp";
import swit from "../../../public/images/card/swit.webp";
import thailand1 from "../../../public/images/card/thailand4n5dS.webp";
import thailand2 from "../../../public/images/card/thailand5n6ds.webp";
import thailand3 from "../../../public/images/card/thailand8n9ds.webp";
import vietnam from "../../../public/images/card/vietnam4n5ds.webp";
import vietnam2 from "../../../public/images/card/vietnam6n7ds.webp";
import vietnam3 from "../../../public/images/card/vietnam9n10ds.webp";

export default function AllInternational() {
  const [screenSize, setScreenSize] = useState("large");
  const [searchQuery, setSearchQuery] = useState(""); // Add search state
  const [filteredTours, setFilteredTours] = useState([]);

  const tours = [
    {
      to: "/Thailand5d4n",
      title: "Explore Bangkok & Pattaya: A Vibrant Thai Adventure",
      price: 19699,
      location: "PATTAYA & BANGKOK",
      duration: "4 nights 5 days tour",
      image: thailand3,
    },
    {
      to: "/Thailand6d5n",
      title: "Experience Best of Southern Thailand: Phuket and Krabi",
      price: 29699,
      location: "PHUKET & KRABI",
      duration: "5 nights 6 days tour",
      image: thailand2,
    },
    {
      to: "/Thailand9d8n",
      title: "Experience Jewels of Thailand",
      price: 59099,
      location: "PHUKET & more...",
      duration: "8 nights 9 days tour",
      image: thailand1,
    },
    {
      to: "/Bali8d7n",
      title: "Enchanting Bali Escape with Gili Island",
      price: 54699,
      location: "BALI",
      duration: "7 nights 8 days tour",
      image: bali,
    },
    {
      to: "/Bali6d5n",
      title: "Luxurious 6-Day Bali Honeymoon Escape: Kuta and Ubud Delights",
      price: 34699,
      location: "BALI",
      duration: "5 nights 6 days tour",
      image: bali2,
    },
    {
      to: "/Vietnam4d5n",
      title: "Escape to North Vietnam: A Journey of Cultural Marvels",
      price: 37699,
      location: "VIETNAM",
      duration: "4 nights 5 days tour",
      image: vietnam,
    },
    {
      to: "/Vietnam6n7d",
      title: "Discover Vietnam: A Journey Through North & South Vietnam",
      price: 57699,
      location: "VIETNAM",
      duration: "6 nights 7 days tour",
      image: vietnam2,
    },
    {
      to: "/Vietnam9n10d",
      title:
        "Captivating Vietnam: A Journey Through Iconic Landmarks and Hidden Gems",
      price: 89699,
      location: "VIETNAM",
      duration: "9 nights 10 days tour",
      image: vietnam3,
    },
    {
      to: "/Singapore4n5d",
      title: "Singapore Escapes: A Journey through the Vibrant Lion City",
      price: 44699,
      location: "SINGAPORE",
      duration: "4 nights 5 days tour",
      image: singapore,
    },
    {
      to: "/Singapore6n7d",
      title: "Unforgettable Singapore Adventure with Luxurious 2-Night Cruise",
      price: 59699,
      location: "SINGAPORE",
      duration: "6 nights 7 days tour",
      image: singapore2,
    },
    {
      to: "/Singapore_Malaysia",
      title: "Singapore & Malaysia Escapes: A Journey of Cultural Marvels",
      price: 56999,
      location: "SINGAPORE & MALAYSIA",
      duration: "6 nights 7 days tour",
      image: singapore3,
    },
    {
      to: "/Malaysia",
      title: "Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape",
      price: 33999,
      location: "MALAYSIA",
      duration: "6 nights 7 days tour",
      image: malaysia,
    },
    {
      to: "/Switzerland5n6d",
      title: "Swiss Splendor: A Glimpse of Switzerland Escape",
      price: 97999,
      location: "SWITZERLAND",
      duration: "5 nights 6 days tour",
      image: swit,
    },
    {
      to: "/France-Italy",
      title: "Experience the Best of Paris & Rome",
      price: 85699,
      location: "FRANCE & ITALY",
      duration: "4 nights 5 days tour",
      image: france,
    },
    {
      to: "/Greece7n8d",
      title: "Greece Odyssey: An 8-Day Escape",
      price: 139699,
      location: "GREECE",
      duration: "7 nights 8 days tour",
      image: greece,
    },
    {
      to: "/SriLanka6n7d",
      title: "Sri Lanka a Jewel Of Indian Ocean",
      price: 38699,
      location: "SRI LANKA",
      duration: "6 nights 7 days tour",
      image: lanka,
    },
    {
      to: "/Dubai3n4d",
      title: "Dubai The City Of Wonders",
      price: 25899,
      location: "DUBAI",
      duration: "3 nights 4 days tour",
      image: dubai,
    },
    {
      to: "/Dubai5n6d",
      title: "Experience Dubai: A Journey of Luxury and Wonder",
      price: 58899,
      location: "DUBAI",
      duration: "5 nights 6 days tour",
      image: dubai2,
    },
    {
      to: "/Nepal",
      title: "Himalayan Majesty",
      price: 54699,
      location: "NEPAL",
      duration: "3 nights 4 days tour",
      image: nepal,
    },
    {
      to: "/Australia7d6n",
      title: "Best of Australia",
      price: 88980,
      location: "SYDNEY",
      duration: "7 nights 6 days tour",
      image: australia,
    },
    {
      to: "/Japan",
      title: "Best of Japan | From Ancient Shrines to Futuristic Skylines",
      price: 99999,
      location: "KYOTO",
      duration: "9 nights 10 days tour",
      image: japan,
    },
    {
      to: "/Japan5n6d",
      title: "Discover the Wonders of Japan: A Cultural and Scenic Adventure",
      price: 99999,
      location: "KYOTO",
      duration: "5 nights 6 days tour",
      image: japan2,
    },
    {
      to: "/Philipenes",
      title: "Discover the Wonders of the Philippines",
      price: 99999,
      location: "MANILA",
      duration: "7 nights 8 days tour",
      image: philipenes,
    },
    {
      to: "/Almaty",
      title: "Central Asian Gem",
      price: 59099,
      location: "ALMATY",
      duration: "9 days 8 nights tour",
      image: almaty,
    },
  ];


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

  useEffect(() => {
    const filtered = tours.filter(
      (tour) =>
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTours(filtered);
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      {screenSize === "mobile" && (
        <>
          <div className="flex justify-center mt-20 md:mt-28 md:p-5 p-5">
            <div className="w-full md:w-3/4">
              <h1 className="text-[26px] md:text-3xl font-lora font-semibold text-center mb-4 mt-4">
                International Tour Adventures
              </h1>

              <div className="flex justify-center mb-4">
                <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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

              {filteredTours.map((tour) => (
                <Mview
                  key={tour.to}
                  to={tour.to}
                  title={tour.title}
                  price={tour.price}
                  location={tour.location}
                  duration={tour.duration}
                  image={tour.image}
                />
              ))}
            </div>
          </div>
        </>
      )}
      {
        screenSize === "large" && (
          <>

            <div className="flex justify-center">
              <div className="mt-20 md:mt-28 md:p-5">
                <h1 className="text-[26px] md:text-3xl font-lora font-semibold text-center mb-4">
                  International Tour Adventures
                </h1>

                <div className="flex justify-center mb-4">
                  <label className="input input-bordered flex items-center gap-2 md:w-4/5">
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
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

                {filteredTours.map((tour) => (
                  <International
                    key={tour.to}
                    to={tour.to}
                    title={tour.title}
                    price={tour.price}
                    location={tour.location}
                    duration={tour.duration}
                    image={tour.image}
                  />
                ))}

              </div>
            </div>
          </>
        )
      }
<Footer/>
    </>
  );
}
