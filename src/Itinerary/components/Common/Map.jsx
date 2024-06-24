import "../../styles/map.css";
import PropTypes from "prop-types";
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Map = ({link}) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={a.left7} data-aos="zoom-out">
        <h3>Tours Location</h3>
        <div>
          <iframe
            src={link}
            width={100}
            height={450}
            title="map"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

Map.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Map;
