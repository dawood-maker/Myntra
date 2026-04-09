import React from 'react'
import thekids from '../../assets/Kids/Thekids/thekids.png'
import thekids2 from '../../assets/Kids/Thekids/thekids2.png'

function TheKidsSpace() {
  return (<>
    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3e4152] mt-[50px] mb-0 ml-4 sm:ml-[30px]">
      The Kids Space
    </h1>

    <div className='flex flex-row mt-[20px] px-2 sm:px-[30px]'>
      
      <img 
        className='w-1/2 h-auto object-contain rounded-lg' 
        src={thekids} 
        alt="kids1" 
      />

      <img 
        className='w-1/2 h-auto object-contain rounded-lg' 
        src={thekids2} 
        alt="kids2" 
      />

    </div>
  </>)
}

export default TheKidsSpace