import { useState } from "react";
import { useSelector } from "react-redux";
import dot from "../../Itinerary/assets/dot.svg";
import "../../styles/about.css";

function Policies({ data }) {
  const [beforeYouGo, setBeforeYouGo] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [cancellation, setCancellation] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={isDarkMode ? "dark-mode" : "hehe"}>
      {data.beforeYouGo && (
        <div className="text-[18px] leading-[25.5px] p-5 mt-8 rounded-lg shadow-[0_-4px_-5px_14px_rgba(0,0,0,0.08),0_5px_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-5">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setBeforeYouGo(!beforeYouGo)}>
            <h3 className="text-[20px] font-medium leading-[28.8px] mb-5 pb-2 min-w-fit">KNOW BEFORE YOU GO</h3>
            <span className="text-[20px]">{beforeYouGo ? "▲" : "▼"}</span>
          </div>

          {beforeYouGo && (
            <div>
              <ul className="list-none flex flex-col gap-5">
                {data.beforeYouGo.map((elem, i) => (
                  <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc" key={i}>
                    <img src={dot} width={30} alt="dot" className="dot" />
                    {elem}
                  </li>
                ))}
              </ul>

              <p className="text-main-brand mt-4 text-[18px]">Enjoy your journey with SNOWTAIL ESCAPES!</p>
            </div>
          )}
        </div>
      )}
      {data.confirmation && (
        <div className="text-[18px] leading-[25.5px]  p-5 mt-8 rounded-lg shadow-[0_-4px_-5px_14px_rgba(0,0,0,0.08),0_5px_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-5">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setConfirmation(!confirmation)}>
            <h3 className="text-[20px] font-medium leading-[28.8px] mb-5 pb-2 min-w-fit">CONFIRMATION POLICY</h3>
            <span className="text-[20px]">{confirmation ? "▲" : "▼"}</span>
          </div>

          {confirmation && (
            <div>
              <p className="text-[18px]">
                To finalize your trip, complete payment must be received before the date of the journey. The initial booking amount should
                be paid in advance according to the following terms:
              </p>

              <ul className="list-none flex flex-col gap-5 mt-5">
                {data.confirmation.map((elem, i) => (
                  <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc" key={i}>
                    <img src={dot} width={30} alt="dot" className="dot" />
                    {elem}
                  </li>
                ))}
              </ul>

              <p className="text-main-brand mt-4 text-[18px]">
                PLEASE NOTE: FOR CUSTOMIZED AND HOTEL-SPECIFIC TOURS, CONNECT WITH YOUR POC TO GET EXACT CANCELLATION/RESCHEDULING CHARGES.
              </p>
            </div>
          )}
        </div>
      )}
      {data.cancellation && (
        <div className="text-[18px] leading-[25.5px] p-5 mt-8 rounded-lg shadow-[0_-4px_-5px_14px_rgba(0,0,0,0.08),0_5px_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-5">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setCancellation(!cancellation)}>
            <h3 className="text-[20px] font-medium leading-[28.8px] mb-5 pb-2 min-w-fit">CANCELLATION POLICY</h3>
            <span className="text-[20px]">{cancellation ? "▲" : "▼"}</span>
          </div>

          {cancellation && (
            <div>
              <p className="mb-5 text-main-brand text-md text-[18px]">
                NO REFUND SHALL BE MADE WITH RESPECT TO THE INITIAL BOOKING AMOUNT FOR ANY CANCELLATIONS.
              </p>

              <ul className="list-none flex flex-col gap-5 text-[18px]">
                {data.cancellation.map((elem, i) => (
                  <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                    <img src={dot} width={30} alt="dot" className="dot" />
                    {elem}
                  </li>
                ))}
              </ul>

              <p className="text-main-brand mt-4 text-[18px]">
                PLEASE NOTE: FOR CUSTOMISED AND INTERNATIONAL TRIPS, CONNECT WITH POC IN ORDER TO GET EXACT CANCELLATION / RESCHEDULING
                CHARGES.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Policies;
