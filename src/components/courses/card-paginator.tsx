import React from "react";
import { CourseDatas } from ".";

type PaginationProps = {
  list: typeof CourseDatas;
  activeList?: number;
  clickHandler: (i:number) => void;
};

const CoursesPagination: React.FC<PaginationProps> = ({
  list,
  activeList = 0,
  clickHandler,
}) => {
  return (
    <ul className="flex gap-3">
      {list.map((_, index) => (
        <li
          key={index}
          onClick={()=>clickHandler(index)}
          className={`lg:w-[2.5rem] cursor-pointer ${
            activeList === index ? "bg-[var(--primary-color)]" : "bg-[#CFD5D5]"
          } w-[1.75rem] h-2 rounded-lg`}
        ></li>
      ))}
    </ul>
  );
};

export default CoursesPagination;
