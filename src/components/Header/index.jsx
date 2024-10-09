import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the header
        setShowHeader(false);
      } else {
        // if scrolling up, show the header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <section
        id="header"
        className={`fixed w-full overflow-hidden py-[2vw] pr-[1vw] z-[5] transition-transform duration-500 ease-in-out ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-lg flex items-center justify-between">
          <Link href={"/"}>
            <div className="w-[3vw] h-[3vw] hover:cursor-pointer">
              <img src="/assets/icons/logo.svg" />
            </div>
          </Link>
          <div className="flex items-center justify-center gap-[1vw]">
            <Link href={"#"}>
              <div className="bg-[#ff6b00] text-white rounded-[40px] px-[1.6vw] py-[0.7vw] hover:cursor-pointer text-[1.25vw]">
                <span>Let&apos;s Talk</span>
              </div>
            </Link>
            <div className="flex items-center justify-center">
              <Link href={"#"}>
                <div className="bg-[#1d1d1d] text-white rounded-[40px] px-[1.6vw] py-[0.7vw] hover:cursor-pointer text-[1.25vw]">
                  <span>Menu</span>
                </div>
              </Link>
              <div className="flex flex-col rounded-full items-center justify-center w-[3.3vw] h-[3.3vw] gap-[0.3vw] bg-[#1d1d1d] p-[1px] hover:cursor-pointer">
                <span className="h-[0.1vw] w-[1.2vw] bg-white rounded-[10px]"></span>
                <span className="h-[0.1vw] w-[1.2vw] bg-white rounded-[10px]"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
