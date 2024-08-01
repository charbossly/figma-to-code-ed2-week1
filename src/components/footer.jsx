import React from "react";
import Logo from "../assets/images/logo.png";

export default function footer() {
  const links = [
    {
      name: "Privacy",
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Terms & Conditions",
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "About Us",
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  return (
    <footer className="max-w-screen-lg mx-10 md:mx-16 lg:mx-auto border-l-2 border-grayUi50">
      <div className=" py-3 border-grayUi50 border-b-2 pb-4">
        <img src={Logo} alt="logo" className="h-8 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row  lg:justify-between lg:items-center py-4">
        <h2 className="text-t18 font-raleway font-medium">
          Create Explore & Collect Digital NFTs
        </h2>
        <ul className="flex mx-auto md:mx-0 gap-x-6 text-t12">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} target={link.target} rel={link.rel}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
