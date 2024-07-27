import { useState, useEffect } from "react";
import dot from "../../assets/dot.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function KnowBeforeYouGoDomestic() {
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
                <img src={dot} width={5} alt="dot" />
                ID Proof: Valid ID proof is mandatory for each guest at booking
                and upon arrival. Note that PAN cards are not accepted as valid
                address proof.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={5} alt="dot" />
                Hotel Availability: Accommodation is subject to availability. If
                your preferred hotel is unavailable, you will be accommodated in
                a property of similar standard.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={5} alt="dot" />
                Environment: Please help keep our destinations beautiful by not
                littering and maintaining cleanliness.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={5} alt="dot" />
                Damage Policy: Any breakage or damage to items in the resort
                will be charged at actual costs.
              </li>
              <li className="flex gap-4 text-[18px] leading-[25.5px] list-disc">
                <img src={dot} width={5} alt="dot" />
                Trip Alterations: If you choose to leave the trip midway, all
                subsequent expenses will be your responsibility. SNOWTAIL
                ESCAPES will not be liable for such decisions or any refunds.
              </li>
            </ul>

            <p className="text-main-brand mt-4">
              Enjoy your journey with SNOWTAIL ESCAPES!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
