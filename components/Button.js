// components/DynamicButton.js
'use client';  // Client-side component

import { useState } from 'react';

const Button = ({ label, color, disabled }) => {
  return (
    <button
      // onClick={handleClick}
      className={`py-3.5 px-5 text-white font-semibold rounded-lg shadow-button-box-shadow
        ${color === 'blue' ? 'bg-buttonbackground' : 'bg-buttonbackground'} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-buttonbackground'}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
