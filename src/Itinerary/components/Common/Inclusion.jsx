import React, { useEffect } from "react";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const Inclusion = ({ itinerary }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  if (!itinerary) {
    return <p>Loading...</p>;
  }

  return (
    <div className={a.left6} data-aos="zoom-in">
      <h3>Included/Excluded</h3>
      <ul>
        <h4>Inclusions</h4>
        {itinerary.inclusions.map((inclusion, index) => (
          <li key={index}>
            <img src={dot} width={30} alt="dot" /> {inclusion}
          </li>
        ))}
      </ul>
      <ul>
        <h4>Exclusions</h4>
        {itinerary.exclusions.map((exclusion, index) => (
          <li key={index}>
            <img src={dot} width={30} alt="dot" /> {exclusion}
          </li>
        ))}
      </ul>
    </div>
  );
};

Inclusion.propTypes = {
  itinerary: PropTypes.object.isRequired,
};

export default Inclusion;
