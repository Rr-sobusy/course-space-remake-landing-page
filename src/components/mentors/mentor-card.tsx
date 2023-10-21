import { CustomTypography } from "@/ui-components/CustomTypography";
import Image from "next/image";
import React from "react";
import { MentorCardInterfaces } from "@/interfaces/mentor-card-types";

type MentorCardProps = {
  content: MentorCardInterfaces;
};

const MentorCard: React.FC<MentorCardProps> = ({ content }) => {
  return (
    <div className="bg-[var(--primary-bg)] h-[520px] px-3 py-3 rounded-lg mx-2">
      <Image
        className="rounded-lg"
        width={700}
        height={700}
        src={`${content.imgSrc}`}
        alt=""
      />
      <div className="mt-3">
        <CustomTypography
          className="text-gray-800 tracking-wide font-semibold text-xl"
          variant="subText"
        >
          {content.name}
        </CustomTypography>
        <CustomTypography variant="subText">
          {content.category}
        </CustomTypography>

        <CustomTypography className="mt-5 text-sm" variant="subText">
          {content.desc}
        </CustomTypography>

        <Image
          className="mt-5"
          src={`${content.companyImgSrc}`}
          height={80}
          width={80}
          alt=""
        />
      </div>
    </div>
  );
};

export default MentorCard;
