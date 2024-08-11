import React from "react";

const SignupForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create an account</h2>
      <p className="mb-6">Sign in with this account across the following sites.</p>
      <input
        type="text"
        placeholder="Enter Name"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="text"
        placeholder="Enter Mobile No"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        required
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        required
      />
      <button className="w-full bg-teal-700 text-white py-3 rounded-lg">
        Create Account
      </button>
    </div>
  );
};

export default SignupForm;
