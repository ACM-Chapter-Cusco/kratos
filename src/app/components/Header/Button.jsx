import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`border-white-blue text-white-blue hover:bg-blue hover:border-blue hover:text-blue-git cursor-pointer rounded-3xl border-2 px-10 py-2 font-sans text-xl transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
