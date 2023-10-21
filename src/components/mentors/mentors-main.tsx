import { CustomTypography } from "@/ui-components/CustomTypography";
import { useMediaQuery } from "react-responsive";
import Wrapper from "@/ui-components/Wrapper";
import React from "react";
import Slider from "react-slick";
import MentorCard from "./mentor-card";
import { MentorCardDatas } from "./mentor-card-datas";

type Props = {};

export const Mentors = (props: Props) => {
  const isPhone = useMediaQuery({
    query: `(max-width : 768px)`,
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isPhone ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="bg-[var(--secondary-bg)]">
      <Wrapper className="py-[5rem] px-[24px]" container>
        <CustomTypography className="text-gray-700" variant="semiHeroText">
          Our Expert Mentors
        </CustomTypography>

        {/*  Carousel Container */}
        <div className="max-w-full mt-8">
          <Slider {...settings}>
            {MentorCardDatas.map((content, index) => (
              <MentorCard key={index} content={content} />
            ))}
          </Slider>
        </div>
      </Wrapper>
    </section>
  );
};
