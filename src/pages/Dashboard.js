import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import HomeImg from "../assets/icons/homeImg.png";
import { FaChevronDown } from "react-icons/fa";
import GoogleReview from "../assets/icons/googleReview.png";
import LoyaltyCard from "../assets/icons/loyaltyCard.png";
import Coops1 from "../assets/icons/freecoopons.png";
import Coops2 from "../assets/icons/freeCops2.png";
import Coops3 from "../assets/icons/freecops3.png";

import Img1 from "../assets/icons/img1.png";
import Img2 from "../assets/icons/img2.png";
import Img3 from "../assets/icons/img3.png";
import CustomButton from "../components/custom/CustomButton";

import OpenBtn from "../assets/icons/openingBtn.png";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText =
    "Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef ";
  const fullText =
    "Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef ";
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to show/hide opening hours
  const toggleOpenHours = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <OnboardHeader />
      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100vw",
          height: "3px",
          padding: "0",
          boxSizing: "border-box",
          marginTop: "20px",
        }}
      />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {isOpen && (
          <ul
            style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}
          >
            <li>Monday: 8:00 - 17:00</li>
            <li>Tuesday: 8:00 - 17:00</li>
            <li>Wednesday: 8:00 - 17:00</li>
            <li>Thursday: 8:00 - 17:00</li>
            <li>Friday: 8:00 - 17:00</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        )}
        {isOpen && (
          <div
            style={{
              backgroundColor: "#E0E0E0",
              height: "3px",
              padding: "0",
              boxSizing: "border-box",
              width: "100%",
            }}
          />
        )}
        <img
          src={OpenBtn}
          style={{ objectFit: "contain" }}
          onClick={toggleOpenHours}
          alt="open btn"
        />
      </div>
      <div>
        <img src={HomeImg} alt="homeImg" style={{ objectFit: "contain" }} />
      </div>

      <div style={{ textAlign: "left", margin: "0 auto", width: "90%" }}>
        <span style={{ fontSize: 20, fontWeight: "bold" }}>About</span>

        <div>
          <p>
            {isExpanded ? fullText : `${shortText}...`}{" "}
            <span
              onClick={handleToggle}
              style={{
                color: "#007bff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isExpanded ? "Read less" : "Read more"}
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>EXPLORE OUR COUPONS</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px", // Optional: Add padding to the container
            borderRadius: "10px", // Optional: Round corners of the container
            width: "80%", // Optional: Control the width of the image container
            alignItems: "center", // Center images horizontally
          }}
        >
          <img
            src={LoyaltyCard}
            alt="Coupon 1"
            style={{ objectFit: "contain" }}
          />
          <img src={Coops1} alt="Coupon 2" style={{ objectFit: "contain" }} />
          <img src={Coops2} alt="Coupon 3" style={{ objectFit: "contain" }} />
          <img src={Coops3} alt="Coupon 4" style={{ objectFit: "contain" }} />
        </div>
        <button
          onClick={() => alert("Show more clicked!")} // Implement your logic here
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#25026E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Show More
          <FaChevronDown style={{ marginLeft: "10px" }} />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Img1} alt="Coupon 2" style={{ objectFit: "contain" }} />
        <img src={Img2} alt="Coupon 3" style={{ objectFit: "contain" }} />
        <img src={Img3} alt="Coupon 4" style={{ objectFit: "contain" }} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={GoogleReview}
          alt="Star Pattern"
          className="start-img"
          style={{ width: "auto", height: "auto" }} // Adjust width and height as needed
        />
      </div>

      <CustomButton text="Leave a Review" onClick={{}} />
    </>
  );
};

export default Dashboard;
