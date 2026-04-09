import React from "react";
import women1 from "../../assets/WoMen/women1.png";
import Gneder3 from "../../assets/Gneder/Gneder3.png";
import Gneder4 from "../../assets/Gneder/Gneder4.png";

function Genderbanner() {
  return (
    <div className="w-full overflow-hidden px-2 md:px-[90px] bg-[#FEFEFE]">

      {/* IMAGE 1 */}
      <div className="w-full">
        <img
          className="w-full h-auto object-cover"
          src={women1}
          alt="Right logo"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="mt-[2px] w-full">
        <img
          className="w-full h-auto object-cover"
          src={Gneder3}
          alt="gender 3"
        />
      </div>

      {/* IMAGE 3 */}
      <div className="mt-[2px] w-full">
        <img
          className="w-full h-auto object-cover"
          src={Gneder4}
          alt="gender 4"
        />
      </div>

    </div>
  );
}

export default Genderbanner;