import React, { useState, useEffect } from "react";
import Tabs from "../components/Tabs";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime(); // Set initial time
    const timer = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-teal-50 p-10 flex flex-col justify-center">
        <div className="flex items-center mb-10">
          <img
            src="images/logo.png"
            alt="Eye checkup"
            className="mr-3 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />
          <span className="text-teal-700 font-bold text-xl">eye checkup</span>
        </div>
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="mt-6">
          {activeTab === "login" && <LoginForm />}
          {activeTab === "signup" && <SignupForm />}
        </div>
      </div>
      <div
        className="flex-1 bg-cover bg-center flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: `url('images/glasses.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Background Overlay */}
        <div className="relative text-xl mb-3 text-shadow-lg">Good Morning</div>
        <div className="relative text-5xl font-bold mb-3 text-shadow-lg">
          {currentTime}
        </div>
        <div className="relative text-lg italic text-shadow-lg">
          "Beauty perishes in life, but is immortal in art."
        </div>
      </div>
    </div>
  );
};

export default MainPage;
