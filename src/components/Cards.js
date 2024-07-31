import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col w-full p-4 my-8 duration-300 bg-gray-100 rounded-lg shadow-xl md:my-0 hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
          <p className="text-4xl font-bold text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
