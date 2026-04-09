import React from 'react';
import men7 from '../../assets/MenLogo/men7.png';
import men8 from '../../assets/MenLogo/men8.png';
import men9 from '../../assets/MenLogo/men9.png';
import men10 from '../../assets/MenLogo/men10.png';
import men11 from '../../assets/MenLogo/men11.png';
import Gneder6 from '../../assets/Gneder/Gneder6.png';
function ByCategori() {
  return (
    <>
      <div className='grid grid-cols-3 md:flex md:flex-row md:justify-center w-full px-2 md:px-[90px] gap-0 mt-[30px]'>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men7} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men8} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men9} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men10} alt="" className="w-full h-auto" />
        </div>

        <div className="md:w-[180px] md:flex-shrink-0">
          <img src={men11} alt="" className="w-full h-auto" />
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