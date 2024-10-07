import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <section id='header'>
        <div className='w-screen py-[2vw]  fixed z-[5]'>
            <div className='container-lg  flex items-center justify-between'>
                <Link href={"/"}>
            <div className='w-[3vw] h-[3vw] hover:cursor-pointer'>
                <img src='/assets/icons/logo.svg'/>
            </div>
            </Link>
            <div className='flex items-center justify-center gap-[0.5vw]'>
                <Link href={"#"}>
                <div className='bg-[#ff6b00] text-white rounded-[40px] px-[1.5vw] py-[0.5vw] hover:cursor-pointer text-[1.25vw]'>
                    <span>Let`&apos;s Talk</span>   
                </div>
                </Link>
                <div className='flex items-center justify-center'>
                    <Link href={"#"}>
                <div className='bg-[#1d1d1d] text-white rounded-[40px] px-[1.5vw] py-[0.5vw] hover:cursor-pointer text-[1.25vw]'>
                    <span>Menu</span>   
                </div>
                </Link>
                <div className='flex flex-col rounded-full items-center justify-center  w-[3.3vw] h-[3.3vw] gap-[0.3vw] bg-[#1d1d1d] p-[1px] hover:cursor-pointer'>
                    <span className='h-[0.1vw] w-[1.2vw] bg-white rounded-[10px]'></span>
                    <span className='h-[0.1vw] w-[1.2vw] bg-white rounded-[10px]'></span>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Header