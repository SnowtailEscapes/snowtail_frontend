import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      message: message,
    };

    const emailPromise = axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/send-email`,
      emailData
    );

    toast.promise(
      emailPromise,
      {
        pending: "Sending your message...",
        success: "Message Sent Successfully 😀",
        error: "Sorry, message not sent 😥",
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
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="march text-center text-[30px] mt-32">Contact Us for any queries</h1>
      <div
        className="contact-us max-w-md mx-auto mt-2 p-6 bg-white rounded-lg shadow-red-500 shadow-lg mb-10"
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
        <form onSubmit={sendEmail} className="contact-form space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="user_phone"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Send"
              className="w-full cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
