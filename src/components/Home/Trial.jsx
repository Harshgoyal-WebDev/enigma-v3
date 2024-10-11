import React from 'react'
import { Html, OrbitControls, View } from '@react-three/drei'

const Trial = () => {
  return (
   <>
    <View className="h-screen  w-screen" >
              <Html position={[-5,2,0]}>
              <h1 className="title-1 grotesk leading-[1.01] block w-[60%] tracking-tight ">
              <span className="hero-title-anim">Digital</span>
              <span className="text-primary-color hero-title-anim">
                {" "}
                Experience
              </span>
              <br />
              <span className="outline-text tracking-normal hero-title-anim">
                Design Agency
              </span>
            </h1>
              </Html>
              </View>
   </>
  )
}

export default Trial