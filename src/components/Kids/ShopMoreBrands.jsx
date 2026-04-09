import React from 'react'
import ShopMore1 from '../../assets/Kids/ShopMore/ShopMore1.png'
import ShopMore2 from "../../assets/Kids/ShopMore/ShopMore2.png";
import ShopMore3 from "../../assets/Kids/ShopMore/ShopMore3.png";
import ShopMore4 from "../../assets/Kids/ShopMore/ShopMore4.png";
import ShopMore5 from "../../assets/Kids/ShopMore/ShopMore5.png";

function ShopMoreBrands() {
  return (
<>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        Shop More Brands
      </h1>
      
            <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[20px]">
              <div className="md:w-[180px] md:flex-shrink-0">
                <img src={ShopMore1} alt="" className="w-full h-auto object-cover" />
              </div>
      
              <div className="md:w-[180px] md:flex-shrink-0">
                <img src={ShopMore2} alt="" className="w-full h-auto object-cover" />
              </div>
      
              <div className="md:w-[180px] md:flex-shrink-0">
                <img src={ShopMore3} alt="" className="w-full h-auto object-cover" />
              </div>
      
              <div className="md:w-[180px] md:flex-shrink-0">
                <img src={ShopMore4} alt="" className="w-full h-auto object-cover" />
              </div>
      
              <div className="md:w-[180px] md:flex-shrink-0">
                <img src={ShopMore5} alt="" className="w-full h-auto object-cover" />
              </div>
            </div>
</>

  )
}

export default ShopMoreBrands
