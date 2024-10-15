import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React from 'react'

const Camera = () => {
    useFrame((state,delta)=>{
        easing.damp3(
            state.camera.position,
            [
                -1+
                 (state.pointer.x * state.viewport.width)/15,
                 (1+ state.pointer.y * state.viewport.height)/15, 
                 5.5,
                ],
                0.5, 
                delta
        )
        state.camera.lookAt(0,0,0);
    })
  return (
    <>
    </>
  )
}

export default Camera