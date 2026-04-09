import React from "react";
import BudgetBuy1 from "../../assets/Kids/BudgetBuy/BudgetBuy1.png";
import BudgetBuy2 from "../../assets/Kids/BudgetBuy/BudgetBuy2.png";
import BudgetBuy3 from "../../assets/Kids/BudgetBuy/BudgetBuy3.png";
import BudgetBuy4 from "../../assets/Kids/BudgetBuy/BudgetBuy4.png";
import BudgetBuy5 from "../../assets/Kids/BudgetBuy/BudgetBuy5.png";
import BudgetBuy6 from "../../assets/Kids/BudgetBuy/BudgetBuy6.png";

function BudgetBuy() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        Budget Buy
      </h1>
      
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[20px]">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={BudgetBuy1} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={BudgetBuy2} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={BudgetBuy3} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={BudgetBuy4} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={BudgetBuy5} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={BudgetBuy6} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </>
  );
}

export default BudgetBuy;
