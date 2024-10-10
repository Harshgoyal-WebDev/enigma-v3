import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ANIMATEDCLASSNAME = 'animated';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [arrowBg, setArrowBg] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Hide header when scrolling down
      } else {
        setShowHeader(true); // Show header when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const handleMouseOver = (e) => {
    const element = e.currentTarget;
    const span = element.querySelector('span');
    
    
    // Set span position based on mouse coordinates
    span.style.left = `${e.pageX - element.getBoundingClientRect().left}px`;
    span.style.top = `${e.pageY - element.getBoundingClientRect().top}px`;
    
    console.log(e.pageX)
    console.log(span.style.left)
    // Add animation class
    element.classList.add(ANIMATEDCLASSNAME);
  };

  const handleMouseOut = (e) => {
    const element = e.currentTarget;
    const span = element.querySelector('span');


    // Reset span position
    span.style.left = `82px`;
    span.style.top = `${e.pageY - element.getBoundingClientRect().top}px`;

    //  console.log(e.pageX)
    //  console.log(span.style.left)
    //  console.log(element.getBoundingClientRect().left)
    //  console.log(e.pageY)
    // Remove animation class
    element.classList.remove(ANIMATEDCLASSNAME);
  };

  return (
    <>
      <section
        id="header"
        className={`fixed w-full overflow-hidden py-[2vw] pr-[1vw] z-[5] transition-transform duration-500 ease-in-out ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-lg flex items-center justify-between">
          <Link href="/">
            <div className="w-[3vw] h-[3vw] hover:cursor-pointer">
              <img src="/assets/icons/logo.svg" alt="Logo" />
            </div>
          </Link>
          <div className="flex items-center justify-center gap-[1vw]">
            <Link href="#" className="w-fit h-fit flex justify-center items-center">
              <div
                className="bg-transparent text-[#ff6b00] border border-[#ff6b00] hover:text-[#f9f9f9] HOVER rounded-[40px] transition-all duration-300 ease-in px-[1.6vw] py-[0.7vw] hover:cursor-pointer text-[1.25vw] relative "
                onMouseMove={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div className="relative z-[20]">Let&apos;s Talk</div>
                <span className="bg-[#ff6b00] absolute w-full h-full top-0 left-0 transition-all duration-300"></span>
              </div>
            </Link>
            <div className="flex items-center justify-center w-fit h-fit">
              <Link href="#" className="w-fit h-fit flex justify-center items-center menu">
                <div
                  className="bg-transparent text-[#1d1d1d] border border-[#1d1d1d] hover:text-[#f9f9f9] HOVER transition-all duration-300 ease-in rounded-[40px] px-[1.6vw] py-[0.7vw] hover:cursor-pointer text-[1.25vw] relative overflow-hidden"
                  onMouseMove={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <div className="relative z-[20]">Menu</div>
                  <span className="bg-[#1d1d1d] absolute w-full h-full top-0 left-0 transition-all duration-300"></span>
                </div>
              </Link>
              <div
                className={`flex flex-col rounded-full items-center justify-center w-[3.3vw] h-[3.3vw] gap-[0.3vw] border transition-all duration-300 ease-in border-[#1d1d1d] p-[1px] hover:cursor-pointer hamburger ${
                  arrowBg ? 'bg-[#1d1d1d]' : ''
                }`}
              >
                <span className="h-[0.1vw] w-[1.2vw] bg-[#1d1d1d] rounded-[10px]"></span>
                <span className="h-[0.1vw] w-[1.2vw] bg-[#1d1d1d] rounded-[10px]"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
