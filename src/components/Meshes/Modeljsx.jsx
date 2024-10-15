import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'

export function Modeljsx(props) {
  const { nodes, materials } = useGLTF('/new-logo1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Layer_001.geometry}
      >
   <MeshTransmissionMaterial  toneMapped={false}   thickness={0.25}
      samples={16}
      resolution={256}
      transmission={0.95}
      roughness={0.47}
      clearcoat={0.54}
      clearcoatRoughness={0.47}
      ior={1.94}
      chromaticAberration={2}
      anisotropy={0}
      distortion={0.34}
      distortionScale={0.2}
      attenuationDistance={1.43}
      attenuationColor={"#ffffff"}
      color={"#ffffff"}
    //   anisotropy={1.5} 
    //    ior={1.2}
    //    clearcoat={1}
    //    roughness={0.54}
       metalness={0.1}
        // chromaticAberration={2}
         anisotropicBlur={6}/>
        </mesh>

    </group>
  )
}

useGLTF.preload('/new-logo1.glb')
