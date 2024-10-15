import Footer from '@/components/Footer'
import About from '@/components/Home/About'
import Brands from '@/components/Home/Brands'
import Hero from '@/components/Home/Hero'
import Trial from '@/components/Home/Trial'
import Model from '@/components/Meshes/Model'
import { Text3D, View } from '@react-three/drei'
import React from 'react'

const trial = () => {
  return (
   <>
   <div className='w-screen h-screen bg-black text-black flex items-center justify-center text-[5vw]'>Section 1</div>
<View className='h-screen w-screen fixed top-0 left-0'>
  <Model/>
  <Text3D 
  font={"/LensGrotesk-Regular.json"}
  position={[-3,0,-10]}
  size={3}>
    {`Hello`}
  </Text3D>
</View>
   <div className='w-screen h-screen bg-black text-black flex items-center justify-center text-[5vw]'>Section 2</div>
    </>
  )
}

export default trial