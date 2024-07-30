import React, { useState, useEffect } from "react";
import "../../styles/accordians.css";
import PropTypes from "prop-types";
import dot from "../../assets/dot.svg";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Accordion = ({ itinerary }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const [expandedDays, setExpandedDays] = useState({});

  const handleToggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleExpandAll = () => {
    const allExpanded = Object.values(expandedDays).every((expanded) => expanded);
    const newExpandedState = {};
    itinerary.activities.forEach((activity, index) => {
      newExpandedState[`day${index + 1}`] = !allExpanded;
    });
    setExpandedDays(newExpandedState);
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn w-1/2" onClick={handleExpandAll}>
          {Object.values(expandedDays).every((expanded) => expanded) ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="accordians">
        {itinerary.activities.map((activity, index) => (
          <div key={index} className="accor join">
            <h5 className="join-item">Day {activity.day}</h5>
            <div className="collapse collapse-open join-item">
              <div className="flex items-center">
                <div
                  className="collapse-title hover:cursor-pointer"
                  onClick={() => handleToggleDay(`day${index + 1}`)}
                >
                  {activity.title}
                </div>
                {expandedDays[`day${index + 1}`] ? <p>▲</p> : <p>▼</p>}
              </div>
              {expandedDays[`day${index + 1}`] && (
                <div className="collapse-content">
                  <ul>
                    {activity.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  itinerary: PropTypes.object.isRequired,
};

export default Accordion;
