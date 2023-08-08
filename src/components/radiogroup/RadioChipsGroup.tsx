"use client"
import React from "react";
import { twMerge } from "tailwind-merge";

interface RadioChipsGroupProps {
  label: string;
  name: string;
  value: number;
  options: { id: number; name: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioChipsGroup: React.FC<RadioChipsGroupProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) =>{
  
  return (
  
    <div className="mt-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex flex-wrap mt-2">
        {options.map((option) => (
          <label
            key={option.id}
            className={twMerge(`px-4 py-2 m-1 rounded-lg border cursor-pointer`, 
              value.toString() === option.id.toString()
                ? "bg-lightblue-500 text-white"
                : "bg-lightblue-200 text-lightblue-500"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.id.toString()}
              checked={value.toString() === option.id.toString()}
              onChange={onChange}
              className="hidden"
            />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
} 

export default RadioChipsGroup;
