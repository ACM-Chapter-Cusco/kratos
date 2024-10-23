import React from "react";

const Button = ({ children, type, className }) => {
  return (
    <button
      className={`font-sans rounded-3xl border-white-azul border-2 text-white-azul text-xl px-10 py-2 hover:bg-blue hover:border-blue hover:text-azul-git transition duration-300, ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
