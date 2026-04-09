import React from "react";
import Bycategori1 from "../assets/ByCategori/Bycategori1.png";
import Bycategori2 from "../assets/ByCategori/Bycategori2.png";
import Bycategori3 from "../assets/ByCategori/Bycategori3.png";
import Bycategori4 from "../assets/ByCategori/Bycategori4.png";
import Bycategori5 from "../assets/ByCategori/Bycategori5.png";
import Bycategori6 from "../assets/ByCategori/Bycategori6.png";
import Gneder6 from "../assets/Gneder/Gneder6.png";

function ByCategori() {
  return (
    <>
      <div className='grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[30px]'>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={Bycategori1} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={Bycategori2} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={Bycategori3} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={Bycategori4} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={Bycategori5} alt="" className="w-full h-auto" />
        </div>
 <div className="md:w-[180px] md:flex-shrink-0">
          <img src={Bycategori6} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-[30px]">
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
      </div>

      {/* Bottom Image */}
      <div className='w-full px-2 md:px-[90px] mt-[10px]'>
        <img src={Gneder6} alt="" className="w-full h-auto" />
      </div>
    </>
  )
}

export default ByCategori