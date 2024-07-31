import React from "react";
import APPString from "../APPString";

const Newsletter = () => {
  return (
    <div className="w-full p-4 py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl ">
            {APPString.newsLetter.header}
          </h1>
          <p>{APPString.newsLetter.subHeader}</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col items-center justify-between w-full sm:flex-row">
            <input
              className="flex w-full p-3 text-black rounded-md"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              {APPString.button.notifyMe}
            </button>
          </div>
          <p>
            {APPString.newsLetter.subTitle}
            <span className="text-[#00df9a]">{APPString.newsLetter.link}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
