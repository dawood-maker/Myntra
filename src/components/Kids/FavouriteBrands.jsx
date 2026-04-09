import React from "react";
import favourite1 from "../../assets/Kids/Favourite/favourite1.png";
import favourite2 from "../../assets/Kids/Favourite/favourite2.png";
import favourite3 from "../../assets/Kids/Favourite/favourite3.png";
import favourite4 from "../../assets/Kids/Favourite/favourite4.png";
import favourite5 from "../../assets/Kids/Favourite/favourite5.png";
import favourite6 from "../../assets/Kids/Favourite/favourite6.png";
import favourite7 from "../../assets/Kids/Favourite/favourite7.png";
import favourite8 from "../../assets/Kids/Favourite/favourite8.png";
import favourite9 from "../../assets/Kids/Favourite/favourite9.png";

function FavouriteBrands() {
  const brands = [
    favourite1,
    favourite2,
    favourite3,
    favourite4,
    favourite5,
    favourite6,
    favourite7,
    favourite8,
    favourite9,
  ];

  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        FAVOURITE BRANDS
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-2 mt-[30px] px-4 sm:px-[30px]">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              className="h-[70px] sm:h-[90px] md:h-[100px] lg:h-[120px] w-full object-contain"
              src={brand}
              alt={`brand-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default FavouriteBrands;
