import React from "react";
import ExploreMore1 from "../../assets/Kids/Explore More/ExploreMore1.png";
import ExploreMore2 from "../../assets/Kids/Explore More/ExploreMore2.png";
import ExploreMore3 from "../../assets/Kids/Explore More/ExploreMore3.png";
import ExploreMore4 from "../../assets/Kids/Explore More/ExploreMore4.png";
import ExploreMore5 from "../../assets/Kids/Explore More/ExploreMore5.png";
import ExploreMore6 from "../../assets/Kids/Explore More/ExploreMore6.png";

function ExploreMore() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        Fashion & Essentials
      </h1>

      <div className="flex flex-row">
        <img className="h-[500px] w-[500px]" src={ExploreMore1} alt="" />
        <img className="h-[500px] w-[500px]" src={ExploreMore2} alt="" />
      </div>
            <div className="flex flex-row">
        <img className="h-[500px] w-[500px]" src={ExploreMore3} alt="" />
        <img className="h-[500px] w-[500px]" src={ExploreMore4} alt="" />
      </div>
            <div className="flex flex-row">
        <img className="h-[500px] w-[500px]" src={ExploreMore5} alt="" />
        <img className="h-[500px] w-[500px]" src={ExploreMore6} alt="" />
      </div>

    </>
  );
}

export default ExploreMore;








