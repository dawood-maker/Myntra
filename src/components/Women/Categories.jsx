import React from "react";
import women2 from "../../assets/WoMen/women2.png";
import women3 from "../../assets/WoMen/women3.png";
import women4 from "../../assets/WoMen/women4.png";
import women5 from "../../assets/WoMen/women5.png";
import women6 from "../../assets/WoMen/women6.png";
import Gneder5 from "../../assets/Gneder/Gneder5.png";

function Categories() {
  return (
    <>
      {/* Top Images */}
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[20px]">
        
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women2} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women3} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women4} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women5} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women6} alt="" className="w-full h-auto object-cover" />
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