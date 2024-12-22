import Image from "next/image";
import React from "react";

interface CardType {
  image: string;
  heading: string;
  paragraph: string;
  view: string[];
}
const cardData: CardType[] = [
  {
    image: "/p1.png",
    heading: "Portfolio Website Design",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    view: ["Figma"],
  },
  {
    image: "/p2.png",
    heading: "LitterCycle Exchange",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    view: ["Live View " , " Github " , " Figma"],
  },
  {
    image: "/p3.png",
    heading: "Edubix",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    view: ["Live View " , " Github " , " Figma"],
  },
  {
    image: "/p4.png",
    heading: "PPDB SMK Telesandi Bekasi",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    view: ["Live view"],
  },
  {
    image: "/p4.png",
    heading: "PPDB SMK Telesandi Bekasi",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    view: ["Live view"],
  },
  {
    image: "/p4.png",
    heading: "PPDB SMK Telesandi Bekasi",
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    view: ["Live view"],
  },
];



const ProjectCards = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-evenly font-main xs:px-2 px-5">
      {cardData.map((val, ind) => (
        <div key={ind} className="h-[300px] w-[360px] rounded-xl lg:my-8 md:my-5 my-3 shadow-md">
          <div className="h-[65%] w-full relative ">
            <Image src={val.image} alt="pic" fill={true} layout="cover" />
          </div>
          <div className="px-4 pt-3 pb-2 flex flex-col gap-1">
            <h2 className="md:text-xl text-nr font-semibold">{val.heading}</h2>
            <p className="md:text-sm text-[12px]">{val.paragraph}</p>
            <p className="md:text-sm text-[12px] text-[#457b9d] font-semibold cursor-pointer">{val.view}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
