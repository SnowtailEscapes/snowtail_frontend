import International from "./International";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import philipenes from "../../../public/images/card/philipenes.webp"
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
  return (
    <>
      <Helmet>
        <title>International Tours</title>
        <meta
          name="description"
          content="Locations , places for you outside India to travel along with anyone"
        />
      </Helmet>
      <Navbar />
      <div className="flex justify-right md:justify-center">
        <div className="mt-20 md:mt-28 md:p-5">
          <h1 className="text-[26px] md:text-3xl march font-semibold text-nowrap text-center mb-4">
            International Tour Adventures
          </h1>

          <International
            to="/Thailand5d4n"
            title="Explore Bangkok & Pattaya: A Vibrant Thai Adventure"
            price={19699}
            location="PATTAYA & BANGKOK"
            duration="4 nights 5 days tour"
            image={thailand3}
          />

          <International
            to="/Thailand6d5n"
            title="Experience Best of Southern Thailand: Phuket and Krabi"
            price={29699}
            location="PHUKET & KRABI"
            duration="5 nights 6 days tour"
            image={thailand2}
          />

          <International
            to="/Thailand9d8n"
            title="Experience Jewels of Thailand"
            price={59099}
            location="PHUKET/KRABI/PATTAYA/BANGKOK"
            duration="8 nights 9 days tour"
            image={thailand1}
          />

          <International
            to="/Bali8d7n"
            title="Enchanting Bali Escape with Gili Island"
            price={54699}
            location="BALI"
            duration="7 nights 8 days tour"
            image={bali}
          />
          <International
            to="/Bali6d5n"
            title="Luxurious 6-Day Bali Honeymoon Escape: Kuta and Ubud Delights"
            price={34699}
            location="BALI"
            duration="5 nights 6 days tour"
            image={bali2}
          />

          <International
            to="/Vietnam4d5n"
            title="Escape to North Vietnam: A Journey of Cultural Marvels and Natural Wonders"
            price={37699}
            location="VIETNAM"
            duration="4 nights 5 days tour"
            image={vietnam}
          />

          <International
            to="/Vietnam6n7d"
            title="Discover Vietnam: A Journey Through North & South Vietnam"
            price={57699}
            location="VIETNAM"
            duration="6 nights 7 days tour"
            image={vietnam2}
          />
          <International
            to="/Vietnam9n10d"
            title="Captivating Vietnam: A Journey Through Iconic Landmarks and Hidden Gems"
            price={89699}
            location="VIETNAM"
            duration="9 nights 10 days tour"
            image={vietnam3}
          />
          <International
            to="/Singapore4n5d"
            title="Singapore Escapes: A Journey through the Vibrant Lion City"
            price={44699}
            location="SINGAPORE"
            duration="4 nights 5 days tour"
            image={singapore}
          />
          <International
            to="/Singapore6n7d"
            title="Unforgettable Singapore Adventure with Luxurious 2-Night Cruise"
            price={59699}
            location="SINGAPORE"
            duration="6 nights 7 days tour"
            image={singapore2}
          />
          <International
            to="/Singapore_Malaysia"
            title="Singapore & Malaysia Escapes: A Journey of Cultural Marvels"
            price={56999}
            location="SINGAPORE & MALAYSIA"
            duration="6 nights 7 days tour"
            image={singapore3}
          />
          <International
            to="/Malaysia"
            title="Malaysian Marvels - Kuala Lumpur, Penang & Langkawi Escape"
            price={33999}
            location="MALAYSIA"
            duration="6 nights 7 days tour"
            image={malaysia}
          />
          <International
            to="/Switzerland5n6d"
            title="Swiss Splendor: A Glimpse of Switzerland Escape"
            duration="5 nights 6 days tour"
            price={97999}
            location="SWITZERLAND"
            image={swit}
          />
          <International
            to="/France-Italy"
            title="Experience the Best of Paris & Rome"
            price={85699}
            location="FRANCE & ITALY"
            duration="4 nights 5 days tour"
            image={france}
          />
          <International
            to="/Greece7n8d"
            title="Greece Odyssey: An 8-Day Escape"
            location="GREECE"
            price={139699}
            duration="7 nights 8 days tour"
            image={greece}
          />
          <International
            to="/SriLanka6n7d"
            title="Sri Lanka a Jewel Of Indian Ocean"
            duration="6 nights 7 days tour"
            price={38699}
            location="SRI LANKA"
            image={lanka}
          />
          <International
            to="/Dubai3n4d"
            title="Dubai The City Of Wonders"
            location="DUBAI"
            price={25899}
            duration="3 nights 4 days tour"
            image={dubai}
          />
          <International
            to="/Dubai5n6d"
            title="Experience Dubai: A Journey of Luxury and Wonder"
            location="DUBAI"
            price={58899}
            duration="5 nights 6 days tour"
            image={dubai2}
          />

          <International
            title="Himalayan Majesty"
            duration="3 nights 4 days tour"
            price={54699}
            direct="/Nepal"
            location="Nepal"
            image={nepal}
            to="/Nepal"
          />

          <International
            title="Central Asian Gem"
            duration="9 Days and 8 Nights"
            to="/Almaty"
            location="Almaty"
            price={59099}
            direct="/Almaty"
            image={almaty}
          />

          <International
            to="/Australia7d6n"
            title="Best of Australia"
            price={88980}
            location="Sydney"
            duration="7 nights 6 days tour"
            image={australia}
          />

          <International
            to="/Japan"
            title="Best of Japan | From Ancient Shrines to Futuristic Skylines"
            price={99999}
            location="Kyoto"
            duration="9 nights 10 days tour"
            image={japan}
          />

          <International
            to="/Japan5n6d"
            title="Discover the Wonders of Japan: A Cultural and Scenic Adventure"
            price={99999}
            location="Kyoto"
            duration="5 nights 6 days tour"
            image={japan2}
          />

          <International
            to="/Philipenes"
            title="Discover the Wonders of the Philippines"
            price={99999}
            location="Manila"
            duration="7 nights 8 days tour"
            image={philipenes}
          />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
