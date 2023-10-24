/**
 * ! Also reused in mentos tab
 */

import React from "react";
import CustomButton from "@/ui-components/CustomButton";
import {
  AiOutlineArrowRight as Right,
  AiOutlineArrowLeft as Left,
} from "react-icons/ai";

type PaginatorArrowProps = {
  handlePrev: () => void;
  handleNext: () => void;
};

const PaginatorArrow: React.FC<PaginatorArrowProps> = ({
  handlePrev,
  handleNext,
}) => {
  return (
    <div className="flex gap-4">
      <CustomButton
        onClick={handlePrev}
        className="px-2 py-2 shadow-sm hover:bg-[var(--primary-color)] hover:text-white font-bold bg-[var(--primary-bg)] border-0 rounded-full"
        variant="outlined"
      >
        <Left size={20} />
      </CustomButton>
      <CustomButton
        onClick={handleNext}
        className="px-2 py-2 shadow-sm hover:bg-[var(--primary-color)] hover:text-white font-bold bg-[var(--primary-bg)] border-0 rounded-full"
        variant="outlined"
      >
        <Right size={20} />
      </CustomButton>
    </div>
  );
};

export default PaginatorArrow;
