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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots:any) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i:any) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <section className="bg-[#F2F5F5] font-Poppins">
      <div className="max-w-[1200px] mx-auto py-[2.75rem]">
        <div className="flex flex-col lg:gap-7 lg:flex-row mx-[24px] lg:items-center">
          <h1 className="text-3xl text-gray-700 mb-[2rem] lg:mb-0 lg:basis-[25%] font-bold text-center lg:text-start lg:text-5xl">
            Most Popular Courses
          </h1>
          {/*   *** Carousel Component starts here */}
          <div className="lg:max-w-[75%]">
            <Slider {...settings}>
              {CourseDatas.map((courseItem, index) => (
                 <CourseCard item={courseItem} />

              ))}
            </Slider>

            {/* Custom Paginator */}
            <div className="flex gap-2 mt-5">
                <div className="h-2 w-[2.5rem] rounded-lg bg-[#D6D8D8]"></div>
                <div className="h-2 w-[2.5rem] rounded-lg bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
