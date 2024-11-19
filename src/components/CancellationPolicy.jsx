import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CancellationPolicy() {
  return (
    <>
      <Navbar />
      <div className="rounded-md pt-16 min-h-max mb-5 items-center flex flex-col">
        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-3xl md:text-5xl text-center border-b-4 w-fit text-nowrap mb-4">
            CANCELLATION POLICY
          </h6>
          <p className="text-sm w-full md:w-4/5">
            NO REFUND SHALL BE MADE WITH RESPECT TO THE INITIAL BOOKING AMOUNT FOR
            ANY CANCELLATIONS.
          </p>
        </div>

        <div className="flex flex-col bg-green-100 md:p-10 p-5 items-center gap-4">
          <p className="text-sm w-full md:w-5/5">
            <ul className="text-sm w-full md:w-5/5">
              <li className="list-disc">
                If cancellations are made 30 days before the start date of the trip,
                50% of the trip cost will be charged as cancellation fees.If
                cancellations are made 15-30 days before the start date of the trip,
                75% of the trip cost will be charged as cancellation fees.
              </li>
              <li className="list-disc">
                If cancellations are made within 0-15 days before the start date of
                the trip, 100% of the trip cost will be charged as cancellation
                fees.
              </li>
              <li className="list-disc">
                In the case of unforeseen weather conditions or government
                restrictions, certain activities may be canceled. In such cases, the
                operator will try his best to provide an alternate feasible
                activity. However, no refund will be provided for the same.
              </li>
              <li className="list-disc">
                If a rescheduling date request comes within 30 days from the trip
                date, the booking amount can neither be adjusted to your next date
                nor refunded.
              </li>
              <li className="list-disc">
                If a rescheduling date request comes prior to 30 days, it can be
                done without any cancellation charges in the case of domestic trips.
              </li>
              <li className="list-disc">
                Flights: No refund will be provided for flights unless booked under
                specific cancellation or rescheduling conditions than concerned POC
                will update the charges before confirming the booking.
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5  items-center gap-4">
          <p className="text-sm w-full md:w-4/5">
            PLEASE NOTE: FOR CUSTOMISED AND INTERNATIONAL TRIPS, CONNECT WITH POC
            IN ORDER TO GET EXACT CANCELLATION / RESCHEDULING CHARGES.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
