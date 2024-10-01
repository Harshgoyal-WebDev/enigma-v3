import React, { useEffect } from 'react'
import gsap from 'gsap';

const Brands = () => {
    useEffect(()=>{
        const grid = document.querySelector('.grids');
        const gridWrap =  document.querySelector('.grid-wrap');
        const gridItems = document.querySelectorAll('.grid-item');
        const gridItemsInner = [...gridItems].map(item=>item.querySelectorAll('.grid-item-inner'));

        const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: gridWrap,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true
            }
        });
        timeline
			.set(gridItems, {
				transformOrigin: '50% 0%',
				z: () => gsap.utils.random(-5000,-2000),
				rotationX: () => gsap.utils.random(-35,-25),
				filter: 'blur(0px)'
			})	
			.to(gridItems, {
				xPercent: () => gsap.utils.random(-350,350),
				yPercent: () => gsap.utils.random(-100,100),
				rotationX: 0,
				filter: 'blur(50)'
			}, 0)
			.to(gridWrap, {
				z: 6500
			}, 0)
			.fromTo(gridItemsInner, {
				scale: 2
			}, {
				scale: 1
			}, 0);


    },[])
  return (
    <section className='w-screen h-screen brandsContainer'>
        <div className='container-lg'>
            <div className='w-full h-full flex items-center justify-center'>
                <p className='text-[#ff6b00] text-[3.9vw] '>
                    Brands We've Elevated
                </p>
                <div className='grids grid'>
                    <div className='grid-wrap'>
                        <div className='grid-item'>
                            <img src="/assets/home/bespin.png" className='grid-item-inner'/>
                        </div>
                        <div className='grid-item'>
                            <img src="/assets/home/dmtca.png" className='grid-item-inner'/>
                        </div> 
                        <div className='grid-item'>
                            <img src="/assets/home/jellyfish.png" className='grid-item-inner'/>
                        </div> 
                        <div className='grid-item'>
                            <img src="/assets/home/kedarkala.png" className='grid-item-inner'/>
                        </div>
                         <div className='grid-item'>
                            <img src="/assets/home/patra.png" className='grid-item-inner'/>
                        </div> 
                        <div className='grid-item'>
                            <img src="/assets/home/patronum.png" className='grid-item-inner'/>
                        </div>
                         <div className='grid-item'>
                            <img src="/assets/home/quickx.png" className='grid-item-inner'/>
                        </div>
                         <div className='grid-item'>
                            <img src="/assets/home/riva.png" className='grid-item-inner'/>
                        </div>
                    </div> 

             </div>

            </div>
        </div>
    </section>
  )
}

export default Brands