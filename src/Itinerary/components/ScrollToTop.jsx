import React, { useState, useEffect } from "react";
import "../styles/scroll.css";

const ScrollToSectionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`scroll-to-section-button ${isVisible ? "show" : ""}`}
      onClick={() => scrollToSection("price")}
      title="Go to Price Section"
    >
      Checkout Prices
    </button>
  );
};

export default ScrollToSectionButton;
