import React from "react";

const textVariant = {
  heroText:
    "text-3xl md:w-full font-bold leading-tight  md:text-6xl",
    subText : ""
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
    <h1 {...rest} className={`${textVariant[variant]} ${className} }`}>
      {children}
    </h1>
  );
};
