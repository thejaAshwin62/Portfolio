import React from "react";

import { CardContainer, CardBody, CardItem } from "./Card3D"; // Import 3D card components

const ServiceCard = ({ index, title, icon }) => (
  <CardContainer className="xs:w-[250px] w-full inter-var">
    <CardBody
      className="bg-tertiary relative group/card dark:hover:shadow-2xl 
      dark:hover:shadow-emerald-500/[0.1] hover:shadow-xl
      rounded-[20px] border border-black/[0.1] dark:border-white/[0.2]
      py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      {/* 3D hover effect for the icon */}
      <CardItem
        translateZ="80"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        <img
          src={icon}
          alt={title}
          height={600}
          width={600}
          className=" object-cover rounded-xl group-hover/card:shadow-xl"
        />
      </CardItem>

      {/* Title with 3D animation */}
      <CardItem
        translateZ="50"
        as="h3"
        className="text-white text-[20px] font-bold text-center mt-2"
      >
        {title}
      </CardItem>
    </CardBody>
  </CardContainer>
);

export default ServiceCard;
