import React from 'react';

const AppointmentHeader = () => {
  return (
    <div className="mb-8 text-center">
      <img src="images/logo.png" alt="Eye Checkup Logo" className="mr-3 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
      <h1 className="text-3xl font-bold text-green-700">Customize your Experience</h1>
      <p className="mt-2 text-lg text-gray-700">For whom are you looking glasses?</p>
    </div>
  );
};

export default AppointmentHeader;
