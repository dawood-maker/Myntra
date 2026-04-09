import React from "react";
// product images 12 TO 17
import men12 from "../../assets/MenLogo/productes/men12.png";
import men13 from "../../assets/MenLogo/productes/men13.png";
import men14 from "../../assets/MenLogo/productes/men14.png";
import men15 from "../../assets/MenLogo/productes/men15.png";
import men16 from "../../assets/MenLogo/productes/men16.png";
import men17 from "../../assets/MenLogo/productes/men17.png";
// product images 18 TO 23
import men18 from "../../assets/MenLogo/productes/men18.png";
import men19 from "../../assets/MenLogo/productes/men19.png";
import men20 from "../../assets/MenLogo/productes/men20.png";
import men21 from "../../assets/MenLogo/productes/men21.png";
import men22 from "../../assets/MenLogo/productes/men22.png";
import men23 from "../../assets/MenLogo/productes/men23.png";
// product images 24 TO 27
import men24 from "../../assets/MenLogo/productes/men24.png";
import men25 from "../../assets/MenLogo/productes/men25.png";
import men26 from "../../assets/MenLogo/productes/men26.png";
import men27 from "../../assets/MenLogo/productes/men27.png";

function Product() {
  return (
    <>
      {/* PRODUCT 12 TO 17 */}
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center mt-[20px] w-full px-2 md:px-[90px] gap-0">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men12} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men13} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men14} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men15} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men16} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men17} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* PRODUCT 18 TO 23 */}
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center mt-[20px] w-full px-2 md:px-[90px] gap-0">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men18} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men19} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men20} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men21} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men22} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men23} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* PRODUCT 24 TO 27 */}
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center mt-[20px] w-full px-2 md:px-[90px] gap-0">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men24} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men25} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men26} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men27} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </>
  );
}

export default Product;
