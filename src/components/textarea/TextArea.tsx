"use client"
import React from "react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, value, onChange, onBlur, error }) => (
  <div className="mt-6">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={4}
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

export default Textarea;
