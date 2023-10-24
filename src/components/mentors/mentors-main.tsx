import { CustomTypography } from "@/ui-components/CustomTypography";
import { useMediaQuery } from "react-responsive";
import Wrapper from "@/ui-components/Wrapper";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import MentorCard from "./mentor-card";
import { MentorCardDatas } from "./mentor-card-datas";
import PaginatorDots from "../courses/card-paginator";
import PaginatorArrow from "../courses/card-paginator-arrow";

type Props = {};

export const Mentors = (props: Props) => {
  const carouselRef = useRef<Slider | null>(null);

  const [activeCard, setActiveCard] = useState<number>();
  const isPhone = useMediaQuery({
    query: `(max-width : 768px)`,
  });
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: isPhone ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setActiveCard(index),
  };

  function handleChangeCarouselView(index: number) {
    carouselRef.current?.slickGoTo(index);
  }
  return (
    <section className="bg-[var(--secondary-bg)]">
      <Wrapper className="py-[5rem] px-[24px]" container>
        <CustomTypography className="text-gray-700" variant="semiHeroText">
          Our Expert Mentors
        </CustomTypography>

        {/*  Carousel Container */}
        <div className="max-w-full mt-8 ">
          <Slider ref={carouselRef} {...settings}>
            {MentorCardDatas.map((content, index) => (
              <MentorCard key={index} content={content} />
            ))}
          </Slider>
          <div className="mx-1 flex flex-col lg:flex-row gap-3 lg:gap-0 lg:justify-between items-center mt-[1.25rem]">
            <PaginatorDots
              list={MentorCardDatas}
              activeList={activeCard}
              clickHandler={handleChangeCarouselView}
            />
            <PaginatorArrow
              handleNext={() => carouselRef.current?.slickNext()}
              handlePrev={() => carouselRef.current?.slickPrev()}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
