import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger,useGSAP)

const Whatwedo = () => {
    // useGSAP(()=>{
    //     const tl = gsap.timeline({
    //         scrollTrigger:{
    //             trigger:"#whatwedo",
    //             start:"top top",
    //             end:"bottom top",
    //             pin:true,
    //             scrub:true,
    //             markers:true
    //         }
    //     })
    // })
  return (
    <section id='whatwedo' className='w-screen h-screen'>
        <div className='w-full h-full flex justify-center items-center'>
            <h3 className='text-[5vw] grotesk font-medium text-center'>
            We Make Cool Things That Do Great Business
            </h3>

        </div>
      
    </section>
  )
}

export default Whatwedo
