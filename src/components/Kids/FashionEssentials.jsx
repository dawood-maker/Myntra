import React from "react";
import FashionEssentials1 from "../../assets/Kids/Fashion Essentials/FashionEssentials1.png";
import FashionEssentials2 from "../../assets/Kids/Fashion Essentials/FashionEssentials2.png";
import FashionEssentials3 from "../../assets/Kids/Fashion Essentials/FashionEssentials3.png";
import FashionEssentials4 from "../../assets/Kids/Fashion Essentials/FashionEssentials4.png";
import FashionEssentials5 from "../../assets/Kids/Fashion Essentials/FashionEssentials5.png";
import FashionEssentials6 from "../../assets/Kids/Fashion Essentials/FashionEssentials6.png";
import FashionEssentials7 from "../../assets/Kids/Fashion Essentials/FashionEssentials7.png";
import FashionEssentials8 from "../../assets/Kids/Fashion Essentials/FashionEssentials8.png";
import FashionEssentials9 from "../../assets/Kids/Fashion Essentials/FashionEssentials9.png";
import FashionEssentials10 from "../../assets/Kids/Fashion Essentials/FashionEssentials10.png";

function FashionEssentials() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        Fashion & Essentials
      </h1>
      <div className="flex flex-row flex-wrap sm:flex-nowrap">
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials1}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials2}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials3}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials4}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials5}
          alt=""
        />
      </div>
      <div className="flex flex-row flex-wrap sm:flex-nowrap">
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials6}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials7}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials8}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials9}
          alt=""
        />
        <img
          className="w-1/2 sm:w-1/5 h-[180px] sm:h-[250px] lg:h-[300px] object-contain"
          src={FashionEssentials10}
          alt=""
        />
      </div>
    </>
  );
}

export default FashionEssentials;
