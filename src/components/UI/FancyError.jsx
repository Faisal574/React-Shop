import React from "react";
import { BiError } from "react-icons/bi";

const FancyError = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-100 rounded-lg shadow-lg">
      <BiError className="text-red-500 text-6xl mb-4" />
      <h2 className="text-red-600 text-2xl font-bold mb-2">Oops!</h2>
      <p className="text-red-500 text-lg text-center">{message}</p>
    </div>
  );
};

export default FancyError;
