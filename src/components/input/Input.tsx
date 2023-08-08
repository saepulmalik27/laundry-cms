"use client"
import React from "react";

interface InputProps {
  label: string;
  name: string;
  type: "text" | "number";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, value, onChange, onBlur, error }) => (
  <div className="mt-6">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className={`mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-lightblue-500 focus:border-lightblue-500 sm:text-sm ${
        error ? "border-red-500" : ""
      }`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default Input;
