import React from 'react'
// import { titleAnim } from "../gsapAnimations";

const SectionTitle = ({line1, line2}) => {
    // titleAnim()
  return (
    <>
    <h2 className="title-2">
              <span className="text-white block line1 leading-[1.2]">{line1}</span>
              
              <span className="text-primary-color block line2 leading-[1.2]">{line2}</span>
            </h2>
      
    </>
  )
}

export default SectionTitle
