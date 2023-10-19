import React from "react";
import { cn } from "@/libs/utils/clsx";

type Props = {
  children?: React.ReactNode;
  className?: string;
  container?: true;
};

const Wrapper: React.FC<Props> = ({ children, className, container }) => {
  return (
    <div className={cn(`${container ? "max-w-[1200px] mx-auto" : ""}`, className)}>
      {children}
    </div>
  );
};

export default Wrapper;
