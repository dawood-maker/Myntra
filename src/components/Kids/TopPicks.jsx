import React from "react";
import TopPick1 from "../../assets/Kids/TopPicks/TopPick1.png";
import TopPick2 from "../../assets/Kids/TopPicks/TopPick2.png";
import TopPick3 from "../../assets/Kids/TopPicks/TopPick3.png";
import TopPick4 from "../../assets/Kids/TopPicks/TopPick4.png";
import TopPick5 from "../../assets/Kids/TopPicks/TopPick5.png";
import TopPick6 from "../../assets/Kids/TopPicks/TopPick6.png";
import TopPick7 from "../../assets/Kids/TopPicks/TopPick7.png";
import TopPick8 from "../../assets/Kids/TopPicks/TopPick8.png";
import TopPick9 from "../../assets/Kids/TopPicks/TopPick9.png";
import TopPick10 from "../../assets/Kids/TopPicks/TopPick10.png";

function TopPicks() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
        TOP PICKS
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap flex-row px-2 sm:px-0 mt-2">
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick1}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick2}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick3}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick4}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick5}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick6}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick7}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick8}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick9}
          alt=""
        />
        <img
          className="w-1/2 sm:w-[10%] h-[150px] sm:h-[180px] lg:h-[220px] object-contain"
          src={TopPick10}
          alt=""
        />
      </div>
    </>
  );
}

export default TopPicks;
