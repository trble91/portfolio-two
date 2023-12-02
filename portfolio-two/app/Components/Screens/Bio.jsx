import React from "react";

export default function Bio() {
  return (
    <>
      <div className="flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-700 text-2xl sm:text-gray-700">
            Bio
          </h3>
          <h6 className="absolute top-44 uppercase tracking-[15px] text-gray-700 text-xl sm:text-gray-700">
            Aaron Daley
          </h6>
          <div className="flex absolute flex-row text-center text-gray-700 text-lg top-56 xl:flex-row max-w-[500px] items-center snap-center">
            <p className="flex relative text-m">
              {
                "A creative problem-solver, software engineer, and Navy veteran. With a sharp eye for identifying gaps in the market, I'm driven to fill them through skillful approach, collaboration, plus continuous learning. I enjoy building innovative solutions that will make a difference in the world. Along with building software solutions, my passions for curating music and photography continues to help me seek innovation and aesthetic in digital product development."
              }
              {
                " Unconevntional in every method when it comes to learning. I believe the key to growth is abundant knowledge, knowledge by way of self-discovery. "
              }
            </p>
          </div>
      </div>
    </>
  );
}
