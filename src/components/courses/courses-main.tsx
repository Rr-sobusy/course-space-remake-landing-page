import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { CourseCard, CourseDatas } from ".";
import { useMediaQuery } from "react-responsive";
import CoursesPagination from "./card-paginator";
import CustomButton from "@/ui-components/CustomButton";
import * as AiIcons from "react-icons/ai";

type Props = {};
export const Page = (props: Props) => {
  const carouselRef = useRef<Slider | null>(null);
  const [activeCard, setActiveCard] = useState<number>();
  const isTablet = useMediaQuery({
    query: "(max-width : 1024px)",
  });
  var settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (e: number) => setActiveCard(e),
  };

  /**
   * * Function invoked to change the carousel page/index
   */
  function handleChangeCarouselView(index: number) {
    carouselRef.current?.slickGoTo(index);
  }
  return (
    <section className="bg-[#F2F5F5] font-Poppins">
      <div className="max-w-[1200px] mx-auto py-[6.5rem]">
        <div className="flex flex-col lg:gap-7 lg:flex-row mx-[24px] lg:items-center">
          <h1 className="text-3xl text-gray-600 lg:mb-0 lg:basis-[25%] font-bold text-center lg:text-start lg:text-5xl">
            Most Popular Courses
          </h1>
          {/*   *** Carousel Component starts here */}
          <div className="lg:max-w-[75%]">
            <Slider ref={carouselRef} {...settings}>
              {CourseDatas.map((courseItem, index) => (
                <CourseCard key={index} item={courseItem} />
              ))}
            </Slider>
            <div className="flex flex-col items-center justify-between gap-4 mt-5 ml-2 lg-gap-0 lg:flex-row">
              <CoursesPagination
                clickHandler={handleChangeCarouselView}
                activeList={activeCard}
                list={CourseDatas}
              />
              <div className="flex gap-4">
                <CustomButton
                  onClick={() => carouselRef.current?.slickPrev()}
                  className="px-2 py-2 hover:bg-[var(--primary-color)] hover:text-white font-bold bg-[var(--primary-bg)] border-0 rounded-full"
                  variant="outlined"
                >
                  <AiIcons.AiOutlineArrowLeft size={20} />
                </CustomButton>
                <CustomButton
                  onClick={() => carouselRef.current?.slickNext()}
                  className="px-2 py-2 hover:bg-[var(--primary-color)] hover:text-white font-bold bg-[var(--primary-bg)] border-0 rounded-full"
                  variant="outlined"
                >
                  <AiIcons.AiOutlineArrowRight size={20} />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
