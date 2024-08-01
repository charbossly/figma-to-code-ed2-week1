import React from "react";
import Fungible from "../assets/images/fungible_token.png";

export default function cta() {
  return (
    <div className="max-w-screen-lg mx-10 md:mx-16 lg:mx-auto  border-l-2 border-grayUi50 py-12">
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative">
          <img
            src={Fungible}
            alt="Futuristic NFT-themed "
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-grayUi200/50 to-grayUi600/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center  items-center p-8">
            <h1 className="text-t24 md:text-t40 font-extrabold text-white mb-4">
              Build your NFT profile
            </h1>
            <p className="text-t16 text-white font-bold mb-8 ">
              Join almost 10k NFT profiles on Digit!
            </p>
            <button className="text-t14 bg-white text-grayUi800 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
