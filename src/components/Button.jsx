import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({ link, btnText, classname , invert }) => {
  return (
    <>
      <div className="w-full flex gap-[0.3vw]">
        <Link href={link}>
          <div className={`w-fit min-w-[7vw] bg-transparent border border-secondary-color px-[3vw] py-[0.7vw] text-[1.3vw] rounded-full ${classname}`}>
            {btnText}
          </div>
        </Link>
        <div className={`w-fit h-fit p-[1.1vw] border border-secondary-color rounded-full relative bg-transparent ${invert}`}>
          <Image src="/button-arrow.svg" alt="button-svg" className="object-contain" width={20} height={20}/>
        </div>
      </div>
    </>
  );
};

export default Button;
