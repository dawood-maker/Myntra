import React from 'react';
import women7 from '../../assets/WoMen/women7.png';
import women8 from '../../assets/WoMen/women8.png';
import women9 from '../../assets/WoMen/women9.png';
import women10 from '../../assets/WoMen/women10.png';
import women11 from '../../assets/WoMen/women11.png';
import Gneder6 from '../../assets/Gneder/Gneder6.png';

function ByCategori() {
  return (
    <>
      <div className='grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[30px]'>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women7} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women8} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women9} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women10} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={women11} alt="" className="w-full h-auto" />
        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-[30px]">
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
        <div className="w-2 h-2 bg-[#6d6875] rounded-full"></div>
      </div>

      {/* Bottom Image */}
      <div className='w-full px-2 md:px-[90px] mt-[10px]'>
        <img src={Gneder6} alt="" className="w-full h-auto" />
      </div>
    </>
  )
}

export default ByCategori