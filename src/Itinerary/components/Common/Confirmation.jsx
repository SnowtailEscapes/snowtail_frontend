import { useState } from "react";
import dot from "../../assets/dot.svg";

export default function Confirmation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="text-[18px] leading-[25.5px] bg-[rgb(255,255,255)] p-5 mt-8 rounded-lg shadow-[0_-4px_-5px_14px_rgba(0,0,0,0.08),0_5px_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-5"
    >
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleCollapse}>
        <h3 className="text-[20px] font-medium leading-[28.8px] mb-5 pb-2 min-w-fit">
          CONFIRMATION POLICY
        </h3>
        <span className="text-[20px]">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {isOpen && (
        <div>
          <p>
            To finalize your trip, complete payment must be received before the
            date of the journey. The initial booking amount should be paid in
            advance according to the following terms:
          </p>

          <ul className="list-none flex flex-col gap-5 mt-5">
            <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
              <img src={dot} width={30} alt="dot" />
              50% Advance at the time of booking.
            </li>
            <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
              <img src={dot} width={30} alt="dot" />
              Remaining 50% before 10 days of the travel date for Domestic Tours
              & 50% before 15 days of the travel date for International Tours.
            </li>
            <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
              <img src={dot} width={30} alt="dot" />
              Modification charges at the time of modification.
            </li>
            <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
              <img src={dot} width={30} alt="dot" />
              For FLIGHTS, 100% payment at the time of booking.
            </li>
          </ul>

          <p className="text-main-brand mt-4">
            PLEASE NOTE: FOR CUSTOMIZED AND HOTEL-SPECIFIC TOURS, CONNECT WITH
            YOUR POC TO GET EXACT CANCELLATION/RESCHEDULING CHARGES.
          </p>
        </div>
      )}
    </div>
  );
}
