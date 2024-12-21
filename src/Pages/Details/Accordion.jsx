import React, { useEffect, useMemo, useState } from "react";
import "./styles/accordians.css";
import a from "./styles/Tourmain.module.css";

function Accordion({ accordion }) {
  const [active, setActive] = useState({});

  const toggleAccordion = (index) => {
    setActive((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const allExpanded = useMemo(() => {
    for (let i = 0; i < accordion.length; i++) {
      if (!active[i]) {
        return false;
      }
    }
    return true;
  }, [active]);

  const toggleAllExpand = () => {
    if (allExpanded) {
      const temp = {};
      for (let i = 0; i < accordion.length; i++) {
        temp[i] = false;
      }
      setActive(temp);
    } else {
      const temp = {};
      for (let i = 0; i < accordion.length; i++) {
        temp[i] = true;
      }
      setActive(temp);
    }
  };

  return (
    <div className={a.left5} data-aos="slide-right">
      <div className="flex items-center justify-between">
        <h3>Itinerary</h3>
        <button className="btn btn-md bg-light-shade mb-6" onClick={toggleAllExpand}>
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="accordians">
        {accordion.map((elem, i) => (
          <div className="accor join" key={i}>
            <div className="collapse collapse-open join-item">
              <div className="flex items-center">
                <div
                  className="collapse-title hover:cursor-pointer title flex justify-space items-center gap-4"
                  onClick={() => toggleAccordion(i)}
                >
                  <button className="btn btn-sm rounded-3xl bg-main-brand">Day {i + 1}</button>
                  {elem.title}
                </div>
                <p onClick={() => toggleAccordion(i)} className="hover:cursor-pointer">
                  {active[i] ? <>▲</> : <>▼</>}
                </p>
              </div>
              {active[i] && <div className="collapse-content" dangerouslySetInnerHTML={{ __html: elem.html }}></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
