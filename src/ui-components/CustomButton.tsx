import React from "react";
import { cn } from "@/libs/utils/clsx";

export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: keyof typeof btnTypes;
  children: string | React.ReactNode;
}

const btnTypes = {
  contained: "bg-[var(--primary-color)] text-white",
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
      className={cn(
        `${btnTypes[variant]} px-3 py-2 rounded-lg text-sm font-[500] hover:shadow-md`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
