import React, { useRef } from "react";
import Wrapper from "@/ui-components/Wrapper";
import { CustomTypography } from "@/ui-components/CustomTypography";
import { TestimonialCarousel as CarouselCard } from "./testimonial-card";
import { TestimonialCardDatas } from "./testimonial-datas";
import Image from "next/image";
import Slider from "react-slick";
import CustomButton from "@/ui-components/CustomButton";
import {
  AiOutlineArrowRight as Right,
  AiOutlineArrowLeft as Left,
} from "react-icons/ai";

type Props = {};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export const Page = (props: Props) => {
  const carouselRef = useRef<Slider | null>(null);

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
              <Slider ref={carouselRef} {...settings}>
                {TestimonialCardDatas.map((content, index) => (
                  <CarouselCard key={index} content={content} />
                ))}
              </Slider>
              <div className="-mt-[9.25rem] flex gap-2 relative ml-[calc(100%-7rem)]">
                <CustomButton
                  onClick={()=>carouselRef.current?.slickPrev()}
                  className="px-2 py-2 shadow-sm hover:bg-[var(--primary-color)] hover:text-white font-bold bg-[var(--primary-bg)] border-0 rounded-full"
                  variant="outlined"
                >
                  <Left size={20} />
                </CustomButton>
                <CustomButton
                 onClick={()=>carouselRef.current?.slickNext()}
                  className="px-2 py-2 shadow-sm hover:bg-[var(--primary-color)] hover:text-white font-bold bg-[var(--primary-bg)] border-0 rounded-full"
                  variant="outlined"
                >
                  <Right size={20} />
                </CustomButton>
              </div>
            </div>
          </div>

          {/*  Hidden if below 769px screen size */}
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
