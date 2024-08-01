import React from "react";
import Portfeuille from "../assets/images/portfeuille.png";
import Bitcoin from "../assets/images/bitcoin-ellipse.png";
import Cloud from "../assets/images/cloud-download.png";
import Sales from "../assets/images/sale-tag-02.png";

export default function features() {
  const featuresList = [
    {
      title: "Set up your wallet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat libero et elit elementum, ac aliquet dolor mattis.",
      icon: Portfeuille,
    },
    {
      title: "Add your NFT's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat libero et elit elementum, ac aliquet dolor mattis.",
      icon: Bitcoin,
    },
    {
      title: "Promote your NFT's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat libero et elit elementum, ac aliquet dolor mattis.",
      icon: Cloud,
    },
    {
      title: "Sell your NFT's",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat libero et elit elementum, ac aliquet dolor mattis.",
      icon: Sales,
    },
  ];
  return (
    <div className="max-w-screen-lg mx-10 md:mx-16 lg:mx-auto  border-l-2 border-grayUi50 py-12 font-raleway">
      <h1 className="text-t28 font-bold mb-8 text-left">Create and Sell Now</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="bg-grayUi50 rounded-2xl shadow-md p-4 py-3"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-grayUi800 rounded-md mb-4">
              <img
                src={feature.icon}
                alt="wallet-icon"
                className="h-6 w-6 text-blue-600"
              />
            </div>
            <h2 className="text-t18 font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-t13">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
