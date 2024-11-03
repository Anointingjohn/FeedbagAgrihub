"use client";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";

  children: React.ReactNode;
  [key: string]: any;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  ...props
}) => {
  const baseStyle = "font-semibold py-2 px-4 rounded";
  const variantStyles: Record<string, string> = {
    primary:
      "md:w-[450px] md:h-[59px] w-full text-[12px] md:text-[18px] h-[50px] rounded-[16px] text-white bg-gradient-to-b from-[#49C01F] to-[#1FC043] text-white text-center",

    secondary:
      "md:w-[450px] md:h-[59px] w-full text-[12px] md:text-[18px] h-[50px] rounded-[16px] border-[#49C01F] primary-text background-transparent border-[1.5px]",

    tertiary:
      "w-[108px] h-[47px] flex flex-row gap-2 justify-center items-center text-[12px] md:text-[18px] rounded-[16px] border-[#49C01F] primary-text background-transparent border-[1px]",
  };

  const buttonClass = `${baseStyle} ${
    variantStyles[variant] || variantStyles.primary
  }`;

  return (
    <button className={buttonClass} {...props} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
