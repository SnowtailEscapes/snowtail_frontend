import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../Itinerary/styles/right.module.css";
import dot from "../../Itinerary/assets/dot.svg";
import Contact3 from "../../components/ContactThree";
import ScrollToTopButton from "../../Itinerary/components/ScrollToTop";

function TourRight({ data }) {
  const [showContactForm1, setShowContactForm1] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const toggleContactForm1 = () => {
    setShowContactForm1(!showContactForm1);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "hehe"}>
      <div className={styles.tour_right} id="price">
        {Object.entries(data.packages).map(([name, details], i) => (
          <div className={styles.right1} key={i}>
            <div className={styles.top}>
              <div className={styles.tour_details_right_box_heading}>
                <h3>{name}</h3>
              </div>
              <div className={styles.valid_date_area}>
                <div className={styles.valid_date_area_one}>
                  <h5>Valid from</h5>
                  <p>{details.from}</p>
                </div>
                <div className={styles.valid_date_area_one}>
                  <h5>Valid till</h5>
                  <p>{details.till}</p>
                </div>
              </div>
              <div className={styles.tour_package_details_bar_list}>
                <h5>Package details</h5>
                <ul>
                  {details.details.map((elem, j) => (
                    <li key={`${i}-${j}`}>
                      <img src={dot} width={5} alt="dot" />
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.tour_package_details_bar_price}>
                <h5 className="border-bottom">Price</h5>
                <div className={styles.tour_package_bar_price}>
                  <h6>
                    <del>INR. {details.cutPrice} </del>
                  </h6>
                  <h3 className="flex md:gap-2 text-nowrap">INR.{details.currentPrice}/person</h3>
                </div>
              </div>
            </div>
            <div className="w-full">
              <button className="btn bg-main-brand text-white" onClick={toggleContactForm1} style={{ width: "100%" }}>
                Contact with an Expert
              </button>
            </div>
          </div>
        ))}

        <div className={styles.right1}>
          <div className={styles.top}>
            <div className={styles.tour_details_right_box_heading}>
              <h3>Why choose us</h3>
            </div>
            <div className={styles.tour_package_details_bar_list}>
              <ul>
                {data.whyChooseUs.map((elem, i) => (
                  <li key={i}>
                    <img src={dot} width={5} alt="dot" />
                    {elem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {showContactForm1 && (
          <Contact3
            isVisible={showContactForm1}
            onClose={() => setShowContactForm1(false)}
            accomodation="3 Star or Standard Accomodation"
          />
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default TourRight;
