import { CustomTypography } from "@/ui-components/CustomTypography";
import Wrapper from "@/ui-components/Wrapper";
import Image from "next/image";
import React from "react";
import { Icons } from "./course-space-icondatas";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <section className="bg-[var(--primary-color)]">
      <Wrapper className="px-3 py-14" container>
        <div className="flex flex-col px-3 lg:px-0 lg:flex-row gap-[2rem]">
          <div className="lg:basis-[40%] gap-6 flex flex-col justify-center">
            <CustomTypography
              className="text-xl font-bold tracking-wider text-white lg:text-2xl"
              variant="subText"
            >
              Coursespace
            </CustomTypography>
            <CustomTypography
              className="text-sm tracking-wider text-white"
              variant="subText"
            >
              Coursespace is an online learning platform that has been operating
              since 2018 until now.
            </CustomTypography>
            <div className="flex gap-2">
              {Icons.map((icon, index) => (
                <Image
                  className="cursor-pointer"
                  key={index}
                  height={15}
                  width={25}
                  src={`${icon.iconSrc}`}
                  alt=""
                />
              ))}
            </div>
            <CustomTypography
              className="text-white text-sm flex items-center gap-1 tracking-wider"
              variant="subText"
            >
              <span className="text-xl">&copy;</span> 2023 Rex Hernandez
            </CustomTypography>
          </div>
          <div className="lg:basis-[20%]">
            <CustomTypography
              className="font-bold text-white lg:text-xl"
              variant="subText"
            >
              Course
            </CustomTypography>
            <ul className="flex flex-col gap-2 mt-3">
              {[
                "UI/UX Design",
                "Mobile Development",
                "Machine Learning",
                "Web Development",
              ].map((content, index) => (
                <CustomTypography
                  key={index}
                  className="text-sm text-white"
                  variant="subText"
                >
                  {content}
                </CustomTypography>
              ))}
            </ul>
          </div>
          <div className="lg:basis-[20%]">
            <CustomTypography
              className="font-bold text-white lg:text-xl"
              variant="subText"
            >
              Menu
            </CustomTypography>
            <ul className="flex flex-col gap-2 mt-3">
              {["Home", "Courses", "Testimonial", "Mentors"].map(
                (content, index) => (
                  <CustomTypography
                    key={index}
                    className="text-sm text-white"
                    variant="subText"
                  >
                    {content}
                  </CustomTypography>
                )
              )}
            </ul>
          </div>
          <div className="lg:basis-[20%]">
            <CustomTypography
              className="font-bold text-white lg:text-xl"
              variant="subText"
            >
              About
            </CustomTypography>
            <ul className="flex flex-col gap-2 mt-3">
              {[
                "Contact Us",
                "Privacy & Policy",
                "Terms and Condition",
                "FAQ",
              ].map((content, index) => (
                <CustomTypography
                  key={index}
                  className="text-sm text-white"
                  variant="subText"
                >
                  {content}
                </CustomTypography>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
