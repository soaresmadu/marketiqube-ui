import React, { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="mb-4 w-auto h-auto py-1.5 px-5 border border-[#006677] rounded-full bg-white font-bold text-[#006677]"
      {...props}
    >
      {text}
    </button>
  );
};