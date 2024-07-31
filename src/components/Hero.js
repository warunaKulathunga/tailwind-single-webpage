import React from "react";
import { ReactTyped } from "react-typed";
import APPString from "./../APPString";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">{APPString.hero.header}</p>
        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">
          {APPString.hero.subHeader}
        </h1>
        <div className="flex items-center justify-center">
          <p className="py-4 text-xl font-bold md:text-5xl sm:text-xl">
            {APPString.hero.subTitle}
          </p>
          <ReactTyped
            className="md:text-5xl, sm:text-xl, text-xl font-bold pl-2 md:pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          {APPString.hero.paragraph}
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded my-6 mx-auto px-6 py-3 text-black">
          {APPString.button.getButton}
        </button>
      </div>
    </div>
  );
};

export default Hero;
