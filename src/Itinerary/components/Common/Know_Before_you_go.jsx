import { useState, useEffect } from "react";
import dot from "../../assets/dot.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../styles/about.css";
import { useSelector } from 'react-redux';

export default function KnowBeforeYouGo() {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'hehe'}>
      <div
        className="text-[18px] leading-[25.5px] p-5 mt-8 rounded-lg shadow-[0_-4px_-5px_14px_rgba(0,0,0,0.08),0_5px_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-5 "
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleCollapse}
        >
          <h3 className="text-[20px] font-medium leading-[28.8px] mb-5 pb-2 min-w-fit">
           KNOW BEFORE YOU GO
          </h3>
          <span className="text-[20px]">{isOpen ? "▲" : "▼"}</span>
        </div>

        {isOpen && (
          <div>
            <ul className="list-none flex flex-col gap-5">
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                ID Proof: A valid ID proof is mandatory for each guest at
                booking and arrival. PAN cards are not accepted as address
                proof.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Visa Assistance: Visa assistance is available but not included
                in the package charges.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Travel Insurance: Travel insurance is recommended and not
                included in the package.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Meals: Only meals mentioned in the package are included.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Personal Expenses: Personal expenses and mandatory hotel taxes
                (if any) must be paid by you at the destination.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Departure Timings: Please adhere to suggested departure timings
                to avoid inconvenience.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc font-bold text-main-brand">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Environment: Please do not litter and keep the environment
                clean.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Rates & Services: Rates may change with any alteration in
                services or hotels. Additional costs due to changes in guest
                numbers must be covered by the client.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Hotel Availability: Hotels are subject to availability. If
                unavailable, a similar standard property will be provided.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Itinerary Changes: SNOWTAIL ESCAPES reserves the right to adjust
                the itinerary due to disturbances (e.g., weather, political
                conditions) without changing the total number of days or
                compromising services.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" className="dot"/>
                Damage Charges: Any breakage or damage at the resort will be
                charged at actuals.
              </li>
            </ul>
            <p className="text-main-brand mt-4 text-[18px]">
            Enjoy your journey with SNOWTAIL ESCAPES!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
