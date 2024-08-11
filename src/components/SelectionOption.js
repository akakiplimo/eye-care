import React from 'react';

const SelectionOption = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:bg-green-50">
      <div className="p-4 bg-green-200 rounded-full">
        <img src={icon} alt={label} className="w-12 h-12" />
      </div>
      <span className="mt-4 text-lg font-medium text-gray-700">{label}</span>
    </button>
  );
};

export default SelectionOption;
