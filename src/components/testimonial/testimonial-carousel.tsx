import React from "react";
import Slider from "react-slick";

type Props = {};

const TestimonialCarousel = (props: Props) => {
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
    <Slider className="border border-black w-[100%]" {...settings}>
      <div>1</div>
      <div>2</div>
    </Slider>
  );
};

export default TestimonialCarousel;
