import React from "react";
import { CustomTypography } from "@/ui-components/CustomTypography";
import { TestimonialCardTypes } from "@/interfaces/testimonial-card-types";
import Image from "next/image";

type CardTypes = {
  content: TestimonialCardTypes;
};

export const TestimonialCarousel: React.FC<CardTypes> = ({content}) => {
  return (
    <div className="flex flex-col px-5 min-h-[350px] gap-8">
      <CustomTypography
        className="text-gray-600 text-lg md:text-lg lg:text-xl"
        variant="semiHeroText"
      >
        {content.title}
      </CustomTypography>
      <CustomTypography className="text-sm" variant="subText">
        {
          content.desc
        }
      </CustomTypography>
      <div className="flex gap-4 px-5 py-3 rounded-lg shadow-md w-[50%] items-center  max-h-[120px]">
        <Image
          width={40}
          height={40}
          className="basis-[10%]  rounded-full "
          src={`${content.avatarSrc}`}
          alt=""
        />
        <div className="flex flex-col justify-evenly">
          <CustomTypography
            className="text-gray-600 font-semibold"
            variant="subText"
          >
          {content.name}
          </CustomTypography>
          <CustomTypography className="text-sm" variant="subText">
            {content.jobTitle}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};


