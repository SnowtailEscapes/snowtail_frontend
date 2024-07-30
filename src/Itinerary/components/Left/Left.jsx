import React, { useEffect } from "react";
import PropTypes from "prop-types";
import rajasthan from "../../assets/rajasthan.png";
import banner from "../../../assets/Banner/Thailand_banner.webp";
import Map from "../Common/Map";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ThailandAccordion from "../Accordions/Acc";
import Common from "../Common/Top";
import Inclusion from "../Common/Inclusion";
import Confirmation from "../Common/Confirmation";
import Cancellation from "../Common/Cancellation";
import KnowBeforeYouGo from "../Common/Know_Before_you_go";


const Left = ({itinerary}) => {
  

  return (
    <div className={a.tour_left}>
      <Common
        place={itinerary.location}
        title={itinerary.title}
        location1={itinerary.place}
        rating={itinerary.rating}
        reviews={itinerary.Reviews}
        time={itinerary.duration}
      />

      <div className={a.left3} data-aos="zoom-in">
        <img src={banner} alt="rajashtan" />
      </div>

      <div className={a.left4} data-aos="slide-right">
        <h3>Overview</h3>
        <p>{itinerary.description1}</p>
        <div>
          <ul>
            {itinerary.description2.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>

      <ThailandAccordion itinerary={itinerary}/>

      <Inclusion itinerary={itinerary} />

      <Map link={itinerary.map} />
      <KnowBeforeYouGo />

      <Confirmation />

      <Cancellation />
    </div>
  );
};

Left.propTypes = {
  itinerary : PropTypes.object.isRequired
};

export default Left;
