import React from 'react';

const NavigationButtons = ({ onSkip, onNext, onBack, step }) => {
  return (
    <div className="flex justify-between mt-8 w-full max-w-md">
      <button onClick={onSkip} className="text-gray-500 hover:underline">Skip</button>
      {step === 2 ? <button onClick={onBack} className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Back</button> : null}
      <button onClick={onNext} className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Next</button>
    </div>
  );
};

export default NavigationButtons;
