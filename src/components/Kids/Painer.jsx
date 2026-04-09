import React, { useState, useEffect } from "react";
import kid1 from "../../assets/Kids/kid1.png";
import kid2 from "../../assets/Kids/kid2.png";
import kid3 from "../../assets/Kids/kid3.png";
import kid4 from "../../assets/Kids/kid4.png";

const images = [kid1, kid2, kid3, kid4];

function Painer() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <img src={images[current]} alt="" />
      </div>
      <div className="flex justify-center gap-3 mt-[30px]">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              current === index ? "bg-[#545454]" : "bg-[#9d9d9d]"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Painer;
