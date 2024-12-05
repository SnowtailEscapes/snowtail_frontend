import newlogo4 from "../../public/NewLogos/4.svg";
import rajasthan from "../Itinerary/assets/rajasthan.png";
import { itinerary, overview } from "./htmlData";

export const ToursData = [
  {
    id: "Rajasthan",
    helmet: {
      title: "Rajasthan Tour",
      description:
        "Explore the majestic beauty of Rajasthan with our exclusive tours. Discover the rich cultural heritage of Jaipur, the stunning palaces of Udaipur, the vibrant markets of Jodhpur, the golden sands of Jaisalmer, the serene lakes of Pushkar, and the wildlife of Ranthambore. Book your Rajasthan tour now for an unforgettable experience!",
      icon: newlogo4,
    },
    itineraryImage: {
      small: "/images/card/rajasthan.webp",
      large: "/Domestic/rajasthan1.webp",
    },
    tourData: {
      leftSide: {
        overview: {
          place: "JAIPUR, PUSHKAR, JODHPUR, UDAIPUR",
          title: "The Incredible Gateway Rajasthan",
          location: "Rajasthan",
          time: "7N/8D",
          rating: 4.8,
          reviews: 405,
          image: rajasthan,
          description: overview.Rajasthan,
        },
        itinerary: itinerary.Rajasthan,
        inclusions: [
          "Transfers: Pvt Airport/Railway Station Pick up and drop as per your flight timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary.",
          "Accommodation: 1N Jaipur, 2N Jodhpur, 1N Jaisalmer, 1N Sam, 2N Udaipur.",
          "Meals: Breakfast at Selected hotels.",
          "Guide: Professional driver cum guide to help you explore this beautiful city",
        ],
        exclusions: [
          "Cost of Emergency, Covid Report, Insurance And Other Covid Related Expenses",
          "Any Personal expenses.",
          "GST & (TCS - Claimable after the tour)",
          "Any Airfare/Railway Tickets",
          "Lunch / Any transfer / Meals that are not mentioned in the itinerary",
          "Anything not mentioned in the inclusions list above",
        ],
        mapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7126872.152351839!2d68.58762353204355!3d27.043981428419688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1717780829734!5m2!1sen!2sin",
        beforeYouGo: [
          "ID Proof: Valid ID proof is mandatory for each guest at booking and upon arrival. Note that PAN cards are not accepted as valid address proof.",
          "Hotel Availability: Accommodation is subject to availability. If your preferred hotel is unavailable, you will be accommodated in a property of similar standard.",
          "Environment: Please help keep our destinations beautiful by not littering and maintaining cleanliness.",
          "Damage Policy: Any breakage or damage to items in the resort will be charged at actual costs.",
          "Trip Alterations: If you choose to leave the trip midway, all subsequent expenses will be your responsibility. SNOWTAIL ESCAPES will not be liable for such decisions or any refunds.",
        ],
        confirmation: [
          "50% Advance at the time of booking.",
          "Remaining 50% before 10 days of the travel date for Domestic Tours & 50% before 15 days of the travel date for International Tours.",
          "Modification charges at the time of modification.",
          "For FLIGHTS, 100% payment at the time of booking.",
        ],
        cancellation: [
          "If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.",
          "If cancellations are made within 0-15 days before the start date of the trip, 100% of the trip cost will be charged as cancellation fees.",
          "In the case of unforeseen weather conditions or government restrictions, certain activities may be canceled. In such cases, the operator will try his best to provide an alternate feasible activity. However, no refund will be provided for the same.",
          "If a rescheduling date request comes within 30 days from the trip date, the booking amount can neither be adjusted to your next date nor refunded.",
          "If a rescheduling date request comes prior to 30 days, it can be done without any cancellation charges in the case of domestic trips.",
          "Flights: No refund will be provided for flights unless booked under specific cancellation or rescheduling conditions than concerned POC will update the charges before confirming the booking.",
        ],
      },
      rightSide: {
        packages: {
          "Standard Package": {
            from: "01 Feb 2022",
            till: "15 Feb 2025",
            details: [
              "Buffet breakfast as per the Itinerary",
              "3 star hygienic accommodations",
              "Sightseeing as mentioned",
              "All Transfers as mentioned",
              "Inclusions & Exclusions as mentioned",
            ],
            cutPrice: 48150,
            currentPrice: 34399,
          },
          "Deluxe Package": {
            from: "01 Feb 2022",
            till: "15 Feb 2025",
            details: [
              "Buffet breakfast as per the Itinerary",
              "4 star hygienic accommodations",
              "Sightseeing as mentioned",
              "All Transfers as mentioned",
              "Inclusions & Exclusions as mentioned",
            ],
            cutPrice: 55998,
            currentPrice: 39999,
          },
          "Super Deluxe Package": {
            from: "01 Feb 2022",
            till: "15 Feb 2025",
            details: [
              "Buffet breakfast as per the Itinerary",
              "5 star hygienic accommodations",
              "Sightseeing as mentioned",
              "All Transfers as mentioned",
              "Inclusions & Exclusions as mentioned",
            ],
            cutPrice: 73900,
            currentPrice: 52799,
          },
        },
        whyChooseUs: [
          "Expertly crafted itinerary blending cultural immersion with adventure",
          "Luxurious accommodations and comfortable transportation throughout",
          "Experienced guides providing insights into Thailand's history and heritage",
          "Seamless travel arrangements, ensuring a stress-free and memorable journey",
        ],
      },
    },
  },
  {
    id: "Rajasthan4n5d",
    helmet: {
      title: "Rajasthan Tour",
      description:
        "Explore the majestic beauty of Rajasthan with our exclusive tours. Discover the rich cultural heritage of Jaipur, the stunning palaces of Udaipur, the vibrant markets of Jodhpur, the golden sands of Jaisalmer, the serene lakes of Pushkar, and the wildlife of Ranthambore. Book your Rajasthan tour now for an unforgettable experience!",
      icon: newlogo4,
    },
    itineraryImage: {
      small: "images/card/rj2.webp",
      large: "/Domestic/rajasthan2.webp",
    },
    tourData: {
      leftSide: {
        overview: {
          place: "JAIPUR, UDAIPUR, KUMBHALGARH",
          title: "Journey Of majesty",
          location: "Rajasthan",
          time: "4N/5D",
          rating: 4.8,
          reviews: 405,
          image: rajasthan,
          description: overview["Rajasthan4n5d"],
        },
        itinerary: itinerary["Rajasthan4n5d"],
        inclusions: [
          "Transfers: Pvt Airport/Railway Station Pick up and drop as per your flight timings & Comfortable and hygienic vehicle for sightseeing on all days as per the itinerary.",
          "Accommodation: 1N Jaipur, 2N Udaipur, 1N Kumbhalgarh",
          "Meals: 4 Breakfast at selected hotels",
          "Chauffer: Experienced driver to help you explore this beautiful city.",
          `Sightseeing & Activities:- (without ticket)
          Jaipur Sightseeing:- Amber Fort, Jal Mahal, Jantar Mantar, Hawa Mahal
          Chittorgarh Sightseeing:- Chittorgarh Fort"
          Udaipur Sightseeing:- Lake Pichola, Fateh Sagar Lake, Maharana Pratap Memorial, Sehelion-KI-Bari, City Palace.
          Kumbhalgarh:- Kumbhalgarh Fort`,
        ],
        exclusions: [
          "Tax",
          "Any Personal expenses like Tips, laundry, entry to monuments/ monasteries, Telephone bills etc.",
          "Insurance",
          "GST is Applicable.",
          "Any Airfare",
          "Lunch / Any transfer / Meals that are not mentioned in the itinerary",
          "Anything not mentioned in the inclusions list above",
        ],
        mapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4930928.876481141!2d68.93366442884484!3d26.660916412844987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1717992385982!5m2!1sen!2sin",
        beforeYouGo: [
          "ID Proof: Valid ID proof is mandatory for each guest at booking and upon arrival. Note that PAN cards are not accepted as valid address proof.",
          "Hotel Availability: Accommodation is subject to availability. If your preferred hotel is unavailable, you will be accommodated in a property of similar standard.",
          "Environment: Please help keep our destinations beautiful by not littering and maintaining cleanliness.",
          "Damage Policy: Any breakage or damage to items in the resort will be charged at actual costs.",
          "Trip Alterations: If you choose to leave the trip midway, all subsequent expenses will be your responsibility. SNOWTAIL ESCAPES will not be liable for such decisions or any refunds.",
        ],
        confirmation: [
          "50% Advance at the time of booking.",
          "Remaining 50% before 10 days of the travel date for Domestic Tours & 50% before 15 days of the travel date for International Tours.",
          "Modification charges at the time of modification.",
          "For FLIGHTS, 100% payment at the time of booking.",
        ],
        cancellation: [
          "If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.",
          "If cancellations are made within 0-15 days before the start date of the trip, 100% of the trip cost will be charged as cancellation fees.",
          "In the case of unforeseen weather conditions or government restrictions, certain activities may be canceled. In such cases, the operator will try his best to provide an alternate feasible activity. However, no refund will be provided for the same.",
          "If a rescheduling date request comes within 30 days from the trip date, the booking amount can neither be adjusted to your next date nor refunded.",
          "If a rescheduling date request comes prior to 30 days, it can be done without any cancellation charges in the case of domestic trips.",
          "Flights: No refund will be provided for flights unless booked under specific cancellation or rescheduling conditions than concerned POC will update the charges before confirming the booking.",
        ],
      },
      rightSide: {
        packages: {
          "Standard Package": {
            from: "01 Feb 2022",
            till: "15 Feb 2025",
            details: [
              "Buffet breakfast as per the Itinerary",
              "3 star hygienic accommodations",
              "Sightseeing as mentioned",
              "All Transfers as mentioned",
              "Inclusions & Exclusions as mentioned",
            ],
            cutPrice: 25300,
            currentPrice: 19499,
          },
          "Deluxe Package": {
            from: "01 Feb 2022",
            till: "15 Feb 2025",
            details: [
              "Buffet breakfast as per the Itinerary",
              "4 star hygienic accommodations",
              "Sightseeing as mentioned",
              "All Transfers as mentioned",
              "Inclusions & Exclusions as mentioned",
            ],
            cutPrice: 33300,
            currentPrice: 23799,
          },
          "Super Deluxe Package": {
            from: "01 Feb 2022",
            till: "15 Feb 2025",
            details: [
              "Buffet breakfast as per the Itinerary",
              "5 star hygienic accommodations",
              "Sightseeing as mentioned",
              "All Transfers as mentioned",
              "Inclusions & Exclusions as mentioned",
            ],
            cutPrice: 47450,
            currentPrice: 33899,
          },
        },
        whyChooseUs: [
          "Expertly crafted itinerary blending cultural immersion with adventure",
          "Luxurious accommodations and comfortable transportation throughout",
          "Experienced guides providing insights into Thailand's history and heritage",
          "Seamless travel arrangements, ensuring a stress-free and memorable journey",
        ],
      },
    },
  },
];
