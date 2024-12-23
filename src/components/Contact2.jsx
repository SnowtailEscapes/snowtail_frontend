import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import trip from "../assets/trip.webp";
import time from "../assets/time.webp";
import guide from "../assets/guide.png";
import logo from "../../public/logo/23.svg";

const countryCodes = [
  "+91",
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+211",
  "+212",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+355",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+379",
  "+380",
  "+381",
  "+382",
  "+383",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+590",
  "+591",
  "+592",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+870",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998",
  "other",
];

const customStyles = {
  content: {
    top: "57%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "auto",
    maxWidth: "50vw",
    maxHeight: "100vh",
    fontSize: "13px",
    display: "flex",
    flexDirection: "row",
    zIndex: "20",
    borderRadius: "1rem",
    overflow: "auto",
  },
  mobileContent: {
    width: "80vw",
    maxWidth: "80vw",
    height: "80vh",
    maxHeight: "100vh",
    fontSize: "11px",
    flexDirection: "column",
    borderRadius: "1rem",
    position: "fixed", // Keep the form fixed
    top: "55%", // Center vertically
    left: "50%", // Center horizontally
    transform: "translate(-50%, -50%)", // Center using translate
    padding: "0",
  },
};
// Function to get the correct style based on the window width
const getStyles = () => {
  const isMobile = window.innerWidth <= 768;
  return isMobile
    ? { ...customStyles.content, ...customStyles.mobileContent }
    : customStyles.content;
};

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function Contact2() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [styles, setStyles] = useState(getStyles());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isd, setISD] = useState("");
  const [date, setDate] = useState("");
  const [flexibleYes, setFlexibleYes] = useState(false);
  const [flexibleNo, setFlexibleNo] = useState(false);
  const [passengers, setPassengers] = useState("");
  const [screenSize, setScreenSize] = useState("large");

  const handleSuccess =() => {
    redirect('./success')
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1000) {
        setScreenSize("tablet");
      } else {
        setScreenSize("large");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true); // Open modal every 100 seconds
    }, 300000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailData = {
      name,
      email,
      phone,
      isd,
      flexibleYes,
      flexibleNo,
      passengers,
      date,
    };

    const emailPromise = axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/send-email`,
      emailData
    );

    toast.promise(
      emailPromise,
      {
        pending: 'Sending your message...',
        success: 'Message Sent Successfully 😀',
        error: 'Sorry, message not sent 😥',
      },
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

    try {
      await emailPromise;
      setIsOpen(false);
      onClose(); // Close modal on successful submission
      resetForm();
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setISD("");
    setDate("");
    setFlexibleYes(false);
    setFlexibleNo(false);
    setPassengers("");
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{ content: styles }}
        contentLabel="Contact Form Modal"
        className="fixed"
      >
        <div className="flex flex-col md:flex-row items-stretch w-full h-full">
          <div className="flex flex-col p-5 bg-main-brand text-white md:w-1/3 w-full gap-4">
            <button onClick={() => setIsOpen(false)} className="btn bg-main-brand">
              <p className="font-bold text-sm">X</p>
            </button>
            <div className="flex justify-center">
              <img src={logo} width={200} height={20} alt="Snowtail Escapes" />
            </div>
            <div className="card bg-base-100 h-fit flex align-middle shadow-md shadow-white mb-4">
              {
                screenSize === "mobile" && (
                  <>

                  </>
                )
              }
              {
                screenSize === "large" || screenSize === "tablet" ? (
                  <>
                    <div className="card-body text-center">
                      <div className="flex flex-col items-center gap-1">
                        <img src={trip} width={30} alt="Customized Trips" />
                        <p className="font-bold text-black text-nowrap">
                          100% Customised Trips
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={guide} width={20} alt="Visa Success" />
                        <p className="font-bold text-black">Best Groun Assistance</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={time} width={30} alt="Coverage" />
                        <p className="font-bold text-black">
                          Great Customer Experience
                        </p>
                      </div>
                    </div>
                  </> 
                ):
                  (
                    <></>
                  )
                }

            </div>
          </div>
          <div
            className="md:p-4 p-2 bg-white flex flex-col items-center justify-center md:w-2/3 w-full"
            style={{ fontSize: "13px" }}
          >
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-2 w-full max-w-md"
            >
              <h1 className="text-center mb-2">
                Have a question? Enter your details.
              </h1>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered input-primary w-full"
              />
              <div className="flex flex-col gap-2 items-center">
                <select
                  className="select select-primary w-full"
                  value={isd}
                  onChange={(e) => setISD(e.target.value)}
                >
                  <option disabled selected>
                    ISD
                  </option>
                  {countryCodes.map((code, index) => (
                    <option key={index} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile number"
                  className="input input-bordered input-primary w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered input-primary w-full"
              />
              <label>Travel Date?</label>
              <input
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input input-bordered input-primary w-full"
              />
              <div className="flex flex-row justify-between items-center">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="flexible"
                    checked={flexibleYes}
                    onChange={() => {
                      setFlexibleYes(true);
                      setFlexibleNo(false);
                    }}
                  />
                  <span className="ml-1">Flexible with date</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="flexible"
                    checked={flexibleNo}
                    onChange={() => {
                      setFlexibleYes(false);
                      setFlexibleNo(true);
                    }}
                  />
                  <span className="ml-1">Not Flexible with date</span>
                </label>
              </div>
              <input
                type="text"
                placeholder="Number of Passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="input input-bordered input-primary w-full"
              />
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
              <p className="text-main-brand text-[13px]">
                You would get a callback from an expert.
                <br />
                We dont share your data with other parties
              </p>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

// Contact2.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   accomodation: PropTypes.string.isRequired,
// };
