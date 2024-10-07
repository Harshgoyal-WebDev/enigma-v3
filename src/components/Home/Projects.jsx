import React, { useEffect, useState } from "react";
import CardMesh from "../Meshes/CardMesh";
import {
  View,
  PerspectiveCamera,

} from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import Button from "../Button/PrimaryButton";
gsap.registerPlugin(useGSAP,ScrollTrigger)
// import { titleAnim } from "../gsapAnimations";

const Projects = () => {
  // titleAnim()
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#projects",
        scrub:true,
        pin:true,
        
        start:"25% top",
        end:"+=2000 top"
      }
    })
    tl.to(".project-handles",{
      xPercent:-75,
      duration:5,
      ease:"none",
      duration:5

    
    })
  })

  return (
    <section className="w-screen h-[100vh] py-[2%] overflow-hidden project-section relative" id="projects">
      <div className="container-lg w-screen flex justify-between items-center mb-[3vw]">
        <SectionTitle line1={"See Our"} line2={"Work"} firstColor={"text-secondary-color"}/>
        <div>

        <Button link={"#"} btnText={"View More"}/>
        </div>
      </div>
      <div className="w-full flex justify-between gap-[3vw] translate-x-[55%] project-handles">
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60 ">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60 ">2023</p>
        </Link>
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </Link>
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </Link>
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </Link>
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </Link>
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </Link>
        <Link href={"#"} className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </Link>
      </div>
      <div className="w-full h-screen overflow-hidden card-mesh absolute top-[25%]">
        <View style={{ height: height, width: width }}>
          <ambientLight intensity={1} /> 
         
          <pointLight position={[-2, 0, 5]} intensity={1} color="white" />
          
          <directionalLight
            position={[0, 0, 5]}
            intensity={4}
            color="white"
            shadow={{
              near: 1,
              far: -20,
              mapSize: { width: 1024, height: 1024 },
            }}
          />
          
          <fog attach="fog" color="white" near={9} far={12} />
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
          <CardMesh />
        
        </View>
      </div>
    </section>
  );
};

export default Projects;
