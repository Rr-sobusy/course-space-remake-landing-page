import React, { FC, useState } from "react";
import { CourseCardInterfaces } from "@/interfaces/course-types";
import Image from "next/image";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

type CourseCardProps = {
  item: CourseCardInterfaces;
};

export const CourseCard: FC<CourseCardProps> = ({ item }) => {
  const [isHovered, setHovered] = useState<boolean>(false);

  const arrowColor = isHovered ? "bg-primary text-white " : "text-primary";
  function handleHover() {
    setHovered(true);
  }

  function handleLeave() {
    setHovered(false);
  }


  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="flex flex-col gap-6 px-3 py-3 mx-1 bg-white rounded-lg font-Poppins"
    >
      <Image
        className="rounded-lg"
        src={item.img}
        width={920}
        height={500}
        alt=""
      />
      <div className="flex flex-col justify-between min-h-[160px]">
        <h1 className="text-[1.25rem] lg:text-[1rem] font-bold text-gray-800">
          {item.title}
        </h1>
       <div className="flex gap-2 items-center font-semibold text-gray-600">
       <ReactStars
           value={item.rating}
            count={5}
            size={24}
            activeColor="#ffd700"
          />
          <p>{`(${item.raters})`}</p>
       </div>
        <div className={`flex flex-row justify-between items-center`}>
          <p className="text-base text-gray-600">
            <span className="font-semibold text-primary">
              ${item.coursePrice}
            </span>
            /course
          </p>
          <Arrow
            size={15}
            className={`${arrowColor} cursor-pointer px-2 py-2 h-10 w-10 rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};
