import React from "react";
import { NewsCardInterfaces } from "@/interfaces/news-card-types";

type Props = {
  item: NewsCardInterfaces;
};

export const NewsCard = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <div className="flex py-4 rounded-lg shadow-sm bg-white items-center font-Poppins">
      <div className="md:basis-[20%]">
        <IconComponent
          className="rounded-full basis-[20%] bg-primary mx-auto text-white px-2 py-2 h-10 w-10"
          size={15}
        />
      </div>
      <div className="grow grid gap-2 ml-4">
        <p className="text-secondary text-sm tracking-widest font-semibold">
          {item.title}
        </p>
        <p className="text-gray-500 text-sm">{item.subtitle}</p>
      </div>
    </div>
  );
};
