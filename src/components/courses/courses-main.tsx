import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { CourseCard, CourseDatas } from ".";
import { useMediaQuery } from "react-responsive";
import PaginatorDots from "./card-paginator";
import PaginatorArrow from "./card-paginator-arrow";
import CustomButton from "@/ui-components/CustomButton";
import {
  AiOutlineArrowRight as Right,
  AiOutlineArrowLeft as Left,
} from "react-icons/ai";

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
              <PaginatorDots
                clickHandler={handleChangeCarouselView}
                activeList={activeCard}
                list={CourseDatas}
              />
              <PaginatorArrow
                handleNext={() => carouselRef.current?.slickNext()}
                handlePrev={() => carouselRef.current?.slickNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
