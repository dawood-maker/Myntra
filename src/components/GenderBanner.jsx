import React from "react";
import GnederRightlogo from "../assets/Gneder/GnederRight.png";
import GnederLeft from "../assets/Gneder/GnederLeft.png";
import Gneder3 from "../assets/Gneder/Gneder3.png";
import Gneder4 from "../assets/Gneder/Gneder4.png";

function Genderbanner() {
  return (
    <>
      <div className="w-full px-2 md:px-[90px] bg-[#FEFEFE]">
        <div className="w-full grid grid-cols-2 gap-0">
          <img
            className="w-full h-auto object-cover block"
            src={GnederRightlogo}
            alt="Right logo"
          />
          <img
            className="w-full h-auto object-cover block"
            src={GnederLeft}
            alt="Left logo"
          />
        </div>
        <div className="mt-[2px] w-full md:pl-[30px]">
          <img src={Gneder3} alt="gender 3" className="w-full h-auto" />
        </div>
        <div className="mt-[2px]">
          <img src={Gneder4} alt="gnder 4" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}

export default Genderbanner;
