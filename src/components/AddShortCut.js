import React, { useEffect } from "react";

import AddToCardImg from "../assets/icons/addToHome.png";
import AddToCardButton from "../assets/icons/button.png";
import { IoIosCloseCircle } from "react-icons/io";

const AddShortCut = ({ isModalOpen, setIsModalOpen, handleInstallClick }) => {
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "93%",
            }}
          >
            <h4 style={{ color: "#000000", fontSize: "20px" }}>
              Already registered
            </h4>
            <IoIosCloseCircle
              color={"#2A0181"}
              size={30}
              onClick={closeModal}
              style={{
                position: "absolute",
                right: 15,
                cursor: "pointer",
                marginTop: -50,
              }}
            />

            <img
              src={AddToCardImg}
              alt="Start Pattern"
              style={{ width: "auto", height: "auto" }}
            />

            <img
              src={AddToCardButton}
              alt="Start Pattern"
              style={{ width: "auto", height: "auto", marginTop: 20 }}
              onClick={handleInstallClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddShortCut;
