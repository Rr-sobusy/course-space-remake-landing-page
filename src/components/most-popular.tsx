import React from "react";
import Slider from "react-slick";
import { CourseCard, CourseDatas } from "./courses";
import { useMediaQuery } from "react-responsive";

type Props = {};

export const Page = (props: Props) => {
  const isTablet = useMediaQuery({
    query: "(max-width : 1024px)",
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 1 : 3,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-[#F2F5F5] font-Poppins">
      <div className="max-w-[1200px] mx-auto py-[2.75rem]">
        <div className="flex flex-col lg:gap-7 lg:flex-row mx-[24px] lg:items-center">
          <h1 className="text-3xl text-gray-700 mb-[2rem] lg:mb-0 lg:basis-[25%] font-bold text-center lg:text-start lg:text-5xl">
            Most Popular Courses
          </h1>
          {/*   *** Carousel Component starts here */}
          <div className="lg:max-w-[75%] h-full">
            <Slider className="flex h-full" {...settings}>
              {CourseDatas.map((courseItem, index) => (
                <CourseCard key={index} item={courseItem} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
