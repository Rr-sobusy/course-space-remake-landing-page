import React from "react";
import Image from "next/image";

type Props = {};

export const Page = (props: Props) => {
  return (
    <section className="bg-bcolor my-[3rem]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-[40%] flex justify-center">
            <Image
              src="/images/home-feature.png"
              height={500}
              width={500}
              alt=""
            />
          </div>
          <div className="px-5">
            <h1 className="__hero-text text-center md:text-start px-6">
              Make your{" "}
              <span className="text-primary border-b-4 border-[#FFDD84] leading-loose">
                learning
              </span>{" "}
              enjoyable
            </h1>
            <p className="__hero-subtext mx-5">
              Set the way of learning according to your wishes with some of the
              benefits that you get us, so you on enjoy the lessons that we
              provide.
            </p>
            <div className="h-5 mx-5 flex flex-col md:flex-row gap-3">
              <div className="bg-blue-200 md:basis-1/2 rounded-lg">
                rex
              </div>
              <div className="bg-blue-200 md:basis-1/2 rounded-lg">rex</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
