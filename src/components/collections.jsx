import { useState } from "react";
import Etherium from "../assets/images/ethereum-ellipse.svg";
import Virtual from "../assets/images/virtual.png";
import Espace from "../assets/images/original-space.png";
import Psx from "../assets/images/psx.png";
import Snop from "../assets/images/snop.png";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./commons/modalImage";

const tabs = [
  { name: "All categories", filter: "all" },
  { name: "Art", filter: "art" },
  { name: "Celebrities", filter: "celebrities" },
  { name: "Gaming", filter: "gaming" },
  { name: "Sport", filter: "sport" },
];

const items = [
  {
    title: "CyberPunk",
    tag: "art",
    imgSrc: Virtual,
  },
  {
    title: "Durolost Boll - Upper",
    tag: "gaming",
    imgSrc: Espace,
  },
  {
    title: "Space X Wiper",
    tag: "gaming",
    imgSrc: Psx,
  },
  {
    title: "Snoop Dogg",
    tag: "celebrities",
    imgSrc: Snop,
  },
];

function Collection() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems =
    selectedTab === "all"
      ? items
      : items.filter((item) => item.tag === selectedTab);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div
      id="collections"
      className="max-w-screen-lg mx-10 md:mx-16 lg:mx-auto  border-l-2 border-grayUi50 py-12"
    >
      <h1 className="text-t28 font-bold mb-8 text-left">Our Collections</h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div className="hidden md:flex space-x-4 my-8 ">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-1 py-1 md:px-4 md:py-2 rounded-lg ${
                selectedTab === tab.filter
                  ? "bg-grayUi700 text-white"
                  : "bg-grayUi50"
              }`}
              onClick={() => setSelectedTab(tab.filter)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex md:hidden space-x-4 my-4 md:my-8 ">
          {tabs.slice(0, 3).map((tab) => (
            <button
              key={tab.name}
              className={`px-1 py-1 md:px-4 md:py-2 rounded-lg ${
                selectedTab === tab.filter
                  ? "bg-grayUi700 text-white"
                  : "bg-grayUi50"
              }`}
              onClick={() => setSelectedTab(tab.filter)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <a
          href="#"
          className="text-t12 text-grayUi500 font-bold cursor-pointer font-raleway underline "
        >
          View more
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-6 md:px-12 lg:px-0">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="group border rounded-xl p-2 overflow-hidden"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                onClick={() => setSelectedImg(item.imgSrc)}
                className="mb-4 w-full object-cover rounded-xl cursor-pointer h-48 group-hover:scale-110 transition-all duration-300 group-hover:opacity-50"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-t14 font-semibold">{item.title}</h2>
                <span className="text-t12 text-grayUi500 flex items-center space-x-2 font-bold">
                  <img src={Etherium} className="w-4 h-4" alt="" /> 98
                </span>
              </div>
              <button
                onClick={() => setSelectedImg(item.imgSrc)}
                className="mt-4 block px-4 py-1 w-full bg-white border hover:bg-grayUi500 hover:text-white border-black rounded-xl"
              >
                Place a Bid
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}

export default Collection;
