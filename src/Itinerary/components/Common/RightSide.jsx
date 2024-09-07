import React, { useEffect, useState } from "react";
import styles from "../../styles/right.module.css";
import dot from "../../assets/dot.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import Contact3 from "../../../components/ContactThree";
import "../../../styles/about.css";
import { useSelector } from 'react-redux';

const RightSide = ({
  standard_cut,
  standard_current,
  deluxe_cut,
  super_deluxe_cut,
  deluxe_current,
  super_deluxe_current,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  const [showContactForm1, setShowContactForm1] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const toggleContactForm1 = () => {
    setShowContactForm1(!showContactForm1);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'hehe'}>
      <div className={styles.tour_right}>
        <div className={styles.right1}>
          <div className={styles.top}>
            <div className={styles.tour_details_right_box_heading}>
              <h3>Standard Package</h3>
            </div>
            <div className={styles.valid_date_area}>
              <div className={styles.valid_date_area_one}>
                <h5>Valid from</h5>
                <p>01 Feb 2022</p>
              </div>
              <div className={styles.valid_date_area_one}>
                <h5>Valid till</h5>
                <p>15 Feb 2025</p>
              </div>
            </div>
            <div className={styles.tour_package_details_bar_list}>
              <h5>Package details</h5>
              <ul>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />3 star hygienic
                  accommodations
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Sightseeing as mentioned
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  All Transfers as mentioned
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Inclusions & Exclusions as mentioned
                </li>
              </ul>
            </div>
            <div className={styles.tour_package_details_bar_price}>
              <h5 className="border-bottom">Price</h5>
              <div className={styles.tour_package_bar_price}>
                <h6>
                  <del>
                    {/* <CurrencyConverter price={Number(standard_cut)} /> */}
                    INR.{standard_cut}
                  </del>
                </h6>
                <h3 className="flex md:gap-2 text-nowrap">
                  {/* <CurrencyConverter price={Number(standard_current)} />  */}
                  INR.{standard_current}/person
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="btn bg-main-brand text-white"
              onClick={toggleContactForm1}
              style={{width:"100%"}}
            >
              Contact with an Expert
            </button>
          </div>
        </div>

        <div className={styles.right1}>
          <div className={styles.top}>
            <div className={styles.tour_details_right_box_heading}>
              <h3>Deluxe Package</h3>
            </div>
            <div className={styles.valid_date_area}>
              <div className={styles.valid_date_area_one}>
                <h5>Valid from</h5>
                <p>01 Feb 2022</p>
              </div>
              <div className={styles.valid_date_area_one}>
                <h5>Valid till</h5>
                <p>15 Feb 2025</p>
              </div>
            </div>
            <div className={styles.tour_package_details_bar_list}>
              <h5>Package details</h5>
              <ul>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />4 star hygienic
                  accommodations
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Sightseeing as mentioned
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  All Transfers as mentioned
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Inclusions & Exclusions as mentioned
                </li>
              </ul>
            </div>
            <div className={styles.tour_package_details_bar_price}>
              <h5>Price</h5>
              <div className={styles.tour_package_bar_price}>
                <h6>
                  <del>
                    {/* <CurrencyConverter price={deluxe_cut} /> */}
                    INR.{deluxe_cut}
                  </del>
                </h6>
                <h3 className="flex md:gap-2 text-nowrap">
                  {/* <CurrencyConverter price={deluxe_current} /> */}
                  INR.{deluxe_current}/person
                </h3>
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn bg-main-brand text-white"
              onClick={toggleContactForm1}
              style={{width:"100%"}}

            >
              Contact with an Expert
            </button>
          </div>
        </div>

        <div className={styles.right1}>
          <div className={styles.top}>
            <div className={styles.tour_details_right_box_heading}>
              <h3 className={styles.super_deluxe}>Super Deluxe Package</h3>
            </div>
            <div className={styles.valid_date_area}>
              <div className={styles.valid_date_area_one}>
                <h5>Valid from</h5>
                <p>01 Feb 2022</p>
              </div>
              <div className={styles.valid_date_area_one}>
                <h5>Valid till</h5>
                <p>15 Feb 2025</p>
              </div>
            </div>
            <div className={styles.tour_package_details_bar_list}>
              <h5>Package details</h5>
              <ul>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />5 star hygienic
                  accommodations
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Sightseeing as mentioned
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  All Transfers as mentioned
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Inclusions & Exclusions as mentioned
                </li>
              </ul>
            </div>
            <div className={styles.tour_package_details_bar_price}>
              <h6>Price</h6>
              <div className={styles.tour_package_bar_price}>
                <h6>
                  <del>
                    {/* <CurrencyConverter price={super_deluxe_cut} /> */}
                    INR.{super_deluxe_cut}
                  </del>
                </h6>
                <h3 className="flex md:gap-2 text-nowrap">
                  {/* <CurrencyConverter price={super_deluxe_current} /> */}
                  INR.{super_deluxe_current}/person
                </h3>
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn bg-main-brand text-white"
              onClick={toggleContactForm1}
              style={{width:"100%"}}

            >
              Contact with an Expert
            </button>
          </div>
        </div>

        <div className={styles.right1}>
          <div className={styles.top}>
            <div className={styles.tour_details_right_box_heading}>
              <h3>Why choose us</h3>
            </div>
            <div className={styles.tour_package_details_bar_list}>
              <ul>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Expertly crafted itinerary blending cultural immersion with
                  adventure
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Luxurious accommodations and comfortable transportation
                  throughout
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Experienced guides providing insights into Thailand's history
                  and heritage
                </li>
                <li>
                  <img src={dot} width={5} alt="dot" />
                  Seamless travel arrangements, ensuring a stress-free and
                  memorable journey
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {showContactForm1 && (
          <Contact3
            isVisible={showContactForm1}
            onClose={() => setShowContactForm1(false)}
            accomodation='3 Star or Standard Accomodation'
          />
        )}
      </div>
    </div>
  );
};

RightSide.propTypes = {
  standard_cut: PropTypes.number.isRequired,
  standard_current: PropTypes.number.isRequired,
  deluxe_cut: PropTypes.number.isRequired,
  super_deluxe_cut: PropTypes.number.isRequired,
  deluxe_current: PropTypes.number.isRequired,
  super_deluxe_current: PropTypes.number.isRequired,
};

export default RightSide;
