import ModelVideo from '@/components/Meshes/ModelVideo'
import { View } from '@react-three/drei'
import React from 'react'

const trial = () => {
  return (
   <>
   {/* <div className='w-screen h-screen bg-black text-white flex items-center justify-center text-[5vw]'>Section 1</div> */}
<View className='w-screen h-screen' id='hero-model'>
 <ModelVideo/>
</View>
   <div className='w-screen h-screen bg-black text-white flex items-center justify-center text-[5vw]'>Section 2</div>
    </>
  )
}

export default trial