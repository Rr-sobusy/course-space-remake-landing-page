import React from "react";
import Wrapper from "@/ui-components/Wrapper";
import { CustomTypography } from "@/ui-components/CustomTypography";
import TestimonialCarousel from "./testimonial-carousel";
import Image from "next/image";
import Slider from "react-slick";

type Props = {};

export const Page = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-[var(--primary-bg)]">
      <Wrapper container className="my-4 py-[5rem]">
        <div className="flex flex-col lg:flex-row">
          <div className=" lg:basis-[50%] mx-5">
            <CustomTypography
              className="text-center lg:mx-auto lg:max-auto mx-[1.5rem] lg:text-start"
              variant="semiHeroText"
            >
              Testimonial What our{" "}
              <span className="border-b-4 border-secondary text-[var(--primary-color)]">
                Students
              </span>{" "}
              say
            </CustomTypography>
            <div className="flex justify-between border border-black"> 
              <div className="">
                <Slider className="" {...settings}>
             
                 <div className="w-full mx-auto">
                 <Image
                      src="/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg"
                      width={900}
                      height={900}
                      alt=""
                    />
                 </div>

            
                </Slider>
              </div>
              <div></div>
            </div>
            rex
          </div>
          {/*  Hidden if below 769px below */}
          <div className="hidden justify-center lg:flex md:basis-[50%]">
            <Image
              src="/images/home-testimonial.png"
              height={500}
              width={500}
              alt=""
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
