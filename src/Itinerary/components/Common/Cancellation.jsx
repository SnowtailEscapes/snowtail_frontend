import { useState, useEffect } from "react";
import dot from "../../assets/dot.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Cancellation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="text-[18px] leading-[25.5px] bg-[rgb(255,255,255)] p-5 mt-8 rounded-lg shadow-[0_-4px_-5px_14px_rgba(0,0,0,0.08),0_5px_8px_16px_rgba(0,0,0,0.08)] flex flex-col gap-5"
      >
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleCollapse}>
          <h3 className="text-[20px] font-medium leading-[28.8px] mb-5 pb-2 min-w-fit">
            CANCELLATION POLICY
          </h3>
          <span className="text-[20px]">
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        {isOpen && (
          <div>
            <p className="mb-5 text-main-brand text-md">
              NO REFUND SHALL BE MADE WITH RESPECT TO THE INITIAL BOOKING AMOUNT FOR
              ANY CANCELLATIONS.
            </p>

            <ul className="list-none flex flex-col gap-5">
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" />
                If cancellations are made 30 days before the start date of the trip,
                50% of the trip cost will be charged as cancellation fees.If
                cancellations are made 15-30 days before the start date of the trip,
                75% of the trip cost will be charged as cancellation fees.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" />
                If cancellations are made within 0-15 days before the start date of
                the trip, 100% of the trip cost will be charged as cancellation
                fees.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" />
                In the case of unforeseen weather conditions or government
                restrictions, certain activities may be canceled. In such cases, the
                operator will try his best to provide an alternate feasible
                activity. However, no refund will be provided for the same.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" />
                If a rescheduling date request comes within 30 days from the trip
                date, the booking amount can neither be adjusted to your next date
                nor refunded.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" />
                If a rescheduling date request comes prior to 30 days, it can be
                done without any cancellation charges in the case of domestic trips.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={30} alt="dot" />
                Flights: No refund will be provided for flights unless booked under
                specific cancellation or rescheduling conditions than concerned POC
                will update the charges before confirming the booking.
              </li>
            </ul>

            <p className="text-main-brand mt-4">
              PLEASE NOTE: FOR CUSTOMISED AND INTERNATIONAL TRIPS, CONNECT WITH POC
              IN ORDER TO GET EXACT CANCELLATION / RESCHEDULING CHARGES.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
