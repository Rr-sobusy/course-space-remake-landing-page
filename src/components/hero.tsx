import React from 'react'
import Image from 'next/image';
import {AiOutlinePlayCircle as Play} from 'react-icons/ai'
import {PiCertificateLight as Certificate} from 'react-icons/pi'



type Props = {}

const HeroStats: { label: string; value: string }[] = [
  {
    label: "Student",
    value: "10K+",
  },
  {
    label: "Quality Course",
    value: "200k+",
  },{
    label : 'Experienced Mentores',
    value : '20K+'
  }
];

export const Page = (props: Props) => {
  return (
    <section className="my-[3rem] bg-bcolor">
      <div className='max-w-[1200px] mx-auto'>
        <div className="flex flex-col px-3 md:flex-row">
          <div className=" md:basis-[60%]">
            <h1 className="mx-auto text-3xl w-[300px] md:w-full font-bold leading-tight md:mx-0 md:text-6xl font-Poppins">
              <span className="text-primary border-b-4 border-[#FFDD84] leading-loose">
                Improve{" "}
              </span>
               your skill with different way.
            </h1>
            <p className="mt-6 leading-loose text-base text-center md:w-[450px] mx-3 md:mx-0 text-gray-500 md:text-start">
              Lets take an online course to improve your skills in a different
              way, you can set your own study time according to your learning
              speed. So you can study comfortable and asborb the material
              easily.
            </p>
            <div className="flex justify-center gap-3 mt-6 md:justify-start">
              <button className="px-4 hover:animate-[custom_2s_ease-out_.0s_infinite] py-2 font-semibold border rounded-lg text-primary border-primary">
                Get Started
              </button>
              <button className="flex hover:animate-[custom_2s_ease-out_.0s_infinite] items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-primary">
                <span>
                  <Play size={20} />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/*   Hero Image Container */}
          <div className="md:basis-[40%] font-Poppins md:flex md:flex-col justify-between">
            <Image
              width={500}
              height={500}
              className="relative z-0 w-full h-full rounded-lg"
              src="/images/th (1).jpeg"
              alt=""
            />
            <div className="relative z-10 md:mt-5 -mt-[4rem] flex max-w-[330px] md:w-[50%] md:-ml-[2rem] bg-white shadow-md rounded-xl">
              <div className="basis-[20%] text-primary flex items-center justify-center">
                <Certificate size={22} />
              </div>
              <div className="basis-[80%] flex flex-col gap-1 py-2">
                <h2 className="text-lg font-semibold text-secondary">
                  Certificate
                </h2>
                <p className="text-gray-500">
                  There are cerfificates for all courses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*   Hero Stats    */}
        <div className="flex flex-col gap-3 md:gap-0 px-3 my-6 py-[2.75rem] rounded-lg shadow-md md:flex-row md:justify-between md:px-[5rem]">
          {HeroStats.map((stats, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 mx-3 font-Poppins">
              <h1 className="text-[2.75rem] font-bold text-secondary">{stats.value}</h1>
              <p className='text-lg font-semibold tracking-wider text-gray-600'>{stats.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

