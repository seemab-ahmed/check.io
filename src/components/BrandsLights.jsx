import React from "react";
import brandBg from "../assets/images/brands-bg.svg";
import intraxIcon from "../assets/images/intrax.svg";
import silverStarIcon from "../assets/images/silver-star.svg";
import xboxIcon from "../assets/images/xbox.svg";
import slackIcon from "../assets/images/slack.svg";
import tinderIcon from "../assets/images/tinder.svg";
import forbesIcon from "../assets/images/forbes.svg";
import helekenIcon from "../assets/images/heleken.svg";
import dottedBorder from "../assets/images/gradient-dotted-border.svg";

const BrandsLight = () => {
  const brandIcons = [
    intraxIcon,
    silverStarIcon,
    xboxIcon,
    slackIcon,
    tinderIcon,
    forbesIcon,
    helekenIcon,
  ];

  return (
    <section
      className="bg-[#D3EDFC] py-12 relative"
    >
      {/* <img
        src={dottedBorder}
        alt="border"
        className="absolute right-0 -top-[72px]"
      /> */}
      <div className="container">
        <div className="grid grid-cols-7 gap-8">
          {brandIcons.map((icon, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={icon} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="w-[180px] h-[180px] rounded-full bg-custom-gradient absolute -left-[70px] -bottom-[58px]"></div> */}
    </section>
  );
};

export default BrandsLight;
