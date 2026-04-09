    // import React from "react";
    // import IconicBrands1 from "../../assets/Kids/Iconic Brands/IconicBrands1.png";
    // import IconicBrands2 from "../../assets/Kids/Iconic Brands/IconicBrands2.png";
    // import IconicBrands3 from "../../assets/Kids/Iconic Brands/IconicBrands3.png";
    // import IconicBrands4 from "../../assets/Kids/Iconic Brands/IconicBrands4.png";
    // import IconicBrands5 from "../../assets/Kids/Iconic Brands/IconicBrands5.png";

    // function IconicBrands() {
    // return (
    //     <>
    //     <h1 className="text-xl sm:text-2xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
    //         ICONIC BRANDS
    //     </h1>

    // <div className="flex flex-row flex-nowrap mt-[20px]">
    // <img className="w-1/5 object-contain" src={IconicBrands1} alt="" />
    // <img className="w-1/5 object-contain" src={IconicBrands2} alt="" />
    // <img className="w-1/5 object-contain" src={IconicBrands3} alt="" />
    // <img className="w-1/5 object-contain" src={IconicBrands4} alt="" />
    // <img className="w-1/5 object-contain" src={IconicBrands5} alt="" />
    // </div>
    //     </>
    // );
    // }

    // export default IconicBrands;






    import React from "react";
import IconicBrands1 from "../../assets/Kids/Iconic Brands/IconicBrands1.png";
import IconicBrands2 from "../../assets/Kids/Iconic Brands/IconicBrands2.png";
import IconicBrands3 from "../../assets/Kids/Iconic Brands/IconicBrands3.png";
import IconicBrands4 from "../../assets/Kids/Iconic Brands/IconicBrands4.png";
import IconicBrands5 from "../../assets/Kids/Iconic Brands/IconicBrands5.png";

function IconicBrands() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        ICONIC BRANDS
      </h1>

      <div className="flex flex-wrap sm:flex-nowrap flex-row mt-[20px]">
        <img className="w-1/2 sm:w-1/5 object-contain" src={IconicBrands1} alt="" />
        <img className="w-1/2 sm:w-1/5 object-contain" src={IconicBrands2} alt="" />
        <img className="w-1/2 sm:w-1/5 object-contain" src={IconicBrands3} alt="" />
        <img className="w-1/2 sm:w-1/5 object-contain" src={IconicBrands4} alt="" />
        <img className="w-1/2 sm:w-1/5 object-contain" src={IconicBrands5} alt="" />
      </div>
    </>
  );
}

export default IconicBrands;