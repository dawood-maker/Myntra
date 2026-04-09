import React from "react";
// product images 1 TO 6
import product1 from "../../assets/WoMen/productes/product1.png";
import product2 from "../../assets/WoMen/productes/product2.png";
import product3 from "../../assets/WoMen/productes/product3.png";
import product4 from "../../assets/WoMen/productes/product4.png";
import product5 from "../../assets/WoMen/productes/product5.png";
import product6 from "../../assets/WoMen/productes/product6.png";
// product images 7 TO 12
import product7 from "../../assets/WoMen/productes/product7.png";
import product8 from "../../assets/WoMen/productes/product8.png";
import product9 from "../../assets/WoMen/productes/product9.png";
import product10 from "../../assets/WoMen/productes/product10.png";
import product11 from "../../assets/WoMen/productes/product11.png";
import product12 from "../../assets/WoMen/productes/product12.png";
// product images 14 TO 15
import product13 from "../../assets/WoMen/productes/product13.png";
import product14 from "../../assets/WoMen/productes/product14.png";
import product15 from "../../assets/WoMen/productes/product15.png";


function Product() {
  return (
    <>
      {/* PRODUCT 12 TO 17 */}
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center mt-[20px] w-full px-2 md:px-[90px] gap-0">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product1} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product2} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product3} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product4} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product5} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product6} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* PRODUCT 7 TO 12 */}
      <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center mt-[20px] w-full px-2 md:px-[90px] gap-0">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product7} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product8} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product9} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product10} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product11} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product12} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* PRODUCT 13 TO 15 */}
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center mt-[20px] w-full px-2 md:px-[90px] gap-0">
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product13} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product14} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={product15} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </>
  );
}

export default Product;
