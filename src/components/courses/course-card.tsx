import React, { FC, useState } from "react";
import { CourseCardInterfaces } from "@/interfaces/course-types";
import Image from "next/image";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";

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
      className="flex flex-col justify-between gap-6 px-2 py-2 mx-1 bg-white rounded-lg font-Poppins"
    >
      <Image
        className="rounded-lg"
        src={item.img}
        width={920}
        height={500}
        alt=""
      />
      <h1 className="text-[1.25rem] font-semibold text-gray-600">
        {item.title}
      </h1>
      <div className={`flex justify-between items-center`}>
        <p className="text-base text-gray-600"><span className="font-semibold text-primary">${item.coursePrice}</span>/course</p>
        <Arrow size={15} className={`${arrowColor} cursor-pointer px-2 py-2 h-10 w-10 rounded-full`} />
      </div>
    </div>
  );
};
