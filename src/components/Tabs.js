import React from "react";

const Tabs = ({activeTab, setActiveTab}) => {

  return (
    <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
      <button
        className={`${
          activeTab === "login" ? "bg-teal-700 text-white" : "bg-teal-200 text-teal-700"
        } flex-1 py-2 px-4 rounded-lg focus:outline-none`}
        onClick={() => setActiveTab("login")}
      >
        Log In
      </button>
      <button
        className={`${
          activeTab === "signup" ? "bg-teal-700 text-white" : "bg-teal-200 text-teal-700"
        } flex-1 py-2 px-4 rounded-lg focus:outline-none`}
        onClick={() => {
            console.log("signup")
            setActiveTab("signup")
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Tabs;
