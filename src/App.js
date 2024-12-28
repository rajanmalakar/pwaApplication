// import React from "react";

// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignupPage from "./pages/SignupPage";
// import Dashboard from "./pages/Dashboard";
// import ContactFaq from "./pages/Contact&Faq";
// import MyPage from "./pages/MyPage";
// import TermCondn from "./pages/Term&Condn";
// import AboutService from "./pages/AboutService";
// import MyProfile from "./pages/MyProfile";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/contactFaq" element={<ContactFaq />} />
//         <Route path="/mypage" element={<MyPage />} />
//         <Route path="/termCondn" element={<TermCondn />} />
//         <Route path="/aboutService" element={<AboutService />} />
//         <Route path="/myprofile" element={<MyProfile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
//

//



import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ContactFaq from "./pages/Contact&Faq";
import MyPage from "./pages/MyPage";
import TermCondn from "./pages/Term&Condn";
import AboutService from "./pages/AboutService";
import MyProfile from "./pages/MyProfile";

function App() {
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkDeviceType = () => {
      const isMobileDevice = window.innerWidth <= 768; // Example breakpoint for mobile
      setIsMobile(isMobileDevice);
    };

    // Initial check on component mount
    checkDeviceType();

    // Listen for window resize to update the device type
    window.addEventListener("resize", checkDeviceType);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Show the message for desktop users */}
        {!isMobile && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#2A0181", // Background color
              color: "white",
              textAlign: "center",
              fontSize: "1.5em",
              paddingTop: "20%",
              zIndex: 1000, // Ensure the message appears on top
            }}
          >
            This app is best viewed on a mobile device. Please use mobile.
          </div>
        )}

        {/* Your Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactFaq" element={<ContactFaq />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/termCondn" element={<TermCondn />} />
          <Route path="/aboutService" element={<AboutService />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
