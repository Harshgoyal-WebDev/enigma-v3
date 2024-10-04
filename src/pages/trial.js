import Brands from '@/components/Home/Brands'
import Trial from '@/components/Home/Trial'
import React from 'react'

const trial = () => {
  return (
   <>
   <div className='w-screen h-screen bg-black text-white flex items-center justify-center text-[5vw]'>Section 1</div>
   {/* <Brands/> */}
   <Trial/>
   <div className='w-screen h-screen bg-black text-white flex items-center justify-center text-[5vw]'>Section 2</div>

   </>
  )
}

export default trial