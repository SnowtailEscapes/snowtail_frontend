import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Logo from "../assets/newLogo.webp";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="rounded-md pt-12 min-h-max mb-5 items-center flex flex-col">
        <h1 className="text-2xl md:text-3xl text-center border-b-2 w-fit ">
          About Us
        </h1>
        <div className=" flex flex-col">
          <div className="flex justify-evenly items-center p-10">
            <h4 className="align-middle text-3xl md:text-5xl sofia  text-main-brand">
              Experience The Travel with
            </h4>
            <img
              width={200}
              height={200}
              src={Logo}
              style={{ backgroundColor: "transparent" }}
              alt="Logo"
            ></img>
          </div>

          <div className="flex flex-col bg-green-100 p-10 items-center gap-4">
            <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit">
              OUR MISSION
            </h6>
            <p className="text-sm w-full md:w-4/5">
              Our mission is to inspire and empower travelers to explore the
              world responsibly, creating unforgettable experiences that promote
              cultural understanding, environmental conservation, and
              sustainable tourism practices. We need people to understand
              importance of responsible travel, cultural appreciation, and
              environmental sustainability. It sets a clear direction for our
              company and shows our commitment to making a positive impact on
              both travelers and the destinations they visit.
              <br />
              <br />
              Continuing legacy of 25 years Snowtail Escapes, is dedicated to
              creating unforgettable travel experiences tailored to your
              desires. Specializing in premium and bespoke travel packages, we
              offer curated itineraries that span exotic destinations and
              thrilling adventures. Our services include scenic road trips,
              invigorating trekking expeditions, exclusive corporate retreats,
              and personalized tours designed to suit your unique interests and
              budget. With Snowtail Escapes, you’ll enjoy seamless travel,
              luxurious accommodations, and expert-guided tours, all crafted to
              provide a hassle-free and memorable journey. Embark on your next
              adventure with us and discover the world like never before.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
