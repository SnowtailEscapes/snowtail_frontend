import { useEffect } from "react";
import rajasthan from "../../assets/rajasthan.png";
import Map from "../Common/Map.jsx"
import a from "../../styles/Tourmain.module.css";
import "../../styles/animations.css";
import Aos from "aos";
import "aos/dist/aos.css";
import RajasthanAccordion from "../Accordions/RajasthanAccordion";
import Common  from "../Common/Top"
import Inclusion from "../Common/Inclusion";
import Confirmation from "../Common/Confirmation";
import Cancellation from "../Common/Cancellation";
import KnowBeforeYouGoDomestic from "../Common/Know_Before_you_go_domestic.jsx";

export default function LeftRajasthan() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className={a.tour_left}>

        <Common place="JAIPUR, PUSHKAR, JODHPUR, UDAIPUR" title="The Incredible Gateway Rajasthan" location1="Rajasthan" time="7N/8D"/>

        <div className={a.left3} data-aos="zoom-in">
          <img src={rajasthan} alt="rajashtan" />
        </div>

        <div className={a.left4} data-aos="slide-right">
          <h3>Overview</h3>
          <p>
            Architectural wonders, exquisite handicrafts, colourful culture, and
            tempting cuisine are a few of the many highlights of this
            magnificent state. Set amidst a vast desert, the magical land of
            Rajasthan is synonymous with romance and chivalry. As one of the
            best travel agencies in India, we at TravelMenu take immense pride
            in helping you explore royalty like never before. With our Rajasthan
            tour packages, travel back in time and in the era of the reign of
            the crown. Feel their tradition and culture like your own! A
            complete Rajasthan package includes options like exploring luxurious
            palaces, witnessing vintage cars, enjoying camel safaris in golden
            sand dunes, a fun shopping time in Jaipur Bazaars, and embarking on
            a tiger safari in the wild forests of the state.
          </p>
          <p>
            Our Rajasthan holiday packages give you a glimpse of the Rajasthani
            folk music, dances, cuisine, puppet show called Kathputli, many
            remarkable forts, temples, and the splendid, opulent Rajput culture.
            Browse the beauty of Rajasthan on one of our proficient Veena World
            online tour packages. We encourage you to make the most fascinating
            memories with us and relish our legacy to travel, explore and
            celebrate life.
          </p>
          <div>
            <ul>
              <li>Pick up - Jaipur</li>
              <li>Drop - Jaipur</li>
              <li>Duration - 7N/8D</li>
              <li>Best Season - September to March</li>
              <li>Destination for- Couples/Friends/ Family</li>
              <li>Mode of transportation- Car/traveller</li>
            </ul>
          </div>
        </div>

        
        <RajasthanAccordion />
        <Inclusion/>
        <Map link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7126872.152351839!2d68.58762353204355!3d27.043981428419688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1717780829734!5m2!1sen!2sin"/>
        <KnowBeforeYouGoDomestic/>
      <Confirmation/>
      <Cancellation/>

        

    </div>
    </>
  );
}
