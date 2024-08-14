import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import trip from "../../assets/trip.webp";
import time from "../../assets/time.webp";
import guide from "../../assets/guide.png";
import logo from "../../../public/logo/23.svg";

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


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isd, setISD] = useState("");
  // const [date, setDate] = useState("");
  // const [flexibleYes, setFlexibleYes] = useState(false);
  // const [flexibleNo, setFlexibleNo] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const emailData = {
      name,
      email,
      phone,
      isd,
      message
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/send-email`,
        emailData
      );

      if (response.status === 200) {
        toast.success("Message Sent");
        resetForm();
      } else {
        toast.error("Message not sent");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setISD("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <h1 className="march text-center text-[30px] mt-32">Contact Us for any queries</h1>
      <contact className="flex justify-center mt-10 rounded-md">
      <div
        className="flex flex-col md:flex-row items-stretch h-full"
        id="contact"
      >
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
        <div className="flex flex-col p-5 bg-main-brand text-white w-full gap-4 rounded-xl">
          <div className="flex justify-center">
            <img src={logo} width={200} height={20} alt="Snowtail Escapes" />
          </div>
          <div className="card bg-base-100 h-fit flex align-middle shadow-md shadow-white mb-4">
            <div className="card-body text-center">
              <div className="flex flex-col items-center gap-1">
                <img src={trip} width={30} alt="Customized Trips" />
                <p className="font-bold text-black text-nowrap">
                  100% Customised Trips
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={guide} width={20} alt="Visa Success" />
                <p className="font-bold text-black">Best Ground Assistance</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={time} width={30} alt="Coverage" />
                <p className="font-bold text-black">
                  Great Customer Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
            className="md:p-4 p-2 bg-white flex flex-col items-center justify-center w-full"
            style={{ fontSize: "13px" }}
          >
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-2 w-full "
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
              <div className="flex flex-row gap-2 items-center">
                <select
                  className="select select-primary w-2/6"
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
                  className="input input-bordered input-primary w-4/6"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered input-primary w-full"
              />
              <textarea
                type="text"
                cols={10}
                rows={5}
                placeholder="Send us a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-bordered textarea-primary w-full"
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
      </contact>
     
      {/* <Contact2/> */}
      <map className="md:w-full p-5 mt-2 flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10847.810807511534!2d75.77499349146119!3d26.865602048464144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53b551d5935%3A0x1b4e0a038fcb6fdd!2sSnowtail%20Escapes!5e0!3m2!1sen!2sin!4v1723585744388!5m2!1sen!2sin" width={1380} height={450} allowFullscreen="" loading="lazy"
          className="border border-black1 rounded-xl"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </map>

      <Footer />
    </>
  );
};

export default Contact;
