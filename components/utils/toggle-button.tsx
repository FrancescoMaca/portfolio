import React, { useState } from 'react';

interface ToggleButtonProps {
  initialState?: boolean;
  onChange?: (isChecked: boolean) => void;
  label?: string;
}

export function ToggleButton({ initialState = false, onChange, label }: ToggleButtonProps) {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`block w-14 h-6 rounded-full ${
            isChecked ? 'bg-accent' : 'bg-hover-dark'
          } transition-colors duration-300 ease-in-out`}
        ></div>
        <div
          className={`absolute left-1 top-1 bg-text-normal w-6 h-4 rounded-full transition-transform duration-300 ease-in-out ${
            isChecked ? 'transform translate-x-full' : ''
          }`}
        ></div>
      </div>
      {label && <span className="ml-3 text-text-normal">{label}</span>}
    </label>
  );
};