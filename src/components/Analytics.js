import React from "react";
import Laptop from "../assets/laptop.jpg";
import APPString from "../APPString";

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">
            {APPString.analytics.header}
          </p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            {APPString.analytics.subTitle}
          </h1>
          <p>{APPString.analytics.paragraph}</p>
          <button className="bg-black w-[200px] rounded my-6 mx-auto font-medium py-3 text-[#00df9a] mx-auto md:mx-0">
            {APPString.button.getButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
