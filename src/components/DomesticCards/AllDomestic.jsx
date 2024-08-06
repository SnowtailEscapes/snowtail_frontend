import { Suspense, lazy } from "react";
import International from "./DomesticCards";
const LazyComponent = lazy(() => import("../Navbar"));
import a from "../../styles/International.module.css";
import { Helmet } from "react-helmet";
import Footer from "../Footer";

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
          <h1 className="text-4xl font-semibold text-center">
            Domestic Tour Adventures
          </h1>
          <International
            to="/Rajasthan"
            title="The Incredible Gateway Rajasthan"
            location="RAJASTHAN"
            price={34399}
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/sajzabk69brdin5l2i9c'
            duration="7 Nights and 8 Days tour"
          />

          <International
            to="/Rajasthan4n5d"
            title="Journey Of majesty"
            location="RAJASTHAN"
            duration="4 Nights and 5 Days tour"
            price={19999}
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/brttychqjlqpulgg9yng'
          />

          <International
            to="/Rajasthan5n6d"
            title="Explore Sand Tails"
            location="RAJASTHAN"
            price={25899}
            duration="5 Nights and 6 Days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/u13fvrykkktzzpblxeps'
          />

          <International
            to="/Gujarat3n4d"
            title="Monument of pride"
            location="GUJARAT"
            price={16499}
            duration="3 Nights and 4 Days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/mddzj4dekit9a7m3jepm'
          />

          <International
            to="/Gujarat4n5d"
            title="Gujarat’s Coastal Charms and Wildlife Wonders"
            location="GUJARAT"
            price={20999}
            duration="4 Nights and 5 Days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/uyfvy28acv8ifdrkxh1w'

          />
          <International
            to="/Kashmir5n6d"
            title="Adventure meet Serenity"
            duration="5 nights and 6 days tour"
            price={26700}
            location="KASHMIR"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/e0pa63dcfd9ndpjikd6r'
          />
          <International
            to="/Kashmir3n4d"
            title="Experience Paradise On Earth"
            location="KASHMIR"
            price={18499}
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/io8nrf2tcetleax8jgyq'
            duration="3 nights and 4 days tour"
          />
          <International
            to="/Ladakh5n6d"
            title="Thrilling Leh Ladakh"
            location="LADAKH"
            price={29999}
            duration="5 nights and 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/vbqfi1hyv63r0w845akt'
          />
          <International
            to="/Sikkim5n6d"
            title="Gangtok & Darjeeling The Abode of Clouds"
            price={35799}
            location="SIKKIM"
            duration="5 nights and 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ykxbiuiaflrokrrqfm8u'
          />
          <International
            to="/Meghalaya5n6d"
            title="Meghalaya - Discover The Magic"
            duration="5 nights and 6 days tour"
            location="MEGHALAYA"
            price={32799}
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/tcjagpzwhbnnktjw6ehf'
          />
          <International
            to="/Kerala5n6d"
            title="Experience God’s Own Country"
            location="KERALA"
            price={25499}
            duration="5 nights and 6 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/olwkfgtmedp6wipokes9'
          />
          <International
            to="/Manali3n4d"
            title="A Himalayan Heaven"
            location="MANALI"
            price={15999}
            duration="3 nights and 4 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/vorbmcxc5np6ahet04j0'
          />
          <International
            to="/Shimla5n6d"
            title="Sleep in Nature's Lap"
            location="SHIMLA & MANALI"
            duration="5 nights and 6 days tour"
            price={24500}
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ogxma6qe0ljqynhde8so'
          />
          <International
            to="/Shimla9n10d"
            title="Instagrammable Himachal"
            location="SHIMLA/MANALI/DHARAMSHALA/DALHOUSIE"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/nsrvtq5i9exisdh5rfkt'
            price={45999}
            duration="9 nights and 10 days tour"
          />
          <International
            to="/Kasol2n3d"
            title="Land of Creamy Flavours"
            location="KASOL"
            price={10999}
            duration="2 nights and 3 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/d4jj8za1frxjxgw2cs3l'
          />
          <International
            to="/Uttrakhand"
            title="Mussoorie & Rishikesh: A Journey to the Queen of Hills"
            price={16999}
            location="UTTRAKHAND"
            duration="3 nights and 4 days tour"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ytd5dytykzlpy6orblbl'
          />
          <International
            to="/Andaman"
            title="Discover Andaman: A Journey to Serenity"
            price={31988}
            duration="4 nights and 5 days tour"
            location="ANDAMAN & NICOBAR"
            image='https://res.cloudinary.com/djbo8r8ic/image/upload/f_auto,q_auto/v1/snowtail%20escapes/Small/ntxfrgqqlxssxkybgdtt'
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}
