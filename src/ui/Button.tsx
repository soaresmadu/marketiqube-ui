import React, { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="mb-4 w-auto h-auto py-1.5 px-5 border border-[#4f9e22] rounded-full bg-white font-bold text-[#4f9e22]
      dark:bg-[#4f9e22] dark:text-[#f4f4f4] dark:border-[#4f9e22]"
      {...props}
    >
      {text}
    </button>
  );
};