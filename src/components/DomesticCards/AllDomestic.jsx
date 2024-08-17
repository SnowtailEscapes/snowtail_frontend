import "../../styles/International.css";
import Domestic from "./DomesticCards";
import Navbar from "../Navbar";
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
import { useEffect, useState } from "react";
import Footer from "../Footer";
import MobileFooter from "../MobileFooter";
export default function AllDomestic() {
  const [screenSize, setScreenSize] = useState("large");

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

  return (
    <>
      {/* <Helmet>
        <title>Domestic Tours</title>
        <meta
          name="description"
          content="Locations , places for you Inside India to travel along with anyone"
        />
      </Helmet> */}
      <Navbar />
      <div className="flex justify-right md:justify-center">
        <div className="mt-20 md:mt-28 md:p-5">
          <h1 className="text-[26px] md:text-3xl march font-semibold text-nowrap text-center mb-4">
            Domestic Tour Adventures
          </h1>
          <Domestic
            to="/Rajasthan"
            title="The Incredible Gateway Rajasthan"
            location="RAJASTHAN"
            price={34399}
            image={rj1}
            duration="7 Nights and 8 Days tour"
          />

          <Domestic
            to="/Rajasthan4n5d"
            title="Journey Of majesty"
            location="RAJASTHAN"
            duration="4 Nights and 5 Days tour"
            price={19999}
            image={rj2}
          />

          <Domestic
            to="/Rajasthan5n6d"
            title="Explore Sand Tails"
            location="RAJASTHAN"
            price={25899}
            duration="5 Nights and 6 Days tour"
            image={rj3}
          />

          <Domestic
            to="/Gujarat3n4d"
            title="Monument of pride"
            location="GUJARAT"
            price={16499}
            duration="3 Nights and 4 Days tour"
            image={gujarat}
          />

          <Domestic
            to="/Gujarat4n5d"
            title="Gujarat’s Coastal Charms and Wildlife Wonders"
            location="GUJARAT"
            price={20999}
            duration="4 Nights and 5 Days tour"
            image={gujarat2}
          />
          <Domestic
            to="/Kashmir5n6d"
            title="Adventure meet Serenity"
            duration="5 nights and 6 days tour"
            price={26700}
            location="KASHMIR"
            image={kashmir1}
          />
          <Domestic
            to="/Kashmir3n4d"
            title="Experience Paradise On Earth"
            location="KASHMIR"
            price={18499}
            image={kashmir2}
            duration="3 nights and 4 days tour"
          />
          <Domestic
            to="/Ladakh5n6d"
            title="Thrilling Leh Ladakh"
            location="LADAKH"
            price={29999}
            duration="5 nights and 6 days tour"
            image={ladakh}
          />
          <Domestic
            to="/Sikkim5n6d"
            title="Gangtok & Darjeeling The Abode of Clouds"
            price={35799}
            location="SIKKIM"
            duration="5 nights and 6 days tour"
            image={sikkim}
          />
          <Domestic
            to="/Meghalaya5n6d"
            title="Meghalaya - Discover The Magic"
            duration="5 nights and 6 days tour"
            location="MEGHALAYA"
            price={32799}
            image={meghalaya}
          />
          <Domestic
            to="/Kerala5n6d"
            title="Experience God’s Own Country"
            location="KERALA"
            price={25499}
            duration="5 nights and 6 days tour"
            image={kerala}
          />
          <Domestic
            to="/Manali3n4d"
            title="A Himalayan Heaven"
            location="MANALI"
            price={15999}
            duration="3 nights and 4 days tour"
            image={manali}
          />
          <Domestic
            to="/Shimla5n6d"
            title="Sleep in Nature's Lap"
            location="SHIMLA & MANALI"
            duration="5 nights and 6 days tour"
            price={24500}
            image={shimla1}
          />
          <Domestic
            to="/Shimla9n10d"
            title="Instagrammable Himachal"
            location="SHIMLA/MANALI/DHARAMSHALA/DALHOUSIE"
            image={shimla2}
            price={45999}
            duration="9 nights and 10 days tour"
          />
          <Domestic
            to="/Kasol2n3d"
            title="Land of Creamy Flavours"
            location="KASOL"
            price={10999}
            duration="2 nights and 3 days tour"
            image={kasol}
          />
          <Domestic
            to="/Uttrakhand"
            title="Mussoorie & Rishikesh: A Journey to the Queen of Hills"
            price={16999}
            location="UTTRAKHAND"
            duration="3 nights and 4 days tour"
            image={masoorie}
          />
          <Domestic
            to="/Andaman"
            title="Discover Andaman: A Journey to Serenity"
            price={31988}
            duration="4 nights and 5 days tour"
            location="ANDAMAN & NICOBAR"
            image={andaman}
          />
        </div>
      </div>
      {
          screenSize === "large" && <Footer/>
        }
        {
          screenSize === "tablet" && <Footer/>
        }
        {
          screenSize === "mobile" && <MobileFooter/>
        }
    </>
  );
}
