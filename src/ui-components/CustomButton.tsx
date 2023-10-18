import React from "react";

export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: keyof typeof btnTypes;
  children: string | React.ReactNode;
}

const btnTypes = {
  contained: "bg-primary text-white",
  outlined: "bg-transparent border-2 border-primary text-primary",
};

const CustomButton: React.FC<ButtonInterface> = ({
  variant,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${btnTypes[variant]} ${className} px-3 py-2 rounded-lg text-sm font-[500] hover:shadow-md`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
