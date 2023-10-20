import React from "react";
import { cn } from "@/libs/utils/clsx";

const textVariant = {
  heroText: "text-3xl md:w-full text-gray-800 font-bold leading-tight md:text-6xl",
  subText: "text-gray-500 leading-loose text-base",
  semiHeroText : "text-3xl md:w-full font-semibold tracking-normal md:text-5xl"
};

interface CustomTypographyInterface {
  children: string | React.ReactNode;
  variant: keyof typeof textVariant;
  className?: string;
}

export const CustomTypography: React.FC<CustomTypographyInterface> = ({
  children,
  variant,
  className,
  ...rest
}) => {
  return (
    <h1 {...rest} className={cn(`${textVariant[variant]} font-Poppins`, className)}>
      {children}
    </h1>
  );
};
