import React from "react";
import a from "./styles/Tourmain.module.css";

import dot from "../../Itinerary/assets/dot.svg";
import dot2 from "../../Itinerary/assets/cross.svg";

function Inclusion({ inclusions, exclusions }) {
  return (
    <div className={a.left6} data-aos="zoom-in">
      <h3>Included/Excluded</h3>
      <ul>
        <h4>Inclusions</h4>
        {inclusions.map((elem, i) => (
          <li key={i}>
            <img src={dot} width={5} alt="dot" /> {elem}
          </li>
        ))}
      </ul>
      <ul>
        <h4>Exclusions</h4>
        {exclusions.map((elem, i) => (
          <li key={i}>
            <img src={dot2} width={5} alt="dot" /> {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inclusion;
