import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-8 gap-0 px-4">
            <div  className="sm:text-right text-4xl pb-8 ">
              <p>Hi I'm Truc, nice to meet you. Please take a look around</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi maiores saepe nostrum libero alias et ipsa dolorum maxime. Optio sed assumenda labore repudiandae dolores vitae facilis. Nemo, provident eaque.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
