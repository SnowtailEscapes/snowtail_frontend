import { Suspense, lazy } from "react";
import International from "./DomesticCards";
const LazyComponent = lazy(() => import("../Navbar"));
import a from "../../styles/International.module.css";
import Rj7n8d from "../../assets/CardImages/Rj7n8dS.webp";
import Rj5n6d from "../../assets/CardImages/Rj5n6d.webp";
import Rj4n5d from "../../assets/CardImages/Rj4n5dS.webp";
import Kashmir1 from "../../assets/CardImages/kashmir1.webp";
import Kashmir2 from "../../assets/CardImages/kashmir2.webp";
import Kerala from "../../assets/CardImages/kerala_card.webp";
import Kasol from "../../assets/CardImages/kasol.avif";
import andaman from "../../assets/CardImages/andaman.webp";
import ladakh from "../../assets/CardImages/ladakh_card.webp";
import sikkim from "../../assets/CardImages/sikkim_card.webp";
import meghalaya from "../../assets/LargeImages/meghalaya.webp";
import uttrakhand from "../../assets/CardImages/uttrakhand_card.webp";
import gujarat from "../../assets/LargeImages/gujarat2.webp";
import gujarat1 from "../../assets/CardImages/gujarat1.webp";
import manali from "../../assets/CardImages/manali.webp";
import himachal from "../../assets/CardImages/shimla5n6d.webp";
import himachal2 from "../../assets/CardImages/shimla9n10d.webp";
import { Helmet } from "react-helmet";



export default function AllInternational() {
  return (
    <>
    <Helmet>
        <title>Domestic Tours</title>
        <meta
          name="description"
          content="Locations , places for you Inside India to travel along with anyone"
        />
      </Helmet>
      <div className={a.banner}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
      <div className="flex justify-center">
        <div className="mt-12 p-5">
          <h1 className="text-[2.5rem] font-semibold text-center march">
            Domestic Tour Adventures
          </h1>
          <International
            to="/Rajasthan"
            title="The Incredible Gateway Rajasthan"
            location="RAJASTHAN"
            price="INR.34,399/person"
            image={Rj7n8d}
            duration="7 Nights and 8 Days tour"
          />

          <International
            to="/Rajasthan4n5d"
            title="Journey Of majesty"
            location="RAJASTHAN"
            duration="4 Nights and 5 Days tour"
            price="INR.19,999/person"
            image={Rj4n5d}
          />

          <International
            to="/Rajasthan5n6d"
            title="Explore Sand Tails"
            location="RAJASTHAN"
            price="INR.25,899/person"
            duration="5 Nights and 6 Days tour"
            image={Rj5n6d}
          />

          <International
            to="/Gujarat3n4d"
            title="Monument of pride"
            location="GUJARAT"
            price="INR.16,499/person"
            duration="3 Nights and 4 Days tour"
            image={gujarat}
          />

          <International
            to="/Gujarat4n5d"
            title="Gujarat’s Coastal Charms and Wildlife Wonders"
            location="GUJARAT"
            price="INR.20,999/person"
            duration="4 Nights and 5 Days tour"
            image={gujarat1}

          />
          <International
            to="/Kashmir5n6d"
            title="Adventure meet Serenity"
            duration="5 nights and 6 days tour"
            price="INR.26,700/person"
            location="KASHMIR"
            image={Kashmir1}
          />
          <International
            to="/Kashmir3n4d"
            title="Experience Paradise On Earth"
            location="KASHMIR"
            price="INR.18,499/person"
            image={Kashmir2}
            duration="3 nights and 4 days tour"
          />
          <International
            to="/Ladakh5n6d"
            title="Thrilling Leh Ladakh"
            location="LADAKH"
            price="INR.29,999/person"
            duration="5 nights and 6 days tour"
            image={ladakh}
          />
          <International
            to="/Sikkim5n6d"
            title="Gangtok & Darjeeling The Abode of Clouds"
            price="INR.35,799/person"
            location="SIKKIM"
            duration="5 nights and 6 days tour"
            image={sikkim}
          />
          <International
            to="/Meghalaya5n6d"
            title="Meghalaya - Discover The Magic"
            duration="5 nights and 6 days tour"
            location="MEGHALAYA"
            price="INR.32,799/person"
            image={meghalaya}
          />
          <International
            to="/Kerala5n6d"
            title="Experience God’s Own Country"
            location="KERALA"
            price="INR.25,499/person"
            duration="5 nights and 6 days tour"
            image={Kerala}
          />
          <International
            to="/Manali3n4d"
            title="A Himalayan Heaven"
            location="MANALI"
            price="INR.15,999/person"
            duration="3 nights and 4 days tour"
            image={manali}
          />
          <International
            to="/Shimla5n6d"
            title="Sleep in Nature's Lap"
            location="SHIMLA & MANALI"
            duration="5 nights and 6 days tour"
            price="INR.24,500/person"
            image={himachal}
          />
          <International
            to="/Shimla9n10d"
            title="Instagrammable Himachal"
            location="SHIMLA/MANALI/DHARAMSHALA/DALHOUSIE"
            image={himachal2}
            price="INR.45,999/person"
            duration="9 nights and 10 days tour"
          />
          <International
            to="/Kasol2n3d"
            title="Land of Creamy Flavours"
            location="KASOL"
            price="INR.10,999/person"
            duration="2 nights and 3 days tour"
            image={Kasol}
          />
          <International
            to="/Uttrakhand"
            title="Mussoorie & Rishikesh: A Journey to the Queen of Hills"
            price="INR.16,999/person"
            location="UTTRAKHAND"
            duration="3 nights and 4 days tour"
            image={uttrakhand}
          />
          <International
            to="/Andaman"
            title="Discover Andaman: A Journey to Serenity"
            price="INR.31,988/person"
            duration="4 nights and 5 days tour"
            location="ANDAMAN & NICOBAR"
            image={andaman}
          />
        </div>
      </div>
    </>
  );
}
