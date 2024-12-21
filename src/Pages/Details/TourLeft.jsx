import React from "react";
import a from "./styles/Tourmain.module.css";
// import "./styles/animations.css";
import Top from "../../Itinerary/components/Common/Top";
import Accordion from "./Accordion";
import Inclusion from "./Inclusion";
import Map from "../../Itinerary/components/Common/Map";
import Policies from "./Policies";

function TourLeft({ data }) {
  return (
    <div className={a.tour_left}>
      <Top
        place={data.overview.place}
        title={data.overview.title}
        location1={data.overview.location}
        time={data.overview.time}
        rating={data.overview.rating}
        reviews={data.overview.reviews}
      />
      <div className={a.left3} data-aos="zoom-in">
        <img src={data.overview.image} alt="rajashtan" />
      </div>
      <div className={a.left4} data-aos="slide-right" dangerouslySetInnerHTML={{ __html: data.overview.description }}></div>
      <Accordion accordion={data.itinerary} />
      <Inclusion inclusions={data.inclusions} exclusions={data.exclusions} />
      <Map link={data.mapLink} />
      <Policies data={{ beforeYouGo: data.beforeYouGo, confirmation: data.confirmation, cancellation: data.cancellation }} />
    </div>
  );
}

export default TourLeft;
