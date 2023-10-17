import React from "react";
import Slider from "react-slick";

type Props = {};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll:2,
};
export const Page = (props: Props) => {
  return (
    <section className="bg-[#F2F5F5] font-Poppins h-screen">
      <div className="max-w-[1200px] mx-auto py-[2.75rem]">
        <div className="flex flex-col lg:gap-7 lg:flex-row mx-[24px] lg:items-center">
          <h1 className="text-2xl lg:basis-[25%] font-bold text-center lg:text-start lg:text-4xl">
            Most Popular Courses
          </h1>
          {/*   *** Carousel Component starts here */}
          <div className="lg:max-w-[75%] border border-black">
            <Slider {...settings}>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
