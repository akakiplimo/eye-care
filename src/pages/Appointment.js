import React, { useState } from 'react';
import AppointmentHeader from '../components/AppointmentHeader';
import SelectionOption from '../components/SelectionOption';
import NavigationButtons from '../components/NavigationButtons';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ gender: '', type: '' });
  const navigate = useNavigate()

  const handleGenderSelection = (gender) => {
    setSelection((prevState) => ({ ...prevState, gender }));
    setStep(2);
  };

  const handleTypeSelection = (type) => {
    setSelection((prevState) => ({ ...prevState, type }));
    // Navigate to the product filter page or next step
    navigate('/shop')
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4 sm:p-8">
      <AppointmentHeader />

      {step === 1 && (
        <div className="flex space-x-4">
          <SelectionOption icon="images/man.png" label="Men" onClick={() => handleGenderSelection('Men')} />
          <SelectionOption icon="images/woman.png" label="Women" onClick={() => handleGenderSelection('Women')} />
          <SelectionOption icon="images/children.png" label="Kids" onClick={() => handleGenderSelection('Kids')} />
        </div>
      )}

      {step === 2 && (
        <div className="flex space-x-4">
          <SelectionOption icon="images/eyeglasses.png" label="Glasses" onClick={() => handleTypeSelection('Glasses')} />
          <SelectionOption icon="images/sun-glasses.png" label="Sunglasses" onClick={() => handleTypeSelection('Sunglasses')} />
        </div>
      )}

      <NavigationButtons
        onSkip={() => navigate('/shop')}
        step={step}
        onBack={() => step === 2 ? setStep(1) : null}
        onNext={() => step === 1 ? setStep(2) : navigate('/shop')}
      />
    </div>
  );
};

export default Appointment;
