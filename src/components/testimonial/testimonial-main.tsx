import React from "react";
import Wrapper from "@/ui-components/Wrapper";
import { CustomTypography } from "@/ui-components/CustomTypography";
import { TestimonialCarousel as CarouselCard } from "./testimonial-card";
import { TestimonialCardDatas } from "./testimonial-datas";
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
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="bg-[var(--primary-bg)]">
      <Wrapper container className="my-4 py-[5rem]">
        <div className="flex flex-col lg:flex-row">
          <div className=" lg:max-w-[50%] mx-5">
            <CustomTypography
              className="text-center mb-16 text-gray-800 lg:text-6xl md:text-3xl lg:mx-auto mx-[2rem] lg:text-start"
              variant="semiHeroText"
            >
              Testimonial What our{" "}
              <span className="border-b-4 border-secondary text-[var(--primary-color)]">
                Students
              </span>{" "}
              say
            </CustomTypography>
            <div className="">
              <Slider {...settings}>
                {TestimonialCardDatas.map((content, index) => (
                  <CarouselCard key={index} content={content} />
                ))}
              </Slider>
            </div>
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
