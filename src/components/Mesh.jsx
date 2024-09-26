
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Mesh(){
    const meshRef = useRef(null);
    useEffect(() => {
       console.log(meshRef)
      }, []);
      useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#section-4",
                pin:true,
                markers:true,
                start:"top top",
                end:"bottom top",
                scrub:true
            }
            
        })
        tl.to(meshRef.current.position,{
            x:-2,
            duration:5
        })
      })
 
  return (
    <>
   

    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, -1, 0]}>
    <boxGeometry args={[2.5, 3.5, 0.1]} />
    <meshStandardMaterial color="hotpink" />
  </mesh>
 
    
    
  </>
  );
}
