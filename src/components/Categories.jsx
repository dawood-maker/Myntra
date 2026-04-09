import React from "react";
import brand1 from "../assets/Brand/brand1.png";
import brand2 from "../assets/Brand/brand2.png";
import brand3 from "../assets/Brand/brand3.png";
import brand4 from "../assets/Brand/brand4.png";
import brand5 from "../assets/Brand/brand5.png";
import Gneder5 from "../assets/Gneder/Gneder5.png";

function Categories() {
  return (
    <>
      {/* Top Images */}
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[20px]">
        
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={brand1} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={brand2} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={brand3} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={brand4} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={brand5} alt="" className="w-full h-auto object-cover" />
        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-[10px] mb-[10px]">
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full px-2 md:px-[90px]">
        <img src={Gneder5} alt="gnder 5" className="w-full h-auto" />
      </div>
    </>
  );
}

export default Categories;