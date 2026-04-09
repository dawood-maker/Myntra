import React from 'react'
import FLATImg from '../assets/FLAT.png'

function FlatLogo() {
  return (
    <div>
      <div className="px-2 md:px-[100px] mt-[15px]  ">
        <img
          className='mt-[3px] mb-[20px] w-full h-auto object-contain  bg-slate-100'
          src={FLATImg}
          alt=""
        />
      </div>
    </div>
  )
}

export default FlatLogo;