import Portfeuille from "../assets/images/portfeuille.png";
import Bitcoin from "../assets/images/bitcoin-ellipse.png";
import Cloud from "../assets/images/cloud-download.png";
import Sales from "../assets/images/sale-tag-02.png";
import Virtual from "../assets/images/virtual.png";
import Espace from "../assets/images/original-space.png";
import Psx from "../assets/images/psx.png";
import Snop from "../assets/images/snop.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Top sales", href: "#collections" },
  { name: "Collections", href: "#collections" },
  { name: "Our blog", href: "#cta" },
  { name: "About us", href: "#features" },
];
const footerLinks = [
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
const collectionsTabs = [
  { name: "All categories", filter: "all" },
  { name: "Art", filter: "art" },
  { name: "Celebrities", filter: "celebrities" },
  { name: "Gaming", filter: "gaming" },
  { name: "Sport", filter: "sport" },
];

const collectionsItems = [
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

export {
  navLinks,
  footerLinks,
  featuresList,
  collectionsTabs,
  collectionsItems,
};
