import React, { useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const OnboaringInfo = ({ isModalOpen, setIsModalOpen }) => {
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
              backgroundColor: "#2E0090",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "90%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                position: "relative",
              }}
            >
              <h2 style={{ color: "#FFFFFF" }}>Information</h2>
              <IoIosCloseCircle
                color={"white"}
                size={30}
                style={{
                  position: "absolute",
                  right: "5px",
                  cursor: "pointer",
                  top: "-10px",
                }}
                onClick={closeModal}
              />
            </div>
            <div style={{ textAlign: "left", padding: "0 20px" }}>
              <p style={{ color: "#FFFFFF", margin: "10px 0" }}>
                Welcome to your Tagis Wallet! Here you’ll find a quick overview
                of your collected rewards:
              </p>

              <p style={{ color: "#FFFFFF", margin: "10px 0" }}>
                Coupons: Your total active coupons are displayed here, ready to
                be redeemed anytime.
              </p>
              <p style={{ color: "#FFFFFF", margin: "10px 0" }}>
                Raffle Tickets: Each tap adds another ticket to our yearly and
                monthly raffles—boosting your chances to win exciting prizes!
              </p>
              <p style={{ color: "#FFFFFF", margin: "10px 0" }}>
                Remember to check back often for new coupons and to see your
                raffle ticket count grow with every tap!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnboaringInfo;
