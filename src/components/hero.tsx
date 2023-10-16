import React from 'react'

type Props = {}

export const Page = (props: Props) => {
  return (
    <section className="bg-[#F9FBFC] max-w-[1200px] mx-auto py-10">
      <div>
        <div className="flex flex-col px-3 md:flex-row">
          {/* <div className="">
            <h1 className="mx-auto md:mx-0 text-4xl md:text-6xl md:max-w-[500px] max-w-[350px] font-bold text-center font-Poppins">
              <span className="text-[#127C71]">Improve</span> your skill with
              different way
            </h1>  
            <p>Lets take</p>    
          </div> */}
          <div className=" md:basis-2/3">
            <h1 className="mx-auto text-3xl w-[300px] md:w-full font-bold leading-tight md:mx-0 md:text-6xl font-Poppins">
              <span className="text-[#127C71] border-b-4 border-[#FFDD84] leading-loose">Improve</span> your skill with
              different way.
            </h1>
            <p className="mt-6 leading-loose text-base text-center md:w-[450px] mx-3 md:mx-0 text-gray-500 md:text-start">
              Lets take an online course to improve your skills in a different
              way, you can set your own study time according to your learning
              speed. So you can study comfortable and asborb the material
              easily.
            </p>
            <div className='flex justify-center gap-3 mt-6 md:justify-start'>
                <button className='px-3 py-2 border text-[#127C71] font-semibold border-[#127C71] rounded-lg'>Get Started</button>
                <button className='px-3 py-2 bg-[#127C71] rounded-lg font-semibold text-white'>Watch Video</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

