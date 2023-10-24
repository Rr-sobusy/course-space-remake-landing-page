import CustomButton from "@/ui-components/CustomButton";
import { CustomTypography } from "@/ui-components/CustomTypography";
import Wrapper from "@/ui-components/Wrapper";
import React from "react";

type Props = {};

export const Subscribe = (props: Props) => {
  return (
    <section className="bg-[var(--primary-bg)] py-[5.75rem]">
      <Wrapper className="px-4 md:px-2" container>
        <div className="w-[100%] bg-[#FFAF35] flex flex-col justify-center min-h-[320px] rounded-2xl">
          <div className="max-w-[700px] mx-auto">
            <CustomTypography className="text-center" variant="semiHeroText">
              Subscribe to Our News Letter
            </CustomTypography>
            <CustomTypography
              className="mt-3 text-center text-slate-800"
              variant="subText"
            >
              Subscribe to our newsletter to get information about our courses.
            </CustomTypography>
          </div>
          <div className="flex flex-col w-full gap-3 mt-10 md:w-1/2 md:flex-row place-self-center justify-self-center">
            <input
              type="email"
              placeholder="Enter you email address"
              className="font-Poppins basis-auto md:basis-[80%] mx-[1.5rem] md:mx-0 text-gray-800 h-[50px] outline-none px-4 py-1 rounded-xl bg-white"
            />
            <CustomButton
              className="mx-auto min-w-1/4 md:w-auto"
              variant="contained"
            >
              Subscribe
            </CustomButton>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
