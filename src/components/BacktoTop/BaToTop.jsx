import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    // Check if window is defined before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }

    return () => {
      // Remove the event listener when the component is unmounted
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisible);
      }
    };
  }, []);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        className="bg-white rounded-full"
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;
